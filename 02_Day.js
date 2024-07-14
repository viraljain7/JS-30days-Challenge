console.log("---------------------Day 2 Assignment--------------------");

// Activity 1: Arithmetic Operations
const num1 = 25;
const num2 = 5;

// Task 1
console.log('Sum of two numbers is: ', num1 + num2);

// Task 2
console.log('Subtraction of two numbers is: ', num1 - num2);

// Task 3
console.log('Multiplication of two numbers is: ', num1 * num2);


// Task 4
console.log('Division of two numbers is: ', num1 / num2);


// Task 5
console.log('Remainder of two numbers is: ', num1 % num2);


// Activity 2: Assignment operators


// Task 6
let sum = 0;
sum += num1;
sum += num2;

console.log('Sum of two numbers is: ', sum);



// Task 7
let total = 0
total += num1;
total -= num2;
console.log('Subtraction of two numbers is: ', total);


// Activity 3: Comparison Operators

// Task 8
console.log(`${num1} > ${num2} (greater than): ${num1 > num2}`); // true
console.log(`${num1} < ${num2} (less than): ${num1 < num2}`); // false

// Task 9
console.log(`${num1} >= ${num2}  (greater than or equal to): ${num1 >= num2}`); // true
console.log(`${num1} <= ${num2}  (less than or equal to): ${num1 <= num2}`); // false

// Task 10
let num3 = "25";
console.log(`${num1} == ${num3}  (less than or equal to): ${num1 == num3}`); // true
console.log(`${num1} === ${num3}  (less than or equal to): ${num1 === num3}`); // false


// Activity 4: Logical Operators

// Task 11
console.log(`Logical AND: (${num1} >= ${num2}) && (${num1} < ${num2}): ${num1 >= num2 && num1 < num2}`); // true

// Task 12
console.log(`Logical OR: (${num1} >= ${num2}) ||(${num1} < ${num2}): ${num1 >= num2 || num1 < num2}`); // true

// Task 13
console.log(`Logical NOT: !(${num1} >= ${num2}) : ${!(num1 >= num2)}`); // true

// Activity 5: Ternary Operator

// Task 14
console.log("Activity 5: Ternary Operator");
let number = -15;
let isPositive = number >= 0 ? "Positive" : "Negative";
console.log(`${number} is a ${isPositive} Number`); // -15 is a Negative Number


// Feature Request

// Request Task 1
const firstInput = 45
const secondInput = 34

console.log(firstInput + secondInput);
console.log(firstInput - secondInput);
console.log(firstInput * secondInput);
console.log(firstInput / secondInput);
console.log(firstInput % secondInput);

// Request Task 2
console.log(firstInput && secondInput);
console.log(firstInput || secondInput);
console.log(!(firstInput > secondInput));

// Request Task 3
let isPlus = firstInput >= 0 ? "Positive" : "Negative";
console.log(`${firstInput} is a ${isPlus} Number`);
