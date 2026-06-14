const express = require('express');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const User = require('../models/User');

const router = express.Router();

// GET current user's full profile
router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE profile + optional photo
router.put('/me', auth, upload.single('photo'), async (req, res) => {
  try {
    const { name, phone, college, course, branch, year, semester } = req.body;

    const update = {};
    if (name)     update.name     = name;
    if (phone)    update.phone    = phone;
    if (college)  update.college  = college;
    if (course)   update.course   = course;
    if (branch)   update.branch   = branch;
    if (year)     update.year     = Number(year);
    if (semester) update.semester = Number(semester);
    if (req.file) update.photo    = `/uploads/${req.file.filename}`;

    const user = await User.findByIdAndUpdate(req.user._id, update, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET all users (for "All Users" / discover tab) — excludes self
router.get('/all', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const users = await User.find({ _id: { $ne: req.user._id } })
      .select('name email college course branch year semester role')
      .sort({ name: 1 });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;