"use client";

import { motion } from "framer-motion";

export default function FertiwoolJourney() {
  const steps = [
    {
      num: "01",
      title: "Κτηνοτροφία",
      desc: "Συγκεντρώνουμε το μαλλί που παραδοσιακά απορρίπτεται, λύνοντας ένα σημαντικό πρόβλημα για τους κτηνοτρόφους."
    },
    {
      num: "02",
      title: "Συλλογή Μαλλιού",
      desc: "Το μαλλί καθαρίζεται και ταξινομείται προσεκτικά σε ειδικές εγκαταστάσεις με μηδενικό περιβαλλοντικό αποτύπωμα."
    },
    {
      num: "03",
      title: "Επεξεργασία",
      desc: "Μέσω μιας φυσικής, καινοτόμας διαδικασίας μετατρέπεται σε συμπυκνωμένο pellet, διατηρώντας τα θρεπτικά συστατικά."
    },
    {
      num: "04",
      title: "Λίπασμα στο Έδαφος",
      desc: "Το Fertiwool επιστρέφει στη γη. Εμπλουτίζει το χώμα, συγκρατεί την υγρασία και αναβαθμίζει την καλλιέργεια."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="py-32 bg-[#f4f2ea] border-t border-[#e8e4d8]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-medium text-[#2d3a1e] tracking-tight mb-6">
            Ο Κύκλος της Ζωής
          </h2>
          <p className="text-xl text-[#6e7462] font-light max-w-2xl mx-auto">
            Πώς ένα απόβλητο μετατρέπεται σε χρυσό για την καλλιέργειά σας. 
            Η πραγματική εφαρμογή της κυκλικής οικονομίας στην πράξη.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#b4bfa3] to-transparent z-0" />

          {steps.map((step, idx) => (
            <motion.div key={idx} variants={itemVariants} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white border border-[#e8e4d8] shadow-sm flex items-center justify-center text-2xl font-medium text-[#4a5d23] mb-8">
                {step.num}
              </div>
              <h3 className="text-2xl font-medium text-[#2d3a1e] mb-4">{step.title}</h3>
              <p className="text-[#6e7462] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
