"use client";

import { motion } from "framer-motion";
import { Droplet, Leaf, Recycle } from "lucide-react";

export default function FertiwoolBenefits() {
  return (
    <section className="py-32 bg-[#fbfaf8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-[#2d3a1e] tracking-tight mb-4">
            Ασύγκριτα Οφέλη
          </h2>
          <p className="text-xl text-[#6e7462] font-light">
            Σχεδιασμένο από τη φύση, βελτιστοποιημένο από το MACC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Main Large Card: Water Savings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 md:row-span-2 bg-[#edf2e6] rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10 max-w-sm">
              <div className="w-14 h-14 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Droplet className="w-7 h-7 text-[#4a5d23]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-medium text-[#2d3a1e] mb-4 leading-tight">
                Τεράστια <br />Εξοικονόμηση Νερού
              </h3>
              <p className="text-[#556b2f] text-lg leading-relaxed">
                Το μαλλί προβάτου μπορεί να συγκρατήσει έως και το 30% του βάρους του σε νερό, 
                αποδεσμεύοντάς το σταδιακά στη ρίζα του φυτού όταν το χρειάζεται, προστατεύοντας από την ξηρασία.
              </p>
            </div>
            
            {/* Animated Water Effect Placeholder */}
            <div className="absolute right-0 bottom-0 w-[80%] h-[60%] pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, 2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[-10%] bottom-[-20%] w-full aspect-square bg-[#c5d6af] rounded-full blur-[60px]" 
              />
              <motion.div 
                animate={{ y: [-15, 15, -15], rotate: [0, -3, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[20%] bottom-[-10%] w-[80%] aspect-square bg-[#a3bfa3] rounded-full blur-[80px]" 
              />
            </div>
          </motion.div>

          {/* Card 2: Nitrogen */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#e8e4d8] rounded-[2.5rem] p-8 flex flex-col shadow-sm"
          >
            <div className="w-12 h-12 bg-[#f4f2ea] rounded-xl flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6 text-[#6b824a]" />
            </div>
            <h3 className="text-2xl font-medium text-[#2d3a1e] mb-3">Πλούσιο σε Άζωτο</h3>
            <p className="text-[#6e7462]">
              Με περιεκτικότητα 10-12% σε άζωτο, παρέχει το βασικότερο στοιχείο για την ανάπτυξη της βιομάζας.
            </p>
          </motion.div>

          {/* Card 3: Biodegradable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#2d3a1e] rounded-[2.5rem] p-8 flex flex-col text-white"
          >
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <Recycle className="w-6 h-6 text-[#c5d6af]" />
            </div>
            <h3 className="text-2xl font-medium mb-3">100% Βιοδιασπώμενο</h3>
            <p className="text-[#a8b399]">
              Κανένα χημικό υπόλειμμα. Μεταβολίζεται πλήρως στο έδαφος βελτιώνοντας τη δομή του.
            </p>
          </motion.div>

          {/* Card 4: Slow Release */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-[#e8e4d8] rounded-[2.5rem] p-8 flex flex-col shadow-sm"
          >
            <div className="text-4xl font-light text-[#a3bfa3] mb-4">6+</div>
            <h3 className="text-2xl font-medium text-[#2d3a1e] mb-3">Μήνες Θρέψης</h3>
            <p className="text-[#6e7462]">
              Τεχνολογία Slow Release (Βραδείας Αποδέσμευσης). Τρέφει το φυτό σταθερά και με διάρκεια.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
