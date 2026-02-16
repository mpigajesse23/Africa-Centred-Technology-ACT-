"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin, PieChart, Code, BarChart3, Shield, Database, Zap } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import TopBar from './top-bar';

const navLinks = [
  { href: "/", label: "Accueil" },
  { 
    href: "/about", 
    label: "À Propos",
  },
  { 
    href: "/services", 
    label: "Services",
    submenu: [
      { href: "/services#transformation", label: "Transformation Digitale", icon: PieChart },
      { href: "/services#engineering", label: "Excellence Ingénierie", icon: Code },
      { href: "/services#data", label: "Intelligence Données", icon: BarChart3 },
      { href: "/services#data-sovereignty", label: "Souveraineté des Données", icon: Database },
      { href: "/services#process-automation", label: "Automatisation Processus", icon: Zap },
      { href: "/services#security", label: "Cyber-Résilience", icon: Shield }
    ]
  },
  { href: "/projects", label: "Réalisations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastScrollY = useRef(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
<motion.header 
className="w-full z-50 fixed top-0 left-0"
initial={{ y: 0 }}
animate={{ y: 0 }}
>
<TopBar />

<motion.div 
className={`w-full transition-all duration-300 ${
isScrolled 
? 'bg-white/95 backdrop-blur-md shadow-lg' 
: 'bg-white border-b border-gray-100'
}`}
>
          <div className="container mx-auto px-4 lg:px-6 h-[70px] lg:h-[80px] flex items-center justify-between">
            
              <motion.div 
                className="flex-shrink-0"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link 
                  href="/" 
                  className="flex items-center gap-3 group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Image
                    src="/logo/logo.png"
                    alt="Africa Centred Technology ( ACT ) logo"
                    width={240}
                    height={240}
                    className="w-36 h-36 lg:w-40 lg:h-40 object-contain"
                    priority
                  />
                </Link>
              </motion.div>

            <nav className="hidden lg:flex items-center justify-center">
              {navLinks.map((link) => (
                <div 
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.href)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link 
                    href={link.href} 
                    className={`relative px-5 py-3 text-[13px] font-semibold uppercase tracking-wide transition-colors flex items-center gap-1.5 ${
                      pathname === link.href || (link.submenu && pathname.startsWith(link.href))
                        ? 'text-[#D35400]' 
                        : 'text-[#1B3022] hover:text-[#D35400]'
                    }`}
                  >
                    {link.label}
                    {link.submenu && (
                      <motion.span
                        animate={{ rotate: activeSubmenu === link.href ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.span>
                    )}
                    
                    <motion.span
                      className="absolute bottom-1 left-5 right-5 h-[2px] bg-[#D35400] origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: pathname === link.href ? 1 : 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>

                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2 z-50"
                      >
                        <div className="bg-white shadow-xl border border-gray-100 min-w-[420px] overflow-hidden">
                          <div className="grid grid-cols-2 gap-1 p-3">
                            {link.submenu.map((sublink, index) => (
                              <motion.div
                                key={sublink.href}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.03 }}
                              >
                                <Link
                                  href={sublink.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#FCF9F2] group transition-colors"
                                >
                                  <div className="w-9 h-9 bg-[#1B3022] group-hover:bg-[#D35400] transition-colors flex items-center justify-center">
                                    <sublink.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="text-[#1B3022] font-semibold text-[12px] uppercase tracking-wide group-hover:text-[#D35400] transition-colors">
                                    {sublink.label}
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          <div className="bg-[#1B3022] px-5 py-3.5">
                            <Link 
                              href="/services"
                              className="flex items-center justify-between text-white text-[12px] font-semibold uppercase tracking-wider hover:text-[#F39C12] transition-colors"
                            >
                              Voir tous les services
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3 lg:gap-4">
              <motion.button 
                onClick={() => setSearchOpen(true)}
                className="text-[#1B3022] hover:text-[#D35400] transition-colors p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search size={20} />
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="/contact" 
                  className="hidden md:inline-flex items-center gap-2 bg-[#D35400] hover:bg-[#1B3022] text-white text-[12px] font-bold px-5 lg:px-6 py-3 uppercase tracking-wider transition-all duration-300 group"
                >
                  <span>Démarrer un projet</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.button 
                className="lg:hidden text-[#1B3022] p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 top-[70px] bg-white z-40 overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-6">
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between py-4 border-b border-gray-100 ${
                          pathname === link.href 
                            ? 'text-[#D35400]' 
                            : 'text-[#1B3022]'
                        }`}
                      >
                        <span className="text-[15px] font-semibold uppercase tracking-wide">
                          {link.label}
                        </span>
                        <ArrowRight className={`w-4 h-4 ${pathname === link.href ? 'text-[#D35400]' : 'text-gray-300'}`} />
                      </Link>
                      
                      {link.submenu && (
                        <div className="py-3 space-y-2 bg-[#FCF9F2] -mx-4 px-6">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.href}
                              href={sublink.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-2.5 text-[#2C2C2C]/80 hover:text-[#D35400] transition-colors"
                            >
                              <div className="w-8 h-8 bg-[#1B3022] flex items-center justify-center">
                                <sublink.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-[13px] font-medium">{sublink.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link 
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-[#D35400] hover:bg-[#1B3022] text-white text-[13px] font-bold px-6 py-4 uppercase tracking-wider transition-colors"
                  >
                    Démarrer un projet
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 p-6 bg-[#1B3022] text-white"
                >
                  <h4 className="font-bold text-[13px] uppercase mb-4">Contactez-nous</h4>
                  <div className="space-y-3 text-[13px] text-white/80">
                    <a href="tel:+212694528498" className="flex items-center gap-3 hover:text-[#F39C12] transition-colors">
                      <Phone className="w-4 h-4 text-[#F39C12]" />
                      +212 694-528498
                    </a>
                    <a href="mailto:contact@act.africa" className="flex items-center gap-3 hover:text-[#F39C12] transition-colors">
                      <Mail className="w-4 h-4 text-[#F39C12]" />
                      contact@act.africa
                    </a>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-[#F39C12]" />
                      Casablanca, Maroc
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#1B3022]/95 backdrop-blur-md z-[100] flex items-start justify-center pt-[20vh]"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              className="w-full max-w-[600px] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full px-6 py-5 bg-white text-[#1B3022] text-[16px] font-medium placeholder:text-[#2C2C2C]/40 focus:outline-none border-2 border-transparent focus:border-[#D35400] transition-colors"
                />
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#1B3022] hover:text-[#D35400] transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-4"
              >
                <p className="text-white/50 text-[12px] mb-3 uppercase tracking-wider">Recherches populaires</p>
                <div className="flex flex-wrap gap-2">
                  {["Transformation digitale", "Applications mobiles", "Data Analytics"].map((term, i) => (
                    <motion.button
                      key={term}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.25 + i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white/10 hover:bg-[#D35400] text-white text-[12px] font-medium transition-colors"
                    >
                      {term}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setSearchOpen(false)}
                className="mt-6 text-white/50 text-[12px] hover:text-white transition-colors flex items-center gap-2 mx-auto"
              >
                <X className="w-4 h-4" />
                Fermer
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

<div className="h-[114px] lg:h-[134px]" />
</>
);
};

export default Header;
