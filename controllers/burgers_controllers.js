var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

var connection = require("../config/connection.js");


router.get("/", function (req, res) {
    res.render("index");
});

router.get("/api/burgers", function (req, res) {
    connection.query("SELECT * FROM burgers", function (err, data) {
        if (err) { throw err };
        res.send(data);
    })
});

router.post("/api/burgers", function (req, res) {
    connection.query("INSERT INTO burgers (burger_name, devoured) VALUES ('" + req.body.burger_name + "', 0)", function (err, data) {
        if (err) { throw err };
        res.json(data);
    })
});

router.put("/api/burgers/:burger_name", function (req, res) {
    connection.query("UPDATE burgers SET devoured = 1 WHERE burger_name = '" + req.params.burger_name + "'", function (err, data) {
        if (err) { throw err };
        res.json(data);
    })
});

module.exports = router;
