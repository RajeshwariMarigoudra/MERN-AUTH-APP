import React, { useEffect, useState } from 'react';
import { fetchBlogs, deleteBlog } from '../api/api.jsx';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UserBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const loadBlogs = async () => {
    const data = await fetchBlogs();
    setBlogs(data);
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleCreateBlog = () => {
    navigate('/blogform'); // Redirect to the blog form page
  };

  const handleEditBlog = (id) => {
    navigate(`/blogform/${id}`); // Redirect to the blog form page for editing the blog
  };

  const handleDeleteBlog = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlog(id); // Make the DELETE request
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id)); // Update state to remove deleted blog
      } catch (error) {
        console.error('Error deleting the blog:', error);
      }
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>User Blog List</h2>
        <button className="btn btn-primary" onClick={handleCreateBlog}>
          Create New Blog
        </button>
      </div>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog._id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">
                  {blog.content.length > 100
                    ? blog.content.substring(0, 100) + '...'
                    : blog.content}
                </p>
                <button
                  className="btn btn-secondary mr-2"
                  onClick={() => handleEditBlog(blog._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteBlog(blog._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserBlogList;
