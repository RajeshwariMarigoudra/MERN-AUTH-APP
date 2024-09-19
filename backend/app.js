const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const protectedRoutes = require('./routes/protectedRoutes');
const blogRoutes = require('./routes/blogRoutes');

// Config
dotenv.config();
const app = express();

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON bodies

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', protectedRoutes);  // Use protected routes


app.use('/api', blogRoutes); // Prefix for blog routes


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
