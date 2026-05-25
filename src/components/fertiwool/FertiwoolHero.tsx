"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";

export default function FertiwoolHero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/fertiwool-bg.png")' }}
    >
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0ebd8] text-[#556b2f] text-sm font-medium tracking-wide mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#556b2f] mr-2" />
            Ένα Project του MACC
          </div>
          
          <div className="flex justify-center mb-8">
            <img src="/images/fertiwool.svg" alt="Fertiwool Logo" className="h-16 md:h-24 w-auto object-contain" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-[#2d3a1e] tracking-tight mb-8 leading-[1.1]">
            <span className="text-[#6b824a]">Η Δύναμη της Κυκλικής Οικονομίας.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#6e7462] font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            100% φυσικό, βιοδιασπώμενο λίπασμα από μαλλί προβάτου. 
            Εμπλουτίζει το έδαφος, εξοικονομεί νερό.
          </p>
        </motion.div>

        {/* 3D / High-Res Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl aspect-[16/9] md:aspect-[21/9] rounded-[2.5rem] bg-gradient-to-b from-white to-[#f4f2ea] shadow-2xl shadow-[#556b2f]/10 border border-white/50 flex items-center justify-center mb-16"
        >
          {/* Floating Pellet Image */}
          <motion.div
            animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full flex items-center justify-center p-8"
          >
            <img src="/images/fertiwool-product.png" alt="Fertiwool Product" className="w-full h-full object-contain" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button className="px-8 py-4 bg-[#4a5d23] hover:bg-[#3a4a1c] text-white rounded-full font-medium transition-colors flex items-center justify-center text-lg shadow-lg shadow-[#4a5d23]/20">
            Website Fertiwool
            <ExternalLink className="w-5 h-5 ml-2 opacity-80" />
          </button>
          
          <button className="px-8 py-4 bg-transparent border border-[#b4bfa3] text-[#4a5d23] hover:border-[#4a5d23] hover:bg-[#4a5d23]/5 rounded-full font-medium transition-all flex items-center justify-center text-lg">
            Κατεβάστε την Ανάλυση
            <Download className="w-5 h-5 ml-2 opacity-80" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
