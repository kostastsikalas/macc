'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, RefreshCw, Droplet, Sprout, ArrowUpRight, Scale } from 'lucide-react';
import Image from 'next/image';

export default function FertiwoolShowcase() {
  const { t } = useLanguage();

  return (
    <section id="soil" className="py-24 relative overflow-hidden bg-[#03120a]/80 tech-grid">
      
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-agro-green/5 filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-agro-accent/5 filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-agro-border bg-agro-card mb-4"
          >
            <RefreshCw className="w-3.5 h-3.5 text-agro-accent animate-spin-slow" />
            <span className="text-[10px] font-mono tracking-widest text-agro-mint uppercase">
              {t('fertiwool.badge')}
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            {t('fertiwool.title')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            {t('fertiwool.subtitle')}
          </motion.p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 100% Greek Sheep Wool (Bento: col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 bg-[#041a0e]/50 border border-agro-border/50 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between overflow-hidden relative group hover:border-agro-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-agro-green/5 rounded-full filter blur-[60px] pointer-events-none group-hover:bg-agro-green/10 transition-all duration-500" />
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-agro-accent-dim/20 flex items-center justify-center border border-agro-accent/30 mb-6">
                <Scale className="w-6 h-6 text-agro-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                {t('fertiwool.card1.title')}
              </h3>
              <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md">
                {t('fertiwool.card1.desc')}
              </p>
            </div>
            
            {/* Visual indicator / dynamic stats */}
            <div className="mt-8 pt-6 border-t border-agro-border/20 flex items-center gap-6">
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Sourcing</p>
                <p className="text-sm font-heading font-semibold text-white mt-1">Cretan Shepherds Network</p>
              </div>
              <div className="w-px h-8 bg-agro-border/20" />
              <div>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Impact</p>
                <p className="text-sm font-heading font-semibold text-agro-accent mt-1">Zero-Waste Wool Cycle</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Advanced Water Retention (Bento: col-span-1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-[#041a0e]/50 border border-agro-border/50 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between hover:border-agro-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-500"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-agro-accent-dim/20 flex items-center justify-center border border-agro-accent/30 mb-6">
                <Droplet className="w-6 h-6 text-agro-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                {t('fertiwool.card3.title')}
              </h3>
              <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
                {t('fertiwool.card3.desc')}
              </p>
            </div>

            {/* Interactive Dial Mockup */}
            <div className="mt-8 flex items-center justify-center relative">
              <div className="w-28 h-28 rounded-full border-4 border-agro-border/30 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-agro-accent border-r-agro-accent animate-spin-slow" />
                <div className="text-center">
                  <span className="text-xl font-heading font-extrabold text-white">400%</span>
                  <p className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">Absorption</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Biodegradable Nutrition (Bento: col-span-1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#041a0e]/50 border border-agro-border/50 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-between hover:border-agro-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-500"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-agro-accent-dim/20 flex items-center justify-center border border-agro-accent/30 mb-6">
                <Sprout className="w-6 h-6 text-agro-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white">
                {t('fertiwool.card2.title')}
              </h3>
              <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
                {t('fertiwool.card2.desc')}
              </p>
            </div>

            {/* Timeline releases */}
            <div className="mt-8 space-y-3 font-mono text-[10px]">
              <div className="flex items-center justify-between text-gray-400">
                <span>Month 1: Nitrogen release</span>
                <span className="text-agro-accent">15%</span>
              </div>
              <div className="w-full h-1.5 bg-agro-border/20 rounded-full overflow-hidden">
                <div className="w-[15%] h-full bg-agro-accent" />
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Month 3: Organic degradation</span>
                <span className="text-agro-accent">55%</span>
              </div>
              <div className="w-full h-1.5 bg-agro-border/20 rounded-full overflow-hidden">
                <div className="w-[55%] h-full bg-agro-accent" />
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>Month 6: Soil absorption</span>
                <span className="text-agro-accent">100%</span>
              </div>
              <div className="w-full h-1.5 bg-agro-border/20 rounded-full overflow-hidden">
                <div className="w-full h-full bg-agro-accent animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Product Spotlight (Bento: col-span-2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-2 bg-[#041a0e]/50 border border-agro-border/50 rounded-3xl overflow-hidden backdrop-blur-md flex flex-col sm:flex-row hover:border-agro-accent/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-500"
          >
            {/* Text details */}
            <div className="p-8 flex flex-col justify-between sm:w-1/2">
              <div>
                <span className="text-[10px] font-mono text-agro-accent uppercase tracking-widest">Product Spotlight</span>
                <h3 className="font-heading font-extrabold text-2xl text-white mt-2">Fertiwool Pellets</h3>
                <p className="mt-3 text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Engineered with premium, non-processed organic wool. Promotes soil respiration, enhances root structure stability, and maintains ideal soil thermal balance.
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.fertiwool.gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-agro-green to-agro-accent text-[#020a06] font-heading font-bold text-xs hover:shadow-[0_0_20px_rgba(0,245,155,0.3)] transition-all duration-300 hover:scale-102 cursor-pointer"
                >
                  {t('fertiwool.visitSite')}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Image spotlight */}
            <div className="relative sm:w-1/2 h-64 sm:h-auto min-h-[250px]">
              <Image
                src="/images/fertiwool-product.png"
                alt="Fertiwool Organic Sprout Pellets"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#041a0e] via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
