'use client';

import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, Plus, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface Partner {
  id: string;
  name: string;
  category: string;
  description_gr: string;
  description_en: string;
  image: string;
  url: string;
}

export default function AdminPartners() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [descriptionGr, setDescriptionGr] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');
  const [url, setUrl] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchPartners() {
      setLoading(true);
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('created_at', { ascending: true });
        
      if (data) setPartners(data);
      setLoading(false);
    }
    fetchPartners();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (file: File) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `partners/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      let image_url = '';
      if (imageFile) {
        image_url = await uploadImage(imageFile);
      }

      const { data, error } = await supabase
        .from('partners')
        .insert([{
          name,
          category,
          description_gr: descriptionGr,
          description_en: descriptionEn,
          url,
          image: image_url
        }])
        .select();

      if (error) throw error;

      if (data) {
        setPartners([...partners, data[0]]);
        // Reset form
        setName('');
        setCategory('');
        setDescriptionGr('');
        setDescriptionEn('');
        setUrl('');
        setImageFile(null);
        setImagePreview('');
        if (fileInputRef.current) fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Error adding partner:', error);
      alert('Υπήρξε ένα σφάλμα κατά την αποθήκευση.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm('Είστε σίγουροι ότι θέλετε να διαγράψετε αυτόν τον εταίρο;')) return;

    try {
      if (imageUrl && imageUrl.includes('supabase.co')) {
        const path = imageUrl.split('/images/')[1];
        if (path) {
          await supabase.storage.from('images').remove([path]);
        }
      }

      const { error } = await supabase.from('partners').delete().eq('id', id);
      if (error) throw error;

      setPartners(partners.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting partner:', error);
      alert('Υπήρξε ένα σφάλμα κατά τη διαγραφή.');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-[#2e5343]" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Διαχείριση Εταίρων & Συνεργατών</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Plus className="w-5 h-5 text-[#2e5343]" />
          Νέος Εταίρος
        </h2>
        
        <form onSubmit={handleAdd} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Όνομα Εταίρου *</label>
              <input
                required
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Κατηγορία (π.χ. ΑΚΑΔΗΜΑΪΚΟΙ ΕΤΑΙΡΟΙ)</label>
              <input
                type="text"
                value={category}
                onChange={e => setCategory(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Περιγραφή (GR)</label>
              <textarea
                value={descriptionGr}
                onChange={e => setDescriptionGr(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Περιγραφή (EN)</label>
              <textarea
                value={descriptionEn}
                onChange={e => setDescriptionEn(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ιστοσελίδα (URL)</label>
              <input
                type="url"
                value={url}
                onChange={e => setUrl(e.target.value)}
                className="w-full p-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Λογότυπο / Εικόνα *</label>
              <div className="mt-1 flex items-center gap-4">
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ImageIcon className="w-4 h-4 text-gray-500" />
                  Επιλογή Εικόνας
                </button>
                {imagePreview && (
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-gray-200">
                    <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-[#2e5343] text-white font-medium rounded-lg hover:bg-[#1a3528] transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {saving && <Loader2 className="w-4 h-4 animate-spin" />}
              Προσθήκη Εταίρου
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {partners.map(partner => (
          <div key={partner.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="relative w-full h-48 bg-gray-50 flex-shrink-0">
              {partner.image ? (
                <Image src={partner.image} alt={partner.name} fill className="object-contain p-4" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300">
                  <ImageIcon className="w-12 h-12" />
                </div>
              )}
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h3>
              {partner.category && <p className="text-sm font-medium text-[#2e5343] mb-3">{partner.category}</p>}
              
              <div className="mt-auto pt-4 flex justify-end">
                <button
                  onClick={() => handleDelete(partner.id, partner.image)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  title="Διαγραφή"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
