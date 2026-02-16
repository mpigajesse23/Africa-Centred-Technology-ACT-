"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ArrowUp, Linkedin, Facebook, Youtube } from 'lucide-react';
import TikTokIcon from '@/components/ui/tiktok-icon';
import { motion } from 'framer-motion';

const footerLinks = {
  services: [
    { name: "Transformation Digitale", href: "/services#transformation" },
    { name: "Excellence en Ingénierie", href: "/services#engineering" },
    { name: "Intelligence des Données", href: "/services#data" },
    { name: "Conseil Stratégique", href: "/services#consulting" },
    { name: "Cyber-Résilience", href: "/services#security" },
  ],
  company: [
    { name: "À Propos", href: "/about" },
    { name: "Notre Équipe", href: "/about#team" },
    { name: "Carrières", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/resources" },
    { name: "Case Studies", href: "/projects" },
    { name: "Webinaires", href: "/webinars" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: TikTokIcon, href: "#", label: "TikTok" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B3022] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link 
              href="/" 
              className="inline-flex items-center mb-6"
            >
              <Image
                src="/logo/logo1.png"
                alt="Africa Centred Technology ( ACT ) logo"
                width={200}
                height={200}
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain"
                priority
              />
            </Link>

            <p className="text-white/70 font-body text-[15px] leading-relaxed mb-8 max-w-[350px]">
              Partenaire d’ingénierie et de technologie pour accélérer la transformation des entreprises africaines en leaders mondiaux.
            </p>

              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-[#D35400]" />
                  <span className="text-white/70 text-[14px]">Mer Sultan 6e Rue chateau Ru d'Agadir, Casablanca, Maroc</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-[#D35400]" />
                  <span className="text-white/70 text-[14px]">+212 694-528498 | +212 662-777507 | +212 779-635687</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-[#D35400]" />
                  <span className="text-white/70 text-[14px]">contact@act.africa</span>
                </motion.div>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-[16px] font-bold uppercase tracking-wider mb-6 text-white">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href}
                    className="text-white/60 text-[14px] hover:text-[#F39C12] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-[16px] font-bold uppercase tracking-wider mb-6 text-white">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href}
                    className="text-white/60 text-[14px] hover:text-[#F39C12] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-[16px] font-bold uppercase tracking-wider mb-6 text-white">
              Ressources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }}>
                  <Link 
                    href={link.href}
                    className="text-white/60 text-[14px] hover:text-[#F39C12] transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/50 text-[13px] text-center md:text-left"
            >
              © 2026 Africa Centred Technology ( ACT ). Tous droits réservés. Fait avec passion en Afrique.
            </motion.p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3, backgroundColor: "#D35400" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white/10 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, backgroundColor: "#D35400" }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-[#D35400] flex items-center justify-center transition-colors"
              aria-label="Retour en haut"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="h-1 bg-gradient-to-r from-[#D35400] via-[#F39C12] to-[#D35400]"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
    </footer>
  );
};

export default Footer;
