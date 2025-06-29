// MongoDB Playground for PLP Assignment
use('plp_bookstore');

db.books.insertMany([
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    published_year: 2008,
    price: 30,
    in_stock: true,
    pages: 464,
    publisher: "Prentice Hall"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    published_year: 1999,
    price: 25,
    in_stock: true,
    pages: 352,
    publisher: "Addison-Wesley"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_year: 1960,
    price: 15,
    in_stock: false,
    pages: 281,
    publisher: "J.B. Lippincott & Co."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-help",
    published_year: 2018,
    price: 18,
    in_stock: true,
    pages: 320,
    publisher: "Penguin"
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Fiction",
    published_year: 1949,
    price: 12,
    in_stock: false,
    pages: 328,
    publisher: "Secker & Warburg"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    genre: "Self-help",
    published_year: 2016,
    price: 20,
    in_stock: true,
    pages: 304,
    publisher: "Grand Central Publishing"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    genre: "Programming",
    published_year: 2018,
    price: 22,
    in_stock: true,
    pages: 472,
    publisher: "No Starch Press"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    published_year: 1988,
    price: 10,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "Start With Why",
    author: "Simon Sinek",
    genre: "Business",
    published_year: 2009,
    price: 16,
    in_stock: true,
    pages: 256,
    publisher: "Portfolio"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    genre: "Psychology",
    published_year: 2011,
    price: 19,
    in_stock: false,
    pages: 499,
    publisher: "Farrar, Straus and Giroux"
  }
]);
