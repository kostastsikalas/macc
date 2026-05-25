"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, User, MapPin, Phone, Mail, ArrowRight, Activity, ChevronRight, CheckCircle2, Info } from "lucide-react";
import FoodoxysB2CCards from "@/components/FoodoxysB2CCards";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Real data for partners
const partners = [
  { name: "Παναούση Ανδρονίκη", phone: "2810753023 / 6977676481", email: "panaousiandroniki@gmail.com", location: "Καπετανάκη 70, 70100, Αρχάνες Ηρακλείου" },
  { name: "Τσακίρη Μαρία", phone: "2810318091 / 6974738480", email: "tsakirhmaria@gmail.com", location: "Ισαύρων 40, 71303, Ηράκλειο" },
  { name: "Δαριβιανάκη Ελευθερία", phone: "2810213900 / 6972707432", email: "info@heraklion-diagnosis.gr", location: "Λεωφόρος Κνωσού 63, 71306 Ηράκλειο" },
  { name: "Χουρδάκη Αριάδνη", phone: "2810212955 / 6992732135", email: "xurdaki@gmail.com", location: "Λεωφόρος Παπανδρέου Ανδρέα 102, 71305, Ηράκλειο" },
  { name: "Μανωλαράκη Μαρίνα", phone: "2814002903 / 6981773347", email: "info@diatrofis.com", location: "Σοφοκλή Βενιζέλου & Ισαύρων 105, 71303, Ηράκλειο Κρήτης" },
  { name: "Ζαρίφη Αλεξάνδρα", phone: "2810 341 337 / 6944788933", email: "zarifialex@gmail.com", location: "Βουρβάχων 11, 71202, Ηράκλειο Κρήτης" },
  { name: "Συμνιανάκη Αικατερίνη", phone: "2842026700 / 697750 1571", email: "symnianaki@gmail.com", location: "Γεωργίου Γιαννάκου 14, 72200, Ιεράπετρα, Λασιθίου Κρήτης" },
];

export default function FoodoxysPage() {
  const [view, setView] = useState<"b2c" | "b2b">("b2c");

  return (
    <>
      <Navbar />
      <div className="min-h-screen font-sans selection:bg-emerald-500 selection:text-white pb-20 relative">
        
        {/* Full Page Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
            style={{ backgroundImage: 'url("/foodoxys-bg.png")' }}
          />
          <div className="absolute inset-0 bg-white/20" />
        </div>

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm border border-emerald-100">
                Precision Wellness
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
                Foodoxys <span className="text-slate-300 mx-2">x</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700">MACC</span>
                <br className="hidden md:block" />
                <span className="text-3xl md:text-5xl block mt-4 text-slate-700 font-bold">Αποκωδικοποίησε τον Μεταβολισμό σου</span>
              </h1>
              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Η ευεξία δεν είναι πλέον θεωρία, αλλά μετρήσιμο μέγεθος. Μέσα από την πρωτοποριακή τεχνολογία της Foodoxys και την εγγύηση του MACC, αποκρυπτογραφούμε το μεταβολικό σου προφίλ. Προστάτευσε τα κύτταρά σου, βελτιστοποίησε την ενέργειά σου και πάρε τον έλεγχο της υγείας σου, σήμερα κιόλας, με κλινική ακρίβεια.
              </p>
            </motion.div>

            {/* Toggle Switch */}
            <div className="flex justify-center mb-16">
              <div className="bg-white p-1.5 rounded-full shadow-sm border border-slate-200 inline-flex relative">
                <div 
                  className="absolute top-1.5 bottom-1.5 w-[160px] bg-slate-900 rounded-full transition-transform duration-300 ease-in-out"
                  style={{ transform: view === "b2c" ? "translateX(0)" : "translateX(160px)" }}
                />
                <button
                  onClick={() => setView("b2c")}
                  className={`relative w-[160px] flex items-center justify-center py-3 text-sm font-medium transition-colors duration-300 z-10 rounded-full ${
                    view === "b2c" ? "text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <User className="w-4 h-4 mr-2" />
                  Για Ιδιώτες
                </button>
                <button
                  onClick={() => setView("b2b")}
                  className={`relative w-[160px] flex items-center justify-center py-3 text-sm font-medium transition-colors duration-300 z-10 rounded-full ${
                    view === "b2b" ? "text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <Building2 className="w-4 h-4 mr-2" />
                  Για Εταιρείες
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          {view === "b2c" ? (
            <motion.div
              key="b2c"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Cards */}
              <FoodoxysB2CCards />

              {/* Partners Grid */}
              <section className="max-w-6xl mx-auto px-4 mt-20 relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Συνεργαζόμενα Κέντρα</h2>
                  <p className="text-slate-500">Βρείτε ένα πιστοποιημένο εργαστήριο κοντά σας στην Κρήτη.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {partners.map((partner, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                      <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <MapPin className="w-6 h-6 text-emerald-500" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">{partner.name}</h4>
                      <p className="text-sm text-slate-500 mb-4 flex items-start">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{partner.location}</span>
                      </p>
                      <div className="space-y-2 text-sm text-slate-600">
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 mr-2 text-slate-400" />
                          {partner.phone}
                        </div>
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2 text-slate-400" />
                          {partner.email}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="b2b"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto px-4 space-y-32 mt-12 relative z-10"
            >
              {/* Feature 1: AFQ */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 space-y-6">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-emerald-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:shadow-md transition-shadow">
                    <img src="/logos/afq.png" alt="AFQ Check" className="w-full h-full object-contain" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">AFQ Certification</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Αναδείξτε την αντιοξειδωτική ισχύ των προϊόντων σας. Το σήμα ποιότητας AFQ αξιολογεί την ικανότητα των τροφίμων να εξουδετερώνουν τις ελεύθερες ρίζες, ενισχύοντας την εμπιστοσύνη του καταναλωτή.
                  </p>
                  <button className="flex items-center text-emerald-500 font-semibold hover:text-emerald-600 transition-colors group">
                    Με ενδιαφέρει <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 w-full relative">
                  {/* Mock Score Bar */}
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 max-w-md mx-auto relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                    <h4 className="text-slate-800 font-semibold mb-6 flex items-center">
                      AFQ Quality Score <Info className="w-4 h-4 ml-2 text-slate-400" />
                    </h4>
                    <div className="h-4 bg-slate-100 rounded-full overflow-hidden mb-4 relative">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-slate-400 font-medium">
                      <span>8 (Βασικό)</span>
                      <span className="text-emerald-500 font-bold">18/20</span>
                      <span>20 (Premium)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Product ID */}
              <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                <div className="flex-1 space-y-6">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-emerald-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:shadow-md transition-shadow">
                    <img src="/logos/product-id.png" alt="Product ID" className="w-full h-full object-contain" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Product ID Pathway</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Πλήρης επιστημονική τεκμηρίωση για το προϊόν σας. Η διαδικασία 4 επιπέδων αναλύει την ασφάλεια και αποτελεσματικότητα σε κάθε στάδιο, μέχρι την κλινική πράξη.
                  </p>
                  <button className="flex items-center text-emerald-500 font-semibold hover:text-emerald-600 transition-colors group">
                    Request a Quote <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 space-y-6 max-w-md mx-auto">
                    {[
                      { step: 1, title: "In Vitro", desc: "Χημικές αναλύσεις στο εργαστήριο" },
                      { step: 2, title: "Cells", desc: "Μελέτη σε κυτταρικές σειρές" },
                      { step: 3, title: "Προκλινική", desc: "Έλεγχος σε ζωικά μοντέλα" },
                      { step: 4, title: "Κλινική", desc: "Μελέτες σε ανθρώπους (in vivo)" },
                    ].map((s, i) => (
                      <motion.div 
                        key={s.step}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-start"
                      >
                        <div className="flex flex-col items-center mr-4">
                          <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center font-bold text-sm">
                            {s.step}
                          </div>
                          {i !== 3 && <div className="w-0.5 h-10 bg-slate-100 my-1"></div>}
                        </div>
                        <div className="pt-1">
                          <h5 className="font-semibold text-slate-800">{s.title}</h5>
                          <p className="text-sm text-slate-500">{s.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feature 3: NutriMetrics */}
              <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 space-y-6">
                  <div className="w-24 h-24 bg-white rounded-2xl shadow-sm border border-emerald-100 flex items-center justify-center p-3 relative overflow-hidden group-hover:shadow-md transition-shadow">
                    <img src="/logos/nutrimetrics.png" alt="NutriMetrics" className="w-full h-full object-contain" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900">NutriMetrics</h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Επικυρώστε τους ισχυρισμούς υγείας (Health Claims) των προϊόντων σας. Αναλύουμε τα διατροφικά δεδομένα και παρέχουμε τεκμηριωμένες αναφορές για χρήση στο marketing.
                  </p>
                  <button className="flex items-center text-emerald-500 font-semibold hover:text-emerald-600 transition-colors group">
                    Με ενδιαφέρει <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-8 shadow-2xl relative overflow-hidden max-w-md mx-auto text-white">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-[80px] opacity-10"></div>
                    <h4 className="text-xl font-semibold mb-6">Διατροφικό Προφίλ</h4>
                    <div className="space-y-4">
                      {[
                        { label: "Βιταμίνη C", val: "85%" },
                        { label: "Αντιοξειδωτικά", val: "92%" },
                        { label: "Πολυφαινόλες", val: "78%" },
                      ].map((metric, i) => (
                        <div key={i}>
                          <div className="flex justify-between text-sm mb-1 text-slate-300">
                            <span>{metric.label}</span>
                            <span className="font-mono text-emerald-400">{metric.val}</span>
                          </div>
                          <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: metric.val }}
                              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                              className="h-full bg-emerald-400 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
}
