const express = require('express');
const Task = require('../models/Task');
const User = require('../models/User');

const router = express.Router();

// @ POST api/tasks
// @ create task
// @ public

router.post('/', async (req, res) => {
  const { message, completed, vip } = req.body;

  try {
    const newTask = new Task({
      message,
      completed,
      vip,
      // user: req.body.user,
    });
    await newTask.save();
    res.json(newTask);
  } catch (err) {
    res.send(500).json({ err: 'server error, status 500' });
  }
});

router.get('/', async (req, res) => {
  try {
    const task = await Task.find();
    res.json(task);
  } catch (err) {
    res.send(500).json({ err: 'server error, status 500' });
  }
});

router.put('/:id', async (req, res) => {
  const { message, completed, vip } = req.body;
  const updatedField = {};
  if (message) updatedField.message = message;
  if (completed) updatedField.completed = completed;
  if (vip) updatedField.vip = vip;

  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'No task' });

    task = await Task.findByIdAndUpdate(
      req.params.id,
      { $set: updatedField },
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.send(500).json({ err: 'server error, status 500' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.json({ msg: 'No task with this ID' });
    await Task.findByIdAndRemove(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (err) {
    res.send(500).json({ err: 'server error, status 500' });
  }
});

module.exports = router;
