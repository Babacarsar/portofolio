
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Footer from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
