'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Mail, Send } from 'lucide-react';
import Link from 'next/link';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const MaccLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M50,5 C20,30 10,60 10,85 C10,105 25,115 50,115 Z" fill="#dcedee" />
    <path d="M50,5 C80,30 90,60 90,85 C90,105 75,115 50,115 Z" fill="#eaf2d3" />
    <path d="M50,5 C20,30 10,60 10,85 C10,105 25,115 50,115 C75,115 90,105 90,85 C90,60 80,30 50,5 Z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round"/>
    <line x1="50" y1="5" x2="50" y2="115" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <polyline points="50,45 35,30" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="35" cy="30" r="4.5" fill="#dcedee" stroke="currentColor" strokeWidth="4.5"/>
    <polyline points="50,70 35,55 20,55" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round"/>
    <circle cx="20" cy="55" r="4.5" fill="#dcedee" stroke="currentColor" strokeWidth="4.5"/>
    <polyline points="50,90 30,75" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="30" cy="75" r="4.5" fill="#dcedee" stroke="currentColor" strokeWidth="4.5"/>
    <polyline points="50,25 65,40" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="65" cy="40" r="4.5" fill="#eaf2d3" stroke="currentColor" strokeWidth="4.5"/>
    <polyline points="50,50 75,65" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="75" cy="65" r="4.5" fill="#eaf2d3" stroke="currentColor" strokeWidth="4.5"/>
    <polyline points="50,95 70,80" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="70" cy="80" r="4.5" fill="#eaf2d3" stroke="currentColor" strokeWidth="4.5"/>
  </svg>
);

export default function Footer() {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Subscribed: " + email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full font-sans flex flex-col">
      
      {/* Tier 1: Newsletter */}
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-12 mb-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#2e5343] to-[#1a3528] rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(46,83,67,0.3)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
            
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-[#8ab48a] opacity-10 blur-3xl pointer-events-none" />

            {/* Left Content */}
            <div className="flex-1 w-full relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  <Mail className="w-5 h-5 text-[#eaf2d3]" />
                </div>
                <span className="font-sans font-semibold tracking-wider text-sm text-[#eaf2d3] uppercase">
                  {language === 'GR' ? 'Μεινετε Ενημεροι' : 'Stay Updated'}
                </span>
              </div>
              <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                {language === 'GR' ? 'Εγγραφή στο Newsletter' : 'Subscribe to our Newsletter'}
              </h2>
              <p className="font-sans text-white/80 text-lg max-w-md">
                {language === 'GR' 
                  ? 'Μάθετε πρώτοι για τα νέα προγράμματα, τις δράσεις και τις καινοτομίες του MACC.' 
                  : 'Be the first to know about new programs, actions, and innovations by MACC.'}
              </p>
            </div>

            {/* Right Form */}
            <div className="w-full md:w-[450px] relative z-10">
              <form onSubmit={handleSubscribe} className="relative flex items-center w-full bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 shadow-inner focus-within:border-white/50 focus-within:bg-white/15 transition-all duration-300">
                <input
                  id="email"
                  type="email"
                  placeholder={language === 'GR' ? 'Το email σας...' : 'Your email address...'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-none px-6 py-4 text-white placeholder:text-white/60 focus:outline-none focus:ring-0 font-sans text-lg"
                  required
                />
                <button
                  type="submit"
                  className="h-full px-6 py-3.5 bg-white text-[#2e5343] rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#eaf2d3] hover:scale-[1.02] active:scale-95 transition-all duration-300 group shadow-md shrink-0"
                >
                  <span className="hidden sm:inline">{language === 'GR' ? 'Εγγραφή' : 'Subscribe'}</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="font-sans text-xs text-white/50 mt-4 text-center md:text-left px-4">
                {language === 'GR' 
                  ? '* Σεβόμαστε την ιδιωτικότητά σας. Δεν στέλνουμε spam.' 
                  : '* We respect your privacy. No spam.'}
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Tier 2: Main Footer */}
      <div className="bg-[#11241a] pt-20 pb-12 text-white relative overflow-hidden border-t border-white/5">
        
        {/* Decorative subtle glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#3e6e59] opacity-10 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Branding Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-6 group cursor-pointer">
                <div className="bg-white/5 p-3 rounded-2xl group-hover:bg-white/10 transition-colors duration-300">
                  <MaccLogo className="w-12 h-12 text-[#eaf2d3] stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-extrabold text-3xl tracking-tight text-white leading-none">
                    MACC
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#8ab48a] font-sans mt-1">
                    Μεσογειακό Κέντρο Ικανότητων
                  </span>
                </div>
              </div>
              <p className="font-sans text-white/60 text-sm leading-relaxed max-w-sm mb-8">
                {language === 'GR' 
                  ? 'Προωθούμε την καινοτομία και τη βιώσιμη ανάπτυξη στον αγροδιατροφικό τομέα, γεφυρώνοντας την έρευνα με την επιχειρηματικότητα.'
                  : 'We promote innovation and sustainable development in the agri-food sector, bridging research with entrepreneurship.'}
              </p>
              
              {/* Socials */}
              <div className="flex items-center gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3e6e59] hover:-translate-y-1 transition-all duration-300 text-white/80 hover:text-white">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3e6e59] hover:-translate-y-1 transition-all duration-300 text-white/80 hover:text-white">
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3e6e59] hover:-translate-y-1 transition-all duration-300 text-white/80 hover:text-white">
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Links Column 1 */}
            <div className="lg:col-span-3 lg:col-start-7 flex flex-col">
              <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-wider text-sm">
                {language === 'GR' ? 'Σύνδεσμοι' : 'Quick Links'}
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-sans text-white/60">
                <li><Link href="/vision" className="hover:text-[#eaf2d3] hover:translate-x-1 transition-all inline-block">{language === 'GR' ? 'Όραμα & Αποστολή' : 'Vision & Mission'}</Link></li>
                <li><Link href="/team" className="hover:text-[#eaf2d3] hover:translate-x-1 transition-all inline-block">{language === 'GR' ? 'Η Ομάδα μας' : 'Our Team'}</Link></li>
                <li><Link href="#" className="hover:text-[#eaf2d3] hover:translate-x-1 transition-all inline-block">{language === 'GR' ? 'Συνεργάτες' : 'Partners'}</Link></li>
                <li><Link href="#" className="hover:text-[#eaf2d3] hover:translate-x-1 transition-all inline-block">{language === 'GR' ? 'Νέα & Ανακοινώσεις' : 'News & Announcements'}</Link></li>
              </ul>
            </div>

            {/* Links Column 2 */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-wider text-sm">
                {language === 'GR' ? 'Επικοινωνία' : 'Contact'}
              </h4>
              <ul className="flex flex-col gap-4 text-sm font-sans text-white/60">
                <li className="flex flex-col gap-1">
                  <span className="text-white/40 text-xs uppercase tracking-wider">Email</span>
                  <a href="mailto:info@macc.gr" className="hover:text-[#eaf2d3] transition-colors">info@macc.gr</a>
                </li>
                <li className="flex flex-col gap-1 mt-2">
                  <span className="text-white/40 text-xs uppercase tracking-wider">{language === 'GR' ? 'Τηλέφωνο' : 'Phone'}</span>
                  <a href="tel:+302102200611" className="hover:text-[#eaf2d3] transition-colors">+30 210 220 0611</a>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Bottom Bar inside Main Footer for a unified look */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-xs font-medium tracking-wide text-center md:text-left font-sans">
              © {new Date().getFullYear()} Μεσογειακό Κέντρο Ικανότητων Αγροδιατροφής ΙΚΕ. All Rights Reserved.
            </p>
            
            <div className="flex items-center gap-6 text-xs text-white/40 font-sans">
              <Link href="#" className="hover:text-white transition-colors">{language === 'GR' ? 'Πολιτική Απορρήτου' : 'Privacy Policy'}</Link>
              <Link href="#" className="hover:text-white transition-colors">{language === 'GR' ? 'Όροι Χρήσης' : 'Terms of Use'}</Link>
            </div>
          </div>
          
        </div>
        
        {/* Scroll to Top Button - Floating */}
        <button 
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 md:right-8 md:bottom-8 w-12 h-12 bg-[#2e5343] hover:bg-[#3e6e59] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      </div>

    </footer>
  );
}
