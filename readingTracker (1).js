// Weekly reading log: Each object tracks one reading entry
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];


// This function adds a new reading entry to the log.
// It takes the day, book title, and minutes read as input.
// Then it pushes that data into the readingLog array.
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; // create a new reading object
  readingLog.push(newEntry); // add it to the end of the log
}


// This function calculates the total minutes read over the week.
// It loops through the readingLog array and adds up all the minutes.
// Returns a number representing the total reading time.
function totalReadingMinutes(log) {
  let total = 0; // start at 0
  for (let entry of log) {
    total += entry.minutes; // add each entry's minutes to total
  }
  return total; // return the final total
}


// This function finds the most frequently read book.
// It counts how many times each book appears using an object.
// Returns the name of the most read book.
function mostReadBook(log) {
  const bookCounts = {}; // empty object to store how many times each book is read
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1; // first time this book shows up
    } else {
      bookCounts[entry.book]++; // already seen, add one more
    }
  }

  let maxBook = null; // track the book with the highest count
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book]; // update max values
    }
  }
  return maxBook;
}


// This function prints a daily summary of reading activity.
// It loops through the log and prints each entry in a readable format.
function printDailySummary(log) {
  for (let entry of log) {
    // print day, minutes, and book title
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}


// Suggestion for improvement:
// The function names are good, but we could rename `addReadBook` to `logReading`
// because it sounds more like recording something, which makes the code clearer.


// Example usage: This adds a new reading entry and prints everything
addReadBook("Saturday", "Dune", 50); // new test case
addReadBook("Sunday", "The Hobbit", 35); // test case added by student
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));
