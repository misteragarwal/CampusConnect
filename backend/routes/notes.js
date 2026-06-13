const express = require('express');
const path = require('path');
const fs = require('fs');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const Note = require('../models/Note');

const router = express.Router();

// GET all notes (public) — with uploader name + college
router.get('/', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const notes = await Note.find()
      .populate('uploader', 'name college')
      .sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET notes uploaded by logged-in user (for profile page)
router.get('/my', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const notes = await Note.find({ uploader: req.user._id })
      .populate('uploader', 'name college')
      .sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET single note metadata
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id).populate('uploader', 'name college');
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST upload a note (auth required)
router.post('/', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'File is required' });

    const { subject, description, price, semester, branch } = req.body;
    if (!subject) return res.status(400).json({ message: 'Subject is required' });

    const note = new Note({
      uploader:     req.user._id,
      subject,
      description:  description || '',
      price:        price ? Number(price) : 0,
      semester:     semester ? Number(semester) : undefined,
      branch:       branch || req.user.branch || undefined,
      filename:     req.file.filename,
      originalName: req.file.originalname,
      mimeType:     req.file.mimetype,
    });
    await note.save();

    const populated = await note.populate('uploader', 'name college');
    res.status(201).json(populated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE note (only uploader can delete)
router.delete('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    if (String(note.uploader) !== String(req.user._id))
      return res.status(403).json({ message: 'Not authorized' });

    // Remove file from disk
    const filePath = path.join(__dirname, '..', process.env.UPLOAD_DIR || 'uploads', note.filename);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await note.deleteOne();
    res.json({ message: 'Note deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;