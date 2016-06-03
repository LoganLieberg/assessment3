var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var Hero = require('../models/heroschema');
var SuperPower = require('../models/superpowerschema');
var path = require('path');

router.get('/', function (req, res) {
  SuperPower.find({}, function (err, SuperPowers) {
    if (err) {
      res.sendStatus(500);
      return;
    }
    console.log(SuperPowers);
    res.send(SuperPowers);
});
});
router.post('/', function (req, res) {
  console.log(req.body);
  var hero = new Hero(req.body);
  hero.save(function (err) {
    if (err) {
      res.sendStatus(500);
      console.log(err);
      return;
    }
    console.log(hero);
    res.sendStatus(201);
  });
});

module.exports = router;
