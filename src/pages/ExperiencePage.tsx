
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/layout/Footer';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
