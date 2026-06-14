const express = require('express');
const auth = require('../middleware/auth');
const Connection = require('../models/Connection');
const User = require('../models/User');

const router = express.Router();

// Helper: find any connection doc between two users (in either direction)
const findConnection = (a, b) => Connection.findOne({
  $or: [
    { requester: a, recipient: b },
    { requester: b, recipient: a },
  ],
});

// GET /api/connections/friends — list accepted connections (friends)
router.get('/friends', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const conns = await Connection.find({
      status: 'accepted',
      $or: [{ requester: req.user._id }, { recipient: req.user._id }],
    }).populate('requester recipient', 'name email college course branch year semester role');

    const friends = conns.map((c) => {
      const friend = String(c.requester._id) === String(req.user._id) ? c.recipient : c.requester;
      return { connectionId: c._id, ...friend.toObject() };
    });

    res.json(friends);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/connections/requests — incoming pending requests
router.get('/requests', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const conns = await Connection.find({
      recipient: req.user._id,
      status: 'pending',
    }).populate('requester', 'name email college course branch year semester role');

    res.json(conns.map((c) => ({
      _id: c._id,
      message: c.message,
      createdAt: c.createdAt,
      from: c.requester,
    })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/connections/sent — outgoing pending requests (to disable duplicate "Add" buttons)
router.get('/sent', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const conns = await Connection.find({
      requester: req.user._id,
      status: 'pending',
    });
    res.json(conns.map((c) => String(c.recipient)));
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/connections/status/:userId — connection status with a specific user
router.get('/status/:userId', auth, async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');
    const conn = await findConnection(req.user._id, req.params.userId);
    if (!conn) return res.json({ status: 'none' });

    if (conn.status === 'accepted') return res.json({ status: 'accepted', connectionId: conn._id });

    if (conn.status === 'pending') {
      const direction = String(conn.requester) === String(req.user._id) ? 'outgoing' : 'incoming';
      return res.json({ status: 'pending', direction, connectionId: conn._id });
    }

    res.json({ status: 'none' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/connections/request — send a connection request
router.post('/request', auth, async (req, res) => {
  try {
    const { recipientId, message } = req.body;
    if (!recipientId) return res.status(400).json({ message: 'recipientId is required' });
    if (String(recipientId) === String(req.user._id))
      return res.status(400).json({ message: "You can't connect with yourself" });

    const recipient = await User.findById(recipientId);
    if (!recipient) return res.status(404).json({ message: 'User not found' });

    let conn = await findConnection(req.user._id, recipientId);

    if (conn) {
      if (conn.status === 'accepted') return res.status(400).json({ message: 'Already connected' });
      if (conn.status === 'pending') return res.status(400).json({ message: 'Request already pending' });
      // was rejected — allow re-request by updating
      conn.requester = req.user._id;
      conn.recipient = recipientId;
      conn.status = 'pending';
      conn.message = message || '';
      conn.updatedAt = new Date();
      await conn.save();
      return res.status(201).json(conn);
    }

    conn = new Connection({
      requester: req.user._id,
      recipient: recipientId,
      message: message || '',
    });
    await conn.save();
    res.status(201).json(conn);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /api/connections/:id/accept
router.put('/:id/accept', auth, async (req, res) => {
  try {
    const conn = await Connection.findById(req.params.id);
    if (!conn) return res.status(404).json({ message: 'Request not found' });
    if (String(conn.recipient) !== String(req.user._id))
      return res.status(403).json({ message: 'Not authorized' });
    if (conn.status !== 'pending') return res.status(400).json({ message: 'Request already handled' });

    conn.status = 'accepted';
    conn.updatedAt = new Date();
    await conn.save();
    res.json(conn);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT /api/connections/:id/reject
router.put('/:id/reject', auth, async (req, res) => {
  try {
    const conn = await Connection.findById(req.params.id);
    if (!conn) return res.status(404).json({ message: 'Request not found' });
    if (String(conn.recipient) !== String(req.user._id))
      return res.status(403).json({ message: 'Not authorized' });
    if (conn.status !== 'pending') return res.status(400).json({ message: 'Request already handled' });

    conn.status = 'rejected';
    conn.updatedAt = new Date();
    await conn.save();
    res.json(conn);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /api/connections/:userId — unfriend (by other user's id) or cancel a sent request
router.delete('/:userId', auth, async (req, res) => {
  try {
    const conn = await findConnection(req.user._id, req.params.userId);
    if (!conn) return res.status(404).json({ message: 'Connection not found' });

    await conn.deleteOne();
    res.json({ message: 'Connection removed' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;