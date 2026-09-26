function calculator(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            if (b === 0) {
                return "Cannot divide by zero";
            }
            return a / b;

        default:
            return "Invalid operator";
    }
}

console.log(calculator(20, 10, "+"));
console.log(calculator(20, 10, "-"));
console.log(calculator(20, 10, "*"));
console.log(calculator(20, 10, "/"));