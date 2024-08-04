console.log("---------------------Day 7 Assignment--------------------");
// Activity 1 : Object Creation and Access

// Task 1: Create an object representing aa book with properties like title, author and year and log the obj
let book = {
    title: "Lazy Habits",
    author: "viral",
    year: 2009
}

console.log('\n--------------------------- Task 1:------------------------------\n');
console.log('Book Details : ', book);


// Task 2: Access and log the title and author properties of the book object
console.log('\n--------------------------- Task 2:------------------------------\n');

let book_title = book.title;
let book_author = book.author;
console.log('Book Title : ', book_title);

console.log('Book Author : ', book_author);

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author and log the result
console.log('\n--------------------------- Task 3:------------------------------\n');

book.showTitleAuthor = function () {
    return `Title is "${this.title}" and author is "${this.author}"`
}

console.log(book.showTitleAuthor());



// Task 4: Add a method to the book object that takes a parameter (year) and updates the book"s year property and then log the result

console.log('\n--------------------------- Task 4:------------------------------\n');

book.updateBookYear = function (year) {
    return this.year = year
}
book.updateBookYear(2000)
console.log(book);


// Activity 3:Nested Objects
// Task 5: Create a nested object of library with properties like name and book and log the result
console.log('\n--------------------------- Task 5:------------------------------\n');


let library = {
    name: "Central City Library",
    collection: [
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            publicationYear: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            publicationYear: 1949
        },
        {
            title: "Moby Dick",
            author: "Herman Melville",
            publicationYear: 1851
        },
    ]
}
console.log(library)

//Task 6 : Access and log the library and the titles of all the books in library
console.log('\n--------------------------- Task 6:------------------------------\n');


console.log('Library Name :', library.name);

library.collection.map((obj, index) => (
    console.log(obj.title)
))


//Activity 4 : The "this" keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string
//with the books title and year, and log the res
console.log('\n--------------------------- Task 7:------------------------------\n');

let bookProperties = {
    title: '30 Days challenge',
    author: 'viral',
    year: 2024,
    showTitleYear: function () {
        return `Title is "${this.title}" and year is "${this.year}"`
    }

}
console.log('Books Details : ', bookProperties.showTitleYear());

// Activity 5 : Object Iteration

// Task 8: Use a "for..in" loop to iterate over the properties of the book object and log each properties and its value
console.log('\n--------------------------- Task 8:------------------------------\n');



for (const key in bookProperties) {
    console.log(key, " :- ", bookProperties[key]);
}


//Task 9
console.log(Object.keys(bookProperties))
console.log(Object.values(bookProperties))