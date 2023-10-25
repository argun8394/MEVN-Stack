"use strict";

const mongoose = require("mongoose");

const MONGODB =
  "mongodb+srv://argundoganali:LuocBPA0fxKZQlZ7@cluster0.pihu9hu.mongodb.net/";

mongoose
  .connect(MONGODB)
  .then(() => console.log(" * DB Connected * "), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((err) => console.log(" * DB Not Connected * ", err));
