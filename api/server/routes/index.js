var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/server', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

router.get('/api', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/api.html'));
});

module.exports = router;
