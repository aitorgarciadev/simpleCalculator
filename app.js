function calculate() {
  const number1 = document.getElementById("number1").value;
  const number2 = document.getElementById("number2").value;
  const operation = document.getElementById("operation").value;
  const resultElement = document.getElementById("result");

  const num1 = parseFloat(number1);
  const num2 = parseFloat(number2);

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "unknown value";
    return;
  }

  let result;
  switch (operation) {
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
      result = num1 / num2;
      break;
    default:
      result = "unknown value";
  }

  resultElement.textContent = result;
}
