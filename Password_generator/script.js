const passwordField = document.querySelector("#password");
    const generateBtn = document.querySelector("#generateBtn");

    function generatePassword(length = 8) {
      const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

      let password = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }

      return password;
    }

    generateBtn.addEventListener("click", () => {
      passwordField.value = generatePassword();
    });