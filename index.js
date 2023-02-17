// how to make route(get type) using express js
// steps 1. import express, 2.execute express 3. make route with response, 4. make server

const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('<h1>This is Home page</h1>');
});

app.get('/about', (req, res) => {
  res.send(`
    <input placeholder='User Name' />
    <button>Click Me</button>
  `);
});

app.get('/help', (req, res) => {
  res.send([
    {
      name: 'shekhar',
      email: 'shekhar@test.com',
    },
    {
      name: 'sam',
      email: 'sam@test.com',
    },
  ]);
});

app.listen(5000);
