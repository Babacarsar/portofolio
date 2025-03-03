
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-lg font-semibold">
            Portfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-8">
            <Link to="/about" className="text-sm hover:text-primary transition-colors">
              À propos
            </Link>
            <Link to="/experience" className="text-sm hover:text-primary transition-colors">
              Expérience
            </Link>
            <Link to="/projects" className="text-sm hover:text-primary transition-colors">
              Projets
            </Link>
            <Link to="/certifications" className="text-sm hover:text-primary transition-colors">
              Certifications
            </Link>
            <Link to="/skills" className="text-sm hover:text-primary transition-colors">
              Compétences
            </Link>
            <Link to="/contact" className="text-sm hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden p-2 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-background/95 backdrop-blur-md shadow-md rounded-b-lg">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/about" className="text-sm hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                À propos
              </Link>
              <Link to="/experience" className="text-sm hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Expérience
              </Link>
              <Link to="/projects" className="text-sm hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Projets
              </Link>
              <Link to="/certifications" className="text-sm hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Certifications
              </Link>
              <Link to="/skills" className="text-sm hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Compétences
              </Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
