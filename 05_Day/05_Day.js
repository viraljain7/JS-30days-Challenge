console.log("---------------------Day 5 Assignment--------------------");

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEven(number) {
    if (number % 2 == 0) console.log('number is even');
    else console.log('number is odd');
}

isEven(8);

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
    return num * num;
}

let res = square(8)
console.log('square of 8 is ', res);

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function findMax(num1, num2) {
    if (num1 > num2) console.log('Number 1 is greater than number 2');
    else console.log('Number 2 is greater than number 1');
}

findMax(12, 9)

// Task 4: Write a function expression to concatenate two strings and return the result.
function addStr(str1, str2) {
    return str1 + str2;
}
console.log(addStr("hello", " world"));

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (num1, num2) => {
    return num1 + num2;
}
console.log("sum :: ", sum(10, 5));


/*
Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
*/
let check = (str, char) => {
    return str.includes(char)
}

let result = check("viral", "L");
console.log(result);

/*
Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
*/

let multiply = (num1, num2 = 9) => {
    return num1 * num2;
}
console.log('multiplication of 7 X 8 is ', multiply(7, 8));

/*
Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
*/

let greeting = (name, age = 18) => {
    return `hi!!, ${name} your age is ${age}`
}
console.log(greeting("viral", 22));

/*
Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
*/
function square(num) {
    return num * num;
}
let cube = (fn, num) => {
    let res = fn(num) * num;
    return res;
}

let outcome = cube(square, 3);
console.log(outcome);


/*
Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
*/
function double(num1) {
    return num1 * 2;
}
function triple(num1) {
    return (double(num1) * num1);
}

let myFun = (fn1, fn2, value) => {
    let resFn1 = fn1(value);
    let resFn2 = fn2(resFn1);
    return resFn2;
}

let myFunResult = myFun(double, triple, 2)
console.log(myFunResult);




