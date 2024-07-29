const resultDisplay = document.querySelector('.calculator_result'); //결과창
const numberButton = document.querySelectorAll('.btn_gray2'); //0~9
const operatorButton = document.querySelectorAll('.btn_yellow'); //연산자

numberButton.forEach(button => { //0~9 클릭하면 결과창에
  button.addEventListener('click', () => {
    resultDisplay.textContent += button.textContent;
  });
});

let inputOperator = null;
let inputFirstNumber = null;

operatorButton.forEach(button => { //연산자 클릭하면
  button.addEventListener('click', () => {
    if (button.id == '=') {
      const inputSecondNumber = parseFloat(resultDisplay.textContent);
      let result;
      switch (inputOperator) {
        case '+':
          result = inputFirstNumber + inputSecondNumber;
          break;
        case '-':
          result = inputFirstNumber - inputSecondNumber;
          break;
        case 'x':
          result = inputFirstNumber * inputSecondNumber;
          break;
        case '/':
          result = inputFirstNumber / inputSecondNumber;
          break;
        case '%':
          result = inputFirstNumber % inputSecondNumber;
          break;
      }
      resultDisplay.textContent = result.toString();
      inputFirstNumber = null;
      inputOperator = null;
    } else {
      if (inputFirstNumber === null) {
        inputFirstNumber = parseFloat(resultDisplay.textContent);
      }
      inputOperator = button.id;
      resultDisplay.textContent = '';
    }
  });
});

const clearButton = document.getElementById('C'); //C
clearButton.addEventListener('click', () => {
  resultDisplay.textContent = '';
  inputFirstNumber = null;
  inputOperator = null;
});