// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
//   };
  
//   function inputDigit(digit) {
//     const { displayValue, waitingForSecondOperand } = calculator;
  
//     if (waitingForSecondOperand === true) {
//       calculator.displayValue = digit;
//       calculator.waitingForSecondOperand = false;
//     } else {
//       calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
//     }
//   }
  
//   function inputDecimal(dot) {
//     if (calculator.waitingForSecondOperand === true) {
//         calculator.displayValue = "0."
//       calculator.waitingForSecondOperand = false;
//       return
//     }
  
//     if (!calculator.displayValue.includes(dot)) {
//       calculator.displayValue += dot;
//     }
//   }
  
//   function handleOperator(nextOperator) {
//     const { firstOperand, displayValue, operator } = calculator
//     const inputValue = parseFloat(displayValue);
    
//     if (operator && calculator.waitingForSecondOperand)  {
//       calculator.operator = nextOperator;
//       return;
//     }
  
  
//     if (firstOperand == null && !isNaN(inputValue)) {
//       calculator.firstOperand = inputValue;
//     } else if (operator) {
//       const result = calculate(firstOperand, inputValue, operator);
  
//       calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
//       calculator.firstOperand = result;
//     }
  
//     calculator.waitingForSecondOperand = true;
//     calculator.operator = nextOperator;
//   }
  
//   function calculate(firstOperand, secondOperand, operator) {
//     if (operator === '+') {
//       return firstOperand + secondOperand;
//     } else if (operator === '-') {
//       return firstOperand - secondOperand;
//     } else if (operator === '*') {
//       return firstOperand * secondOperand;
//     } else if (operator === '/') {
//       return firstOperand / secondOperand;
//     }
  
//     return secondOperand;
//   }
  
//   function resetCalculator() {
//     calculator.displayValue = '0';
//     calculator.firstOperand = null;
//     calculator.waitingForSecondOperand = false;
//     calculator.operator = null;
//   }
  
//   function updateDisplay() {
//     const display = document.querySelector('.calculatorScreen');
//     display.value = calculator.displayValue;
//   }
  
//   updateDisplay();
  
//   const keys = document.querySelector('.calculatorKeys');
//   keys.addEventListener('click', event => {
//     const { target } = event;
//     const { value } = target;
//     if (!target.matches('button')) {
//       return;
//     }
  
//     switch (value) {
//       case '+':
//       case '-':
//       case '*':
//       case '/':
//       case '=':
//         handleOperator(value);
//         break;
//       case '.':
//         inputDecimal(value);
//         break;
//       case 'all-clear':
//         resetCalculator();
//         break;
//       default:
//         if (Number.isInteger(parseFloat(value))) {
//           inputDigit(value);
//         }
//     }
  
//     updateDisplay();
//   });


function clearScreen(){
    const screen = document.getElementById("screen");
    screen.value = ""; 
  }

function evalFunction(){
    const screen = document.getElementById("screen");
    screen.value = eval(screen.value); 
}

function display(newValue){
    const screen = document.getElementById("screen");
    const prevValue = screen.value
    screen.value = prevValue+newValue;
  }

const keyClear = document.getElementById("clear");
keyClear.addEventListener("click", clearScreen);

const keyOne = document.getElementById("one");
keyOne.addEventListener("click", function() {display(keyOne.value)});
const keyTwo = document.getElementById("two");
keyTwo.addEventListener("click", function() {display(keyTwo.value)});
const keyThree = document.getElementById("three");
keyThree.addEventListener("click", function() {display(keyThree.value)});
const keyFour = document.getElementById("four");
keyFour.addEventListener("click", function() {display(keyFour.value)});
const keyFive = document.getElementById("five");
keyFive.addEventListener("click", function() {display(keyFive.value)});
const keySix = document.getElementById("six");
keySix.addEventListener("click", function() {display(keySix.value)});
const keySeven = document.getElementById("seven");
keySeven.addEventListener("click", function() {display(keySeven.value)});
const keyEight = document.getElementById("eight");
keyEight.addEventListener("click", function() {display(keyEight.value)});
const keyNine = document.getElementById("nine");
keyNine.addEventListener("click", function() {display(keyNine.value)});
const keyZero = document.getElementById("zero");
keyZero.addEventListener("click", function() {display(keyZero.value)});

const keyDecimal = document.getElementById("point");
keyDecimal.addEventListener("click", function() {display(keyDecimal.value)});

const keyPlus = document.getElementById("addition");
keyPlus.addEventListener("click", function() {display(keyPlus.value)});
const keySubtraction = document.getElementById("subtraction");
keySubtraction.addEventListener("click", function() {display(keySubtraction.value)});
const keyDivision = document.getElementById("division");
keyDivision.addEventListener("click", function() {display(keyDivision.value)});
const keyMultiplication = document.getElementById("multiplication");
keyMultiplication.addEventListener("click", function() {display(keyMultiplication.value)});
const keyEqual = document.getElementById("equal");
keyEqual.addEventListener("click", function() {evalFunction()});

  