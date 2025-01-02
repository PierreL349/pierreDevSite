import React from 'react';

const Header = () => {
  return (
    <header className="py-20 text-center animate-fade-in">
      <h1 className="text-5xl font-bold text-softwhite mb-4">Pierre Leconte</h1>
      <p className="text-xl text-softwhite/80">Technical Product Manager & AI Researcher</p>
      <a
        href="https://x.com/quantumpierre"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6"
        aria-label="Link to Pierre Leconte's X account"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-8 h-8 text-softwhite hover:text-softwhite/80 transition-colors"
        >
          <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.68 4.68 0 0 0 2.048-2.575 9.14 9.14 0 0 1-2.948 1.13 4.605 4.605 0 0 0-7.84 4.19A13.07 13.07 0 0 1 1.64 3.15a4.6 4.6 0 0 0 1.422 6.14 4.565 4.565 0 0 1-2.083-.575v.06a4.605 4.605 0 0 0 3.688 4.515 4.578 4.578 0 0 1-2.074.08 4.608 4.608 0 0 0 4.296 3.192 9.216 9.216 0 0 1-5.695 1.96c-.37 0-.735-.02-1.095-.065a13.02 13.02 0 0 0 7.065 2.066c8.48 0 13.12-7.02 13.12-13.12 0-.2 0-.395-.015-.59a9.45 9.45 0 0 0 2.305-2.4z" />
        </svg>
      </a>
    </header>
  );
};

export default Header;
