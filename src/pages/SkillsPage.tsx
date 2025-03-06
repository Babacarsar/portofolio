
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Skills from '@/components/sections/Skills';
import Footer from '@/components/layout/Footer';

const SkillsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;
