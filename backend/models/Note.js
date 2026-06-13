const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  uploader:     { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject:      { type: String, required: true, trim: true },
  description:  { type: String, trim: true },
  price:        { type: Number, default: 0, min: 0 }, // 0 = free
  semester:     { type: Number, min: 1, max: 12 },
  branch:       { type: String, trim: true },
  filename:     { type: String, required: true },
  originalName: { type: String },
  mimeType:     { type: String },
  createdAt:    { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);