
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Certifications from '@/components/sections/Certifications';
import Footer from '@/components/layout/Footer';

const CertificationsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <Certifications />
      </main>
      <Footer />
    </div>
  );
};

export default CertificationsPage;
