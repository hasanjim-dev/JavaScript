// let and const

let name = "Hasan";
const country = "Bangladesh";

console.log(name);
console.log(country);


// Template Literals

let age = 22;

console.log(`My name is ${name} and I am ${age} years old.`);


// Arrow Functions

const add = (a, b) => a + b;

console.log(add(10, 20));


// Default Parameters

function greet(user = "Guest") {
    console.log(`Hello, ${user}!`);
}

greet("Hasan");
greet();


// Destructuring Arrays

let fruits = ["Apple", "Banana", "Mango"];

let [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);


// Destructuring Objects

let student = {
    name: "Hasan",
    age: 22,
    department: "Software Engineering"
};

let { name: studentName, age: studentAge } = student;

console.log(studentName);
console.log(studentAge);


// Spread Operator

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

let allNumbers = [...numbers1, ...numbers2];

console.log(allNumbers);


// Spread Operator with Objects

let user = {
    name: "Hasan",
    age: 22
};

let updatedUser = {
    ...user,
    country: "Bangladesh"
};

console.log(updatedUser);


// Rest Operator

function calculateSum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
}

console.log(calculateSum(10, 20, 30));
console.log(calculateSum(5, 10, 15, 20));


// for...of

let skills = ["JavaScript", "Python", "React"];

for (let skill of skills) {
    console.log(skill);
}


// includes()

console.log(skills.includes("JavaScript"));
console.log(skills.includes("Java"));


// Array.from()

let text = "HELLO";

let letters = Array.from(text);

console.log(letters);


// Optional Chaining

let person = {
    name: "Hasan",
    address: {
        city: "Dhaka"
    }
};

console.log(person.address?.city);
console.log(person.contact?.phone);


// Nullish Coalescing

let username = null;

let displayName = username ?? "Guest";

console.log(displayName);