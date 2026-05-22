'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { Loader2, Save, Search, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ContentItem {
  key: string;
  value_gr: string;
  value_en: string;
  section: string;
}

export default function AdminContentPage() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingKey, setSavingKey] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState<string>('All');
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .order('section', { ascending: true })
      .order('key', { ascending: true });

    if (error) {
      console.error('Error fetching content:', error);
      setMessage({ text: 'Σφάλμα κατά τη φόρτωση των δεδομένων.', type: 'error' });
    } else if (data) {
      setContent(data);
    }
    setLoading(false);
  };

  const handleUpdate = async (item: ContentItem) => {
    setSavingKey(item.key);
    setMessage(null);

    const { error } = await supabase
      .from('site_content')
      .update({
        value_gr: item.value_gr,
        value_en: item.value_en,
        updated_at: new Date().toISOString()
      })
      .eq('key', item.key);

    if (error) {
      console.error('Error updating content:', error);
      setMessage({ text: 'Σφάλμα κατά την αποθήκευση.', type: 'error' });
    } else {
      setMessage({ text: 'Οι αλλαγές αποθηκεύτηκαν επιτυχώς.', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    }
    setSavingKey(null);
  };

  const handleChange = (key: string, field: 'value_gr' | 'value_en', value: string) => {
    setContent(prev => prev.map(item => 
      item.key === key ? { ...item, [field]: value } : item
    ));
  };

  const sections = ['All', ...Array.from(new Set(content.map(item => item.section)))];

  const filteredContent = content.filter(item => {
    const matchesSearch = item.key.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.value_gr.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.value_en.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSection = selectedSection === 'All' || item.section === selectedSection;
    return matchesSearch && matchesSection;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-[#2e5343]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Διαχείριση Κειμένων</h1>
        
        {message && (
          <div className={`px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium ${
            message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            {message.text}
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Αναζήτηση κειμένου..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] text-gray-900"
            />
          </div>
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] bg-white text-gray-900"
          >
            {sections.map(section => (
              <option key={section} value={section}>
                {section === 'All' ? 'Όλες οι Ενότητες' : section}
              </option>
            ))}
          </select>
        </div>

        {content.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <AlertCircle className="w-12 h-12 mx-auto text-gray-300 mb-3" />
            <p>Δεν βρέθηκαν κείμενα. Έχετε τρέξει το SQL script στο Supabase;</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredContent.map(item => (
              <div key={item.key} className="border border-gray-100 rounded-xl p-5 bg-gray-50/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs font-mono rounded mb-1">
                      {item.section}
                    </span>
                    <h3 className="font-mono text-sm text-gray-900">{item.key}</h3>
                  </div>
                  <button
                    onClick={() => handleUpdate(item)}
                    disabled={savingKey === item.key}
                    className="flex items-center gap-2 px-4 py-2 bg-[#2e5343] text-white text-sm font-medium rounded-lg hover:bg-[#1a3528] transition-colors disabled:opacity-50"
                  >
                    {savingKey === item.key ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Save className="w-4 h-4" />
                    )}
                    Αποθήκευση
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Ελληνικά (GR)</label>
                    <textarea
                      value={item.value_gr}
                      onChange={(e) => handleChange(item.key, 'value_gr', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] text-gray-900 min-h-[80px]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Αγγλικά (EN)</label>
                    <textarea
                      value={item.value_en}
                      onChange={(e) => handleChange(item.key, 'value_en', e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] text-gray-900 min-h-[80px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
