var express = require('express');
var router = express.Router();
let gameover = require('../public/javascripts/game')
// const game = require('../public/javascripts/game')

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', {gameover});
});

module.exports = router;
