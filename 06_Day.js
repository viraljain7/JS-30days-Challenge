console.log("---------------------Day 6 Assignment--------------------");


// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

console.log('Task : 1');

let arr = [1, 2, 3, 4, 5]
console.log(arr);


// Task 2: Access the first and last elements of the array and log them to the console.
console.log('\n--------Task : 2--------');

console.log('First : ', arr[0]);
console.log('Last : ', arr[4]);


// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
console.log('\n--------Task : 3--------');


arr.push(99);
console.log("updated array after push method : ", arr);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
console.log('\n--------Task : 4--------');

arr.pop()
console.log("updated array after pop method : ", arr);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log('\n--------Task : 5--------');

arr.shift()
console.log("updated array after shift method : ", arr);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
console.log('\n--------Task : 6--------');

arr.unshift(1)
console.log("updated array after unshift method : ", arr);


// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
console.log('\n--------Task : 7--------');

let newArr = arr.map((value) => 2 * value)
console.log("new array after map method : ", newArr);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
console.log('\n--------Task : 8--------');

let newEvenArr = arr.filter((value) => value % 2 == 0)
console.log("new array after filter method : ", newEvenArr);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
console.log('\n--------Task : 9--------');

let sumArr = arr.reduce((value, acc) => acc += value)
console.log("sum of new array after reduce method : ", sumArr);


// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log('\n--------Task : 10--------');


for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(`arr[${index}] : ${element}`);
}


// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log('\n--------Task : 11--------');

arr.forEach((element, index) => {
    console.log(`arr[${index}] : ${element}`);
});


// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
console.log('\n--------Task : 12--------');


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('matrix : ', matrix);



// Task 13: Access and log a specific element from the two-dimensional array.
console.log('\n--------Task : 13--------');


let specificElement = matrix[1][2];

console.log(`Element at row 1, column 2: ${specificElement}`);


