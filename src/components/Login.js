// Login.js
import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';
import './Login.css';
import {useNavigate } from 'react-router-dom';
import Admin from './Admin';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      console.log('login successfully');
      setEmail('');
      setPassword('');
      alert('login successfully');
      navigate('/admin', {replace: true});
    } catch (error) {
      setError('Failed to log in');
      alert('credential error');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <div className='Container'>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;



