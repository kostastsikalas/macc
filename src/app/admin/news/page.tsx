'use client';

import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, Plus, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface NewsArticle {
  id: string;
  title_gr: string;
  title_en: string;
  summary_gr: string;
  summary_en: string;
  category_gr: string;
  category_en: string;
  date: string;
  image_url: string | null;
  link: string | null;
}

export default function AdminNews() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Form State
  const [titleGr, setTitleGr] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [summaryGr, setSummaryGr] = useState('');
  const [summaryEn, setSummaryEn] = useState('');
  const [categoryGr, setCategoryGr] = useState('');
  const [categoryEn, setCategoryEn] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [link, setLink] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchArticles = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });
      
    if (data) setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleGr || !titleEn) return;
    
    setSaving(true);
    
    let image_url = null;
    
    // Upload image if selected
    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `news_${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('public_images')
        .upload(filePath, imageFile);
        
      if (!uploadError) {
        const { data } = supabase.storage.from('public_images').getPublicUrl(filePath);
        image_url = data.publicUrl;
      }
    }
    
    // Insert into DB
    const { error } = await supabase
      .from('news')
      .insert([
        { 
          title_gr: titleGr, 
          title_en: titleEn, 
          summary_gr: summaryGr, 
          summary_en: summaryEn, 
          category_gr: categoryGr, 
          category_en: categoryEn, 
          date, 
          link: link || null, 
          image_url 
        }
      ]);
      
    if (!error) {
      // Reset form
      setTitleGr('');
      setTitleEn('');
      setSummaryGr('');
      setSummaryEn('');
      setCategoryGr('');
      setCategoryEn('');
      setDate(new Date().toISOString().split('T')[0]);
      setLink('');
      setImageFile(null);
      setImagePreview('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      
      // Refresh list
      fetchArticles();
    } else {
      console.error(error);
      alert('Σφάλμα κατά την αποθήκευση. Δοκιμάστε ξανά.');
    }
    
    setSaving(false);
  };

  const handleDelete = async (id: string, imageUrl: string | null) => {
    if (!window.confirm('Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το άρθρο;')) return;
    
    // Delete record
    await supabase.from('news').delete().eq('id', id);
    
    // Attempt to delete image from storage if it exists and is in our bucket
    if (imageUrl && imageUrl.includes('public_images')) {
      const fileName = imageUrl.split('/').pop();
      if (fileName) {
        await supabase.storage.from('public_images').remove([fileName]);
      }
    }
    
    fetchArticles();
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-extrabold text-gray-900">Διαχείριση Νέων</h1>
        <p className="text-gray-500 mt-2">Προσθέστε ή διαγράψτε ανακοινώσεις και νέα.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Form Column */}
        <div className="lg:col-span-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#2e5343]" />
            Προσθήκη Νέου Άρθρου
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image Upload */}
            <div className="flex flex-col items-center justify-center mb-6">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="w-full h-40 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#2e5343] hover:bg-gray-50 transition-all relative overflow-hidden mb-2"
              >
                {imagePreview ? (
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                ) : (
                  <>
                    <ImageIcon className="w-8 h-8 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-500">Κύρια Φωτογραφία Άρθρου</span>
                  </>
                )}
              </div>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleImageChange} 
                accept="image/*" 
                className="hidden" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Τίτλος (GR) *</label>
                <input required type="text" value={titleGr} onChange={e => setTitleGr(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Τίτλος (EN) *</label>
                <input required type="text" value={titleEn} onChange={e => setTitleEn(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Περίληψη (GR) *</label>
                <textarea required rows={3} value={summaryGr} onChange={e => setSummaryGr(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] resize-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Περίληψη (EN) *</label>
                <textarea required rows={3} value={summaryEn} onChange={e => setSummaryEn(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343] resize-none" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Κατηγορία (GR) *</label>
                <input required type="text" value={categoryGr} onChange={e => setCategoryGr(e.target.value)} placeholder="π.χ. Εκδηλώσεις" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Κατηγορία (EN) *</label>
                <input required type="text" value={categoryEn} onChange={e => setCategoryEn(e.target.value)} placeholder="e.g. Events" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ημερομηνία *</label>
                <input required type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Εξωτερικό Link (Προαιρετικό)</label>
                <input type="url" value={link} onChange={e => setLink(e.target.value)} placeholder="https://..." className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
              </div>
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-[#2e5343] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#1a3528] disabled:opacity-70 flex items-center justify-center gap-2 mt-4 transition-colors"
            >
              {saving ? <><Loader2 className="w-5 h-5 animate-spin" /> Αποθήκευση...</> : 'Αποθήκευση Άρθρου'}
            </button>
          </form>
        </div>

        {/* List Column */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Δημοσιευμένα Άρθρα ({articles.length})</h2>
            </div>
            
            {loading ? (
              <div className="p-12 flex justify-center">
                <Loader2 className="w-8 h-8 text-[#2e5343] animate-spin" />
              </div>
            ) : articles.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                Δεν βρέθηκαν άρθρα. Προσθέστε το πρώτο σας άρθρο από τη φόρμα!
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {articles.map(article => (
                  <li key={article.id} className="p-6 flex gap-4 hover:bg-gray-50 transition-colors">
                    <div className="w-24 h-24 rounded-lg overflow-hidden relative bg-gray-200 flex-shrink-0">
                      {article.image_url ? (
                        <Image src={article.image_url} alt={article.title_gr} fill className="object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#2e5343]/10">
                          <ImageIcon className="w-8 h-8 text-[#2e5343]/40" />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="font-bold text-gray-900 line-clamp-1" title={article.title_gr}>{article.title_gr}</h3>
                          <button 
                            onClick={() => handleDelete(article.id, article.image_url)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0 ml-2"
                            title="Διαγραφή"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{article.summary_gr}</p>
                      </div>
                      <div className="flex gap-3 text-xs font-medium text-gray-400 mt-2">
                        <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">{article.category_gr}</span>
                        <span className="flex items-center">{new Date(article.date).toLocaleDateString('el-GR')}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
