// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="p-8 text-center" id="home">
      <h2 className="text-2xl font-semibold text-gray-800">Welcome to Nature Frame MNM</h2>
      <p className="text-gray-600 mt-4">Your marketplace for green building materials in the Czech Republic.</p>
      <SignUpForm />
    </div>
  );
};

export default Home;