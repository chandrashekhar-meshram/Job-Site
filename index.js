const express = require('express');
const app = express();

const mongoose = require('mongoose');

const User = require('./models/users');

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

  const data = new User({
    _id:mongoose.Types.ObjectId(),
    name:'tony',
    email:'tony@gmail.com'
  })

  data.save().then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });