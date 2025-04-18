document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");  // Get the display element
    const history = document.getElementById("history");  // Get the history element
    const buttons = document.querySelectorAll(".buttons input");  // Get all buttons
  
    let currentInput = "";  // Variable to store the current input
    let currentHistory = "";  // Variable to store the current history
  
    function updateDisplay() {  // Function to update the display
      display.value = currentInput || "0";
      history.value = currentHistory;
    }
  
    function calculate() {  // Function to calculate the result
      try {
        const expression = currentInput.replace(/x/g, "*");
        const result = eval(expression);
        currentHistory = `${currentInput} = ${result}`;  // Update the history
        currentInput = result.toString();
      } catch {
        currentInput = "Error";
      }
      updateDisplay();
    }
  
    function handleInput(value) {  // Function to handle input
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
        currentInput = (parseFloat(currentInput) / 100).toString();  // Convert to percentage
      } else if (value === "=") {
        calculate();
        return;
      } else {
        currentInput += value;
      }
  
      updateDisplay();
    }
  
    function mapKeyToButton(key) {  // Function to map keyboard keys to buttons
      const operators = { '/': '/', '*': 'x', '-': '-', '+': '+', '=': '=', 'Enter': '=', '.': '.', '%': '%' };
      if (key >= '0' && key <= '9') return key;
      if (operators[key]) return operators[key];
      if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);  // Remove the last character from the display
        updateDisplay();
        return null;
      }
      if (key === 'Enter') return value;
      if (key === 'Escape') return "AC";
      return null;
    }
  
    // Handle button clicks
    buttons.forEach(button => {
      button.addEventListener("click", () => {  // Add click event
        const value = button.value;
        if (button.id === "blank") return;  // Ignore the blank button
        handleInput(value);
      });
    });
  
    // Handle keyboard input
    document.addEventListener("keydown", (e) => {
      const keyValue = mapKeyToButton(e.key);  // Map the key to a button
      if (keyValue !== null) {
        handleInput(keyValue);  // Handle the input
      }
    });
  
    updateDisplay();
  });
  