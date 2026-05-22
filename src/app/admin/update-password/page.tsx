'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Lock, Loader2, CheckCircle2 } from 'lucide-react';

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  // Supabase automatically parses the access token from the URL hash 
  // when the user clicks the reset link, and logs them in temporarily.

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Οι κωδικοί δεν ταιριάζουν.');
      return;
    }

    if (password.length < 6) {
      setError('Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες.');
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.updateUser({
      password: password
    });

    if (error) {
      setError('Υπήρξε πρόβλημα με την ενημέρωση του κωδικού. Το link ίσως έχει λήξει.');
      setLoading(false);
    } else {
      setSuccess(true);
      // Log the user out immediately so they have to log in with the new password
      // or we can just redirect them to admin since they are technically logged in.
      setTimeout(() => {
        router.push('/admin');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-[#2e5343] p-8 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Νέος Κωδικός</h2>
          <p className="text-white/70 text-sm">Πληκτρολογήστε τον νέο σας κωδικό πρόσβασης.</p>
        </div>
        
        <div className="p-8">
          {success ? (
            <div className="text-center space-y-4 py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Επιτυχής Αλλαγή!</h3>
              <p className="text-gray-600 text-sm">
                Ο κωδικός σας άλλαξε επιτυχώς. Ανακατεύθυνση στο Admin Panel...
              </p>
            </div>
          ) : (
            <form onSubmit={handleUpdatePassword} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium text-center border border-red-100">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Νέος Κωδικός</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] focus:border-transparent transition-all text-gray-900"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Επιβεβαίωση Νέου Κωδικού</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] focus:border-transparent transition-all text-gray-900"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2e5343] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#1a3528] focus:outline-none focus:ring-4 focus:ring-[#2e5343]/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Αποθήκευση...
                  </>
                ) : (
                  'Αποθήκευση Κωδικού'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
