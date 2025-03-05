
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Experience from '@/components/sections/Experience';
import PageTransition from '@/components/layout/PageTransition';

const ExperiencePage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Experience />
      </main>
    </PageTransition>
  );
};

export default ExperiencePage;
