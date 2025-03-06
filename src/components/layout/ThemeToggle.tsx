
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocalStorage } from '@/hooks/use-local-storage';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('dark-mode', false);
  const [mounted, setMounted] = useState(false);

  // Handle theme change
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', isDarkMode);
    }
  }, [isDarkMode, mounted]);

  // Set mounted to true after first render
  useEffect(() => {
    setMounted(true);
    
    // Check system preference on initial load if no preference is saved
    if (!localStorage.getItem('dark-mode')) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  }, [setIsDarkMode]);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDarkMode(!isDarkMode)}
      aria-label={isDarkMode ? 'Activer le mode clair' : 'Activer le mode sombre'}
      className="rounded-full bg-background/80 hover:bg-background border border-border p-1.5"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDarkMode ? 360 : 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-5 h-5"
      >
        {isDarkMode ? (
          <Moon className="absolute inset-0 text-yellow-300 h-5 w-5" />
        ) : (
          <Sun className="absolute inset-0 text-yellow-500 h-5 w-5" />
        )}
      </motion.div>
    </Button>
  );
};

export default ThemeToggle;
