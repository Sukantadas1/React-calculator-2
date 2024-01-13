import React, { useState } from "react";
import "../index.css";
const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const validateInput = () => {
    if (
      !num1.trim() ||
      !num2.trim() ||
      isNaN(Number(num1)) ||
      isNaN(Number(num2))
    ) {
      setErrorMessage("Num 1 Cannot Be Empty");
      return false;
    }

    setErrorMessage(null);
    return true;
  };

  const performOperation = (operation) => {
    if (validateInput()) {
      const n1 = parseFloat(num1);
      const n2 = parseFloat(num2);

      switch (operation) {
        case "+":
          setResult(n1 + n2);
          break;
        case "-":
          setResult(n1 - n2);
          break;
        case "*":
          setResult(n1 * n2);
          break;
        case "/":
          if (n2 === 0) {
            setErrorMessage("Cannot divide by zero.");
            setResult(null);
            return;
          }
          setResult(n1 / n2);
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="calculator-container">
      <input
        type="text"
        placeholder="Num 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Num 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <div className="buttons-container">
        <button onClick={() => performOperation("+")}>Add</button>
        <button onClick={() => performOperation("-")}>Subtract</button>
        <button onClick={() => performOperation("*")}>Multiply</button>
        <button onClick={() => performOperation("/")}>Divide</button>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {result !== null && (
        <div className="success-message">Result: {result.toFixed(2)}</div>
      )}
    </div>
  );
};

export default Calculator;
