const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://test:test2021@cluster0.u5dbz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

module.exports = connection;