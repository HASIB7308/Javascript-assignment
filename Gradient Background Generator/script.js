const button = document.querySelector("#generateBtn");
    const cssCode = document.querySelector("#cssCode");

    function getRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";

      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      return color;
    }

    function generateGradient() {
      const color1 = getRandomColor();
      const color2 = getRandomColor();

      const gradient =
        `linear-gradient(to right, ${color1}, ${color2})`;

      document.body.style.background = gradient;

      cssCode.textContent =
        `background: ${gradient};`;
    }

    button.addEventListener("click", generateGradient);

    generateGradient();