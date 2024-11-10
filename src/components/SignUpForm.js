// src/components/SignUpForm.js
import React, { useState } from 'react';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Here you would handle the email submission (e.g., save to a database or send via email service)
      console.log(`Email submitted: ${email}`);
      setSubmitted(true);
    }
  };

  return (
    <div className="p-8 text-center">
      {!submitted ? (
        <>
          <h2 className="text-2xl font-semibold text-gray-800">Join our early access list!</h2>
          <p className="text-gray-600 mt-4">Be the first to know when we launch our green building materials marketplace.</p>
          <form onSubmit={handleSubmit} className="mt-6">
            <input
              type="email"
              className="p-2 border rounded"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="ml-2 bg-green-600 text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </form>
        </>
      ) : (
        <p className="text-green-600 font-semibold">Thank you for signing up!</p>
      )}
    </div>
  );
};

export default SignUpForm;