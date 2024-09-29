import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/auth'; // Base URL for API
const API_URL = 'http://localhost:5000/api'; // Update with your actual backend URL

// Function to handle user login
export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error during login', error);
    throw error.response.data; // Re-throw error for the component to handle
  }
};

// Function to handle user registration
export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error during registration', error);
    throw error.response.data; // Re-throw error for the component to handle
  }
};

// handle API requests for the CRUD operations.
export const fetchBlogs = async () => {
  try {
      // Get token from localStorage
      const token = localStorage.getItem('token');

      if (!token) {
          throw new Error('No token found. Please login again.');
      }

      // Make the API request with Authorization header
      const response = await axios.get(`${API_URL}/blogs`, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });

      return response.data; // Return blog data
  } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
  }
};


// Get token from local storage
const getToken = () => localStorage.getItem('token');

export const createBlog = async (blogData) => {
    const token = getToken();
    if (!token) throw new Error('No token found. Please login.');

    const response = await axios.post(`${API_URL}/blog`, blogData, {
        headers: {
            Authorization: `Bearer ${token}`, // Send token in header
        },
    });
    return response.data;
};

export const fetchBlogById = async (id) => {
    const token = getToken();
    if (!token) throw new Error('No token found. Please login.');

    const response = await axios.get(`${API_URL}/blogs/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`, // Send token in header
        },
    });
    return response.data;
};


export const updateBlog = async (id, blogData) => {
  const response = await axios.put(`${API_URL}/blogs/${id}`, blogData, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // Include token for updating blog
      }
  });
  return response.data;
};


// Delete a blog by ID
export const deleteBlog = async (id) => {
    await axios.delete(`${API_URL}/blogs/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Include token for authentication
        }
    });
};

