import React from 'react';

const Hero: React.FC = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative text-center bg-gradient-to-br from-primary to-indigo-700 rounded-2xl shadow-2xl p-10 md:p-20 mb-12 overflow-hidden animate-fade-in-up">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Find the perfect freelance services for your business.
        </h1>
        <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto drop-shadow">
          Fivr is the world's largest marketplace for digital services. Get high-quality work done fast, and on budget.
        </p>
        <button
          onClick={scrollToServices}
          className="mt-8 bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-100 transform hover:scale-105 transition-all duration-300"
        >
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default Hero;