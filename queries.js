// queries.js – PLP MongoDB Assignment (Week 1)

// ✅ Task 2: Basic CRUD Operations

// a) Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });

// b) Find books published after a certain year (e.g., 2010)
db.books.find({ published_year: { $gt: 2010 } });

// c) Find books by a specific author (e.g., "Cal Newport")
db.books.find({ author: "Cal Newport" });

// d) Update the price of a specific book (e.g., "Deep Work")
db.books.updateOne(
  { title: "Deep Work" },
  { $set: { price: 20 } }
);

// e) Delete a book by its title (e.g., "The Alchemist")
db.books.deleteOne({ title: "The Alchemist" });


// ✅ Task 3: Advanced Queries

// a) Find books that are in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 }
});

// b) Use projection to return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// c) Sort books by price in ascending order
db.books.find().sort({ price: 1 });

// d) Sort books by price in descending order
db.books.find().sort({ price: -1 });

// e) Pagination – First page (limit 5)
db.books.find().limit(5);

// f) Pagination – Second page (skip 5, limit 5)
db.books.find().skip(5).limit(5);


// ✅ Task 4: Aggregation Pipeline

// a) Calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", average_price: { $avg: "$price" } } }
]);

// b) Find the author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// c) Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $substr: [{ $subtract: ["$published_year", { $mod: ["$published_year", 10] }] }, 0, 4] },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);


// ✅ Task 5: Indexing

// a) Create an index on the 'title' field
db.books.createIndex({ title: 1 });

// b) Create a compound index on 'author' and 'published_year'
db.books.createIndex({ author: 1, published_year: -1 });

//
