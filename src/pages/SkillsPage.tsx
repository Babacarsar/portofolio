
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Skills from '@/components/sections/Skills';
import PageTransition from '@/components/layout/PageTransition';

const SkillsPage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Skills />
      </main>
    </PageTransition>
  );
};

export default SkillsPage;
