const computeSumOfSquares = (arr) => 
    arr.map(num => num ** 2).reduce((acc, curr) => acc + curr, 0);

// Example usage:
console.log(computeSumOfSquares([1, 2, 3])); // Output: 14


const printOddNumbersOnly = (arr) => {
    arr.filter(num => num % 2 !== 0).forEach(oddNum => console.log(oddNum));
};

// Example usage:
printOddNumbersOnly([1, 2, 3, 4, 5, 6]); // Output: 1 3 5



const printFibo = (n, a, b) => {
    let fibo = [a, b];

    while (fibo.length < n) {
        let next = fibo[fibo.length - 1] + fibo[fibo.length - 2];
        fibo.push(next);
    }

    console.log(fibo.slice(0, n).join(', '));
};

// Example usage:
printFibo(1, 0, 1);  // Output: "0"
printFibo(2, 0, 1);  // Output: "0, 1"
printFibo(3, 0, 1);  // Output: "0, 1, 1"
printFibo(6, 0, 1);  // Output: "0, 1, 1, 2, 3, 5"
printFibo(10, 0, 1); // Output: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34"



//----------------------------Destructuring assignment--------------------------------





let user = { name: "John", years: 30 };

// Destructuring assignment
let { name, years: age, isAdmin = false } = user;

alert(name);    // John
alert(age);     // 30
alert(isAdmin); // false




//--------------------- Array and its methods, and Object-------------------------------------


let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
  ];
  
  // Function to add a new book if it doesn't exist
  function addBook(title, author, ID) {
    // Check if the book already exists (by title, author, and ID)
    const bookExists = libraryBooks.some(book => book.title === title && book.author === author && book.ID === ID);
  
    if (!bookExists) {
      const newBook = { title, author, ID };
      libraryBooks.push(newBook);
      return newBook;
    } else {
      return `Book with ID ${ID} already exists!`;
    }
  }
  
  // Function to get all titles and sort them alphabetically
  function getTitles() {
    return libraryBooks
      .map(book => book.title) // Extract titles
      .sort(); // Sort alphabetically
  }
  
  // Function to find books by title keyword, sorted by ID
  function findBooks(keyword) {
    return libraryBooks
      .filter(book => book.title.toLowerCase().includes(keyword.toLowerCase())) // Find books by keyword
      .sort((a, b) => a.ID - b.ID); // Sort by ID
  }
  
  // Example usage
  console.log(addBook("Harry Potter", "J.K. Rowling", 1234)); // Add new book
  console.log(getTitles()); // Get sorted titles
  console.log(findBooks("The Road")); // Find books with "The Road" in the title



  //************************************Testing data.js *************************************************** */

  // Import functions from data.js
import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from './data.js';

// Test adding items
console.log(add_item({ id: 1, title: "Book One" }));  // Should return true
console.log(add_item({ id: 2, title: "Book Two" }));  // Should return true
console.log(add_item({ id: 1, title: "Duplicate Book" }));  // Should return false (duplicate ID)

// Test retrieving all items
console.log(get_items());  // Should display the added items

// Test updating the title of an item by ID
console.log(update_item_title_by_id(1, "Updated Book One"));  // Should return true
console.log(update_item_title_by_id(3, "Non-Existent Book"));  // Should return false (ID doesn't exist)

// Test getting the title of an item by ID
console.log(get_item_title_by_id(1));  // Should return "Updated Book One"
console.log(get_item_title_by_id(3));  // Should return null (ID doesn't exist)

// Test deleting an item by ID
console.log(delete_item_by_id(2));  // Should return true
console.log(delete_item_by_id(3));  // Should return false (ID doesn't exist)

// Test retrieving all items after deletion
console.log(get_items());  // Should display the remaining items

  
