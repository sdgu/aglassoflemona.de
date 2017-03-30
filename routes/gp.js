var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gp', function(req, res, next) {
  res.render('gp');
});

module.exports = router;
