// routes/notes.js
const express = require('express');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const Note = require('../models/Note');

const router = express.Router();

// upload a note (pdf/image/doc)
router.post('/', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'File required' });
    const note = new Note({
      uploader: req.user._id,
      title: req.body.title || req.file.originalname,
      description: req.body.description || '',
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimeType: req.file.mimetype
    });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// list notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().populate('uploader', 'name email').sort({ createdAt: -1 });
    res.json(notes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// download or get note metadata
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id).populate('uploader', 'name email');
    if (!note) return res.status(404).json({ message: 'Note not found' });
    res.json(note);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
