"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function FoodoxysB2CCards() {
  const cards = [
    {
      title: "MyGlutathione",
      price: "59€",
      description: "Προσδιορισμός γλουταθειόνης",
      features: [
        "Ακριβής μέτρηση επιπέδων",
        "Γρήγορα αποτελέσματα",
        "Ιδανικό για πρώτη εκτίμηση",
      ],
      isPopular: false,
    },
    {
      title: "RedoxOne",
      price: "149€",
      description: "Βασικό προφίλ οξειδωτικού στρες",
      features: [
        "Μέτρηση ελεύθερων ριζών",
        "Αντιοξειδωτική ικανότητα",
        "Εξατομικευμένη αναφορά",
      ],
      isPopular: true,
    },
    {
      title: "RedoxOne Pro",
      price: "349€",
      description: "Αναλυτικό προφίλ δεικτών",
      features: [
        "Πλήρες φάσμα βιοδεικτών",
        "Γενετική προδιάθεση (αν υπάρχει)",
        "Συμβουλευτική συνεδρία",
      ],
      isPopular: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-12 px-4">
      {cards.map((card, idx) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`relative rounded-3xl p-8 flex flex-col h-full bg-white/60 backdrop-blur-xl border ${
            card.isPopular
              ? "border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.15)] transform md:-translate-y-4"
              : "border-slate-200 shadow-xl"
          }`}
        >
          {card.isPopular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
              Most Popular
            </div>
          )}
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">{card.title}</h3>
            <p className="text-slate-500 min-h-[48px]">{card.description}</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-bold text-slate-900">{card.price}</span>
          </div>
          <ul className="space-y-4 mb-8 flex-grow">
            {card.features.map((feat, i) => (
              <li key={i} className="flex items-center text-slate-600">
                <Check className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
          <button
            className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
              card.isPopular
                ? "bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/30"
                : "bg-slate-100 hover:bg-slate-200 text-slate-800"
            }`}
          >
            Επιλογή Πακέτου
          </button>
        </motion.div>
      ))}
    </div>
  );
}
