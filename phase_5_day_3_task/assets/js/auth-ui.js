export function initCopyButtons() {
  const copyEmailButton = document.getElementById("copyEmailBtn");
  const copyPasswordButton = document.getElementById("copyPasswordBtn");

  if (copyEmailButton) {
    copyEmailButton.addEventListener("click", () => {
      navigator.clipboard.writeText("student@dashboard.com");
      copyEmailButton.textContent = "Copied!";
      setTimeout(() => (copyEmailButton.textContent = "Copy"), 1500);
    });
  }

  if (copyPasswordButton) {
    copyPasswordButton.addEventListener("click", () => {
      navigator.clipboard.writeText("student123");
      copyPasswordButton.textContent = "Copied!";
      setTimeout(() => (copyPasswordButton.textContent = "Copy"), 1500);
    });
  }
}
