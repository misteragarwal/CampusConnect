// routes/users.js
const express = require('express');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const User = require('../models/User');

const router = express.Router();

// GET current user
router.get('/me', auth, (req, res) => {
  res.json(req.user);
});

// UPDATE profile (name, branch, semester) and optionally photo
router.put('/me', auth, upload.single('photo'), async (req, res) => {
  try {
    const { name, branch, semester } = req.body;
    const update = { name: name || req.user.name, branch: branch || req.user.branch, semester: semester || req.user.semester };
    if (req.file) update.photo = `/uploads/${req.file.filename}`;

    const user = await User.findByIdAndUpdate(req.user._id, update, { new: true }).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
