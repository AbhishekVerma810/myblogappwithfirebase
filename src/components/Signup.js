import React, { useState } from 'react';
import { useAuth } from '../AuthProvider';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [success, setSuccess] = useState('');

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(email, password);
      await signup(email, password).then((res) => {
        console.log('login successfully', res);
        setError('');
        setSuccess('Registration successful!');
        setEmail('');
        setPassword('');
        alert('Sign up successful');
        navigate('/login');
      }).catch((err) => {
        console.log('errr==>', err);
        setError('Failed to create an account');
        alert('Failed to create an account');
        setEmail('');
        setPassword('');
        setSuccess('');
      });
    } catch (error) {
      setError('Failed to create an account');
    }
  };

  return (
    <div>
      <div className='Container'>
        <h2>Sign Up</h2>
        {error && <div className="alert error">{error}</div>}
        {success && <div className="alert success">{success}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          <p  onClick={handleLoginClick}>
            Already have an account? Log in
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;

