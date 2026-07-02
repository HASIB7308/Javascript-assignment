const quotes = [
      "The earth moves around the sun.",
      "Where there is a will, there is a way.",
      "Grasp all, lose all.",
      "All that glitters is not gold.",
      "Something is better than nothing."
    ];

    const quoteElement = document.getElementById("quote");
    const button = document.getElementById("generateBtn");

    button.addEventListener("click", () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = quotes[randomIndex];
    });