// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <section id="about" className="p-8 text-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-4">At Nature Frame MNM, we connect you with green building materials and modular construction companies to promote sustainable building practices in the Czech Republic.</p>
      </section>
      <section id="contact" className="p-8 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-4">Have any questions? Reach out to us at <a href="mailto:info@natureframe.com" className="text-green-600 underline">info@natureframe.com</a>.</p>
      </section>
    </div>
  );
}

export default App;