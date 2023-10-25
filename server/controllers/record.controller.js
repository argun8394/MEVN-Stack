"use strict";

// Call Models:
const Record = require("../models/record.model");

module.exports.Record = {
  list: async (req, res) => {
    const data = await Record.find();

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await Record.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await Record.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await Record.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      body: req.body,
      result: data, // update infos
      newData: await Record.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Record.deleteOne({ _id: req.params.id });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
