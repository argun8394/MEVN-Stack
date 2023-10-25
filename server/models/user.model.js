"use strict";

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      //   unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,

      //   set: (password) => passwordEncrypt(password),
    },

    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: (email) => email.includes("@") && email.includes("."),
    },
  },
  { collection: "users", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("User", UserSchema);
