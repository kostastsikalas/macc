'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="Lush green field background" 
          fill 
          priority
          className="object-cover"
        />
        {/* Subtle dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 mt-16">
        <h1 className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans font-bold text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white drop-shadow-lg"
          >
            {t('hero.title1')}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans font-light text-4xl sm:text-5xl lg:text-6xl text-white mt-2 drop-shadow-md"
          >
            {t('hero.title2')}
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14"
        >
          <a
            href="#about"
            className="flex items-center gap-2 px-8 py-3.5 bg-[#3e6e59] hover:bg-[#2e5343] rounded-md text-white font-sans text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          >
            περισσότερα <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Vertical Nav Numbers */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6">
        <span className="text-white/70 font-sans font-light text-sm hover:text-white cursor-pointer transition-colors">02</span>
        <span className="text-white/70 font-sans font-light text-sm hover:text-white cursor-pointer transition-colors">03</span>
        <span className="text-white/70 font-sans font-light text-sm hover:text-white cursor-pointer transition-colors">04</span>
      </div>
    </section>
  );
}
