function getGrade(avg) {
      if (avg >= 80) return "A+";
      if (avg >= 70) return "A";
      if (avg >= 60) return "A-";
      if (avg >= 50) return "B";
      if (avg >= 40) return "C";
      if (avg >= 33) return "D";
      return "F";
    }

    document
      .getElementById("calculateBtn")
      .addEventListener("click", () => {

        const bangla =
          Number(document.getElementById("bangla").value);

        const english =
          Number(document.getElementById("english").value);

        const math =
          Number(document.getElementById("math").value);

        const total =
          bangla + english + math;

        const average =
          total / 3;

        const grade =
          getGrade(average);

        document.getElementById("result").innerHTML = `
          <p><strong>Total:</strong> ${total}</p>
          <p><strong>Average:</strong> ${average.toFixed(2)}</p>
          <p><strong>Grade:</strong> ${grade}</p>
        `;
      });