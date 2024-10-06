// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port=process.env.PORT;

// express app initailization
const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// listener
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
