import React from 'react';

const Header = () => {
  return (
    <header className="py-20 text-center animate-fade-in">
      <h1 className="text-5xl font-bold text-softwhite mb-4">Quantum Pierre</h1>
      <p className="text-xl text-softwhite/80">Technical Product Manager & AI Researcher</p>
      <a
        href="https://x.com/quantumpierre"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6"
      >
        <img
          src="/Xlogo.png" // Path to the image in the `public` directory
          alt="X Logo"
          className="w-8 h-8 hover:opacity-80 transition-opacity"
        />
      </a>
    </header>
  );
};

export default Header;
