// Form Validation Controller
(function () {
  "use strict";

  const form = document.getElementById("saasContactForm");
  if (!form) return;

  form.addEventListener(
    "submit",
    function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        alert("Environment provisioned successfully!");

        const modalElement = document.getElementById("contactModal");
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
        form.reset();
        form.classList.remove("was-validated");
        return;
      }

      form.classList.add("was-validated");
    },
    false,
  );
})();
