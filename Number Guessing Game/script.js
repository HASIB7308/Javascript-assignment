const randomNumber =
      Math.floor(Math.random() * 100) + 1;

    const result = document.getElementById("result");

    document
      .getElementById("checkBtn")
      .addEventListener("click", () => {

        const guess =
          Number(document.getElementById("guessInput").value);

        if (!guess || guess < 1 || guess > 100) {
          result.textContent =
            "Please enter a number between 1 and 100";
          return;
        }

        if (guess > randomNumber) {
          result.textContent = "Too High";
        } else if (guess < randomNumber) {
          result.textContent = "Too Low";
        } else {
          result.textContent = "Correct Answer 🎉";
        }
      });