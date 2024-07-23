console.log("---------------------Day 9 Assignment--------------------");


// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML elements by its ID and change its text content.
const text = document.getElementById("demo-text");
text.innerHTML = "ChaiAurCode"


// Task 2: Select an HTML element by its class and change its background color.
document.querySelector(".bg-change").style.backgroundColor = "#f1f1f8";


// Activity 2: Creating and Manipulating Elements
// Task 3: Create a new div element with some text content and append it to the body.
let divWithJs = document.createElement("div");

divWithJs.innerHTML = "<p>div With Js</p>";

document.body.appendChild(divWithJs);

// Task 4: Create a new li element and add it to an existing ul list.
let li = document.createElement("li");
li.innerHTML = "<li>NextJs</li>";
let ul = document.getElementById("ul");
ul.appendChild(li);



// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
document.querySelector(".divRemove").remove();

// Task 6: Remove the last child of a specific HTML element.
document.querySelector(".last-child").lastElementChild.remove();

// Activity 4: Modifying Attributes and Classes
// Task 7: Select an HTML element and change one of its attributes (e.g. src of an img tag).
document.getElementById("image").setAttribute("src", "vite.svg");


// Task 8: Add and remove a CSS class to/from an HTML element.
document.querySelector("#demo-text").style.removeProperty("background");
document.querySelector("#demo-text").style.setProperty("color", "red");


// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("btn").addEventListener("click", function () {
    document.getElementById("para").innerText = "Success!";
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
document.getElementById("btn").addEventListener("mouseover", function () {
    document.getElementById("btn").style.borderColor = "red";
});
