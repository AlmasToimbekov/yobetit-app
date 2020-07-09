const countries = require("../controllers/countries.controller.js");

var router = require("express").Router();

router.get("/name", countries.getByName);

module.exports = router