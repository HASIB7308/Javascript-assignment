function calculate(operator) {
      const num1 =
        Number(document.getElementById("num1").value);

      const num2 =
        Number(document.getElementById("num2").value);

      let result;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;

        case "-":
          result = num1 - num2;
          break;

        case "*":
          result = num1 * num2;
          break;

        case "/":
          if (num2 === 0) {
            document.getElementById("result").textContent =
              "Cannot divide by zero";
            return;
          }
          result = num1 / num2;
          break;
      }

      document.getElementById("result").textContent =
        `Result: ${result}`;
    }