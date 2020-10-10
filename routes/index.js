var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',active:"active"});
});

/* GET about page. */
router.get('/*-about', function(req, res, next) {
  res.render('about', { title: 'About',active:"active" });
});

/* GET portfolio page. */
router.get('/*-portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio',active:"active" });
});

module.exports = router;
