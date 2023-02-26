const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.set('strictQuery', true);

mongoose
  .connect(
    'mongodb+srv://shekharonlineproject:shekharonlineproject@cluster0.8rwhj8f.mongodb.net/tutorial?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.warn('db connected');
  })
.catch((e) => {
  console.log('DB error ', e);
});
