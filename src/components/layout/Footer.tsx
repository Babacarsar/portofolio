
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ChevronRight, MapPin, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const mainLinks = [
    { name: "À propos", path: "/about" },
    { name: "Expérience", path: "/experience" },
    { name: "Projets", path: "/projects" },
    { name: "Compétences", path: "/skills" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white hover:text-primary transition-colors">
              Babacar Sar
            </Link>
            <p className="mt-4 text-sm text-slate-300">
              Analyste Data & Intelligence Artificielle passionné par la transformation des données en insights stratégiques.
            </p>
            <div className="flex mt-6 space-x-4">
              <a 
                href="https://www.linkedin.com/in/babacar-sarr-a3888a247" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Babacarsar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:ba66bacar@gmail.com" 
                className="p-2 rounded-full bg-slate-800 hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm flex items-center group text-slate-300 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 text-primary group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Contactez-moi</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span>Paris, France</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>07 75 80 67 99</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>ba66bacar@gmail.com</span>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="font-semibold text-white text-lg mb-4">Intéressé?</h3>
            <p className="text-sm text-slate-300 mb-4">
              Téléchargez mon CV ou contactez-moi pour discuter de vos projets data.
            </p>
            <div className="flex flex-col space-y-3">
              <Button asChild variant="default" className="w-full">
                <Link to="/contact">Me contacter</Link>
              </Button>
              <Button asChild variant="outline" className="w-full border-slate-700 hover:bg-slate-800">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  Télécharger CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400">
            &copy; {currentYear} Babacar Sar - Tous droits réservés
          </p>
          <p className="text-xs text-slate-500 mt-2 md:mt-0">
            Construit avec React, Tailwind CSS et beaucoup d'enthousiasme
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
