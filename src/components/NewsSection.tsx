'use client';

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';
import { Loader2 } from 'lucide-react';

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

export default function NewsSection() {
  const { language } = useLanguage();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('date', { ascending: false })
        .limit(3); // Fetch the latest 3 news for the homepage/section
        
      if (data) {
        setArticles(data);
      }
      setLoading(false);
    };
    
    fetchNews();
  }, []);

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
        {loading ? (
          <div className="flex flex-col items-center justify-center h-64">
            <Loader2 className="w-10 h-10 animate-spin text-[#2e5343] mb-4" />
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            {language === 'GR' ? 'Δεν υπάρχουν νέα προς το παρόν.' : 'No news available at the moment.'}
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {articles.map((article) => {
              const title = language === 'GR' ? article.title_gr : article.title_en;
              const summary = language === 'GR' ? article.summary_gr : article.summary_en;
              const category = language === 'GR' ? article.category_gr : article.category_en;
              const dateObj = new Date(article.date);
              const dateStr = dateObj.toLocaleDateString(language === 'GR' ? 'el-GR' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });

              return (
                <motion.article
                  key={article.id}
                  variants={cardVariants}
                  onClick={() => article.link && window.open(article.link, '_blank')}
                  className={`bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group ${article.link ? 'cursor-pointer' : ''}`}
                >
                  {/* Image area */}
                  <div className="relative h-48 w-full bg-[#c6d8de] overflow-hidden">
                    {article.image_url ? (
                      <Image 
                        src={article.image_url} 
                        alt={title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:scale-105 transition-transform duration-500">
                        <div className="text-sm font-mono text-gray-500 bg-white/50 w-full h-full p-4 flex items-center justify-center">
                          MACC News
                        </div>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2e5343] shadow-sm">
                      {category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow items-center text-center">
                    <h3 className="font-sans font-bold text-lg text-[#1a1a1a] mb-3 leading-tight group-hover:text-[#3e6e59] transition-colors line-clamp-2">
                      {title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
                      {summary}
                    </p>

                    <div className="mt-auto flex flex-col items-center">
                      {article.link && (
                        <span className="text-[#a6b68a] hover:text-[#3e6e59] text-sm font-medium transition-colors mb-4">
                          {language === 'GR' ? 'μάθε περισσότερα...' : 'read more...'}
                        </span>
                      )}
                      <span className="text-[#3e6e59] font-bold text-sm">
                        {dateStr}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        )}

        {/* See More Button */}
        {articles.length > 0 && (
          <div className="mt-16 flex justify-center">
            <a
              href="#news"
              className="px-8 py-3 rounded-md bg-[#3e6e59] hover:bg-[#2e5343] text-white font-sans text-lg tracking-wide shadow-md transition-all duration-300"
            >
              {language === 'GR' ? 'δείτε περισσότερα' : 'see more'}
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
