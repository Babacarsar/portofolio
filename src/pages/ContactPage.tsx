
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Contact from '@/components/sections/Contact';
import PageTransition from '@/components/layout/PageTransition';

const ContactPage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Contact />
      </main>
    </PageTransition>
  );
};

export default ContactPage;
