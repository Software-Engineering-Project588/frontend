import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './index.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = () => {
    // Retrieve all users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || {};

    const user = users[username];
    if (user) {
      if (user.password === password) {
        localStorage.setItem('loggedInUser', username);
        history.push("/");
      } else {
        setError("Invalid password.");
      }
    } else {
      setError("User not found.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
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
      <button onClick={handleLogin}>Login</button>
      <p className="register-link">
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
