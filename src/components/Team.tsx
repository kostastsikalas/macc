'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2 } from 'lucide-react';
import Image from 'next/image';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { supabase } from '@/lib/supabase';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  image_url: string;
  linkedin: string;
}

const defaultMembers: TeamMember[] = [
  {
    "id": "default-1",
    "name": "Δρ. Μιχάλης Καθαράκης",
    "title": "Φυσικός",
    "role": "CEO - Διαχειριστής",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-2",
    "name": "Γεωργία Καπελλάκη",
    "title": "Φιλόλογος",
    "role": "COO- Γενική Διευθύντρια Λειτουργιών",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-3",
    "name": "Καθ. Εμμανουήλ Κουδουμάς",
    "title": "Φυσικός",
    "role": "Επιστημονικός Σύμβουλος",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-4",
    "name": "Ευδοκία Κρυσταλλίδου",
    "title": "Γεωπόνος- Ζωοτέχνης",
    "role": "Επιστημονικός Σύμβουλος",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-5",
    "name": "Γιώργος Μανουσάκης",
    "title": "Δημιουργός",
    "role": "Υπεύθυνος Ανάπτυξης Δικτύου",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-6",
    "name": "Νικόλαος Ζερβός",
    "title": "Οικονομολόγος",
    "role": "Διαχειριστής Ευρωπαϊκών Έργων - Υπεύθυνος του Ζωντανού Εργαστηρίου MACCSOIL",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-7",
    "name": "Παύλος Κοκοσάλης",
    "title": "Οικονομολόγος",
    "role": "Υπεύθυνος για Χρηματοδοτούμενα Προγράμματα",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-8",
    "name": "Ιωάννης Ρινακάκης",
    "title": "Γεωπόνος",
    "role": "Υπεύθυνος πωλήσεων",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-9",
    "name": "Μαρία-Ειρήνη Ταμβακάκη",
    "title": "Λογοθεραπεύτρια",
    "role": "Υπεύθυνη πωλήσεων",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-10",
    "name": "Σοφία Μαραγκάκη",
    "title": "Οικονομολόγος",
    "role": "Υπεύθυνη για Χρηματοδοτούμενα Προγράμματα",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-11",
    "name": "Χαράλαμπος Πατσιανωτάκης",
    "title": "Ηλεκτρολόγος Μηχανικός & Μηχανικός Η/Υ",
    "role": "Υπεύθυνος Τεχνικού Προϊόντος",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-12",
    "name": "Νεκτάριος Φακιδάρης",
    "title": "Μηχανολόγος Μηχανικός",
    "role": "Υπεύθυνος Ανάπτυξης",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-13",
    "name": "Ιωάννα Σπανάκη",
    "title": "Δικηγόρος",
    "role": "",
    "image_url": "",
    "linkedin": ""
  },
  {
    "id": "default-14",
    "name": "Γρηγόριος Κοκολάκης",
    "title": "Οικονομολόγος",
    "role": "",
    "image_url": "",
    "linkedin": ""
  }
];

export default function Team() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      const { data } = await supabase
        .from('team_members')
        .select('*')
        .order('created_at', { ascending: true });
        
      if (data) {
        setTeamMembers([...defaultMembers, ...data]);
      }
      setLoading(false);
    };
    fetchTeam();
  }, []);
  return (
    <section className="w-full bg-gray-50 flex flex-col items-center pb-24">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2e5343]">
          <Image 
            src="/images/team_hero.png" 
            alt="MACC Team Background" 
            fill 
            className="object-cover opacity-40 mix-blend-overlay"
            priority
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2e5343]/80 to-[#1a3528]/90" />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-sans font-light text-4xl md:text-5xl lg:text-6xl text-white tracking-wide text-center drop-shadow-lg"
        >
          Η <span className="font-bold">Ομάδα</span> μας
        </motion.h1>
      </div>

      {/* Intro Text */}
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-lg md:text-xl leading-relaxed text-[#2a2a2a]"
        >
          Η δύναμη του MACC βρίσκεται στους ανθρώπους του. Μια ποικιλόμορφη ομάδα με εξειδικευμένες γνώσεις, κοινό όραμα και πάθος για την καινοτομία στην αγροδιατροφή.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pb-16 min-h-[400px]">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64 opacity-50">
            <Loader2 className="w-12 h-12 animate-spin text-[#2e5343] mb-4" />
            <p className="font-sans text-[#2e5343] font-medium">Φόρτωση Ομάδας...</p>
          </div>
        ) : teamMembers.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            Η ομάδα ανανεώνεται. Σύντομα κοντά σας!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-20">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                className="group relative bg-white rounded-[2rem] px-6 pb-8 pt-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(46,83,67,0.12)] transition-all duration-500 border border-gray-50 flex flex-col items-center text-center h-full hover:-translate-y-2 mt-12"
              >
                {/* Overlapping Photo */}
                <div className="w-40 h-40 rounded-full overflow-hidden -mt-20 mb-6 relative shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 z-10 bg-white border-4 border-white flex items-center justify-center shrink-0">
                  {member.image_url ? (
                    <Image src={member.image_url} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 200px" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-gray-400 font-bold text-4xl">{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                
                {/* Info */}
                <h3 className="font-sans font-extrabold text-xl text-[#1a1a1a] mb-1.5 leading-tight group-hover:text-[#2e5343] transition-colors">
                  {member.name}
                </h3>
                
                {member.title && (
                  <p className="font-sans font-bold text-[#3e6e59] text-[13px] uppercase tracking-wide">
                    {member.title}
                  </p>
                )}
                
                <div className="w-8 h-1 bg-[#2e5343]/10 rounded-full my-4 group-hover:bg-[#2e5343]/30 transition-colors duration-300" />
                
                {member.role && (
                  <p className="font-sans text-gray-500 text-[13px] leading-relaxed mb-6 px-1">
                    {member.role}
                  </p>
                )}

                {/* LinkedIn Icon */}
                <div className="mt-auto">
                  {member.linkedin ? (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex w-10 h-10 rounded-full text-white bg-[#0077b5] items-center justify-center shadow-md hover:bg-[#005582] hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="w-10 h-10" /> /* Empty placeholder to maintain height alignment */
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

    </section>
  );
}
