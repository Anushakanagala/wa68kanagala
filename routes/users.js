var express = require('express');
var router = express.Router();
var count = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  count++
  res.send('User accesses are:'+count);
});

module.exports = router;
