// Global runtime database collection array tracking individual records
const employees = [
  {
    name: "John",
    role: "Frontend Developer",
    salary: 50000,
  },
  {
    name: "Jane Smith",
    role: "UI/UX Designer",
    salary: 65000,
  },
];

// Function to dynamically render employee data logs and update metrics dashboard
function displayEmployee() {
  const tableBody = document.getElementById("employeeTableBody");
  const totalStaffEl = document.getElementById("totalStaff");
  const totalPayrollEl = document.getElementById("totalPayroll");

  // Reset existing table rows to prepare for complete redrawing
  tableBody.innerHTML = "";

  let totalPayroll = 0;

  // Enumerate collection list to inject layout structures into target wrapper
  employees.forEach((employee, index) => {
    totalPayroll += Number(employee.salary);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${employee.name}</td>
      <td>${employee.role}</td>
      <td>$${Number(employee.salary).toLocaleString()}</td>
      <td>
        <button class="btn-delete" onclick="removeEmployee(${index})">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  // Render processed metrics tracking onto display nodes
  totalStaffEl.textContent = employees.length;
  totalPayrollEl.textContent = `$${totalPayroll.toLocaleString()}`;
}

// Function to push a fresh record object structural format into storage
function addEmployee(name, role, salary) {
  const newEmployee = {
    name: name,
    role: role,
    salary: Number(salary),
  };
  employees.push(newEmployee);
  displayEmployee();
}

// Function to drop specific index array item from collective database tracking
function removeEmployee(index) {
  employees.splice(index, 1);
  displayEmployee();
}

// Event registration listener monitoring form configuration submission
document
  .getElementById("employeeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("empName");
    const roleInput = document.getElementById("empRole");
    const salaryInput = document.getElementById("empSalary");

    // Call engine pipeline function to append input properties
    addEmployee(
      nameInput.value.trim(),
      roleInput.value.trim(),
      salaryInput.value,
    );

    // Clear configuration entries to receive subsequent actions
    this.reset();
  });

// Primary collection boot execution loop call on baseline initialization
displayEmployee();
