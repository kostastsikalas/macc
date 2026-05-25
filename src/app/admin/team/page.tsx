'use client';

import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabase';
import { Trash2, Plus, Image as ImageIcon, Loader2 } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  image_url: string;
  linkedin: string;
}

export default function AdminTeam() {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Form State
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMembers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .order('created_at', { ascending: true });
      
    if (data) setMembers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
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
    if (!name) return;
    
    setSaving(true);
    
    let image_url = '';
    
    // Upload image if selected
    if (imageFile) {
      const fileExt = imageFile.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
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
      .from('team_members')
      .insert([
        { name, title, role, linkedin, image_url }
      ]);
      
    if (!error) {
      // Reset form
      setName('');
      setTitle('');
      setRole('');
      setLinkedin('');
      setImageFile(null);
      setImagePreview('');
      if (fileInputRef.current) fileInputRef.current.value = '';
      
      // Refresh list
      fetchMembers();
    } else {
      alert('Σφάλμα κατά την αποθήκευση. Δοκιμάστε ξανά.');
    }
    
    setSaving(false);
  };

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!window.confirm('Είστε σίγουροι ότι θέλετε να διαγράψετε αυτό το μέλος;')) return;
    
    // Delete record
    await supabase.from('team_members').delete().eq('id', id);
    
    // Attempt to delete image from storage if it exists and is in our bucket
    if (imageUrl && imageUrl.includes('public_images')) {
      const fileName = imageUrl.split('/').pop();
      if (fileName) {
        await supabase.storage.from('public_images').remove([fileName]);
      }
    }
    
    fetchMembers();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-extrabold text-gray-900">Διαχείριση Ομάδας</h1>
        <p className="text-gray-500 mt-2">Προσθέστε ή διαγράψτε μέλη της ομάδας του MACC.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Form Column */}
        <div className="lg:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit">
          <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Plus className="w-5 h-5 text-[#2e5343]" />
            Προσθήκη Μέλους
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Image Upload */}
            <div className="flex flex-col items-center justify-center">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-[#2e5343] hover:bg-gray-50 transition-all relative overflow-hidden mb-2"
              >
                {imagePreview ? (
                  <Image src={imagePreview} alt="Preview" fill className="object-cover" />
                ) : (
                  <>
                    <ImageIcon className="w-8 h-8 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-500">Φωτογραφία</span>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ονοματεπώνυμο *</label>
              <input required type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ιδιότητα / Τίτλος</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="π.χ. Γεωπόνος" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ρόλος στο MACC</label>
              <input type="text" value={role} onChange={e => setRole(e.target.value)} placeholder="π.χ. Επιστημονικός Συνεργάτης" className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
              <input type="url" value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="https://linkedin.com/in/..." className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2e5343]" />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-[#2e5343] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#1a3528] disabled:opacity-70 flex items-center justify-center gap-2 mt-4"
            >
              {saving ? <><Loader2 className="w-5 h-5 animate-spin" /> Αποθήκευση...</> : 'Αποθήκευση Μέλους'}
            </button>
          </form>
        </div>

        {/* List Column */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Υπάρχοντα Μέλη ({members.length})</h2>
            </div>
            
            {loading ? (
              <div className="p-12 flex justify-center">
                <Loader2 className="w-8 h-8 text-[#2e5343] animate-spin" />
              </div>
            ) : members.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                Δεν βρέθηκαν μέλη. Προσθέστε το πρώτο μέλος από τη φόρμα!
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {members.map(member => (
                  <li key={member.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative bg-gray-200 flex-shrink-0">
                        {member.image_url ? (
                          <Image src={member.image_url} alt={member.name} fill className="object-cover" />
                        ) : (
                          <span className="w-full h-full flex items-center justify-center text-gray-500 font-bold">{member.name.charAt(0)}</span>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{member.name}</h3>
                        <p className="text-sm text-gray-500">{member.title} {member.role ? `• ${member.role}` : ''}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleDelete(member.id, member.image_url)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Διαγραφή"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
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
