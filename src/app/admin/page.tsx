'use client';

import React from 'react';
import { Users, FileText } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-heading font-extrabold text-gray-900 mb-8">Καλώς ήρθατε στο MACC Admin</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/admin/team" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2e5343]/30 transition-all group">
          <div className="w-12 h-12 bg-[#2e5343]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6 text-[#2e5343]" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Διαχείριση Ομάδας</h2>
          <p className="text-gray-500 text-sm">Προσθήκη, επεξεργασία ή διαγραφή μελών της ομάδας του MACC.</p>
        </Link>
        
        <Link href="/admin/news" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#2e5343]/30 transition-all group">
          <div className="w-12 h-12 bg-[#2e5343]/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6 text-[#2e5343]" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Διαχείριση Νέων</h2>
          <p className="text-gray-500 text-sm">Δημοσίευση νέων άρθρων και ανακοινώσεων.</p>
        </Link>
      </div>
    </div>
  );
}
