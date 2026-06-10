import { login, logout, isAuthenticated } from "./auth.js";
import { bindGlobalActions, refreshUI } from "./ui.js";
import { createStudent } from "./students.js";
import { initCopyButtons } from "./auth-ui.js";
import { applyTheme, toggleTheme } from "./ui.js";

/* MUST RUN IMMEDIATELY */
applyTheme();

/* -------------------------
   LOGIN PAGE
--------------------------*/

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
  initCopyButtons();
}

function handleLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("loginMessage");

  const result = login(email, password);

  if (result.success) {
    message.className = "alert alert-success";
    message.textContent = result.message;

    setTimeout(() => {
      window.location.href = "./assets/pages/dashboard.html";
    }, 800);
  } else {
    message.className = "alert alert-danger";
    message.textContent = result.message;
  }
}

/* -------------------------
   ROUTING CHECK
--------------------------*/

const path = window.location.pathname;

const isDashboard = path.includes("dashboard.html");
const isAddPage = path.includes("add-student.html");
const isEditPage = path.includes("edit-student.html");

/* -------------------------
   AUTH GUARD
--------------------------*/

function protectRoute() {
  const isProtected =
    window.location.pathname.includes("dashboard.html") ||
    window.location.pathname.includes("add-student.html") ||
    window.location.pathname.includes("edit-student.html");

  if (!isProtected) return;

  setTimeout(() => {
    if (!isAuthenticated()) {
      window.location.href = "../../login.html";
    }
  }, 50);
}

protectRoute();

/* -------------------------
   DASHBOARD INIT
--------------------------*/

if (isDashboard) {
  bindGlobalActions();
  refreshUI();

  const logoutBtn = document.getElementById("logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  const themeBtn = document.getElementById("themeToggleBtn");

  if (themeBtn) {
    themeBtn.addEventListener("click", toggleTheme);
  }
}

/* -------------------------
   ADD STUDENT PAGE
--------------------------*/

const studentForm = document.getElementById("studentForm");

if (studentForm) {
  studentForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;
    const course = document.getElementById("studentCourse").value;

    const result = createStudent(name, email, course);

    const msg = document.getElementById("studentMessage");

    msg.className = result.success
      ? "alert alert-success"
      : "alert alert-danger";

    msg.textContent = result.message;

    if (result.success) {
      studentForm.reset();
      refreshUI();
    }
  });
}

/* -------------------------
   EDIT PAGE
--------------------------*/

if (isEditPage) {
  const students = JSON.parse(localStorage.getItem("students_db")) || [];
  const editId = sessionStorage.getItem("editStudentId");

  const student = students.find((s) => s.id == editId);

  if (student) {
    document.getElementById("editName").value = student.name;
    document.getElementById("editEmail").value = student.email;
    document.getElementById("editCourse").value = student.course;
  }

  const form = document.getElementById("editStudentForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      import("./storage.js").then(({ updateStudent }) => {
        student.name = document.getElementById("editName").value;
        student.email = document.getElementById("editEmail").value;
        student.course = document.getElementById("editCourse").value;

        updateStudent(student);

        window.location.href = "dashboard.html";
      });
    });
  }
}
