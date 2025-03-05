
import React from 'react';
import Navigation from '@/components/layout/Navigation';
import Certifications from '@/components/sections/Certifications';
import PageTransition from '@/components/layout/PageTransition';

const CertificationsPage = () => {
  return (
    <PageTransition className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Certifications />
      </main>
    </PageTransition>
  );
};

export default CertificationsPage;
