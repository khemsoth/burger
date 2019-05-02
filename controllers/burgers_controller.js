const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.put('/api/:id', function(req, res) {
  burger.update({
    devoured: req.body.devoured
  }, function(result) {
    if(result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  }
  )}
);
/*
router.post('/api/burger', function(req,res) {
  burger.create([
    'burger_name'
  ],
  [
    req.body.burger_name
  ], function(result) {
    res.json({ id: result.insertId })
  });
});*/

router.post("/api/burgers", function(req, res) {
  cat.create([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

module.exports = router;