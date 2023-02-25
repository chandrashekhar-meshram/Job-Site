const mongoose = require('mongoose');

const url =
  'mongodb+srv://shekharonlinework:M0oHSWoNwqnFWl4i@cluster0.1iqnhh7.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection done');
  })
  .catch((e) => console.log('error - ', e));

// schema
const channel = mongoose.Schema({
  id: Number,
  name: String,
});

//model
const model = mongoose.model('mydemos', channel);

const data = () => {
  model.find((err, data) => {
    console.log('data', data);
  });
};

const insert = () => {
  var ins = new model();
  ins._id = 3;
  ins.id = 4;
  ins.name = 'patel';

  ins.save((err, data) => {
    console.log('data inserted', data);
  });
};

insert();
// data();
