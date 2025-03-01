
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <About />
        <Skills />
      </main>
    </div>
  );
};

export default AboutPage;
