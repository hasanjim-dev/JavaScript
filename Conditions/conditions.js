// if statement

let age = 22;

if (age >= 18) {
    console.log("You are an adult.");
}


// if else

let number = 10;

if (number > 0) {
    console.log("Positive number");
} else {
    console.log("Not a positive number");
}


// if else if

let marks = 85;

if (marks >= 80) {
    console.log("Grade: A+");
} else if (marks >= 70) {
    console.log("Grade: A");
} else if (marks >= 60) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// Multiple conditions

let userAge = 20;
let hasTicket = true;

if (userAge >= 18 && hasTicket) {
    console.log("You can enter.");
} else {
    console.log("You cannot enter.");
}


// Ternary operator

let isLoggedIn = true;

let message = isLoggedIn ? "Welcome!" : "Please login.";

console.log(message);


// Switch statement

let day = 3;

switch (day) {
    case 1:
        console.log("Saturday");
        break;

    case 2:
        console.log("Sunday");
        break;

    case 3:
        console.log("Monday");
        break;

    case 4:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}