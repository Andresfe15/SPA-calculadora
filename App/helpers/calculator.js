// App/helpers/calculator.js

const Calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
    multiply: function(a, b) {
      return a * b;
    },
    divide: function(a, b) {
      if (b === 0) {
        return 'Error: No se puede dividir por cero';
      }
      return a / b;
    }
  };
  
  export default Calculator;
  