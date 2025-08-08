import React, { useState } from 'react';
import "../styles/Signup.css"; // Your existing styles
function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/api/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      alert('Signup successful!');
    } catch (error) {
      console.error(error);
      alert('Signup failed');
    }
  };

  return (
    <div className="auth-page">
      <video autoPlay muted loop playsInline id="bg-video">
  <source src="https://res.cloudinary.com/dlhf9klfj/video/upload/v1754670274/3577871-hd_1920_1080_25fps_ivjkzs.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      <div className="auth-overlay">
        <form onSubmit={handleSubmit} className="glass-card">
          <h2>Sign Up</h2>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
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
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
