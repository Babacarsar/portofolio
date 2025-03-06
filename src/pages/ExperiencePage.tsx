
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Experience from '@/components/sections/Experience';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Experience />
      </main>
    </div>
  );
};

export default ExperiencePage;
