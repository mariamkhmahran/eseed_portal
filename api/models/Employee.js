var mongoose = require('mongoose');

var employeeSchema = mongoose.Schema({
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
  mobile: Number,
  hireDate: Date
});

var user = mongoose.model('Employee', employeeSchema, 'Employee');
