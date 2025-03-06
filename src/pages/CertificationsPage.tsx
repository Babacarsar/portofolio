
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Certifications from '@/components/sections/Certifications';

const CertificationsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Certifications />
      </main>
    </div>
  );
};

export default CertificationsPage;
