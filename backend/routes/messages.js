const express = require('express');
const auth = require('../middleware/auth');
const Connection = require('../models/Connection');
const Message = require('../models/Message');

const router = express.Router();

// Helper: are these two users connected (accepted)?
const areConnected = async (a, b) => {
  const conn = await Connection.findOne({
    status: 'accepted',
    $or: [
      { requester: a, recipient: b },
      { requester: b, recipient: a },
    ],
  });
  return !!conn;
};

// GET /api/messages/unread — list of users with unread messages to me
router.get('/unread', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const unread = await Message.find({
      recipient: req.user._id,
      read: false,
    }).distinct('sender');

    res.json(unread.map((id) => id.toString()));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/messages/:userId — conversation with a specific user
router.get('/:userId', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const otherId = req.params.userId;

    const connected = await areConnected(req.user._id, otherId);
    if (!connected) return res.status(403).json({ message: 'You must be connected to chat with this user' });

    const messages = await Message.find({
      $or: [
        { sender: req.user._id, recipient: otherId },
        { sender: otherId, recipient: req.user._id },
      ],
    }).sort({ createdAt: 1 });

    // Mark messages from the other user as read
    await Message.updateMany(
      { sender: otherId, recipient: req.user._id, read: false },
      { $set: { read: true } }
    );

    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/messages — send a message (only to connected friends)
router.post('/', auth, async (req, res) => {
  try {
    const { recipientId, text } = req.body;
    if (!recipientId || !text?.trim()) {
      return res.status(400).json({ message: 'recipientId and text are required' });
    }

    const connected = await areConnected(req.user._id, recipientId);
    if (!connected) return res.status(403).json({ message: 'You must be connected to message this user' });

    const message = new Message({
      sender: req.user._id,
      recipient: recipientId,
      text: text.trim(),
    });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;