const dobInput = document.getElementById("dob");
    const result = document.getElementById("result");

    document
      .getElementById("calculateBtn")
      .addEventListener("click", () => {
        const dob = new Date(dobInput.value);

        if (!dobInput.value) {
          result.textContent = "Please select your date of birth.";
          return;
        }

        const today = new Date();

        let age = today.getFullYear() - dob.getFullYear();

        const monthDiff = today.getMonth() - dob.getMonth();

        if (
          monthDiff < 0 ||
          (monthDiff === 0 && today.getDate() < dob.getDate())
        ) {
          age--;
        }

        result.textContent = `Your Age: ${age} Years`;
      });