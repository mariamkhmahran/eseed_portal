var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  name: {
    required: true,
    trim: true,
    type: String
  },
  email: {
    required: true,
    trim: true,
    type: String
  },
  password: String
});

var user = mongoose.model('User', userSchema, 'User');
