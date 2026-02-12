"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const assetUrl = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  return (
    <section className="relative w-full h-[800px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={assetUrl}
            alt="Professional Consulting Background"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#1B3022]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B3022] via-[#1B3022]/40 to-transparent" />
      </div>

      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#F39C12]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-[800px]">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center bg-[#D35400] text-white px-4 py-1.5 mb-8"
          >
            <motion.span 
              className="text-[12px] font-extrabold uppercase tracking-[3px]"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Binacod Africa • Engineering the Future
            </motion.span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white font-display text-[54px] md:text-[72px] font-extrabold uppercase leading-[1.05] mb-6 tracking-tight"
          >
            Accélérez votre <motion.span 
              className="text-[#F39C12] inline-block"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >Croissance</motion.span> <br />
            avec l'<motion.span 
              className="text-[#F39C12] inline-block"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >Excellence</motion.span> Digitale
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-white/80 font-body text-[20px] mb-10 max-w-[600px]"
          >
            Binacod Africa est un cabinet de conseil en ingénierie dédié à transformer les entreprises africaines en leaders technologiques mondiaux.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(211, 84, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-colors duration-300 flex items-center gap-3 group"
            >
              Commencer
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-4 group"
            >
              <motion.div 
                className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-[#F39C12] transition-colors duration-300"
                animate={{ 
                  boxShadow: ["0 0 0 0 rgba(243, 156, 18, 0)", "0 0 0 15px rgba(243, 156, 18, 0.1)", "0 0 0 0 rgba(243, 156, 18, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Play className="w-5 h-5 text-white fill-white group-hover:text-[#F39C12] group-hover:fill-[#F39C12] transition-colors" />
              </motion.div>
              <span className="text-white text-[14px] font-bold uppercase tracking-widest border-b border-white/20 pb-1 group-hover:text-[#F39C12] group-hover:border-[#F39C12] transition-all">
                Notre Vision
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full h-2 bg-[#F39C12] origin-left" 
      />

      <motion.div
        className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        {[1, 2, 3].map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer ${i === 0 ? 'bg-[#F39C12]' : 'bg-white/30'}`}
            whileHover={{ scale: 1.5 }}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
