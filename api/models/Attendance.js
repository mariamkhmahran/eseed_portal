var mongoose = require('mongoose');
require('./Employee');

var employeeSchema = mongoose.model('Employee').schema;

var attendanceSchema = mongoose.Schema({
  day: {
    required: true,
    type: Date
  },
  workingHrs: {
    required: true,
    type: Number
  },
  Employee: {
      type: employeeSchema,
      required: true
  },
  status: {
      enum: [
      'present',
      'absent',
      'sick leave',
      'day off'
      ]
    }
});

var user = mongoose.model('Attendance', attendanceSchema, 'Attendance');
