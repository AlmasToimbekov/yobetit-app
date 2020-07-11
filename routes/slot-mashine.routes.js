const slots = require("../controllers/slot-mashine.controller.js");

var router = require("express").Router();

router.get("/makeSpin", slots.makeSpin);

module.exports = router