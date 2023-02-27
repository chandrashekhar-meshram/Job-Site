const express = require('express');
const app = express();

const mongoose = require('mongoose');

const User = require('./models/users');

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
  User.find().then((data) => {
    res.status(201).json(data);
  });
});

app.listen(4000);
//console.log("Hi");