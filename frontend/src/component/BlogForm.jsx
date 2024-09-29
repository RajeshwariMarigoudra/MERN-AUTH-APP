import React, { useEffect, useState } from 'react';
import { createBlog, updateBlog, fetchBlogById } from '../api/api.jsx';
import { useParams, useNavigate } from 'react-router-dom';

const BlogForm = () => {
    const { id } = useParams(); // Get the blog ID from the URL if editing
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            // If an ID is provided, fetch the blog data and pre-fill the form
            const loadBlog = async () => {
                const blog = await fetchBlogById(id);
                setTitle(blog.title);
                setContent(blog.content);
            };
            loadBlog();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                 // If an ID is present, update the blog
                await updateBlog(id, { title, content }); // Update existing blog
            } else {
                 // Else, create a new blog
                await createBlog({ title, content }); // Create a new blog
            }
              // Navigate back to the blogs list page after success
            navigate('/userblogs'); // Redirect to the blog list page after successful update or creation
        } catch (error) {
            console.error('Error submitting the blog:', error);
            // Handle error feedback to the user if needed
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Blog Title"
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Blog Content"
                required
            />
            <button type="submit">{id ? 'Update' : 'Create'} Blog</button>
        </form>
    );
};

export default BlogForm;
