const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error('please enter a real email');
      }
    },
  },
  skills: [String],
  task: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }],
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', userSchema);
