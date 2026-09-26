// Click Event

let clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", function() {
    console.log("Button clicked!");
});


// Mouseover Event

let title = document.getElementById("title");

title.addEventListener("mouseover", function() {
    console.log("Mouse is over the title.");
});


// Mouseout Event

title.addEventListener("mouseout", function() {
    console.log("Mouse left the title.");
});


// Input Event

let nameInput = document.getElementById("nameInput");
let output = document.getElementById("output");

nameInput.addEventListener("input", function() {
    output.textContent = "Hello, " + nameInput.value;
});


// Change Event

nameInput.addEventListener("change", function() {
    console.log("Input value changed.");
});


// Keyboard Event

nameInput.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});


// Form Submit Event

let form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;

    console.log("Email:", email);
    alert("Form submitted!");
});