"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Sun, Droplets, Leaf } from "lucide-react";

export default function SmartAgroHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-24 pb-16">
      {/* Soft Organic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Soft gradient orb 1 */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-100/50 rounded-full blur-[100px]" />
        {/* Soft gradient orb 2 */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-sky-100/40 rounded-full blur-[100px]" />
        
        {/* Subtle Floating Organic Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 text-emerald-200/50"
        >
          <Leaf className="w-24 h-24" />
        </motion.div>
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 text-sky-200/50"
        >
          <Droplets className="w-32 h-32" />
        </motion.div>
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-1/3 text-amber-200/30"
        >
          <Sun className="w-40 h-40" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-emerald-200 shadow-sm text-emerald-700 text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
            Έξυπνη Γεωργία Επόμενης Γενιάς
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Smart-agro <span className="text-emerald-600">Genius</span>
            <br />
            <span className="text-3xl md:text-5xl text-slate-600 font-bold mt-2 block">Τεχνολογία στο χωράφι σου</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Δημιουργώντας το μεγαλύτερο δίκτυο υποδομών για υπηρεσίες έξυπνης γεωργίας. 
            Δεδομένα σε πραγματικό χρόνο, αξιόπιστες συμβουλές, πλήρης έλεγχος των καλλιεργειών σας 
            με τη δύναμη του <span className="font-semibold text-slate-800">MACC</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => document.getElementById("interest-form")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all flex items-center justify-center group"
            >
              Εκδήλωση Ενδιαφέροντος
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-emerald-100 text-emerald-700 hover:border-emerald-200 hover:bg-emerald-50/50 rounded-xl font-semibold shadow-sm transition-all flex items-center justify-center group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:-translate-y-0.5 transition-transform" />
              Χαρακτηριστικά (PDF)
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom fade for smooth transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
