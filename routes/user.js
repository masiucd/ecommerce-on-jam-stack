const express = require('express');
const User = require('../models/User');

const router = express.Router();

// @ POST api/users
// @ create User
// @ public

router.post('/', async (req, res) => {
  const { name, email, skills, task } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      skills,
      task: req.task,
    });
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.send(500).json({ err: 'server error, status 500' });
  }
});

router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.send(500).json({ err: 'server error, status 500' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, email, skills } = req.body;
  const userFields = {};
  if (name) userFields.name = name;
  if (email) userFields.email = email;
  if (skills) userFields.skills = skills;
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ msg: 'No user' });

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );

    res.json(user);
  } catch (err) {
    res.send(500).json({ err: 'server error, status 500' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) return res.status(401).json({ msg: 'No user' });
    user = await User.findByIdAndRemove(req.params.id);
    res.json({ msg: 'User got Removed from the database!' });
  } catch (err) {
    res.send(500).json({ err: 'server error, status 500' });
  }
});

module.exports = router;
