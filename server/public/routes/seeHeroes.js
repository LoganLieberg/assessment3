var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');
var Hero = require('../models/heroschema');
var path = require('path');

router.get('/', function (req, res) {
  Hero.find({}, function (err, heroes) {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    }
    console.log(heroes);
res.send(heroes);
});
});
// router.post('/', function (req, res) {
//   var hero = new Pet(req.body);
//   pet.save(function (err) {
//     if (err) {
//       res.sendStatus(500);
//       console.log(err);
//       return;
//     }
//
//     res.sendStatus(201);
//   });
// });

module.exports = router;
