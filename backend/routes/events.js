// routes/events.js
const express = require('express');
const auth = require('../middleware/auth');
const Event = require('../models/Event');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const event = new Event({ title: req.body.title, description: req.body.description, date: req.body.date, createdBy: req.user._id });
    await event.save();
    res.status(201).json(event);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' });}
});

router.get('/', async (req, res) => {
  try {
    const events = await Event.find().populate('createdBy','name email').sort({ date: 1 });
    res.json(events);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' });}
});

module.exports = router;
