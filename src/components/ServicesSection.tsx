'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Target, TrendingUp, BookOpen, CheckCircle2, ExternalLink } from 'lucide-react';

const servicePillars = [
  {
    id: 'research',
    title: 'Έρευνα & Καινοτομία',
    icon: Microscope,
    color: 'from-blue-500 to-cyan-400',
    services: [
      'Σχεδιασμός και εφαρμογή καινοτόμων λύσεων',
      'Ανάπτυξη συστημάτων μετρήσεων & αναλύσεων',
      'Συμμετοχή & συντονισμός εθνικών/ευρωπαϊκών δράσεων καινοτομίας',
      'Παροχή διαμεσολαβητικών υπηρεσιών εισαγωγής καινοτομίας',
      'Εμπορική αξιοποίηση ερευνητικών αποτελεσμάτων'
    ]
  },
  {
    id: 'strategy',
    title: 'Στρατηγική & Οργάνωση',
    icon: Target,
    color: 'from-emerald-500 to-teal-400',
    services: [
      'Παροχή υπηρεσιών συμβουλών στρατηγικού/οργανωτικού σχεδιασμού',
      'Εκπόνηση στρατηγικής & πλάνου μάρκετινγκ / HR',
      'Συμβουλευτικές υπηρεσίες για ικανοποίηση δεικτών ESG',
      'Συστήματα υποστήριξης, διαχείρισης & τεκμηρίωσης δραστηριοτήτων'
    ]
  },
  {
    id: 'market',
    title: 'Αγορά & Δικτύωση',
    icon: TrendingUp,
    color: 'from-orange-500 to-amber-400',
    services: [
      'Εκπόνηση μελετών & ερευνών αγοράς (Ελλάδα & εξωτερικό)',
      'Οργάνωση στρατηγικής αγροτικής παραγωγής & τυποποίησης',
      'Συντονισμός δραστηριοτήτων δικτύωσης για δημιουργία clusters',
      'Διοργάνωση επιχειρηματικών αποστολών & εκθέσεων'
    ]
  },
  {
    id: 'training',
    title: 'Αξιολόγηση & Εκπαίδευση',
    icon: BookOpen,
    color: 'from-purple-500 to-indigo-400',
    services: [
      'Τεκμηρίωση & αξιολόγηση αγροδιατροφικών προϊόντων/υπηρεσιών',
      'Παροχή εκπαίδευσης & κατάρτισης προσωπικού',
      'Διοργάνωση ημερίδων, συνεδρίων & εκπαιδευτικών δραστηριοτήτων'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-macc-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-macc-secondary/10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
          >
            Οι Υπηρεσίες μας
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Οι υπηρεσίες που παρέχει το MACC οργανώνονται σε 4 στρατηγικούς πυλώνες, 
            στοχεύοντας στην ολοκληρωμένη υποστήριξη του αγροδιατροφικού τομέα.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {servicePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                {/* Decorative gradient top bar */}
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${pillar.color}`} />
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${pillar.color} text-white shadow-lg`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900">
                    {pillar.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {pillar.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-macc-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ENoLL Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6 leading-tight">
              Γίνε μέλος του Ευρωπαϊκού Δικτύου Ζωντανής Καινοτομίας
            </h3>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed font-light">
              Για το MACC, η καινοτομία δεν είναι αυτοσκοπός. Αποκτά νόημα μόνο όταν είναι επικεντρωμένη στην ικανοποίηση των αναγκών του χρήστη ατομικά και της κοινωνίας συνολικά. Δείχνοντας έμπρακτα την αφοσίωσή του στη δημιουργία αξίας μέσω των συνεργειών, το MACC συμμετέχει στο Ευρωπαϊκό Δίκτυο των Εργαστηρίων Ζωντανής Καινοτομίας (ENoLL).
            </p>
            
            <a 
              href="https://enoll.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1a365d] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Μάθετε περισσότερα για το ENoLL
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
