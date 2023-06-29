import React, { useState } from 'react';
import { firestore } from '../firebase';
import './Admin.css'
import Home from './Home';
import './Home.css';
const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firestore.collection('posts').add({
        title,
        content,
      });

      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error adding post: ', error);
    }
  };

  return (
    <div>
      <div className="Conatiner">
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
      </div>
      <Home/>
    </div>
  );
};

export default Admin;
