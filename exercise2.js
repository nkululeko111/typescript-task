var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.validateUserInput = function (a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("numbers only!");
        }
    };
    Calculator.prototype.add = function (a, b) {
        this.validateUserInput(a, b);
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        this.validateUserInput(a, b);
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        this.validateUserInput(a, b);
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        this.validateUserInput(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(10, 5));
console.log(calc.subtract(10, 5));
console.log(calc.multiply(10, 5));
console.log(calc.divide(10, 5));
