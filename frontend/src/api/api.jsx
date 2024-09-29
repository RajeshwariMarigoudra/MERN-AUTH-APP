import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Base URL for API

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
