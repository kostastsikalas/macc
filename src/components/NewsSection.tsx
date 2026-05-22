'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  readTime: string;
}

export default function NewsSection() {
  const { t, language } = useLanguage();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  // Local fallback articles matching the layout in the image
  const localFallbackArticles: Record<'GR' | 'EN', Article[]> = {
    EN: [
      {
        id: '1',
        title: 'MACC participated in the FSTP Launching Event for Selected Projects',
        category: 'MACC Events',
        date: 'May 15, 2026',
        summary: 'MACC participated in the official FSTP Launching Event for Selected Projects of the I3-4-BIOFERTILIZERS, presenting our participation...',
        readTime: ''
      },
      {
        id: '2',
        title: 'The new CAP and the challenge of soil health in Europe',
        category: 'Agricultural Policy',
        date: 'March 13, 2026',
        summary: 'A new European study evaluates how the CAP Strategic Plans 2023-2027 can improve organic matter, reduce erosion, and enhance...',
        readTime: ''
      },
      {
        id: '3',
        title: 'MACC joins the National Startup Registry (Elevate Greece)',
        category: 'Accolades',
        date: 'February 26, 2026',
        summary: 'Our company was approved as an Official Member at the National Startup Registry (Elevate Greece), enhancing our extroversion...',
        readTime: ''
      }
    ],
    GR: [
      {
        id: '1',
        title: 'Το MACC συμμετείχε στο FSTP Launching Event for Selected Projects',
        category: 'Εκδηλώσεις MACC',
        date: '15 Μαΐου 2026',
        summary: 'Το MACC συμμετείχε στο επίσημο FSTP Launching Event for Selected Projects του I3-4-BIOFERTILIZERS, παρουσιάζοντας τη συμμετοχή του ως συντονιστής εταίρος...',
        readTime: ''
      },
      {
        id: '2',
        title: 'Η νέα ΚΑΠ και το στοίχημα της υγείας των εδαφών στην Ευρώπη',
        category: 'Αγροτική Πολιτική',
        date: '13 Μαρτίου 2026',
        summary: 'Νέα ευρωπαϊκή μελέτη αξιολογεί πώς τα Στρατηγικά Σχέδια της ΚΑΠ 2023-2027 μπορούν να βελτιώσουν την οργανική ουσία, να μειώσουν τη διάβρωση και να ενισχύσουν...',
        readTime: ''
      },
      {
        id: '3',
        title: 'Το MACC εντάσσεται στο Εθνικό Μητρώο Νεοφυών Επιχειρήσεων (Elevate Greece)',
        category: 'Διακρίσεις',
        date: '26 Φεβρουαρίου 2026',
        summary: 'Η εταιρεία μας εγκρίθηκε ως Official Member στο National Startup Registry (Elevate Greece), ενισχύοντας την εξωστρέφεια, τη δικτύωση και την παρουσία μας...',
        readTime: ''
      }
    ]
  };

  useEffect(() => {
    // For this specific design requirement, we use the fallback articles 
    // to instantly render the exact layout requested without relying on backend latency
    setArticles(localFallbackArticles[language]);
    setLoading(false);
  }, [language]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl text-[#1a1a1a]">
            {language === 'GR' ? 'Τα Νέα μας' : 'Our News'}
          </h2>
        </div>

        {/* News Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((article, idx) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className="bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Image Placeholder area */}
              <div className="relative h-48 w-full bg-[#c6d8de] overflow-hidden">
                {/* Fallback image backgrounds simulating the content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-500">
                  {idx === 0 && <div className="text-sm font-mono text-gray-500 bg-white/50 w-full h-full p-4 flex items-center justify-center">Spreadsheet/Webinar View</div>}
                  {idx === 1 && <h1 className="text-4xl font-extrabold text-[#3e6e59]">MACC-SOIL</h1>}
                  {idx === 2 && <h1 className="text-3xl font-extrabold text-blue-900">ELEVATE GREECE</h1>}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow items-center text-center">
                <h3 className="font-sans font-bold text-lg text-[#1a1a1a] mb-3 leading-tight group-hover:text-[#3e6e59] transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.summary}
                </p>

                <div className="mt-auto flex flex-col items-center">
                  <span className="text-[#a6b68a] hover:text-[#3e6e59] text-sm font-medium transition-colors mb-4">
                    {language === 'GR' ? 'μάθε περισσότερα...' : 'read more...'}
                  </span>
                  <span className="text-[#3e6e59] font-bold text-sm">
                    {article.date}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* See More Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="#news"
            className="px-8 py-3 rounded-md bg-[#3e6e59] hover:bg-[#2e5343] text-white font-sans text-lg tracking-wide shadow-md transition-all duration-300"
          >
            {language === 'GR' ? 'δείτε περισσότερα' : 'see more'}
          </a>
        </div>

      </div>
    </section>
  );
}
