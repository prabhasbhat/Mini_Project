// SignupPage.js

import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './SignupPage.css';

const SignupPage = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignup = async () => {
    setIsSubmitted(true);

    if (!username || !password || !name || !email || !mobileNumber) {
      setUsernameError(!username ? 'Username is required' : '');
      setPasswordError(!password ? 'Password is required' : '');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
          name,
          email,
          mobileNumber,
        }),
      });

      if (response.ok) {
        console.log('User successfully signed up!');

        // Fetch user information after signup
        const userResponse = await fetch(`http://localhost:5000/api/user/${username}`);
        if (userResponse.ok) {
          const userData = await userResponse.json();

          // Store user information in localStorage
          localStorage.setItem('userData', JSON.stringify(userData));
          console.log('User information fetched and stored:', userData);
        } else {
          console.error('Failed to fetch user information after signup');
        }

        // Redirect to the login page after successful signup
        history.push('/loginpage');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={isSubmitted && !username ? 'error' : ''}
        />
        <p className="error-message">{usernameError}</p>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={isSubmitted && !password ? 'error' : ''}
        />
        <p className="error-message">{passwordError}</p>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={isSubmitted && !name ? 'error' : ''}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={isSubmitted && !email ? 'error' : ''}
        />

        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className={isSubmitted && !mobileNumber ? 'error' : ''}
        />

        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>

        <p>If already signed up, <Link to="/loginpage">login here</Link>.</p>
      </form>
    </div>
  );
};

export default SignupPage;
