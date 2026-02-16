"use client";

import React from 'react';
import { Phone, Clock, Mail, Facebook, Linkedin, Youtube, MapPin } from 'lucide-react';
import TikTokIcon from '@/components/ui/tiktok-icon';
import { motion } from 'framer-motion';

const TopBar = () => {
  return (
    <motion.div 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      className="w-full bg-[#1B3022] text-white py-2.5 hidden md:block border-b border-white/10"
    >
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-6">
        <div className="flex items-center gap-6 text-[12px] font-medium">
          <motion.a 
            href="tel:+212694528498"
            className="flex items-center gap-2 hover:text-[#F39C12] transition-colors group"
            whileHover={{ x: 2 }}
          >
            <span className="w-6 h-6 bg-[#D35400] flex items-center justify-center group-hover:bg-[#F39C12] transition-colors">
              <Phone size={12} />
            </span>
            <span>+212 694-528498</span>
          </motion.a>
          
          <motion.a 
            href="mailto:contact@act.africa"
            className="flex items-center gap-2 hover:text-[#F39C12] transition-colors group"
            whileHover={{ x: 2 }}
          >
            <span className="w-6 h-6 bg-white/10 flex items-center justify-center group-hover:bg-[#D35400] transition-colors">
              <Mail size={12} />
            </span>
            <span>contact@act.africa</span>
          </motion.a>
          
          <div className="hidden lg:flex items-center gap-2 text-white/70">
            <span className="w-6 h-6 bg-white/10 flex items-center justify-center">
              <Clock size={12} />
            </span>
            <span>Lun - Ven: 8h - 18h</span>
          </div>
          
          <div className="hidden xl:flex items-center gap-2 text-white/70">
            <span className="w-6 h-6 bg-white/10 flex items-center justify-center">
              <MapPin size={12} />
            </span>
            <span>Casablanca, Maroc</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="text-white/50 text-[11px] mr-3 hidden lg:inline">Suivez-nous</span>
          {[
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Facebook, href: "#", label: "Facebook" },
            { icon: Youtube, href: "#", label: "YouTube" },
            { icon: TikTokIcon, href: "#", label: "TikTok" },
          ].map((social, index) => (
            <motion.a 
              key={social.label}
              href={social.href} 
              className="w-7 h-7 flex items-center justify-center bg-white/0 hover:bg-[#D35400] transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              <social.icon className="w-[13px] h-[13px]" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TopBar;
