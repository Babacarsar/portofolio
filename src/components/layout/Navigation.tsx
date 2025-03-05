
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un changement de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationLinks = [
    { name: "À propos", path: "/about" },
    { name: "Expérience", path: "/experience" },
    { name: "Projets", path: "/projects" },
    { name: "Certifications", path: "/certifications" },
    { name: "Compétences", path: "/skills" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/90 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-lg font-semibold flex items-center">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded mr-2">BS</span>
            <span className="hidden sm:inline">Portfolio</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-1">
            {navigationLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-all",
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.name}
              </Link>
            ))}
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
        <div 
          className={cn(
            "sm:hidden fixed inset-x-0 top-16 transition-all duration-300 ease-in-out transform bg-background/95 backdrop-blur-md shadow-md border-b border-border z-40",
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="flex flex-col py-2">
            {navigationLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={cn(
                  "flex items-center px-4 py-3 text-sm font-medium border-l-2 transition-all",
                  isActive(link.path)
                    ? "border-primary text-primary bg-primary/5"
                    : "border-transparent text-foreground/80 hover:text-primary hover:bg-primary/5 hover:border-primary/30"
                )}
              >
                <ChevronDown className={cn(
                  "h-4 w-4 mr-2 transition-transform",
                  isActive(link.path) ? "rotate-[-90deg] text-primary" : "rotate-0"
                )} />
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
