// routes/clubs.js
const express = require('express');
const auth = require('../middleware/auth');
const Club = require('../models/Club');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const club = new Club({ name: req.body.name, description: req.body.description });
    await club.save();
    res.status(201).json(club);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' });}
});

router.get('/', async (req, res) => {
  try {
    const clubs = await Club.find().populate('members','name email');
    res.json(clubs);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' });}
});

// join club
router.post('/:id/join', auth, async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if(!club) return res.status(404).json({ message: 'Club not found' });
    if (!club.members.includes(req.user._id)) {
      club.members.push(req.user._id);
      await club.save();
    }
    res.json(club);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' });}
});

module.exports = router;
