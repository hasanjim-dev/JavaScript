// Class and Object

class Student {

    constructor(name, age, department) {
        this.name = name;
        this.age = age;
        this.department = department;
    }

    introduce() {
        console.log(
            `My name is ${this.name}. I am ${this.age} years old.`
        );
    }
}

let student1 = new Student(
    "Hasan",
    22,
    "Software Engineering"
);

student1.introduce();


// Multiple Objects

let student2 = new Student(
    "Rahim",
    23,
    "Computer Science"
);

student2.introduce();


// Inheritance

class Person {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}`);
    }
}

class Developer extends Person {

    constructor(name, language) {
        super(name);
        this.language = language;
    }

    code() {
        console.log(
            `${this.name} is coding with ${this.language}.`
        );
    }
}

let developer = new Developer(
    "Hasan",
    "JavaScript"
);

developer.greet();
developer.code();


// Encapsulation with Private Property

class BankAccount {

    #balance = 0;

    deposit(amount) {
        this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount();

account.deposit(5000);

console.log(account.getBalance());


// Static Method

class MathHelper {

    static square(number) {
        return number * number;
    }
}

console.log(MathHelper.square(5));


// Getters and Setters

class User {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

let user = new User("Hasan");

console.log(user.name);

user.name = "Hasan Jim";

console.log(user.name);