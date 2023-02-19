// how to make route(get type) using express js
// steps 1. import express, 2.execute express 3. make route with response, 4. make server

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

//_ = req
app.get('', (_, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get('/about', (_, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

app.get('/help', (_, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});

app.listen(5000);
