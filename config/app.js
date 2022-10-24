/*File name:config/app.js
Student name: Pak Tak Lau 
Student ID: 301224147   
Date: 19 Oct 2022*/

// installed 3rd party packages
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let cors = require('cors');

// modules for authentication
let session = require('express-session');
let passport = require('passport');

let passportJWT = require('passport-jwt');
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;

let flash = require('connect-flash');

// database setup
let mongoose = require('mongoose');
let DB = require('./db');

//routes setup
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let booksRouter = require('../routes/book');

// point mongoose to the DB URI - local and global 
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});


let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express  -e

//other packages 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

//setup express session
//cookie only store session ID
// User login ->
//  save the user information in the session store (mongo) on the server side and generate the session ID ->
//  store the user session ID in the browser's cookie -> 
//  User Login -> see if the session ID in the cookie and the server side is matching or not -> 
//  if they are the same, the user information will be returned, and if they are different, the user will not be allowed to enter the page.
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));

// initialize flash
app.use(flash());

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// passport user configuration

// create a User Model Instance
let userModel = require('../models/user');
let User = userModel.User;

// implement a User Authentication Strategy
passport.use(User.createStrategy());

// serialize and deserialize the User info
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = DB.Secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      return done(err, false);
    });
});

passport.use(strategy);

//routing
app.use('/', indexRouter);
app.use('/book-list', booksRouter);
app.use('/users',usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});

module.exports = app;
