
import { useEffect } from 'react';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import { Helmet } from 'react-helmet';

const Index = () => {
  useEffect(() => {
    // Log pour confirmer le chargement de la page
    console.log('Page d\'accueil chargée correctement');
    
    // Animation au défilement
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

    document.querySelectorAll('.animate-on-scroll, .staggered-item').forEach(element => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Portfolio | Accueil</title>
        <meta name="description" content="Portfolio Data Analyst & IA - Page d'accueil" />
      </Helmet>
      <Navigation />
      <main className="flex-grow bg-gradient-to-b from-background to-background/50">
        <Hero />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
