'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, Menu, X, Globe, Sprout } from 'lucide-react';
import Link from 'next/link';

// Custom Brand SVGs since Lucide v0.400+ removed them
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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
    {/* Left half background */}
    <path d="M50,5 C20,30 10,60 10,85 C10,105 25,115 50,115 Z" fill="#dcedee" />
    {/* Right half background */}
    <path d="M50,5 C80,30 90,60 90,85 C90,105 75,115 50,115 Z" fill="#eaf2d3" />
    
    {/* Outline */}
    <path d="M50,5 C20,30 10,60 10,85 C10,105 25,115 50,115 C75,115 90,105 90,85 C90,60 80,30 50,5 Z" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round"/>
    
    {/* Center line */}
    <line x1="50" y1="5" x2="50" y2="115" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    
    {/* Left branches */}
    {/* Top */}
    <polyline points="50,45 35,30" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="35" cy="30" r="4.5" fill="#dcedee" stroke="currentColor" strokeWidth="4.5"/>
    {/* Middle */}
    <polyline points="50,70 35,55 20,55" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinejoin="round" strokeLinecap="round"/>
    <circle cx="20" cy="55" r="4.5" fill="#dcedee" stroke="currentColor" strokeWidth="4.5"/>
    {/* Bottom */}
    <polyline points="50,90 30,75" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="30" cy="75" r="4.5" fill="#dcedee" stroke="currentColor" strokeWidth="4.5"/>

    {/* Right branches */}
    {/* Top */}
    <polyline points="50,25 65,40" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="65" cy="40" r="4.5" fill="#eaf2d3" stroke="currentColor" strokeWidth="4.5"/>
    {/* Middle */}
    <polyline points="50,50 75,65" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="75" cy="65" r="4.5" fill="#eaf2d3" stroke="currentColor" strokeWidth="4.5"/>
    {/* Bottom */}
    <polyline points="50,95 70,80" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round"/>
    <circle cx="70" cy="80" r="4.5" fill="#eaf2d3" stroke="currentColor" strokeWidth="4.5"/>
  </svg>
);

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to style navbar dynamically
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const menuItems = [
    {
      name: 'macc',
      label: t('nav.macc'),
      isDropdown: true,
      subItems: [
        { label: t('nav.macc.vision'), href: '/vision' },
        { label: t('nav.macc.team'), href: '/team' },
        { label: t('nav.macc.partners'), href: '/partners' },
        { label: t('nav.macc.services'), href: '/services' },
        { label: t('nav.macc.casestudies'), href: '#case-studies' },
      ]
    },
    {
      name: 'soil',
      label: t('nav.maccSoil'),
      isDropdown: true,
      subItems: []
    },
    {
      name: 'products',
      label: t('nav.products'),
      isDropdown: true,
      subItems: [
        { label: t('nav.products.smartAgro'), href: '#smart-agro' },
        { label: t('nav.products.fertiwool'), href: '#fertiwool' },
        { label: t('nav.products.flaivor'), href: '#flaivor' },
      ]
    },
    {
      name: 'members',
      label: language === 'GR' ? 'ΣΥΝΔΕΔΕΜΕΝΑ ΜΕΛΗ' : 'ASSOCIATED MEMBERS',
      isDropdown: false,
      href: '#members'
    },
    {
      name: 'news',
      label: t('nav.news'),
      isDropdown: false,
      href: '#news'
    }
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4 pointer-events-none">
      <header 
        className={`pointer-events-auto transition-all duration-500 rounded-full w-full max-w-7xl border ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl py-2 px-6' 
            : 'bg-black/20 backdrop-blur-md border-transparent py-4 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group">
            <MaccLogo className="w-10 h-10 text-white stroke-[1.5]" />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-white leading-tight">
                MACC
              </span>
              <span className="text-[9px] uppercase tracking-wide text-gray-300 font-sans leading-tight">
                Μεσογειακό Κέντρο<br />Ικανότητων Αγροδιατροφής
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.isDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.isDropdown && setActiveDropdown(null)}
              >
                {item.isDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className={`flex items-center gap-1 font-sans font-medium text-[13px] tracking-wide text-white transition-all duration-300 px-5 py-2 rounded-full cursor-pointer ${
                      activeDropdown === item.name 
                        ? 'bg-white/20 shadow-inner' 
                        : 'hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="font-sans font-medium text-[13px] tracking-wide text-white transition-all duration-300 px-5 py-2 rounded-full hover:bg-white/10 block"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Panel */}
                <AnimatePresence>
                  {item.isDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-64 bg-black/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden z-50 rounded-2xl p-2"
                    >
                      {item.subItems?.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="block px-4 py-3 text-[14px] font-medium text-white hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-sans"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Controls: Language Switcher, Socials & CTA */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-black/20 p-1 rounded-full border border-white/10">
              <button
                onClick={() => setLanguage('GR')}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 cursor-pointer ${language === 'GR' ? 'bg-white/20 text-white shadow-sm' : 'opacity-50 hover:opacity-100 hover:bg-white/10'}`}
              >
                GR
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-300 cursor-pointer ${language === 'EN' ? 'bg-white/20 text-white shadow-sm' : 'opacity-50 hover:opacity-100 hover:bg-white/10'}`}
              >
                EN
              </button>
            </div>

            {/* Contact Button */}
            <Link 
              href="#join"
              className="ml-2 px-6 py-2.5 rounded-full bg-white text-[#1a1a1a] font-sans font-medium text-sm tracking-wide hover:bg-gray-200 transition-all duration-300 shadow-md"
            >
              Επικοινωνία
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pl-2 border-l border-white/10">
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white hover:bg-white/20 transition-all duration-300">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white hover:bg-white/20 transition-all duration-300">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white hover:bg-white/20 transition-all duration-300">
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile Hamburguer Button */}
          <div className="flex items-center lg:hidden gap-4">
            {/* Language Switcher Mobile */}
            <div className="flex items-center bg-[#041a0e]/80 border border-agro-border/50 rounded-lg p-0.5 font-mono text-[10px]">
              <button
                onClick={() => setLanguage('GR')}
                className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                  language === 'GR' ? 'bg-agro-accent text-[#020a06] font-bold' : 'text-gray-400'
                }`}
              >
                GR
              </button>
              <button
                onClick={() => setLanguage('EN')}
                className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                  language === 'EN' ? 'bg-agro-accent text-[#020a06] font-bold' : 'text-gray-400'
                }`}
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-agro-border bg-[#041a0e]/50 text-gray-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden w-full bg-[#020c08]/95 backdrop-blur-2xl border-b border-agro-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-agro-border/10 pb-2">
                  {item.isDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full font-heading font-medium text-base text-gray-200 py-2 cursor-pointer"
                      >
                        {item.label}
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180 text-agro-accent' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="pl-4 mt-1 space-y-2 border-l border-agro-border/30"
                          >
                            {item.subItems?.map((subItem, idx) => (
                              <Link
                                key={idx}
                                href={subItem.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-2 text-sm text-gray-400 hover:text-agro-accent transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={item.href || '#'}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-heading font-medium text-base text-gray-200 py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Socials & CTA in Mobile Menu */}
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-6 justify-center">
                  <a href="#" className="text-gray-400 hover:text-agro-accent">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-agro-accent">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-agro-accent">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                </div>

                <Link
                  href="#join"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-agro-green to-agro-accent text-center text-[#020a06] font-heading font-bold text-sm tracking-wide shadow-lg"
                >
                  {t('nav.join')}
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </div>
  );
}
