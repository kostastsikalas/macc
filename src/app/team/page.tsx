import React from 'react';
import Navbar from '@/components/Navbar';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[124px]">
        <Team />
      </main>
      <Footer />
    </>
  );
}
