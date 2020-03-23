// Creates a server
const express = require('express');

// Creates a new application
const app = express();


const port = process.env.PORT || 3000;

// Tells express which template engine to use
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectRoutes = require('./routes/project');


app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/project', projectRoutes);

app.use('/static', express.static('public') );

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  console.log('404, page not found');
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
})

// Tells server to run on users local machine
app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});