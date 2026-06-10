const DEMO_USER = {
  email: "student@dashboard.com",
  password: "student123",
};

export function login(email, password) {
  if (!email || !password) {
    return { success: false, message: "All fields are required" };
  }

  if (email === DEMO_USER.email && password === DEMO_USER.password) {
    localStorage.setItem("auth_token", "true");
    localStorage.setItem("userEmail", email);

    return { success: true, message: "Login successful" };
  }

  return { success: false, message: "Invalid credentials" };
}

export function logout() {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("userEmail");

  window.location.href = "../../login.html";
}

export function isAuthenticated() {
  return localStorage.getItem("auth_token") === "true";
}
