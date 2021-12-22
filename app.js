'use strict';

// eslint-disable-next-line import/no-unresolved
const express = require('express');

const app = express();
const PORT = '3000';
// Routes

app.get('/users', (req, res) => {
  // res.send(`Request received: ${req.method} - ${req.path}`);
  console.log(req);
  return res.status(200).json({
    message:"Hello Users"
  })
});



// Error handler
app.use((req, res, next) => {
  return res.status(404).json({
  message:"Not Found"
  })
});

try {
  app.listen(PORT, () => console.log(`Server started on port ${PORT} ...`));
} catch (error) {
  console.log("error")
}

module.exports = app;
