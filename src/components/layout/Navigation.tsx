
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
    // Empêcher le défilement du corps lorsque le menu est ouvert
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { to: "/about", label: "À propos" },
    { to: "/experience", label: "Expérience" },
    { to: "/projects", label: "Projets" },
    { to: "/certifications", label: "Certifications" },
    { to: "/skills", label: "Compétences" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-lg font-semibold">
              Portfolio
            </Link>
            <div className="hidden sm:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="text-sm hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              className="sm:hidden p-2 text-foreground focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Menu mobile"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Menu mobile plein écran */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-[100] sm:hidden mobile-menu transition-transform duration-300 flex flex-col",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-[-100%]"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="text-xl font-semibold" onClick={closeMobileMenu}>
            Portfolio
          </Link>
          <button
            className="p-2 text-foreground focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Fermer le menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-lg font-medium py-3 border-b border-border/30 hover:text-primary transition-colors"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
