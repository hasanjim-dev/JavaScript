// Creating an Array

let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log(fruits);


// Accessing Array Elements

console.log(fruits[0]);
console.log(fruits[2]);


// Changing an Element

fruits[1] = "Pineapple";

console.log(fruits);


// Array Length

console.log(fruits.length);


// Add Elements

fruits.push("Grapes");

console.log(fruits);


// Remove Last Element

fruits.pop();

console.log(fruits);


// Add Element at the Beginning

fruits.unshift("Watermelon");

console.log(fruits);


// Remove First Element

fruits.shift();

console.log(fruits);


// Loop Through Array

for (let fruit of fruits) {
    console.log(fruit);
}


// forEach()

fruits.forEach(function(fruit) {
    console.log(fruit);
});


// map()

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(number => number * 2);

console.log(doubled);


// filter()

let ages = [12, 18, 25, 15, 30];

let adults = ages.filter(age => age >= 18);

console.log(adults);


// find()

let result = ages.find(age => age > 20);

console.log(result);


// includes()

console.log(fruits.includes("Mango"));
console.log(fruits.includes("Apple"));


// indexOf()

console.log(fruits.indexOf("Mango"));


// join()

console.log(fruits.join(", "));


// slice()

let selectedFruits = fruits.slice(0, 2);

console.log(selectedFruits);


// Spread Operator

let moreFruits = [...fruits, "Kiwi", "Papaya"];

console.log(moreFruits);