const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector("#sidebarOverlay");
const closeBtn = document.querySelector("#sidebarClose");
const toggleBtn = document.querySelector(".sidebar-toggle");

// Check if the current screen width is mobile (768px or less)
function isMobile() {
  return window.innerWidth <= 768;
}

// Unified toggle handler depending on desktop vs mobile screen size
function handleToggle() {
  if (isMobile()) {
    // Mobile behavior: Open off-canvas sidebar and show screen overlay
    sidebar.classList.add("active");
    overlay.classList.add("active");
    toggleBtn?.classList.add("hidden");
  } else {
    // Desktop behavior: Collapse or expand the sidebar width
    sidebar.classList.toggle("collapsed");
  }
}

function closeSidebar() {
  if (isMobile()) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    toggleBtn?.classList.remove("hidden");
  }
}

// Event Listeners
toggleBtn?.addEventListener("click", handleToggle);
overlay?.addEventListener("click", closeSidebar);
closeBtn?.addEventListener("click", closeSidebar);

// Automatically clean up states if window is resized across layout breakpoints
window.addEventListener("resize", () => {
  if (!isMobile()) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    toggleBtn?.classList.remove("hidden");
  } else {
    sidebar.classList.remove("collapsed");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // 1. Line Chart Configuration
  const ctxLine = document.getElementById("lineChart").getContext("2d");
  new Chart(ctxLine, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "New Users",
          data: [400, 800, 1200, 1100, 1800, 2540],
          borderColor: "#4e73df",
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });

  // 2. Bar Chart Configuration
  const ctxBar = document.getElementById("barChart").getContext("2d");
  new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Revenue ($)",
          data: [12450, 24300, 36800, 48200],
          backgroundColor: "#1cc88a",
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
