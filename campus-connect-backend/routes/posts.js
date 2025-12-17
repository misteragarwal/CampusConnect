// routes/posts.js
const express = require('express');
const auth = require('../middleware/auth');
const Post = require('../models/Post');

const router = express.Router();

router.post('/', auth, async (req, res) => {
  try {
    const post = new Post({ author: req.user._id, title: req.body.title, body: req.body.body });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error(err); res.status(500).json({ message: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('author','name email').sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) { console.error(err); res.status(500).json({ message: 'Server error' });}
});

module.exports = router;
