// import React, { useEffect, useState } from 'react';
// import { fetchBlogs, deleteBlog } from '../api/api.jsx';
// import BlogForm from './BlogForm.jsx';

// const AdminBlogList = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [editingBlog, setEditingBlog] = useState(null);

//     const loadBlogs = async () => {
//         const data = await fetchBlogs();
//         setBlogs(data);
//     };

//     useEffect(() => {
//         loadBlogs();
//     }, []);

//     const handleDelete = async (id) => {
//         await deleteBlog(id);
//         loadBlogs();
//     };

//     const handleEdit = (blog) => {
//         setEditingBlog(blog);
//     };

//     return (
//         <div>
//             <h2>Admin Blog List</h2>
//             <BlogForm blog={editingBlog} onSuccess={() => { 
//                 setEditingBlog(null); 
//                 loadBlogs(); 
//             }} />
//             <ul>
//                 {blogs.map(blog => (
//                     <li key={blog._id}>
//                         <h3>{blog.title}</h3>
//                         <p>{blog.content}</p>
//                         <button onClick={() => handleEdit(blog)}>Edit</button>
//                         <button onClick={() => handleDelete(blog._id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default AdminBlogList;
