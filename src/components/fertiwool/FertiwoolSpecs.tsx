"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FertiwoolSpecs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const specs = [
    {
      title: "Άζωτο (N) - 10-12%",
      content: "Το υψηλό ποσοστό αζώτου (10-12%) υποστηρίζει την ισχυρή βλαστική ανάπτυξη. Η αργή αποδέσμευση εξασφαλίζει ότι τα φυτά λαμβάνουν άζωτο σταθερά για 6 μήνες, μειώνοντας τις απώλειες λόγω έκπλυσης."
    },
    {
      title: "Κάλιο (K) - ~4%",
      content: "Απαραίτητο για τη σύνθεση πρωτεϊνών και την αντοχή σε στρεσογόνους παράγοντες όπως η ξηρασία και το ψύχος. Το κάλιο στο μαλλί προβάτου είναι άμεσα διαθέσιμο στα φυτά."
    },
    {
      title: "Οργανική Ουσία - >85%",
      content: "Περιέχει τεράστιο ποσοστό οργανικής ουσίας, βελτιώνοντας δραματικά τη δομή του εδάφους, την αερισμό του και προάγοντας την ωφέλιμη μικροβιακή δραστηριότητα."
    },
    {
      title: "Ικανότητα Κατακράτησης Υγρασίας",
      content: "Οι ίνες του μαλλιού μπορούν να απορροφήσουν έως και 30-40% του βάρους τους σε νερό. Αυτό δημιουργεί μικρο-δεξαμενές υγρασίας γύρω από τις ρίζες των φυτών."
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium text-[#2d3a1e] tracking-tight mb-4">
            Τεχνική Σύσταση
          </h2>
          <p className="text-[#6e7462] font-light text-lg">
            Αναλυτικά τα συστατικά που κάνουν το Fertiwool το κορυφαίο οργανικό λίπασμα.
          </p>
        </div>

        <div className="space-y-4">
          {specs.map((spec, idx) => (
            <div 
              key={idx}
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === idx ? 'border-[#b4bfa3] bg-[#fbfaf8]' : 'border-[#e8e4d8] bg-white hover:border-[#d0ccbe]'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-xl font-medium text-[#2d3a1e]">{spec.title}</span>
                <ChevronDown 
                  className={`w-6 h-6 text-[#6b824a] transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-6 text-[#6e7462] leading-relaxed border-t border-[#e8e4d8] pt-6 mt-2">
                      {spec.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
