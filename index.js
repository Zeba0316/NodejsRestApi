// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
require("dotenv").config();
const port = process.env.PORT;

// express app initailization
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("error in connecting to mongodb", err);
  });

//   routes
app.get("/",(req,res)=>{
    res.send("Server is running")
})
app.use("/health-records",router);

// listener
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

