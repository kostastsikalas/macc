"use client";

import { motion } from "framer-motion";
import { UserCog, Tractor, Building2 } from "lucide-react";

export default function SmartAgroAudience() {
  const audiences = [
    {
      title: "Ελαιοπαραγωγοί & Αγρότες",
      desc: "Αυξήστε την απόδοση της καλλιέργειάς σας με στοχευμένη άρδευση και έγκαιρη πρόβλεψη κινδύνων.",
      icon: Tractor,
      features: ["Έλεγχος υγρασίας", "Μείωση σπατάλης νερού", "Ειδοποιήσεις παγετού"]
    },
    {
      title: "Αγροτικοί Συνεταιρισμοί",
      desc: "Οργανώστε συνολικά τα μέλη σας. Κεντρική παρακολούθηση εκτάσεων και λήψη αποφάσεων βάσει data.",
      icon: Building2,
      features: ["Μαζική διαχείριση", "Μείωση συνολικού κόστους", "Στατιστική ανάλυση"]
    },
    {
      title: "Εταιρείες Συμβούλων",
      desc: "Παρέχετε ακριβείς, επιστημονικές συμβουλές (Agri-consulting) με δεδομένα πραγματικού χρόνου από τους πελάτες σας.",
      icon: UserCog,
      features: ["Ακριβή δεδομένα", "Ιστορικότητα μετρήσεων", "Εύκολο reporting"]
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Σε ποιους απευθύνεται</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Λύσεις προσαρμοσμένες σε κάθε κρίκο της αγροτικής αλυσίδας.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-sm hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed min-h-[80px]">{item.desc}</p>
                
                <ul className="space-y-4">
                  {item.features.map((feat, i) => (
                    <li key={i} className="flex items-center text-slate-700 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 mr-3" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
