const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  postedBy:   { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title:      { type: String, required: true, trim: true },
  category:   { type: String, enum: ['PG', 'Flat', 'Home', 'Office'], required: true },
  address:    { type: String, required: true, trim: true },
  contact:    { type: String, required: true, trim: true },
  rent:       { type: Number, required: true, min: 0 }, // per month
  amenities:  [{ type: String, trim: true }],
  description:{ type: String, trim: true },
  lat:        { type: Number },
  lng:        { type: Number },
  createdAt:  { type: Date, default: Date.now }
});

module.exports = mongoose.model('Accommodation', accommodationSchema);