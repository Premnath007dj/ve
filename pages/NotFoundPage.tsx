import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-charcoal-bg text-slate-text">
      <h1 className="text-6xl font-bold text-saffron-yellow">404</h1>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Page Not Found</h2>
      <p className="text-lg mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link 
        to="/" 
        className="clip-parallelogram bg-saffron-yellow text-charcoal-bg font-bold py-3 px-10 rounded-sm hover:bg-opacity-90 transition-all transform hover:scale-105 text-lg"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
