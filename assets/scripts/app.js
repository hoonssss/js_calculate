const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = []; //List

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  console.log(typeof calcDescription); //type 검사
  return outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
  const logEntry = {
      operation : operationIdentifier,
      prevResult : prevResult,
      number : operationNumber,
      result : newResult
    } //객체
  console.log(logEntry);
  logEntries.push(logEntry);
}

function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  let mathOperator;
  if(calculationType === "Add"){
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "Subtract"){
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "Multiply"){
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else{
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber)
  writeToLog(calculationType,initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult("Add");
}

function subtract() {
  calculateResult("Subtract")
}

function multiply() {
  calculateResult("Multiply")
}

function divide() {
  calculateResult("divide")
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


