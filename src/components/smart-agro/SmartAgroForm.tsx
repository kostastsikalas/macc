"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Leaf } from "lucide-react";

export default function SmartAgroForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      role: formData.get("role"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      location: formData.get("location"),
    };

    try {
      const response = await fetch("/api/interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="interest-form" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Soft decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #e2e8f0 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl shadow-slate-200/50 relative overflow-hidden border border-slate-100">
          {/* Subtle nature accent */}
          <div className="absolute -top-10 -right-10 text-emerald-50 opacity-50 rotate-45 pointer-events-none">
            <Leaf className="w-64 h-64" />
          </div>
          
          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Εκδήλωση Ενδιαφέροντος</h2>
            <p className="text-slate-600">Συμπληρώστε τη φόρμα για να μάθετε πώς το Smart-agro Genius μπορεί να αναβαθμίσει την καλλιέργειά σας.</p>
          </div>

          {status === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-emerald-50 border border-emerald-100 rounded-2xl p-10 text-center relative z-10"
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">Σας ευχαριστούμε!</h3>
              <p className="text-slate-600 text-lg">Το αίτημά σας καταχωρήθηκε επιτυχώς. Οι γεωπόνοι μας θα επικοινωνήσουμε μαζί σας σύντομα.</p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 px-8 py-3 bg-white hover:bg-slate-50 text-emerald-700 rounded-xl transition-colors border border-emerald-200 font-semibold shadow-sm"
              >
                Υποβολή νέας φόρμας
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Ονοματεπώνυμο *</label>
                  <input required type="text" id="name" name="name" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="Γιώργος Παπαδόπουλος" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-semibold text-slate-700">Ιδιότητα *</label>
                  <select required id="role" name="role" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Επιλέξτε ιδιότητα</option>
                    <option value="Αγρότης/Παραγωγός">Αγρότης / Παραγωγός</option>
                    <option value="Συνεταιρισμός">Αγροτικός Συνεταιρισμός</option>
                    <option value="Εταιρεία Συμβούλων">Εταιρεία Συμβούλων</option>
                    <option value="Άλλο">Άλλο</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Τηλέφωνο Επικοινωνίας *</label>
                  <input required type="tel" id="phone" name="phone" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="69XXXXXXXX" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email (προαιρετικό)</label>
                  <input type="email" id="email" name="email" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="example@email.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-semibold text-slate-700">Περιοχή Καλλιέργειας / Χωραφιού *</label>
                <input required type="text" id="location" name="location" className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all" placeholder="π.χ. Ηράκλειο, Κρήτη" />
              </div>

              {status === "error" && (
                <p className="text-red-500 text-sm font-medium">Προέκυψε σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά.</p>
              )}

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/30 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed mt-8 text-lg"
              >
                {status === "loading" ? "Αποστολή..." : (
                  <>
                    Ολοκλήρωση Υποβολής <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
