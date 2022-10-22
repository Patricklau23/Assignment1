/*File name:users.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 19 Oct 2022*/


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
