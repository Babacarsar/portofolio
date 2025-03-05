
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import PageTransition from '@/components/layout/PageTransition';

const AboutPage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <About />
        <Skills />
      </main>
    </PageTransition>
  );
};

export default AboutPage;
