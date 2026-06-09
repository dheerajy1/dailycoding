// Global state manager syncing runtime memory with browser storage
const students = JSON.parse(localStorage.getItem("students")) || [];

// UTILITY ENGINE: Display global toast notifications
const showNotification = (message, isSuccess = true) => {
  const statusBox = document.getElementById("statusMessage");
  statusBox.textContent = message;
  statusBox.className = `mb-4 p-3 rounded-input text-sm font-medium block ${
    isSuccess ? "bg-green-100 text-success" : "bg-red-100 text-danger"
  }`;

  setTimeout(() => {
    statusBox.className = "hidden";
  }, 4000);
};

// UTILITY ENGINE: Real-time UI validation feedback wrappers
const toggleError = (inputEl, errorEl, errorMessage, shouldShow) => {
  if (shouldShow) {
    errorEl.textContent = errorMessage;
    errorEl.classList.remove("hidden");
    inputEl.classList.add("border-danger");
    inputEl.classList.remove("focus:border-brand");
  } else {
    errorEl.classList.add("hidden");
    inputEl.classList.remove("border-danger");
    inputEl.classList.add("focus:border-brand");
  }
};

// CORE API: Dynamic DOM rendering pipeline using ES6 template literals
const displayStudents = () => {
  const tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = "";

  if (students.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="4" class="p-4 text-center text-sm text-txt-muted italic">
          No registered students found.
        </td>
      </tr>
    `;
    return;
  }

  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.className = "hover:bg-surface/50 transition duration-150";
    row.innerHTML = `
      <td class="p-3 text-sm font-medium text-txt-main">${student.name}</td>
      <td class="p-3 text-sm text-txt-muted">${student.email}</td>
      <td class="p-3 text-sm text-txt-muted">${student.mobile}</td>
      <td class="p-3 text-sm text-center">
        <button 
          class="bg-danger hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-input transition"
          onclick="removeStudent(${index})"
        >
          Remove
        </button>
      </td>
    `;
    tableBody.appendChild(row);
  });
};

// CORE API: Remove student record from array and flush update to Local Storage
window.removeStudent = (index) => {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
  showNotification("Student record removed successfully.", true);
};

// CORE EVENT: Multi-tier criteria evaluation validation pipeline
document.getElementById("registrationForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("studentName");
  const emailInput = document.getElementById("studentEmail");
  const passwordInput = document.getElementById("studentPassword");
  const mobileInput = document.getElementById("studentMobile");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const mobileError = document.getElementById("mobileError");

  // Regex validation rules
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobilePattern = /^[0-9]{10}$/;

  // Boolean flags evaluating criteria states
  const isNameInvalid = nameInput.value.trim() === "";
  const isEmailInvalid = !emailPattern.test(emailInput.value.trim());
  const isPasswordInvalid = passwordInput.value.length < 6;
  const isMobileInvalid = !mobilePattern.test(mobileInput.value.trim());

  // Render form error diagnostics UI
  toggleError(
    nameInput,
    nameError,
    "Name field cannot be left blank.",
    isNameInvalid,
  );
  toggleError(
    emailInput,
    emailError,
    "Please provide a valid corporate email address.",
    isEmailInvalid,
  );
  toggleError(
    passwordInput,
    passwordError,
    "Password must contain at least 6 characters.",
    isPasswordInvalid,
  );
  toggleError(
    mobileInput,
    mobileError,
    "Mobile number must be exactly 10 digits long.",
    isMobileInvalid,
  );

  // Stop submission sequence if any criteria rule fails
  if (isNameInvalid || isEmailInvalid || isPasswordInvalid || isMobileInvalid) {
    showNotification(
      "Registration failed. Please correct the highlighted errors.",
      false,
    );
    return;
  }

  // Push validated data to persistent storage array
  const newStudent = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    mobile: mobileInput.value.trim(),
  };

  students.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));

  // Re-render UI views and flush the input fields
  displayStudents();
  document.getElementById("registrationForm").reset();
  showNotification("Student registered successfully!", true);
});

// App runtime initialization boot sequence
displayStudents();
