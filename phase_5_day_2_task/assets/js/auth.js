const protectedPage = window.location.pathname.includes("/assets/pages/");

if (protectedPage) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
    window.location.href = "../../index.html";
  }
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", handleLogin);
}

function handleLogin(event) {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginMessage = document.getElementById("loginMessage");

  try {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || password === "") {
      throw new Error("All fields are required.");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      throw new Error("Please enter a valid email address.");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }

    const demoEmail = "admin@company.com";
    const demoPassword = "admin123";

    if (email !== demoEmail || password !== demoPassword) {
      throw new Error("Invalid login credentials.");
    }

    loginMessage.className = "alert alert-success";
    loginMessage.textContent = "Login successful. Redirecting...";

    setTimeout(() => {
      localStorage.setItem("isLoggedIn", "true");

      window.location.href = "assets/pages/employees.html";
    }, 1000);
  } catch (error) {
    loginMessage.className = "alert alert-danger";
    loginMessage.textContent = error.message;
  }
}

const logoutButton = document.getElementById("logoutBtn");

if (logoutButton) {
  logoutButton.addEventListener("click", handleLogout);
}

function handleLogout() {
  localStorage.removeItem("isLoggedIn");

  window.location.href = "../../index.html";
}
