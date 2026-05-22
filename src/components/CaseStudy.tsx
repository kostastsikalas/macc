'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

export default function CaseStudy() {
  const { language } = useLanguage();

  return (
    <section id="case-study" className="py-20 bg-[#c2d4da] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-[#1a1a1a]"
          >
            <h2 className="font-sans font-light text-5xl md:text-7xl text-white drop-shadow-sm leading-tight mb-8">
              MACC<br />
              <span className="font-bold">Case Study</span>
            </h2>

            <h3 className="font-sans font-bold text-xl md:text-2xl mb-4">
              {language === 'GR' 
                ? 'Λίπασμα σε μορφή pellet από κουρέματα των προβάτων' 
                : 'Pellet fertilizer from sheep shearing'}
            </h3>

            <p className="font-sans text-sm md:text-base leading-relaxed mb-4 text-[#2a2a2a]">
              {language === 'GR' 
                ? 'Το καινοτόμο λίπασμα Fertiwool, από 100% ελληνικό πρόβειο μαλλί, βελτιώνει τη δομή του εδάφους, συγκρατεί νερό και είναι 100% βιοδιασπώμενο, απαιτώντας μόνο μία εφαρμογή ανά έξι μήνες. Πρόκειται για ένα καινοτόμο προϊόν κυκλικής οικονομίας, αποτέλεσμα συνεργασίας μεταξύ των εταίρων και των συνεργατών του MACC. Συμμετείχαν οι επιχειρήσεις Proud Farm, Βιοερευνητικά, Αγροφιλία, Χαλκιαδάκης και ΑΒΕΑ.'
                : 'The innovative Fertiwool fertilizer, made from 100% Greek sheep wool, improves soil structure, retains water, and is 100% biodegradable, requiring only one application every six months. It is an innovative circular economy product, the result of collaboration between MACC partners and associates. Participating businesses include Proud Farm, Bioresearch, Agrofilia, Chalkiadakis, and AVEA.'}
            </p>

            <p className="font-sans text-sm md:text-base leading-relaxed mb-8 text-[#2a2a2a]">
              {language === 'GR' 
                ? 'Ανακαλύψτε περισσότερες πληροφορίες στο www.fertiwool.gr.' 
                : 'Discover more information at www.fertiwool.gr.'}
            </p>

            <a
              href="https://www.fertiwool.gr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-md bg-[#3e6e59] hover:bg-[#2e5343] text-white font-sans text-sm tracking-wide shadow-md transition-all duration-300"
            >
              www.fertiwool.gr
            </a>
          </motion.div>

          {/* Right Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full aspect-[16/9]"
            >
              <Image 
                src="/images/tractor-tablet.png" 
                alt="Fertiwool Tablet Tractor" 
                fill
                className="object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
