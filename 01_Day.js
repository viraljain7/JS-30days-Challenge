console.log("---------------------Day 1 Assignment--------------------");

// Activity 1: Variables Declaration

// Task 1: Declare a variable using var , assign it a number, and log the value to the console.
var num;
num = 17;

console.log("number : ", num);

// Declare a variable using let , assign it a string, and log the value to the console.
let str;
str = "JS with Chai Aur Code";

console.log("str : ", str);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const , assign it a boolean value, and log the value to the console.

const isVerified = true;
console.log("isVerified : ", isVerified);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let rollNo = 7;
let name = "Viral";
let isAdmin = false;
let arr = [1, "viral", true];
let obj = {
    username: "viraljain7",
    age: 22,
};
console.log("roll No : ", typeof rollNo);
console.log("name : ", typeof name);
console.log("isAdmin", typeof isAdmin);
console.log("arr : ", typeof arr);
console.log("obj", typeof obj);

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using let , assign it an initial value, reassign a new value, and log both values to the console.

let word = "initial value";
console.log("word : ", word);
word = "reassigning new value";
console.log("word : ", word);


// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error.
const constant = 10;
console.log("constant : ", constant);
// constant = 69; // error
console.log("constant : ", constant);

// Feature Request:
// 1 . Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.
function variableTypesConsoleLog(parameter) {
    console.log(parameter, typeof parameter);
}

variableTypesConsoleLog(45);
variableTypesConsoleLog("hello World");
variableTypesConsoleLog(true);
variableTypesConsoleLog(["hello", "world"]);
variableTypesConsoleLog({ name: "viraljain7", age: 22 });

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Demo for let
let virat = 99;
console.log("virat", virat);
virat = 100;
console.log("virat", virat);


// Demo for const
const mahi = 7;
console.log("mahi", mahi);
// mahi = 45;   // error
console.log("mahi", mahi);

