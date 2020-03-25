// Require Methods
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// Call the Express Method
const app = express();

// Call and allow use of installed software
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));

// Enable Express to use Pug
app.set('view engine', 'pug');


//Require the routes folder
const routes = require('./routes');
app.use(routes);


// 404 Error Handler
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });

// Also 404 Error Handler
app.use((error, req, res, next) => {
    res.locals.error = error;
    res.render('error')
});

// Start the Server
app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});