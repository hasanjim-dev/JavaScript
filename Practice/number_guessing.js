let secretNumber = Math.floor(Math.random() * 10) + 1;

let guess = 7;

console.log("Secret number:", secretNumber);
console.log("Your guess:", guess);

if (guess === secretNumber) {
    console.log("Correct! You guessed the number.");
} else if (guess < secretNumber) {
    console.log("Too low!");
} else {
    console.log("Too high!");
}