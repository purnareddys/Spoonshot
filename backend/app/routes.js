// const express = require("express");
// const router = express.Router();

// //export the router
// module.exports = router;

// //controllers
// const mainController = require("./controllers/main.controller");
// const booksController = require("./controllers/books.controller");
// //define the routes
// router.get("/", mainController.showHome);
// router.get("/books", booksController.showBooks);

// //seed the database

// router.post("/books/seed", booksController.seedBooks);
// router.get("/books/find", booksController.getBooks);

const express = require("express");
const bookModel = require("./models/book");
const app = express();

app.get("/books", async (req, res) => {
  console.log("Hii");
  const books = await bookModel.find({});
  console.log(books);
  try {
    res.send(books);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/books/add", (req, res) => {
  const { id, title, author, subtitle, image } = req.body;
  console.log(id, title, author, subtitle, image);
  const book = {
    id,
    title,
    author,
    subtitle,
    image,
  };
  const newBook = new bookModel(book);
  newBook.save();
  res.send("Added your book Successfully");
});
app.put("/books/remove", (req, res) => {
  console.log("hiiiiiii");
  const { title } = req.body;
  bookModel
    .deleteOne({ title: title }, { justOne: true })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  res.send("SuccessFully deleted the book");
});
app.post("/books/seed", (req, res) => {
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
    var newBook = new bookModel(book);
    newBook.save();
  }
  //seeded!
  res.send("Data base seeded!");
});

module.exports = app;
