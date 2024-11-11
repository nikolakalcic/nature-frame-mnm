import React from 'react';
import './index.css'; // Import the custom styles

// Functional Component
const App = () => {
  return (
    <div className="bg-nature min-h-screen text-white">
      <header className="bg-green-700 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Nature Frame MNM</h1>
        <nav className="flex justify-center space-x-6 mt-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="p-6">
        <section id="home" className="mt-8 bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Welcome to Nature Frame MNM</h2>
          <p className="mt-2 text-gray-700">We are your trusted marketplace for green building materials and modular homes in the Czech Republic.</p>
        </section>

        <section id="about" className="mt-8 bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-2 text-gray-700">Coming soon...</p>
        </section>

        <section id="contact" className="mt-8 bg-white bg-opacity-60 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-2 text-gray-700">For inquiries, feel free to reach out to us at <a href="mailto:info@natureframe.com" className="text-green-700 underline">info@natureframe.com</a>.</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; 2024 Nature Frame MNM. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;