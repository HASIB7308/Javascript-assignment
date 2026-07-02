// Character Counter Script
 const textInput = document.getElementById("textInput");
    const charCount = document.getElementById("charCount");
    const wordCount = document.getElementById("wordCount");

    textInput.addEventListener("input", () => {
      const text = textInput.value;

      // Character Count
      charCount.textContent = text.length;

      // Word Count
      const words = text.trim() === ""
        ? 0
        : text.trim().split(/\s+/).length;

      wordCount.textContent = words;
    });