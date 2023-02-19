const express = require('express');
const reqFilter = require('./middleware');
const app = express();

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
