// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg font-bold">Nature Frame MNM</h1>
      <div className="space-x-4">
        <a href="#home" className="text-white hover:text-gray-200">Home</a>
        <a href="#about" className="text-white hover:text-gray-200">About</a>
        <a href="#contact" className="text-white hover:text-gray-200">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;