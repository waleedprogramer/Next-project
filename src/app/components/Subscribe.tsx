"use client"

import React, { useState } from 'react';

function Subscribe() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please fill out this field.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('One or more fields have an error. Please check and try again.');
    } else {
      setError('');
      // Handle subscription logic here
      alert('Subscribed successfully!');
    }
  };

  return (
    <>
    <section className="subscribe-section">
      <div>
      <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
      <p>Whether you are a beginner or a seasoned fitness enthusiast</p>
      </div>
      <form onSubmit={handleSubmit} className="subscribe-form">
        <div className='error'>
        <h1>Enter your email</h1>
      {error && <p className="error-message">{error}</p>}
      </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="subscribe-input"
          />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </div>
       
      </form>
    </section>
    </>
  );
};

export default Subscribe;
