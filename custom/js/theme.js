function applySavedTheme() {
  const theme = localStorage.getItem("dashboardTheme") || "light";

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

window.addEventListener("DOMContentLoaded", applySavedTheme);
