'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import CaseStudy from '@/components/CaseStudy';
import PartnersSection from '@/components/PartnersSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white">
        <Hero />
        <NewsSection />
        <PartnersSection />
        <CaseStudy />
      </main>
      <Footer />
    </>
  );
}
