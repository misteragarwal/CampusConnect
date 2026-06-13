const express = require('express');
const auth = require('../middleware/auth');
const Accommodation = require('../models/Accommodation');

const router = express.Router();

// GET all (public)
router.get('/', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const list = await Accommodation.find()
      .populate('postedBy', 'name college')
      .sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET my listings (must be before /:id)
router.get('/my', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const list = await Accommodation.find({ postedBy: req.user._id })
      .populate('postedBy', 'name college')
      .sort({ createdAt: -1 });
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET single
router.get('/:id', async (req, res) => {
  try {
    const item = await Accommodation.findById(req.params.id).populate('postedBy', 'name college');
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST create (auth required)
router.post('/', auth, async (req, res) => {
  try {
    const { title, category, address, contact, rent, amenities, description, lat, lng } = req.body;
    if (!title || !category || !address || !contact || !rent) {
      return res.status(400).json({ message: 'Title, category, address, contact and rent are required' });
    }

    const item = new Accommodation({
      postedBy: req.user._id,
      title,
      category,
      address,
      contact,
      rent: Number(rent),
      amenities: Array.isArray(amenities) ? amenities : [],
      description: description || '',
      lat: lat !== undefined ? Number(lat) : undefined,
      lng: lng !== undefined ? Number(lng) : undefined,
    });
    await item.save();

    const populated = await item.populate('postedBy', 'name college');
    res.status(201).json(populated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE (only owner)
router.delete('/:id', auth, async (req, res) => {
  try {
    const item = await Accommodation.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    if (String(item.postedBy) !== String(req.user._id))
      return res.status(403).json({ message: 'Not authorized' });

    await item.deleteOne();
    res.json({ message: 'Deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;