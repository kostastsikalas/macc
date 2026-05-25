"use client";

import { motion } from "framer-motion";
import { Signal, Sprout, Lightbulb } from "lucide-react";

export default function SmartAgroHowItWorks() {
  const steps = [
    {
      title: "Η Υποδομή",
      desc: "Εγκατάσταση πυλών LORA από το MACC για εκτεταμένη κάλυψη δικτύου. Εξασφαλίζουμε απρόσκοπτη μεταφορά δεδομένων σε μεγάλες αποστάσεις.",
      icon: Signal,
      colSpan: "md:col-span-2",
      bgClass: "bg-emerald-50",
      accent: "text-emerald-700",
      iconBg: "bg-white"
    },
    {
      title: "Οι Αισθητήρες",
      desc: "Τοποθέτηση IoT αισθητήρων στο χωράφι. Συνεχής μέτρηση εδαφικής υγρασίας, θερμοκρασίας και αλατότητας.",
      icon: Sprout,
      colSpan: "md:col-span-1",
      bgClass: "bg-white",
      accent: "text-emerald-600",
      iconBg: "bg-emerald-50"
    },
    {
      title: "Η Συμβουλή",
      desc: "Συνεργασία με γεωπόνους και την Περιφέρεια. Μετατρέπουμε τα δεδομένα σε πρακτικές αγροτικές αποφάσεις, προλαμβάνοντας ασθένειες και εξοικονομώντας πόρους.",
      icon: Lightbulb,
      colSpan: "md:col-span-3",
      bgClass: "bg-gradient-to-br from-white to-emerald-50/50",
      accent: "text-amber-500",
      iconBg: "bg-amber-50"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Πώς λειτουργεί το δίκτυο</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Μια ολοκληρωμένη αρχιτεκτονική από το χωράφι μέχρι την τελική συμβουλή, με την εγγύηση του MACC.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className={`${step.colSpan} ${step.bgClass} border border-slate-200 rounded-[2rem] p-10 hover:shadow-xl transition-shadow group shadow-sm`}
              >
                <div className={`w-16 h-16 ${step.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-8 h-8 ${step.accent}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
