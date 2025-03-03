
import { useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import { Helmet } from 'react-helmet';

const Index = () => {
  useEffect(() => {
    // Ajout d'un log pour confirmer le chargement de la page
    console.log('Page d\'accueil chargée correctement');
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Portfolio | Accueil</title>
        <meta name="description" content="Portfolio Data Analyst & IA - Page d'accueil" />
      </Helmet>
      <Navigation />
      <main className="bg-gradient-to-b from-background to-background/50">
        <Hero />
      </main>
      <footer className="py-4 text-center text-sm text-muted-foreground bg-background">
        <p>© {new Date().getFullYear()} - Portfolio Data Analyst & IA - Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default Index;
