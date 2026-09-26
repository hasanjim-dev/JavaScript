// Basic Function

function greet() {
    console.log("Hello, Hasan!");
}

greet();


// Function with Parameters

function greetUser(name) {
    console.log("Hello, " + name);
}

greetUser("Hasan");
greetUser("Rahim");


// Function with Multiple Parameters

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(50, 30);


// Function with Return

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 4);

console.log(result);


// Arrow Function

const subtract = (a, b) => {
    return a - b;
};

console.log(subtract(20, 5));


// Short Arrow Function

const square = number => number * number;

console.log(square(6));


// Default Parameter

function welcome(name = "Guest") {
    console.log("Welcome, " + name);
}

welcome("Hasan");
welcome();


// Function Expression

const divide = function(a, b) {
    return a / b;
};

console.log(divide(20, 5));


// Callback Function

function calculate(a, b, operation) {
    return operation(a, b);
}

const sum = (x, y) => x + y;

console.log(calculate(10, 20, sum));