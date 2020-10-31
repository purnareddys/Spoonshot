const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

//cors========================================
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connect to database=========================
mongoose
  .connect(
    "mongodb://purna:purna@cluster0-shard-00-00.8mzd5.mongodb.net:27017,cluster0-shard-00-01.8mzd5.mongodb.net:27017,cluster0-shard-00-02.8mzd5.mongodb.net:27017/cluster0?ssl=true&replicaSet=atlas-lcpzs6-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("hi");
    app.listen(port, () => {
      console.log("Server is running on", port);
    });
  })
  .catch((err) => {
    console.log("Something Wrong Happend", err);
  });
//set the routes===============================
app.use(require("./app/routes"));

//start our server==============================
// app.listen(port, () => {
// });
