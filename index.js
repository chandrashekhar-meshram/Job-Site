const express = require('express');
const app = express();

const mongoose = require('mongoose');

const User = require('./users');

mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose
  .connect(
    'mongodb+srv://shekharonlineproject:shekharonlineproject@cluster0.8rwhj8f.mongodb.net/tutorial?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  User.find({}, function(err, users){
    if(err){
      console.log(err);
    }
    console.log(users);
  });
  