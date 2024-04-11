const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = []; //List

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  return outputResult(currentResult, calcDescription)
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
  const logEntry = {
      operation : operationIdentifier,
      prevResult : prevResult,
      number : operationNumber,
      result : newResult
    } //객체
  console.log(logEntry);
  logEntries.push(logEntry)
}

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, enteredNumber)
  logEntries.push(currentResult);
  console.log(logEntries[logEntries.length - 1],logEntries); //Last and List Value
  writeToLog("+",initialResult, enteredNumber, currentResult);

}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, enteredNumber)
  writeToLog("-",initialResult, enteredNumber, currentResult);

}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, enteredNumber)
  writeToLog("*",initialResult, enteredNumber, currentResult);

}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, enteredNumber)
  writeToLog("/",initialResult, enteredNumber, currentResult);

}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);


