/* ==========================================================================
   DASHBOARD CONTROLLER INTERACTIONS
   
   * Real-time employee search filtering and onboarding form processing
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const employeeForm = document.getElementById("employeeForm");
  const searchInput = document.querySelector(
    'input[placeholder*="Search employees"]',
  );
  const tableRows = document.querySelectorAll(".table tbody tr");

  // 1. Form Submission Handler
  if (employeeForm) {
    employeeForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const role = document.getElementById("employeeRole").value;

      alert(
        `Success: Onboarded ${firstName} ${lastName} into the ${role} department!`,
      );
      employeeForm.reset();
    });
  }

  // 2. Real-Time Table Search Filter
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase().trim();

      tableRows.forEach((row) => {
        const rowText = row.textContent.toLowerCase();
        if (rowText.includes(searchTerm)) {
          row.style.display = "";
        } else {
          row.style.display = "none";
        }
      });
    });
  }
});
