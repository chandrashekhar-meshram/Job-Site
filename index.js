const express = require('express');
const app = express();

const reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send('Please provide age');
  } else if (req.query.age < 18) {
    resp.send('You are too younger to access this page');
  } else {
    next();
  }
};

//app.use(reqFilter);

app.get('/', (req, resp) => {
  resp.send('Welcome to Home page');
});

app.get('/users', (req, resp) => {
  resp.send('Welcome to users page');
});

app.get('/about', reqFilter, (req, resp) => {
  resp.send('Welcome to about page');
});

app.listen(5000);
