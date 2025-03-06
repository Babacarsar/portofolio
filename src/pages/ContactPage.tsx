
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Contact from '@/components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
