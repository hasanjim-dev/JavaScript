// Creating an Object

let student = {
    name: "Hasan",
    age: 22,
    department: "Software Engineering",
    university: "Daffodil International University"
};

console.log(student);


// Accessing Object Properties

console.log(student.name);
console.log(student.age);
console.log(student.department);


// Bracket Notation

console.log(student["name"]);
console.log(student["university"]);


// Changing a Property

student.age = 23;

console.log(student.age);


// Adding a New Property

student.city = "Dhaka";

console.log(student);


// Deleting a Property

delete student.city;

console.log(student);


// Object Method

let user = {
    name: "Hasan",

    greet: function() {
        console.log("Hello, " + this.name);
    }
};

user.greet();


// Nested Object

let person = {
    name: "Hasan",

    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(person.address.city);
console.log(person.address.country);


// Object.keys()

console.log(Object.keys(student));


// Object.values()

console.log(Object.values(student));


// Object.entries()

console.log(Object.entries(student));


// Destructuring

let { name, age, department } = student;

console.log(name);
console.log(age);
console.log(department);


// Spread Operator with Objects

let updatedStudent = {
    ...student,
    age: 24
};

console.log(updatedStudent);