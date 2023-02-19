// how to make route(get type) using express js
// steps 1. import express, 2.execute express 3. make route with response, 4. make server

const express = require('express');
const app = express();

app.get('/', (req, resp) => {
  resp.send('Welcome to Home page');
});

app.get('/users', (req, resp) => {
  resp.send('Wlcome to users page');
});

app.listen(5000);
