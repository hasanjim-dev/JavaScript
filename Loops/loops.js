// for loop

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// while loop

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}


// do while loop

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);


// for...of loop

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}


// for...in loop

let student = {
    name: "Hasan",
    age: 22,
    department: "Software Engineering"
};

for (let key in student) {
    console.log(key + ":", student[key]);
}


// break

for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        break;
    }

    console.log(i);
}


// continue

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}