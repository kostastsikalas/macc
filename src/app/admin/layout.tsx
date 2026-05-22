'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import AdminGuard from '@/components/AdminGuard';
import { Users, LayoutDashboard, FileText, LogOut, Type } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === '/admin/login';

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
  };

  if (isLoginPage) {
    return <AdminGuard>{children}</AdminGuard>;
  }

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
          <div className="h-16 flex items-center px-6 border-b border-gray-200">
            <span className="font-heading font-extrabold text-2xl text-[#2e5343]">MACC Admin</span>
          </div>
          
          <nav className="flex-1 p-4 space-y-1">
            <Link 
              href="/admin" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${pathname === '/admin' ? 'bg-[#2e5343] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2e5343]'}`}
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link 
              href="/admin/team" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${pathname.includes('/admin/team') ? 'bg-[#2e5343] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2e5343]'}`}
            >
              <Users className="w-5 h-5" />
              Η Ομάδα
            </Link>
            <Link 
              href="/admin/news" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${pathname.includes('/admin/news') ? 'bg-[#2e5343] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2e5343]'}`}
            >
              <FileText className="w-5 h-5" />
              Νέα & Ανακοινώσεις
            </Link>
            <Link 
              href="/admin/content" 
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${pathname.includes('/admin/content') ? 'bg-[#2e5343] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#2e5343]'}`}
            >
              <Type className="w-5 h-5" />
              Διαχείριση Κειμένων
            </Link>
          </nav>

          <div className="p-4 border-t border-gray-200">
            <button 
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              Αποσύνδεση
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </AdminGuard>
  );
}
