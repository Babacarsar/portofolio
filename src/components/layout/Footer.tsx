
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronRight, Download, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const mainLinks = [
    { name: "À propos", path: "/about" },
    { name: "Expérience", path: "/experience" },
    { name: "Projets", path: "/projects" },
    { name: "Compétences", path: "/skills" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      icon: <Linkedin size={18} />, 
      url: "https://www.linkedin.com/in/babacar-sarr-a3888a247",
      ariaLabel: "LinkedIn"
    },
    { 
      name: "GitHub", 
      icon: <Github size={18} />, 
      url: "https://github.com/Babacarsar",
      ariaLabel: "GitHub"
    },
    { 
      name: "Email", 
      icon: <Mail size={18} />, 
      url: "mailto:ba66bacar@gmail.com",
      ariaLabel: "Email"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-card text-muted-foreground pt-12 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-xl font-bold gradient-text hover:opacity-90 transition-opacity">
              Portfolio
            </Link>
            <p className="mt-3 text-sm">
              Analyste Data & Intelligence Artificielle passionné par la transformation des données en insights stratégiques.
            </p>
            <motion.div 
              className="flex mt-4 space-x-3"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={item}
                  className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors hover-lift"
                  aria-label={link.ariaLabel}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [-5, 0, 5, 0],
                    transition: { duration: 0.3 } 
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-medium text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {mainLinks.map((link, index) => (
                <motion.li 
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
                >
                  <Link 
                    to={link.path} 
                    className="text-sm flex items-center hover:text-primary transition-colors group"
                  >
                    <ChevronRight className="h-3 w-3 mr-1 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="hover:text-primary transition-colors"
              >
                Paris, France
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="hover:text-primary transition-colors"
              >
                07 75 80 67 99
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="hover:text-primary transition-colors"
              >
                ba66bacar@gmail.com
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-medium text-foreground mb-4">Documents</h3>
            <p className="text-sm mb-4">
              Téléchargez mon CV complet pour découvrir mon parcours professionnel en détail.
            </p>
            <Button asChild variant="outline" size="sm" className="group hover-glow">
              <a 
                href={import.meta.env.BASE_URL + 'cv.pdf'} 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <span>Télécharger mon CV</span>
                <Download className="w-3 h-3 ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
        
        <Separator className="my-8 opacity-30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-xs">
            &copy; {currentYear} Babacar Sar - Tous droits réservés
          </p>
          <motion.p 
            className="text-xs mt-2 md:mt-0 flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span>Construit avec React, Tailwind CSS et beaucoup d'enthousiasme</span>
            <span className="inline-block animate-pulse-subtle text-primary">❤</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
