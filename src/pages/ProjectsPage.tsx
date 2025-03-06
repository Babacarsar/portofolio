
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Projects from '@/components/sections/Projects';
import PageTransition from '@/components/layout/PageTransition';

const ProjectsPage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <Projects />
      </main>
    </PageTransition>
  );
};

export default ProjectsPage;
