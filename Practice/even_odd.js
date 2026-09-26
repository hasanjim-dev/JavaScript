function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    }

    return "Odd";
}

console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));
console.log(checkEvenOdd(25));
console.log(checkEvenOdd(42));