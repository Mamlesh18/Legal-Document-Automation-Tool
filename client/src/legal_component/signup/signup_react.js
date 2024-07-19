import React, { useState } from "react";
import axios from "axios";
import './signup_react.css'; // Assuming you have your CSS file ready
import image_signup from './signup.png'; // Assuming you have your login image

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signup", {
       username,
        password
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <img src={image_signup} alt="Login Background" className="login-background" />
        <form className="login-form" onSubmit={handleSignup}>
          <h2 className="login-title">Signup</h2>
          <input 
            type="text" 
            className="login-input" 
            placeholder="Username" 
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            className="login-input" 
            placeholder="Password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit" className="login-button">Signup</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Signup;
