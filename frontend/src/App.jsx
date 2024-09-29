import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './component/Login.jsx'; // Fixed the path to components folder
import Register from './component/Register.jsx'; // Fixed the path to components folder
// import AdminBlogList from './component/AdminBlogList.jsx'; // Fixed the path to components folder
import UserBlogList from './component/UserBlogList.jsx'; // Fixed the path to components folder
import './App.css';
import BlogForm from './component/BlogForm.jsx';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> {/* Link to Home */}
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          {/* <Link to="/admin">Admin</Link> */}
        </nav>
        <div>
          <h1>Blog Platform</h1>
          <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/admin" element={<AdminBlogList />} /> */}
            <Route path="/userblogs" element={<UserBlogList />} />
            <Route path="/blogform" element={<BlogForm />} />
            <Route path="/blogform/:id" element={<BlogForm />} /> {/* Edit blog route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
