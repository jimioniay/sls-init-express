'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');

const app = express();

// Routes

app.get('/users', (req, res) => {
  // res.send(`Request received: ${req.method} - ${req.path}`);
  console.log(req);
  return res.status(200).json({
    message:"Hello Users"
  })
});

app.get('/*', (req, res) => {
  res.send(`Request received: ${req.method} - ${req.path}`);
});


// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});

module.exports = app;