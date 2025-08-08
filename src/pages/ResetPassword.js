import React, { useState } from 'react';
import '../styles/ResetPassword.css'; // Make sure this path matches your folder structure

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    // You'd send the email to your backend endpoint here
    fetch('http://127.0.0.1:8000/api/reset-password/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) setMessage(data.error);
        else setMessage('Reset link sent to your email.');
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="reset-container">
      <div className="reset-card">
        <h2>Reset Password</h2>
        <p>Enter your email and we'll send you a reset link.</p>
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Send Reset Link</button>
        </form>
        {message && <p className="reset-message">{message}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
