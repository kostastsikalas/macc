import React from 'react';
import Navbar from '@/components/Navbar';
import VisionMission from '@/components/VisionMission';
import Footer from '@/components/Footer';

export default function VisionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white pt-20">
        <VisionMission />
      </main>
      <Footer />
    </>
  );
}
