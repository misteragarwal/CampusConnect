const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  seller:      { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title:       { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  price:       { type: Number, required: true, min: 0 },
  category:    { type: String, required: true, trim: true },
  image:       { type: String }, // filename in /uploads
  createdAt:   { type: Date, default: Date.now }
});

module.exports = mongoose.model('Listing', listingSchema);