import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleRegister = () => {
    if (!username || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Retrieve all users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
      setError("Username already exists.");
      return;
    }

    // Add new user to the users object and save it
    users[username] = { password };
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful!");
    history.push("/login");
  };

  return (
    <div className='register-container'>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className='register-error' onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
