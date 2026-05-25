'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Target, TrendingUp, BookOpen, CheckCircle2, ExternalLink } from 'lucide-react';

const servicePillars = [
  {
    id: 'research',
    title: 'Έρευνα & Καινοτομία',
    icon: Microscope,
    themeColor: 'text-[#4a5d23]',
    bgAccent: 'bg-[#4a5d23]/10',
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
    themeColor: 'text-[#3e6e59]',
    bgAccent: 'bg-[#3e6e59]/10',
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
    themeColor: 'text-[#8c7853]',
    bgAccent: 'bg-[#8c7853]/10',
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
    themeColor: 'text-[#6b824a]',
    bgAccent: 'bg-[#6b824a]/10',
    services: [
      'Τεκμηρίωση & αξιολόγηση αγροδιατροφικών προϊόντων/υπηρεσιών',
      'Παροχή εκπαίδευσης & κατάρτισης προσωπικού',
      'Διοργάνωση ημερίδων, συνεδρίων & εκπαιδευτικών δραστηριοτήτων'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section 
      className="py-32 relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: 'url("/images/services-bg.png")' }}
    >
      {/* Soft overlay to make text highly readable */}
      <div className="absolute inset-0 bg-[#fbfaf8]/85 backdrop-blur-[2px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f0ebd8] text-[#556b2f] text-sm font-medium tracking-wide mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#556b2f] mr-2" />
            Τι Προσφέρουμε
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2d3a1e] tracking-tight mb-8"
          >
            Οι Υπηρεσίες μας
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#6e7462] font-light leading-relaxed max-w-2xl mx-auto"
          >
            Οργανωμένες σε 4 στρατηγικούς πυλώνες, οι υπηρεσίες του MACC στοχεύουν 
            στην ολοκληρωμένη καινοτομία και υποστήριξη του αγροδιατροφικού τομέα.
          </motion.p>
        </div>

        {/* Services Grid - Bento/Organic Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 max-w-7xl mx-auto">
          {servicePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(46,83,67,0.12)] hover:-translate-y-2 transition-all duration-500 border border-white flex flex-col relative group"
              >
                {/* Decorative blob on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/0 to-[#556b2f]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className={`p-4 rounded-2xl ${pillar.bgAccent} ${pillar.themeColor} transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-3xl font-medium text-[#2d3a1e] tracking-tight">
                    {pillar.title}
                  </h3>
                </div>

                <ul className="space-y-5 flex-grow relative z-10">
                  {pillar.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#f4f2ea] flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-[#6b824a]" strokeWidth={2.5} />
                      </div>
                      <span className="text-[#5a5f50] text-lg leading-relaxed font-light">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ENoLL Banner - Redesigned */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto bg-[#2d3a1e] rounded-[3rem] p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Ambient light effect inside the dark card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4a5d23] rounded-full blur-[120px] opacity-40 pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-8 leading-tight tracking-tight">
              Γίνε μέλος του Ευρωπαϊκού Δικτύου Ζωντανής Καινοτομίας
            </h3>
            <p className="text-xl text-[#d4c3a3] mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Για το MACC, η καινοτομία δεν είναι αυτοσκοπός. Αποκτά νόημα μόνο όταν είναι επικεντρωμένη στην ικανοποίηση των αναγκών του χρήστη. Δείχνοντας έμπρακτα την αφοσίωσή του στη δημιουργία αξίας μέσω των συνεργειών, το MACC συμμετέχει στο Ευρωπαϊκό Δίκτυο των Εργαστηρίων Ζωντανής Καινοτομίας (ENoLL).
            </p>
            
            <a 
              href="https://enoll.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#e6d8bc] text-[#2d3a1e] px-10 py-5 rounded-full text-lg font-medium hover:bg-white hover:scale-105 hover:shadow-xl hover:shadow-white/10 transition-all duration-300"
            >
              Μάθετε περισσότερα
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
