// Selecting Element by ID

let title = document.getElementById("title");

console.log(title);


// Selecting Element by Class

let description = document.querySelector(".description");

console.log(description);


// Changing Text

title.textContent = "JavaScript DOM";


description.textContent = "DOM allows JavaScript to control HTML elements.";


// Changing HTML

let box = document.getElementById("box");

box.innerHTML = "<strong>Updated using JavaScript!</strong>";


// Changing Style

title.style.color = "blue";
title.style.fontSize = "40px";


// Adding Event Listener

let button = document.getElementById("button");

button.addEventListener("click", function() {
    alert("Button clicked!");
});


// Creating a New Element

let newParagraph = document.createElement("p");

newParagraph.textContent = "This paragraph was created using JavaScript.";

document.body.appendChild(newParagraph);


// Adding a Class

box.classList.add("active");


// Removing a Class

box.classList.remove("active");


// Checking a Class

console.log(box.classList.contains("active"));