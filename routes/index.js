var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
  next()
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
 
});

/* GET about page. */
router.get('/about',function(req,res,next){
    res.render('about',{title: 'About'});
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
    res.render('projects', { title: 'Projects' });
  });
  
/* GET services page. */
router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services' });
  });
  
/* GET Contact us */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
  });

  /* GET Contact us */
router.get('/redirect', function(req, res, next) {
  res.render('redirect', { title: 'Redirect' });
});

module.exports = router;