
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Projects from '@/components/sections/Projects';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Projects />
      </main>
    </div>
  );
};

export default ProjectsPage;
