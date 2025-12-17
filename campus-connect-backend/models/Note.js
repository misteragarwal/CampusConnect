// models/Note.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  uploader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  filename: { type: String, required: true }, // stored filename
  originalName: { type: String },
  mimeType: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);
