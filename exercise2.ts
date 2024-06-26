interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}

class Calculator implements ICalculator {
    private validateUserInput(a: any, b: any): void {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("numbers only!");
        }
    }

    public add(a: number, b: number): number {
        this.validateUserInput(a, b);
        return a + b;
    }

    public subtract(a: number, b: number): number {
        this.validateUserInput(a, b);
        return a - b;
    }

    public multiply(a: number, b: number): number {
        this.validateUserInput(a, b);
        return a * b;
    }

    public divide(a: number, b: number): number {
        this.validateUserInput(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }
}


const calc = new Calculator();
console.log(calc.add(10, 5)); 
console.log(calc.subtract(10, 5)); 
console.log(calc.multiply(10, 5)); 
console.log(calc.divide(10, 5)); 
