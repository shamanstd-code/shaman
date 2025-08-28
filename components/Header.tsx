import React, { useState, useEffect } from 'react';
import { DesignIcon } from './IconComponents';

interface HeaderProps {
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={onGoHome}
        >
            <DesignIcon className={`w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12`}/>
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-800' : 'text-slate-800 md:text-white'}`}>Fivr</span>
        </div>
      </div>
    </header>
  );
};

export default Header;