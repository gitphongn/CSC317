document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const history = document.getElementById("history");
    const buttons = document.querySelectorAll(".buttons input");
  
    let currentInput = "";
    let currentHistory = "";
  
    function updateDisplay() {
      display.value = currentInput || "0";
      history.value = currentHistory;
    }
  
    function calculate() {
      try {
        const expression = currentInput.replace(/x/g, "*");
        const result = eval(expression);
        currentHistory = `${currentInput} = ${result}`;
        currentInput = result.toString();
      } catch {
        currentInput = "Error";
      }
      updateDisplay();
    }
  
    function handleInput(value) {
      if (value === "AC") {
        currentInput = "";
        currentHistory = "";
      } else if (value === "+/-") {
        if (currentInput) {
          if (currentInput.startsWith("-")) {
            currentInput = currentInput.slice(1);
          } else {
            currentInput = "-" + currentInput;
          }
        }
      } else if (value === "%") {
        currentInput = (parseFloat(currentInput) / 100).toString();
      } else if (value === "=") {
        calculate();
        return;
      } else {
        currentInput += value;
      }
  
      updateDisplay();
    }
  
    function mapKeyToButton(key) {
      const operators = { '/': '/', '*': 'x', '-': '-', '+': '+', '=': '=', 'Enter': '=', '.': '.', '%': '%' };
      if (key >= '0' && key <= '9') return key;
      if (operators[key]) return operators[key];
      if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
        return null;
      }
      if (key === 'Enter') return value;
      if (key === 'Escape') return "AC";
      return null;
    }
  
    // Handle button clicks
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.value;
        if (button.id === "blank") return;
        handleInput(value);
      });
    });
  
    // Handle keyboard input
    document.addEventListener("keydown", (e) => {
      const keyValue = mapKeyToButton(e.key);
      if (keyValue !== null) {
        handleInput(keyValue);
      }
    });
  
    updateDisplay();
  });
  