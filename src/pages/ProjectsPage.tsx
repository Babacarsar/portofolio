
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Projects from '@/components/sections/Projects';
import Footer from '@/components/layout/Footer';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
