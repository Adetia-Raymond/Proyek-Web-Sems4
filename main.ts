interface LoginFormData {
    email: string;
    password: string;
  }
  
  document.addEventListener("DOMContentLoaded", (): void => {
    const loginForm = document.getElementById("loginForm") as HTMLFormElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
  
    loginForm.addEventListener("submit", (e: Event): void => {
      e.preventDefault();
  
      const formData: LoginFormData = {
        email: emailInput.value,
        password: passwordInput.value,
      };
  
      // Handle login logic here
      console.log("Login attempt with:", formData);
    });
  });
  