const Book = require("../models/book");

module.exports = {
  //show all the books in the inventory

  showBooks: (req, res) => {
    //create dummy data
    const books = [
      {
        author: "Chinua Achebe",
        id: "1",
        title: "Things Fall Apart",
      },
      {
        author: "Hans Christian Andersen",
        title: "Fairy tales",
        id: "2",
      },
      {
        author: "Dante Alighieri",

        title: "The Divine Comedy",
        id: "3",
      },
    ];

    //All the below operations should be done using
    //book id

    //add books to inventory

    //remove books from inventory (count)

    //edit the count of the existing books

    //return the books array
    res.send(books);
  },
  //seed our data base
  seedBooks: (req, res) => {
    //create some books
    const books = [
      {
        author: "Chinua Achebe",
        id: "1",
        title: "Things Fall Apart",
      },
      {
        author: "Hans Christian Andersen",
        title: "Fairy tales",
        id: "2",
      },
      {
        author: "Dante Alighieri",

        title: "The Divine Comedy",
        id: "3",
      },
    ];
    //use the book model to insert/save to db
    console.log("hiii");
    for (book of books) {
      try {
        var newBook = new Book(book);
        newBook.save();
      } catch (err) {
        res.status(500).send(err);
      }
    }
    //seeded!
    res.send("Data base seeded!");
  },
  getBooks: async (req, res) => {
    console.log("hi");
    const books = await Book.find({});
    try {
      res.send(books);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
