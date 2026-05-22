'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Award, BarChart3, Database, HeartPulse } from 'lucide-react';
import Image from 'next/image';

export default function FocusSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#020a06]/40">
      
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-agro-green/5 filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-agro-accent/5 filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content & Text */}
          <div className="lg:col-span-6 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-agro-border bg-agro-card"
            >
              <HeartPulse className="w-3.5 h-3.5 text-agro-accent" />
              <span className="text-[10px] font-mono tracking-widest text-agro-mint uppercase">
                {t('focus.badge')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
            >
              {t('focus.title')}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base leading-relaxed"
            >
              {t('focus.p1')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm leading-relaxed"
            >
              {t('focus.p2')}
            </motion.p>

            {/* Author info & PDF CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6"
            >
              {/* PDF Download Button */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('PDF Download triggered (Dr. Michael Katharakis Report)');
                }}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-agro-accent text-agro-accent bg-agro-accent-dim/10 hover:bg-agro-accent hover:text-[#020a06] transition-all duration-300 shadow-[0_0_15px_rgba(0,245,155,0.05)] hover:shadow-[0_0_20px_rgba(0,245,155,0.2)] hover:scale-102 font-heading font-bold text-xs"
              >
                <FileText className="w-4.5 h-4.5" />
                {t('focus.downloadPdf')}
              </a>

              {/* Author Details */}
              <div className="border-l border-agro-border/30 pl-4 py-1">
                <p className="text-xs font-heading font-semibold text-white">Dr. Michael Katharakis</p>
                <p className="text-[10px] font-mono text-gray-500">{t('focus.author')}</p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium Image Grid & UI Telemetry Cards */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Ambient glowing box behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-agro-green/20 to-transparent filter blur-2xl rounded-3xl opacity-40 pointer-events-none" />

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden border border-agro-border shadow-2xl w-full max-w-lg aspect-square"
            >
              <Image 
                src="/images/cretan-diet-tech.png"
                alt="Cretan Diet Technology Integration"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* Tech scanning overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-agro-accent/10 to-transparent h-1/2 w-full animate-scan pointer-events-none" />
            </motion.div>

            {/* Overlapping Telemetry Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-6 -left-4 sm:-left-8 bg-[#041a0e]/90 border border-agro-border p-4 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-3 max-w-[200px]"
            >
              <div className="p-2 rounded-lg bg-agro-accent-dim/30">
                <Award className="w-5 h-5 text-agro-accent" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">ESG Rating</p>
                <p className="text-base font-heading font-extrabold text-white">94% Compliant</p>
              </div>
            </motion.div>

            {/* Overlapping Telemetry Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-12 -right-4 bg-[#041a0e]/90 border border-agro-border p-4 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-3 max-w-[220px]"
            >
              <div className="p-2 rounded-lg bg-agro-accent-dim/30">
                <Database className="w-5 h-5 text-agro-accent" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Traceability</p>
                <p className="text-base font-heading font-extrabold text-white">100% Blockchain-Verified</p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
