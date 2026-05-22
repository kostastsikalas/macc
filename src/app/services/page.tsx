import React from 'react';
import Navbar from '@/components/Navbar';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white pt-20">
        <ServicesSection />
      </main>
      <Footer />
    </>
  );
}
