
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
