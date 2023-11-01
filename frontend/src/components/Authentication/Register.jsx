/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';

const Register = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!name || !address || !email || !phone || !secretKey || !password) {
      setError('Fill in all details to register');
      return;
    }

    try {
      const response = await fetch('http://localhost:5555/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address, email, phone, secretKey, password }),
      });

      if (response.ok) {
        // Successful registration
        console.log('Registration successful!');
        window.location.href = `http://localhost:5173/login`;
        // You may want to redirect the user or update the state to reflect the registration status
      } else {
        // Unsuccessful registration
        console.log('Registration failed!');
        setError('Registration Failed');
        // Handle error, show message, etc.
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Error During Registration');
    }
  };

  return (
    <div className="register-form">
      <div className="text-center mb-4">
        <h2>Register</h2>
      </div>
      <form>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />

        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />

        <label>Phone:</label>
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" />

        <label>Secret Key:</label>
        <input type="text" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} className="form-control" />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />

        {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

        <div className="text-right">
          <Button variant="primary" type="button" onClick={handleRegister}>
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Register;
