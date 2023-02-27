const express = require('express');
const app = express();

const mongoose = require('mongoose');

const User = require('./models/users');

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose.connect(
  'mongodb+srv://shekharonlineproject:shekharonlineproject@cluster0.8rwhj8f.mongodb.net/tutorial?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get('/users', function(req, res) {
  User.find().select('email').then((data) => {
    res.status(201).json(data);
  });
});

//2nd parameter will be middleware
app.post('/user', jsonParser, function(req, res) {
  res.end(req.body.name);
})
app.listen(4000);
//console.log("Hi");