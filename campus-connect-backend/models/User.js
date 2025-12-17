// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student','admin'], default: 'student' },
  branch: { type: String },
  semester: { type: Number },
  photo: { type: String }, // URL/path to uploaded photo
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
