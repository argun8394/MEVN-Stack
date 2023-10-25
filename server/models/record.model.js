"use strict";
const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema(
  {
    nameSurname: {
      type: String,
      trim: true,
      required: true,
    },
    company: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      //   unique: true,
      //   validate: (email) => email.includes("@") && email.includes("."),
    },
    phone: {
      type: String,
      trim: true,
      //   required: true,
    },
    website: {
      type: String,
      trim: true,
      //   required: true,
    },
    country: {
      type: String,
      trim: true,
      //   required: true,
    },
    city: {
      type: String,
      trim: true,
      //   required: true,
    },
  },
  { collection: "record", timestamps: true }
);

module.exports = mongoose.model("Record", RecordSchema);
