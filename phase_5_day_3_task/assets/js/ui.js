import { getAllStudents, removeStudent } from "./students.js";

export function renderStudents() {
  const tableBody = document.getElementById("studentTableBody");

  if (!tableBody) return;

  const students = getAllStudents();

  tableBody.innerHTML = "";

  if (!students || students.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="4" class="text-center text-muted">
          No students found
        </td>
      </tr>
    `;
    return;
  }

  students.forEach((student) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.course}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="window.editStudent(${student.id})">
          Edit
        </button>
        <button class="btn btn-sm btn-danger" onclick="window.deleteStudent(${student.id})">
          Delete
        </button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

export function refreshUI() {
  renderStudents();
}

export function bindGlobalActions() {
  window.deleteStudent = function (id) {
    removeStudent(id);
    renderStudents();
  };

  window.editStudent = function (id) {
    sessionStorage.setItem("editStudentId", id);
    window.location.href = "edit-student.html";
  };
}

export function getTheme() {
  return localStorage.getItem("theme") || "light";
}

export function applyTheme() {
  const theme = getTheme();
  document.documentElement.setAttribute("data-theme", theme);
}

export function toggleTheme() {
  const current = getTheme();
  const next = current === "light" ? "dark" : "light";

  localStorage.setItem("theme", next);
  document.documentElement.setAttribute("data-theme", next);
}
