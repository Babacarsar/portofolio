
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronRight, Download } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

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

  return (
    <footer className="bg-card text-muted-foreground pt-12 pb-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <p className="mt-3 text-sm">
              Analyste Data & Intelligence Artificielle passionné par la transformation des données en insights stratégiques.
            </p>
            <div className="flex mt-4 space-x-3">
              <a 
                href="https://www.linkedin.com/in/babacar-sarr-a3888a247" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://github.com/Babacarsar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="mailto:ba66bacar@gmail.com" 
                className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-foreground mb-4">Navigation</h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm flex items-center hover:text-primary transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Paris, France</li>
              <li>07 75 80 67 99</li>
              <li>ba66bacar@gmail.com</li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-medium text-foreground mb-4">Documents</h3>
            <p className="text-sm mb-4">
              Téléchargez mon CV complet pour découvrir mon parcours professionnel en détail.
            </p>
            <Button asChild variant="outline" size="sm" className="group">
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
          </div>
        </div>
        
        <Separator />
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <p className="text-xs">
            &copy; {currentYear} Babacar Sar - Tous droits réservés
          </p>
          <p className="text-xs mt-2 md:mt-0">
            Construit avec React, Tailwind CSS et beaucoup d'enthousiasme
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
