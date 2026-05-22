'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Combine, Sparkles, Share2, Puzzle } from 'lucide-react';
import Image from 'next/image';

export default function VisionMission() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  
  return (
    <section id="vision" className="w-full bg-white flex flex-col items-center">
      
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2e5343]">
          <Image 
            src="/images/vision_hero.png" 
            alt="MACC Vision Hero" 
            fill 
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2e5343]/80 to-[#020a06]/80" />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-sans font-light text-4xl md:text-5xl lg:text-6xl text-white tracking-wide"
        >
          Όραμα & Αποστολή
        </motion.h1>
      </div>

      {/* Intro Text */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-lg md:text-xl leading-relaxed text-[#2a2a2a]"
        >
          Το <span className="font-bold">Μεσογειακό Κέντρο Ικανοτήτων Αγροδιατροφής – MACC</span> είναι φορέας με Όραμα & Αποστολή την ενίσχυση της ανταγωνιστικότητας της Ελληνικής οικονομίας μέσω της καινοτομίας, της γνώσης και του ανθρώπινου δυναμικού.
        </motion.p>
      </div>

      {/* 2. Core Pillars (4 Icons) */}
      <div className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Combine, title: 'Δημιουργία συνεργειών', desc: 'μεταξύ Πανεπιστημίων, Ερευνητικών κέντρων και Επιχειρήσεων.' },
              { icon: Sparkles, title: 'Υποστήριξη καινοτομιών', desc: 'από το στάδιο της κατοχύρωσης πνευματικής ιδιοκτησίας έως και την εισαγωγή τους στην πραγματική οικονομία.' },
              { icon: Share2, title: 'Δικτύωση επιχειρήσεων', desc: 'με κοινή χρήση υποδομών και ερευνητικών πόρων.' },
              { icon: Puzzle, title: 'Επίλυση προβλημάτων', desc: 'των επιχειρήσεων της αγροδιατροφής με την εισαγωγή καινοτομίας σε προϊόντα και υπηρεσίες.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-[2rem] bg-white border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#3e6e59] group-hover:to-[#2e5343] group-hover:text-white text-[#3e6e59] transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(62,110,89,0.3)] group-hover:-translate-y-2">
                  <item.icon className="w-10 h-10" strokeWidth={1.5} />
                </div>
                <h3 className="font-sans font-bold text-[#1a1a1a] text-lg mb-3">{item.title}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Mission Guarantee */}
      <div className="w-full bg-[#dcedee] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 px-8 py-16 lg:py-24"
          >
            <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#1a1a1a] mb-6">
              Εγγύηση Αποστολής
            </h2>
            <p className="font-sans text-base md:text-lg leading-relaxed text-[#2a2a2a]">
              Εγγύηση για την επιτυχία της αποστολής του MACC είναι η σύνθεση των μελών του, καθώς αποτελούνται από φορείς του ερευνητικού και ακαδημαϊκού χώρου, του ευρύτερου δημόσιου τομέα, αλλά και από εταιρείες που δραστηριοποιούνται σε όλο το φάσμα του επιχειρείν, καλύπτοντας όλες τις παραγωγικές περιοχές της χώρας.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full h-[400px] lg:h-[500px] relative"
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <Image 
                src="/images/macc-hands.webp"
                alt="Εγγύηση Αποστολής - Συνεργασία"
                fill
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. Diversity & Synergy Process */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Timeline blocks */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {['Ποικιλομορφία', 'Γνώσεις', 'Εμπειρία', 'Προοπτική'].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`px-8 py-6 flex items-center justify-center relative min-w-[200px] cursor-pointer rounded-lg transition-colors duration-300 ${
                activeStep === idx || activeStep === null 
                  ? (activeStep === idx ? 'bg-[#3e6e59] shadow-xl' : 'bg-gray-100') 
                  : 'bg-gray-50 opacity-60'
              }`}
            >
              <span className={`font-sans font-bold text-xl transition-colors duration-300 ${activeStep === idx ? 'text-white' : 'text-[#1a1a1a]'}`}>
                {step}
              </span>
              {/* Little triangle pointing down */}
              <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] transition-colors duration-300 ${
                activeStep === idx ? 'border-t-[#3e6e59]' : (activeStep === null ? 'border-t-gray-100' : 'border-t-gray-50')
              }`} />
            </motion.div>
          ))}
        </div>
        
        {/* Line below timeline */}
        <div className="w-full max-w-4xl mx-auto h-px bg-[#8ab48a] mb-12 relative flex justify-between px-24">
          {[0, 1, 2, 3].map((idx) => (
            <motion.div 
              key={idx}
              animate={{ 
                scale: activeStep === idx ? 1.8 : 1,
                boxShadow: activeStep === idx ? '0 0 10px 2px rgba(62,110,89,0.5)' : 'none'
              }}
              className={`w-2 h-2 rounded-full -mt-[3px] transition-colors duration-300 ${
                activeStep === idx ? 'bg-[#3e6e59]' : 'bg-[#8ab48a]'
              }`} 
            />
          ))}
        </div>

        <p className="text-center font-sans text-[#2a2a2a] max-w-4xl mx-auto leading-relaxed mb-20 text-lg transition-all duration-300">
          Η <span className={`font-bold transition-colors duration-300 ${activeStep === 0 ? 'text-[#3e6e59] text-xl' : ''}`}>ποικιλομορφία των μελών</span>, με <span className={`font-bold transition-colors duration-300 ${activeStep === 1 ? 'text-[#3e6e59] text-xl' : ''}`}>διαφορετικές γνώσεις</span>, <span className={`font-bold transition-colors duration-300 ${activeStep === 2 ? 'text-[#3e6e59] text-xl' : ''}`}>εμπειρίες</span> και <span className={`font-bold transition-colors duration-300 ${activeStep === 3 ? 'text-[#3e6e59] text-xl' : ''}`}>προοπτικές</span>, δημιουργεί ένα ευνοϊκό περιβάλλον για την ανταλλαγή ιδεών και τη συνεργασία προς την επίτευξη κοινών στόχων.
        </p>

        {/* Thumbs up & Checklist */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full relative aspect-square max-w-md rounded-2xl overflow-hidden shadow-2xl"
          >
             <div className="absolute inset-0 bg-white flex items-center justify-center">
               <Image 
                 src="/images/macc_thumbsup.webp"
                 alt="MACC Επιτυχία"
                 fill
                 className="object-cover object-center"
               />
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col gap-8"
          >
            <p className="font-sans text-lg text-[#2a2a2a] leading-relaxed">
              Με την αξιοποίηση των <span className="font-bold">συνεργειών</span> που δημιουργούνται από τα μέλη και της τεχνογνωσίας που έχει καλλιεργηθεί από τα στελέχη του, <span className="font-bold">το MACC υποστηρίζει αποτελεσματικά</span> μέσω νέων <span className="font-bold">χρηματοδοτικών</span> και <span className="font-bold">παραγωγικών</span> μοντέλων:
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {[
                { title: 'Ανάπτυξη', subtitle: 'Καινοτόμων Δράσεων' },
                { title: 'Εφαρμογή', subtitle: 'σε καινοτόμες επιχειρήσεις' },
                { title: 'Υλοποίηση', subtitle: 'νέων επιχειρηματικών πονημάτων' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="flex items-center gap-6"
                >
                  <div className="w-14 h-14 rounded-full bg-[#dcedee] flex items-center justify-center shadow-sm shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-[#3e6e59]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-sans font-bold text-xl text-[#1a1a1a]">{item.title}</span>
                    <span className="font-sans text-base text-gray-600">{item.subtitle}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
