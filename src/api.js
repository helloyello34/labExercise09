// /scr/api.js

const express = require("express");
const app = express();
const greeting = require('./greeting');

app.get("/greeting/:name", (req, res) => {
  // Fill in your code that:
  // 1. set's the status to 200
  // 2. and returns an object with the greeting

  //hint 'req.params.name'
  var result = greeting(req.params.name); 
  res.send({ greeting: result });
  //req.params.status = 200;
  //req.params.body.greeting = "Hello, Diana!";
});

module.exports = app;
