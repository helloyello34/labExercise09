// /scr/api.js

const express = require("express");
const app = express();
const greeting = require('./greeting');

app.get("/greeting/:name", (req, res) => {
  // Fill in your code that:
  // 1. set's the status to 200
  // 2. and returns an object with the greeting
  
  // hint 'req.params.name'
  // console.log(req);
  res.status = 201;
  if(req.params.name === "_") {
	res.sendStatus(res.status);
  } else {
	var result = greeting(req.params.name);
	res.send({ greeting: result });
  }
});

module.exports = app;
