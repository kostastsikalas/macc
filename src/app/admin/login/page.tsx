'use client';

import React, { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Lock, Mail, Loader2, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<'login' | 'forgot_password'>('login');
  const [resetSent, setResetSent] = useState(false);
  
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError('Λάθος email ή κωδικός. Δοκιμάστε ξανά.');
      setLoading(false);
    } else {
      router.push('/admin');
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Παρακαλώ εισάγετε το email σας.');
      return;
    }
    
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/admin/update-password`,
    });

    if (error) {
      setError('Υπήρξε πρόβλημα με την αποστολή του email. Ελέγξτε αν είναι σωστό.');
    } else {
      setResetSent(true);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-[#2e5343] p-8 text-center relative">
          {mode === 'forgot_password' && !resetSent && (
            <button 
              onClick={() => { setMode('login'); setError(''); }}
              className="absolute left-4 top-4 text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">MACC Admin</h2>
          <p className="text-white/70 text-sm">
            {mode === 'login' ? 'Συνδεθείτε για να διαχειριστείτε το περιεχόμενο.' : 'Επαναφορά Κωδικού Πρόσβασης'}
          </p>
        </div>
        
        <div className="p-8">
          {mode === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium text-center border border-red-100">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] focus:border-transparent transition-all text-gray-900"
                    placeholder="admin@macc.gr"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">Κωδικός</label>
                  <button 
                    type="button" 
                    onClick={() => { setMode('forgot_password'); setError(''); }}
                    className="text-sm text-[#2e5343] hover:underline font-medium"
                  >
                    Ξεχάσατε τον κωδικό;
                  </button>
                </div>
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

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2e5343] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#1a3528] focus:outline-none focus:ring-4 focus:ring-[#2e5343]/30 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Είσοδος...
                  </>
                ) : (
                  'Είσοδος'
                )}
              </button>
            </form>
          ) : (
            /* Forgot Password Form */
            <div className="space-y-6">
              {resetSent ? (
                <div className="text-center space-y-4 py-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Ελέγξτε το Email σας</h3>
                  <p className="text-gray-600 text-sm">
                    Έχουμε στείλει οδηγίες επαναφοράς του κωδικού στο <span className="font-medium text-gray-900">{email}</span>.
                  </p>
                  <button
                    onClick={() => { setMode('login'); setResetSent(false); }}
                    className="mt-6 w-full bg-gray-100 text-gray-700 font-bold py-3 px-4 rounded-lg hover:bg-gray-200 transition-all"
                  >
                    Επιστροφή στην Είσοδο
                  </button>
                </div>
              ) : (
                <form onSubmit={handleResetPassword} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium text-center border border-red-100">
                      {error}
                    </div>
                  )}
                  
                  <p className="text-gray-600 text-sm mb-4">
                    Εισάγετε το email σας και θα σας στείλουμε ένα link για να επαναφέρετε τον κωδικό σας.
                  </p>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] focus:border-transparent transition-all text-gray-900"
                        placeholder="admin@macc.gr"
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
                        Αποστολή...
                      </>
                    ) : (
                      'Αποστολή Link'
                    )}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
