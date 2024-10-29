import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css'; // Ensure you import the CSS file

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

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if (users[username]) {
      setError("Username already exists.");
      return;
    }

    users[username] = { password };
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration successful!");
    history.push("/login");
  };

  return (
    <div className='register-main'>
    <div className='register-container'>
      <h2 className='register-title'>Register</h2>
      {error && <p className='register-error'>{error}</p>}
      <input
        className='register-input'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='register-input'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className='register-input'
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className='register-button' onClick={handleRegister}>Register</button>
    </div>
    </div>
  );
};

export default RegisterPage;
