
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Skills from '@/components/sections/Skills';

const SkillsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Skills />
      </main>
    </div>
  );
};

export default SkillsPage;
