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


router.post("/api/burgers/", function(req, res) {
  burger.create(
    req.body.burger_name,
    function(result) {
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', function(req, res) {
  burger.update(
    req.body.devoured,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

module.exports = router;