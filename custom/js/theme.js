// Apply immediately to prevent white flash on load
function applySavedTheme() {
  const theme = localStorage.getItem("dashboardTheme") || "light";

  // AdminLTE 4 / Bootstrap 5 uses data-bs-theme on the html tag
  document.documentElement.setAttribute("data-bs-theme", theme);

  // Update navbar dropdown active states
  const themeButtons = document.querySelectorAll("[data-bs-theme-value]");
  themeButtons.forEach((btn) => {
    if (btn.getAttribute("data-bs-theme-value") === theme) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

function initThemeToggle() {
  const themeButtons = document.querySelectorAll("[data-bs-theme-value]");
  themeButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      let newTheme = btn.getAttribute("data-bs-theme-value");

      // If auto, default to light for now, or you can add system preference logic
      if (newTheme === "auto") {
        newTheme = "light";
      }

      localStorage.setItem("dashboardTheme", newTheme);
      applySavedTheme();
    });
  });
}

function applySidebarState() {
  const isCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
  if (isCollapsed) {
    document.body.classList.add("sidebar-collapse");
    document.body.classList.remove("sidebar-open");
  }
}

function initSidebarToggleListener() {
  const sidebarToggleBtn = document.querySelector(
    '[data-lte-toggle="sidebar"]',
  );
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener("click", () => {
      setTimeout(() => {
        const isCollapsed =
          document.body.classList.contains("sidebar-collapse");
        localStorage.setItem("sidebarCollapsed", isCollapsed);
      }, 50);
    });
  }
}

function initActiveSidebarTab() {
  const sidebarLinks = document.querySelectorAll(".sidebar-menu .nav-link");
  const currentUrl = window.location.href.split("#")[0];
  const activeTab = sessionStorage.getItem("activeTab") || currentUrl;

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (this.getAttribute("href") && this.getAttribute("href") !== "#") {
        sessionStorage.setItem("activeTab", this.href);
      }
    });

    link.classList.remove("active");

    if (link.href === activeTab) {
      link.classList.add("active");
      const parentTree = link.closest(".nav-treeview");
      if (parentTree) {
        const parentNavItem = parentTree.closest(".nav-item");
        if (parentNavItem) {
          parentNavItem.classList.add("menu-open");
          const parentLink = parentNavItem.querySelector(
            "button.nav-link, a.nav-link",
          );
          if (parentLink) parentLink.classList.add("active");
        }
      }
    }
  });
}

// Run applySavedTheme immediately outside DOMContentLoaded
applySavedTheme();

window.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  applySidebarState();
  initSidebarToggleListener();
  initActiveSidebarTab();
});
