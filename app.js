// Access all the third party packages
let express = require('express');
let indexRouter = require('./routes/index');
let logger = require('morgan');
let path = require('path');
let cookieParser = require('cookie-parser');
const { get } = require('jquery');

//create new express app
let app = express();

//Middleware
//view engine setup for ejs
app.set('view engine','ejs'); 
app.set('views', path.join(__dirname, 'views'));

//use express app functions
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//use everything under public folder & node modules folder. 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'node_modules')));

//use the indexRouter 
app.use('/', indexRouter);

//get cookies Parser
app.use(cookieParser());
app.get('/', function (req, res) {
  // req cookies that have not been signed
  console.log('Cookies: ', req.cookies)

  // req cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

//Listen to port 3000
app.listen(3000);

//exports the module for further use
module.exports = app;
