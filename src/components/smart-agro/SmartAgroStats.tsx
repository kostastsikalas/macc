"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Map, Sprout, ShieldCheck } from "lucide-react";

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const duration = 2000;
      
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        setDisplayValue(Math.floor(easeProgress * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function SmartAgroStats() {
  const stats = [
    {
      id: 1,
      icon: Map,
      value: 4,
      title: "LORA Gateways",
      desc: "Κάλυψη μεγάλων αγροτικών εκτάσεων"
    },
    {
      id: 2,
      icon: Sprout,
      value: 13,
      suffix: "+",
      title: "Ενεργοί Αισθητήρες",
      desc: "Συνεχής μέτρηση & καταγραφή στο πεδίο"
    },
    {
      id: 3,
      icon: ShieldCheck,
      value: 100,
      suffix: "%",
      title: "Αξιοπιστία Δεδομένων",
      desc: "Επιστημονική εγκυρότητα & ασφάλεια"
    }
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-20 h-20 mx-auto bg-emerald-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-emerald-600" />
                </div>
                
                <h3 className="text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-xl font-bold text-slate-800 mb-3">{stat.title}</p>
                <p className="text-slate-500">{stat.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
