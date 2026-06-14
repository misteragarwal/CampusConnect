const express = require('express');
const User = require('../models/User');
const Note = require('../models/Note');

const router = express.Router();

// GET /api/stats — public site-wide stats for the homepage
router.get('/', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');

    const [activeStudents, notesShared, collegesRaw] = await Promise.all([
      User.countDocuments({ role: 'student' }),
      Note.countDocuments({}),
      User.distinct('college'),
    ]);

    const colleges = collegesRaw.filter((c) => c && c.trim() !== '').length;

    res.json({ activeStudents, notesShared, colleges });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;