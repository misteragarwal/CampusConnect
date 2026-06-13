const express = require('express');
const path = require('path');
const fs = require('fs');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');
const Listing = require('../models/Listing');

const router = express.Router();

// GET all listings (public)
router.get('/', async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const listings = await Listing.find()
      .populate('seller', 'name college')
      .sort({ createdAt: -1 });
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET my listings (auth required) — MUST be before /:id
router.get('/my', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const listings = await Listing.find({ seller: req.user._id })
      .populate('seller', 'name college')
      .sort({ createdAt: -1 });
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET single listing
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id).populate('seller', 'name college email phone');
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST create listing (auth required, optional image)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
    if (!title || !price || !category) {
      return res.status(400).json({ message: 'Title, price and category are required' });
    }

    const listing = new Listing({
      seller: req.user._id,
      title,
      description: description || '',
      price: Number(price),
      category,
      image: req.file ? req.file.filename : undefined,
    });
    await listing.save();

    const populated = await listing.populate('seller', 'name college');
    res.status(201).json(populated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE listing (only seller)
router.delete('/:id', auth, async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ message: 'Listing not found' });
    if (String(listing.seller) !== String(req.user._id))
      return res.status(403).json({ message: 'Not authorized' });

    if (listing.image) {
      const filePath = path.join(__dirname, '..', process.env.UPLOAD_DIR || 'uploads', listing.image);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await listing.deleteOne();
    res.json({ message: 'Listing deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;