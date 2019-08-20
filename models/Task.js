const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  vip: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Task', taskSchema);
