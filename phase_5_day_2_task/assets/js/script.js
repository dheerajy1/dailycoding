const employeeForm = document.getElementById("employeeForm");
const employeeTableBody = document.getElementById("employeeTableBody");

let employees = JSON.parse(localStorage.getItem("employees")) || [];
let editEmployeeId = null;

if (employeeForm) {
  employeeForm.addEventListener("submit", handleEmployeeSubmit);
}

if (employeeTableBody) {
  renderEmployees();
}

function handleEmployeeSubmit(event) {
  event.preventDefault();

  const employeeName = document.getElementById("employeeName").value.trim();
  const employeeRole = document.getElementById("employeeRole").value.trim();
  const employeeSalary = document.getElementById("employeeSalary").value.trim();
  const employeeEmail = document.getElementById("employeeEmail").value.trim();

  const employeeMessage = document.getElementById("employeeMessage");

  try {
    if (
      employeeName === "" ||
      employeeRole === "" ||
      employeeSalary === "" ||
      employeeEmail === ""
    ) {
      throw new Error("All employee fields are required.");
    }

    if (editEmployeeId === null) {
      const employee = {
        id: Date.now(),
        name: employeeName,
        role: employeeRole,
        salary: employeeSalary,
        email: employeeEmail,
      };

      employees.push(employee);
      localStorage.setItem("employees", JSON.stringify(employees));
    } else {
      const employeeIndex = employees.findIndex(
        (employee) => employee.id === editEmployeeId,
      );

      employees[employeeIndex] = {
        id: editEmployeeId,
        name: employeeName,
        role: employeeRole,
        salary: employeeSalary,
        email: employeeEmail,
      };
      localStorage.setItem("employees", JSON.stringify(employees));

      editEmployeeId = null;
    }

    employeeMessage.className = "alert alert-success";
    employeeMessage.textContent = "Employee added successfully.";

    employeeForm.reset();

    renderEmployees();
  } catch (error) {
    employeeMessage.className = "alert alert-danger";
    employeeMessage.textContent = error.message;
  }
}

function renderEmployees() {
  if (!employeeTableBody) {
    return;
  }

  employeeTableBody.innerHTML = "";

  employees.forEach((employee) => {
    employeeTableBody.innerHTML += `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.role}</td>
                <td>${employee.salary}</td>
                <td>${employee.email}</td>
                <td>
                    <button
                        class="btn btn-sm btn-warning me-2"
                        onclick="goToEditPage(${employee.id})">
                        Edit
                    </button>

                    <button
                        class="btn btn-sm btn-danger"
                        onclick="deleteEmployee(${employee.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
  });
  updateDashboardStats();
}

function updateDashboardStats() {
  const totalEmployeesElement = document.getElementById("totalEmployees");

  const totalSalaryElement = document.getElementById("totalSalary");

  const totalRolesElement = document.getElementById("totalRoles");

  const totalRecordsElement = document.getElementById("totalRecords");

  if (
    !totalEmployeesElement ||
    !totalSalaryElement ||
    !totalRolesElement ||
    !totalRecordsElement
  ) {
    return;
  }

  const totalEmployees = employees.length;

  const totalSalary = employees.reduce(
    (sum, employee) => sum + Number(employee.salary),
    0,
  );

  const uniqueRoles = [...new Set(employees.map((employee) => employee.role))];

  totalEmployeesElement.textContent = totalEmployees;

  totalSalaryElement.textContent = `₹${totalSalary.toLocaleString()}`;

  totalRolesElement.textContent = uniqueRoles.length;

  totalRecordsElement.textContent = employees.length;
}

function goToEditPage(employeeId) {
  localStorage.setItem("selectedEmployeeId", employeeId);

  window.location.href = "edit-employee.html";
}

function deleteEmployee(employeeId) {
  try {
    const isConfirmed = confirm(
      "Are you sure you want to delete this employee?",
    );

    if (!isConfirmed) {
      return;
    }

    employees = employees.filter((employee) => employee.id !== employeeId);

    localStorage.setItem("employees", JSON.stringify(employees));

    renderEmployees();
  } catch (error) {
    console.error(error.message);
  }
}

// Disable Old Edit Logic
// function editEmployee(employeeId) {
//   try {
//     const employee = employees.find((employee) => employee.id === employeeId);

//     document.getElementById("employeeName").value = employee.name;

//     document.getElementById("employeeRole").value = employee.role;

//     document.getElementById("employeeSalary").value = employee.salary;

//     document.getElementById("employeeEmail").value = employee.email;

//     editEmployeeId = employeeId;
//   } catch (error) {
//     console.error(error.message);
//   }
// }

const editEmployeeForm = document.getElementById("editEmployeeForm");

if (editEmployeeForm) {
  loadEmployeeForEdit();

  editEmployeeForm.addEventListener("submit", updateEmployee);
}

function loadEmployeeForEdit() {
  try {
    const employeeId = Number(localStorage.getItem("selectedEmployeeId"));

    const employee = employees.find((employee) => employee.id === employeeId);

    if (!employee) {
      return;
    }

    document.getElementById("employeeName").value = employee.name;

    document.getElementById("employeeRole").value = employee.role;

    document.getElementById("employeeSalary").value = employee.salary;

    document.getElementById("employeeEmail").value = employee.email;
  } catch (error) {
    console.error(error.message);
  }
}

function updateEmployee(event) {
  event.preventDefault();

  try {
    const employeeId = Number(localStorage.getItem("selectedEmployeeId"));

    const employeeIndex = employees.findIndex(
      (employee) => employee.id === employeeId,
    );

    employees[employeeIndex] = {
      id: employeeId,
      name: document.getElementById("employeeName").value.trim(),
      role: document.getElementById("employeeRole").value.trim(),
      salary: document.getElementById("employeeSalary").value.trim(),
      email: document.getElementById("employeeEmail").value.trim(),
    };

    localStorage.setItem("employees", JSON.stringify(employees));

    window.location.href = "employees.html";
  } catch (error) {
    console.error(error.message);
  }
}

const copyEmailButton = document.getElementById("copyEmailBtn");

if (copyEmailButton) {
  copyEmailButton.addEventListener("click", copyDemoEmail);
}

function copyDemoEmail() {
  navigator.clipboard.writeText("admin@company.com");

  copyEmailButton.textContent = "Copied!";

  setTimeout(() => {
    copyEmailButton.textContent = "Copy";
  }, 1500);
}
const copyPasswordButton = document.getElementById("copyPasswordBtn");

if (copyPasswordButton) {
  copyPasswordButton.addEventListener("click", copyDemoPassword);
}

function copyDemoPassword() {
  navigator.clipboard.writeText("admin123");

  copyPasswordButton.textContent = "Copied!";

  setTimeout(() => {
    copyPasswordButton.textContent = "Copy";
  }, 1500);
}
