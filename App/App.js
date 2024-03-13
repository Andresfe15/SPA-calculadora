
import Calculator from './helpers/calculator.js';

class App {
  constructor() {
    this.num1Input = document.createElement('input');
    this.num1Input.type = 'number';
    this.num2Input = document.createElement('input');
    this.num2Input.type = 'number';
    this.addButton = document.createElement('button');
    this.addButton.textContent = '+';
    this.subtractButton = document.createElement('button');
    this.subtractButton.textContent = '-';
    this.multiplyButton = document.createElement('button');
    this.multiplyButton.textContent = '*';
    this.divideButton = document.createElement('button');
    this.divideButton.textContent = '/';
    this.resultDisplay = document.createElement('p');
  }

  init() {
    const appContainer = document.getElementById('app');
    appContainer.appendChild(this.num1Input);
    appContainer.appendChild(this.num2Input);
    appContainer.appendChild(this.addButton);
    appContainer.appendChild(this.subtractButton);
    appContainer.appendChild(this.multiplyButton);
    appContainer.appendChild(this.divideButton);
    appContainer.appendChild(this.resultDisplay);

    this.addButton.addEventListener('click', this.handleAdd.bind(this));
    this.subtractButton.addEventListener('click', this.handleSubtract.bind(this));
    this.multiplyButton.addEventListener('click', this.handleMultiply.bind(this));
    this.divideButton.addEventListener('click', this.handleDivide.bind(this));
  }

  handleAdd() {
    const num1 = parseFloat(this.num1Input.value);
    const num2 = parseFloat(this.num2Input.value);
    const result = Calculator.add(num1, num2);
    this.resultDisplay.textContent = 'Resultado: ' + result;
  }

  handleSubtract() {
    const num1 = parseFloat(this.num1Input.value);
    const num2 = parseFloat(this.num2Input.value);
    const result = Calculator.subtract(num1, num2);
    this.resultDisplay.textContent = 'Resultado: ' + result;
  }

  handleMultiply() {
    const num1 = parseFloat(this.num1Input.value);
    const num2 = parseFloat(this.num2Input.value);
    const result = Calculator.multiply(num1, num2);
    this.resultDisplay.textContent = 'Resultado: ' + result;
  }

  handleDivide() {
    const num1 = parseFloat(this.num1Input.value);
    const num2 = parseFloat(this.num2Input.value);
    if (num2 === 0) {
      this.resultDisplay.textContent = 'Error: División por cero';
    } else {
      const result = Calculator.divide(num1, num2);
      this.resultDisplay.textContent = 'Resultado: ' + result;
    }
  }
}

export default App;


