/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5555/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Successful login
        const { redirectTo } = await response.json();

        console.log('Login successful!');
        console.log('Redirecting to:', redirectTo);

        // Redirect the user to the appropriate dashboard based on the role
        window.location.href = redirectTo;
      } else {
        // Unsuccessful login
        console.log('Login failed!');
        setError('Invalid email or password.'); // Set an appropriate error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('An unexpected error occurred.'); // Set an appropriate error message
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
