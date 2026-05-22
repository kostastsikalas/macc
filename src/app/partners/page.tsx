import React from 'react';
import Navbar from '@/components/Navbar';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white pt-20">
        <PartnersSection />
      </main>
      <Footer />
    </>
  );
}
