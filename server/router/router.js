"use strict";

const router = require("express").Router();

const { User } = require("../controllers/user.controller");

const { Record } = require("../controllers/record.controller");

router.route("/user").get(User.list).post(User.create);

router.route("/user/:id").get(User.read).put(User.update).delete(User.delete);

router.route("/record").get(Record.list).post(Record.create);

router
  .route("/record/:id")
  .get(Record.read)
  .put(Record.update)
  .delete(Record.delete);

module.exports = router;
