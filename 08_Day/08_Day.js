console.log("---------------------Day 8 Assignment--------------------");

// Activity 1: Template Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

console.log('\n--------------------------- Task 1:------------------------------\n');

const fname = "viral";
const age = 21;

console.log(`Hello my fname is ${fname}, I am ${age} years old`);


// Task 2: Create a multi-line string using template literals and log it to the console.
console.log('\n--------------------------- Task 2:------------------------------\n');

const multiLineString = `Create a multi-line string using template 
literals and log it to the console`;
console.log(multiLineString);


// Activity 2: Destructuring

// Task 3:  Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
console.log('\n--------------------------- Task 3:------------------------------\n');
let arr = [1, 2, 3, 4]

const [num1, num2] = arr
console.log(num1, num2);

const book = {
    title: "js mastery",
    author: "viral jain",
    date: "22 june 2020"
}

// Task 4 :  Use object destructuring to extract the title and author from a book object and log them to the console.
console.log('\n--------------------------- Task 4:------------------------------\n');

const { title, author } = book

console.log('Book title : ', title);
console.log('Book author : ', author);

// Activity 3: Spread and Rest Operators

// Task 5 :  Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
console.log('\n--------------------------- Task 5:------------------------------\n');

const existingArray = [1, 2, 3, 4, 5];

let newArr = [...existingArray, 5, 6, 7]
console.log(newArr);

// Task 6 :  Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
console.log('\n--------------------------- Task 6:------------------------------\n');

function sum(...numbers) {
    return numbers.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
}

const result = sum(1, 2, 3, 4, 5);
console.log(result); // 15


// Activity 4: Default Parameters

// Task 7 :Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.


console.log('\n--------------------------- Task 7:------------------------------\n');

const product = (num1, num2 = 1) => {
    return num1 * num2;
}

console.log('product with default value : ', product(9));
console.log('product without default value : ', product(9, 3));


// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
console.log('\n--------------------------- Task 8:------------------------------\n');

let username = "viraljain7";
let rollNo = 30;
let propName = "rollNo";

let student = {
    username,
    rollNo,
    sayHello() {
        console.log("Hello, " + this.name);
    }
};
console.log(student);


// Task 9 :  Create an object with computed property names based on variables and log the object to the console.
console.log('\n--------------------------- Task 9:------------------------------\n');

const propName1 = "firstName";
const propName2 = "lastName";
const propName3 = "age";

const person2 = {
    [propName1]: "viral",
    [propName2]: "jain",
    [propName3]: 30,
};

console.log(person2);



