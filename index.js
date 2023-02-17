// how to make route(get type) using express js
// steps 1. import express, 2.execute express 3. make route with response, 4. make server

const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('This is Home page');
});

app.get('/about', (req, res) => {
  res.send('Hi, this is About Page.');
});

app.listen(5000);
