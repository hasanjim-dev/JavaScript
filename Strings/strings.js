// Creating Strings

let firstName = "Hasan";
let lastName = "Jim";

console.log(firstName);
console.log(lastName);


// String Concatenation

let fullName = firstName + " " + lastName;

console.log(fullName);


// Template Literals

let age = 22;

console.log(`My name is ${fullName} and I am ${age} years old.`);


// String Length

let message = "JavaScript";

console.log(message.length);


// Convert to Uppercase

console.log(message.toUpperCase());


// Convert to Lowercase

console.log(message.toLowerCase());


// charAt()

console.log(message.charAt(0));
console.log(message.charAt(4));


// includes()

console.log(message.includes("Script"));
console.log(message.includes("Python"));


// startsWith()

console.log(message.startsWith("Java"));


// endsWith()

console.log(message.endsWith("Script"));


// indexOf()

console.log(message.indexOf("Script"));


// slice()

console.log(message.slice(0, 4));


// substring()

console.log(message.substring(0, 4));


// replace()

let text = "I like Python";

let newText = text.replace("Python", "JavaScript");

console.log(newText);


// trim()

let username = "   Hasan   ";

console.log(username);
console.log(username.trim());


// split()

let skills = "JavaScript,Python,React";

let skillArray = skills.split(",");

console.log(skillArray);


// repeat()

console.log("Hello ".repeat(3));


// String Comparison

let a = "Hello";
let b = "Hello";

console.log(a === b);