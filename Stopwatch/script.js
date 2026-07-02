let seconds = 0;
    let timer = null;

    const display = document.getElementById("display");

    function updateDisplay() {
      display.textContent = seconds + " sec";
    }

    document.getElementById("startBtn").addEventListener("click", () => {
      if (timer !== null) return;

      timer = setInterval(() => {
        seconds++;
        updateDisplay();
      }, 1000);
    });

    document.getElementById("stopBtn").addEventListener("click", () => {
      clearInterval(timer);
      timer = null;
    });

    document.getElementById("resetBtn").addEventListener("click", () => {
      clearInterval(timer);
      timer = null;
      seconds = 0;
      updateDisplay();
    });

    updateDisplay();