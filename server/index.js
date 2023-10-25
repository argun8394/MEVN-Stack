"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
app.use(cors());

require("dotenv").config();

// const PORT = process.env.PORT || 5000;

app.use(express.json());

// Connect to MongoDB with Mongoose:
require("./configs/dbConnection");

// HomePage:
app.all("/", (req, res) => {
  res.send("WELCOME TO API");
});

// Routes:
app.use("/", require("./router/router"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
