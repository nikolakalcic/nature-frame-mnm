// src/App.js
import React from 'react';

function App() {
  return (
    <div className="bg-nature min-h-screen text-white">
      <header>
        <h1 className="text-4xl text-center p-8">Nature Frame MNM</h1>
        <nav className="flex justify-center space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="p-6 text-center">
        <section id="home" className="mt-8">
          <h2 className="text-2xl font-semibold">Welcome to Nature Frame MNM</h2>
          <p className="mt-2">We are your trusted marketplace for green building materials and modular homes in the Czech Republic.</p>
        </section>

        <section id="about" className="mt-8">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-2">Coming soon...</p>
        </section>

        <section id="contact" className="mt-8">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-2">
            For inquiries, feel free to reach out to us at <a href="mailto:info@natureframe.com" className="underline">info@natureframe.com</a>.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center mt-8">
        <p>&copy; 2024 Nature Frame MNM. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;