
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: "Accueil", path: "/" },
    { title: "À propos", path: "/about" },
    { title: "Expérience", path: "/experience" },
    { title: "Projets", path: "/projects" },
    { title: "Compétences", path: "/skills" },
    { title: "Certifications", path: "/certifications" },
    { title: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm dark:bg-background/70' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl font-bold bg-gradient-to-r from-primary to-blue-700 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Babacar Sar
          </motion.div>
        </Link>

        {/* Navigation sur desktop */}
        <nav className="hidden md:flex items-center space-x-2">
          <motion.div 
            className="flex space-x-1 mr-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <Link 
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary hover:bg-secondary'
                }`}
              >
                {link.title}
              </Link>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <ThemeToggle />
          </motion.div>
        </nav>

        {/* Menu mobile et bouton du thème */}
        <div className="flex items-center md:hidden space-x-2">
          <ThemeToggle />
          
          <Button 
            onClick={toggleMenu} 
            size="icon" 
            variant="ghost" 
            className="md:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 overflow-hidden"
          >
            <nav className="flex flex-col space-y-1 p-3 bg-card rounded-lg shadow-lg border border-border/50">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary hover:bg-secondary'
                  }`}
                  onClick={closeMenu}
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;
