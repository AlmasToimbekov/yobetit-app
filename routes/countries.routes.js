const countries = require("../controllers/countries.controller.js");

var router = require("express").Router();

router.get("/getAll", countries.getAll);
router.get("/getByFullName", countries.getByFullName);
router.get("/searchByName", countries.searchByName);

module.exports = router