// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const noteRoutes = require('./routes/notes');
const eventRoutes = require('./routes/events');
const clubRoutes = require('./routes/clubs');

const app = express();

// connect DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// Make uploaded files accessible
app.use('/uploads', express.static(path.join(__dirname, process.env.UPLOAD_DIR || 'uploads')));

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/clubs', clubRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
