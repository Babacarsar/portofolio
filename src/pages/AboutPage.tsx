
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import About from '@/components/sections/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <About />
      </main>
    </div>
  );
};

export default AboutPage;
