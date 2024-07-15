console.log("---------------------Day 3 Assignment--------------------");

// Activity 1: If/Else Statement

// Task 1
let num = 9;

if (num < 0) {
    console.log('Number is negative');
}
else if (num > 0) {
    console.log('Number is postive');
}
else {
    console.log('Number is equal to Zero');
}

// Task 2
const age = 23;

if (age < 18) {
    console.log('You are not eligible for vote');
}
else {
    console.log('Hurray!!, You are eligible for vote');
}
// Activity 2: Nested If/Else Statement

// Task 3
let num1 = 20;
let num2 = 3;
let num3 = 33;

if (num1 > num2) {
    if (num1 > num3) {
        // num1 biggest
        console.log('Number 1 is biggest among all Number');
    } else {
        // num3 biggest
        console.log('Number 3 is biggest among all Number');

    }
}
else {
    if (num2 > num3) {
        // num2 biggest
        console.log('Number 2 is biggest among all Number');
    } else {
        // num3 biggest
        console.log('Number 3 is biggest among all Number');
    }
}

// Activity 3: Switch Case

// Task 4

const weekNumber = 3;

switch (weekNumber) {
    case 1:
        console.log('Today is Monday');
        break;

    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thursday');
        break;
    case 5:
        console.log('Today is Friday');
        break;

    case 6:
        console.log('Today is Saturday');
        break;
    case 7:
        console.log('Today is Sunday');
        break;

    default:
        console.log('WeekNumber is invalid');
        break;
}


// Task 5

let marks = 70;
switch (true) {
    case (marks >= 90 && marks <= 100):
        console.log('Grade A');
        break;
    case (marks >= 70 && marks <= 90):
        console.log('Grade B');
        break;
    case (marks >= 50 && marks <= 70):
        console.log('Grade C');
        break;
    case (marks >= 40 && marks <= 50):
        console.log('Grade D');
        break;
    case (marks >= 33 && marks <= 40):
        console.log('Grade E');
        break;
    case (marks < 33):
        console.log('Grade F');
        break;
    default:
        console.log('Invalid Marks');
}


// Activity 4 : Ternary operator
// Task 6

let num4 = 2004;
console.log((num4 % 2 == 0) ? `${num4} is even` : `${num4} is odd`)


// Activity 5 : Combining Conditions
// Task 7

let year = 2005;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year} is a leap year`);
        }
        else {
            console.log(`${year} is not a leap year`);
        }
    }
    else {
        console.log(`${year} is a leap year`);
    }
}
else {
    console.log(`${year} is not a leap year`);
}