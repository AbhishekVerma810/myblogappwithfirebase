import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';
import './Home.css';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const snapshot = await firestore.collection('posts').get();
      const fetchedPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(fetchedPosts);
    }
    fetchPosts();
  },[posts]);

  const handleRemovePost = async (postId) => {
    try {
      await firestore.collection('posts').doc(postId).delete();
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      alert('Post removed successfully');
    } catch (error) {
      console.error('Error removing post:', error);
      alert('Failed to remove post');
    }
  };

  return (
    <div>
      <div className='Container'>
        <h1>Blog App</h1>
        {posts.map((post) => (
          <div className='post' key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <button onClick={() => handleRemovePost(post.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

