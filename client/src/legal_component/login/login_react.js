import React, { useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login_style.css';
import image_login from './login.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook correctly

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
  
      console.log(response.data);
      // If login is successful, navigate to main_react page
      if (response.data.success) {
        navigate('/main_react', { replace: true }); // Navigate to main_react and replace current entry in history
      } else {
        setError('Invalid username or password');
      }
  
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <img src={image_login} alt="Login Background" className="login-background" />
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">Login</h2>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="login-error">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="login-signup-link">New User? <NavLink to="/signup_react" className="login-signup-anchor">Sign up!</NavLink></p>
      </div>
    </div>
  );
}

export default Login;
