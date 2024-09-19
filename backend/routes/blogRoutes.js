const express = require('express');
const { createBlog, getUserBlogs, getBlogById } = require('../controllers/blogController');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/blog', authenticateToken, createBlog);
router.get('/blogs', authenticateToken, getUserBlogs);
router.get('/blogs/:id', authenticateToken, getBlogById); // Route for fetching blog by ID

module.exports = router;
