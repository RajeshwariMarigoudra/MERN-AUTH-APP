const Blog = require('../models/blogModel');

// Create a new blog
const createBlog = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  try {
    const newBlog = new Blog({
      title,
      content,
      user: req.user.id, // Assuming the user is authenticated and their ID is available
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog', error });
  }
};

// Get blogs by user
const getUserBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id }); // Fetch blogs created by the authenticated user
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};

// Get blog by ID
const getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching the blog', error });
  }
};

module.exports = {
  createBlog,
  getUserBlogs,
  getBlogById,
};
