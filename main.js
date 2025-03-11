"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    // Handle login logic here
    console.log("Login attempt with:", formData);
  });
});
