console.log("---------------------Day 4 Assignment--------------------");


// Activity 1 -> For Loop
// task 1 ->  numbers from 1 to 10 using for loop

for (let index = 1; index <= 10; index++) {
    console.log(' ', index);
}
// task 2 -> the multiplication table of 5


for (let index = 1; index <= 10; index++) {
    console.log(`5 X ${index} = ${5 * index} `);
}



// Activity 2 -> while loop

// task 3 -> sum of numbers from 1 to 10 using a while loop
let i = 1, sum = 0;
while (i <= 10) {
    sum += i;
    i++;
}
console.log('sum : ', sum);

// task 4 -> program to print numbers from 10 to 1 using whilw loop

let num = 10;
while (num >= 1) {
    console.log(' ', num);
    num--;
}


// Activity 3 -> Do while loop

// task 5 ->  print numbers from 1 to 5 using do...while loop

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= 5);

// task 6 -> calculate the factorial of a number using a do..while loop

let number = 3
let factorial = 1;
let index = 1

do {
    factorial *= index;
    index++
} while (index <= number);

console.log(`The factorial of ${number} is: ${factorial}`);



/*
Activity 4 -> Nested loops
task 7 -> program to print a pattern using nested for loop

*
**
***
****
*****

*/

let rows = 5
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '*'

    }
    console.log(pattern);
}



// Activity 5 -> Loop COntrol statements

// task 8 ->  print numbers from 1 to 10 , but skip the numbers 5 using the continue statement

for (let k = 1; k <= 10; k++) {
    if (k === 5) {
        continue;
    }
    console.log(k);
}


// task 9 ->  print numbers from 1 to 10 , but stop the loop when the numbers is 7 using the break statement

for (let j = 1; j <= 10; j++) {
    if (j == 7) {
        break;
    }
    console.log(j);
}