
// Require Express
const express = require('express');

// Create a Router Instance
const router = express.Router();

// Require JSON file with all of the project data
const {data} = require('../data/data.json');

// Redirect to Index page
router.get('/', (req, res) => {
    res.redirect('index')
  });

// Render the Index Page
router.get('/index', (req, res) => {
  const projects = data["projects"];
  res.render('index', { projects } );
});

// Render the About Page
router.get('/about', (req, res) => {
  res.render('about');
  res.app.locals = data.projects;
});

router.get('/projects/:id', (req, res) => {
  // Add data as an object that contains data to be passed to the Pug template
  const projects = data["projects"];
  const id = req.params.id;
  res.render('projects', {id, projects});
});

module.exports = router;