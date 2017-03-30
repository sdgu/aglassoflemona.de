var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gp', function(req, res, next) {
  res.render('gp');
});

router.get('/gp/', function(req, res, next) {
  res.render('gp');
});


module.exports = router;
