import React, { useState } from 'react';
import "../styles/Login.css"; // Your existing styles
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      alert('Login successful!');
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <div className="auth-page">
      <video autoPlay muted loop playsInline id="bg-video">
  <source src="https://res.cloudinary.com/dlhf9klfj/video/upload/v1752512094/bg-video_mgiuja.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <div className="auth-overlay">
        <form onSubmit={handleSubmit} className="glass-card">
          <h2>Login</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">Login</button>
          <div className="forgot-password-container">
  <Link to="/reset-password" className="forgot-password-link">
    Forgot Password?
  </Link>
</div>
        </form>
        
      </div>
    </div>
  );
}

export default Login;
