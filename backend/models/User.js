const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  role:     { type: String, enum: ['student', 'admin'], default: 'student' },
  phone:    { type: String, trim: true },
  college:  { type: String, trim: true },
  course:   { type: String, trim: true },
  branch:   { type: String, trim: true },
  year:     { type: Number, min: 1, max: 6 },
  semester: { type: Number, min: 1, max: 12 },
  photo:    { type: String },
  createdAt:{ type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);