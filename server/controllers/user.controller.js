"use strict";

const User = require("../models/user.model");

module.exports.User = {
  list: async (req, res) => {
    const data = await User.find();

    res.status(200).send({
      error: false,
      count: data.length,
      result: data,
    });
  },

  create: async (req, res) => {
    const data = await User.create(req.body);

    res.status(201).send({
      error: false,
      body: req.body,
      result: data,
    });
  },

  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      result: data,
    });
  },

  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      body: req.body,
      result: data, // update infos
      newData: await User.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.id });

    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
