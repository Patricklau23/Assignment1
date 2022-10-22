/*File name:index.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 19 Oct 2022*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;


// var express = require('express');
// var router = express.Router();

// let indexController = require('../controllers/index');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Home' });
//   });
  
  
//   /* GET home page. */
//   router.get('/home', function(req, res, next) {
//     res.render('index', { title: 'Home' });
//   });
  
  
  
//   /* GET About Me page. */
//   router.get('/about', function(req, res, next) {
//     res.render('about', { title: 'About' });
//   });
  
  
  
//   /* GET Projects page. */
//   router.get('/projects', function(req, res, next) {
//     res.render('projects', { title: 'Projects' });
//   });
  
  
  
//   /* GET services page. */
//   router.get('/services', function(req, res, next) {
//     res.render('services', { title: 'Services' });
//   });
  
  
//   /* GET Contact us */
//   router.get('/contact', function(req, res, next) {
//     res.render('contact', { title: 'Contact' });
//   });
  
//     /* GET Login */
//     router.get('/contact', function(req, res, next) {
//         res.render('login', { title: 'Login' });
//       });
//   module.exports = router;
  