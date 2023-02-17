// how to make route(get type) using express js
// steps 1. import express, 2.execute express 3. make route with response, 4. make server

const express = require('express');
const app = express();

app.get('', (req, res) => {
  console.log("data from browser => ", req.query.name);
  //https://nodejspractice-tnrd--5000.local-credentialless.webcontainer.io/?name=shekhar
  //op - data from browser => shekhar   
  res.send('Welcome ', req.query.name);
});

app.get('/about', (req, res) => {
  res.send('Hi, this is About Page.');
});

app.get('/help', (req, res) => {
  res.send('Welcome, this Help page.');
});

app.listen(5000);
