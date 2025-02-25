
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-lg font-semibold">
            Portfolio
          </a>
          <div className="hidden sm:flex space-x-8">
            <a href="#about" className="text-sm hover:text-primary transition-colors">
              À propos
            </a>
            <a href="#experience" className="text-sm hover:text-primary transition-colors">
              Expérience
            </a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">
              Compétences
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
