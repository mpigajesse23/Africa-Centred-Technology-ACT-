"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle, Users, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { value: "15", label: "Projets", icon: Target },
  { value: "100%", label: "Satisfaction", icon: Users },
  { value: "2", label: "Pays", icon: Award },
];

const values = [
  "Innovation technologique au service de l'Afrique",
  "Excellence opérationnelle sans compromis",
  "Partenariats durables et transparents",
  "Impact mesurable et croissance tangible"
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative z-10 overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Équipe Africa Centred Technology ( ACT )"
                width={600}
                height={500}
                className="w-full h-[500px] object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-[#1B3022]/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
              />
            </motion.div>

            <motion.div 
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#F39C12] z-0"
              initial={{ scale: 0, rotate: -10 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />

            <motion.div 
              className="absolute -top-6 -left-6 bg-[#1B3022] text-white p-6 z-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span 
                className="text-[48px] font-extrabold block leading-none"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                2
              </motion.span>
              <span className="text-[14px] uppercase tracking-wider opacity-80">Pays</span>
            </motion.div>

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-[#D35400] z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block"
            >
              Qui sommes-nous
            </motion.span>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#1B3022] font-display text-[42px] font-bold uppercase mb-4 leading-tight"
            >
              Pionniers de la <span className="text-[#D35400]">Transformation</span> Digitale en Afrique
            </motion.h2>

            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-1.5 bg-[#D35400] mb-6 origin-left"
            />

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#2C2C2C] font-body text-[17px] leading-relaxed mb-6 opacity-80"
            >
              Africa Centred Technology ( ACT ) est née en 2023 avec la conviction que l'Afrique possède un potentiel technologique immense, 
              prêt à être libéré. Depuis notre lancement, nous accompagnons les entreprises africaines 
              dans leur voyage vers l'excellence digitale.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-[#2C2C2C] font-body text-[17px] leading-relaxed mb-8 opacity-80"
            >
              Notre équipe d'ingénieurs et de consultants de haut niveau combine expertise technique mondiale 
              et connaissance approfondie des marchés africains pour créer des solutions qui font la différence.
            </motion.p>

            <motion.ul className="space-y-4 mb-10">
              {values.map((value, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#D35400]" />
                  </motion.div>
                  <span className="text-[#1B3022] font-medium">{value}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(211, 84, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D35400] hover:bg-[#1B3022] text-white px-10 py-4 text-[14px] font-bold uppercase tracking-widest transition-colors duration-300"
            >
              Découvrir notre histoire
            </motion.button>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#FCF9F2] p-8 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <stat.icon className="w-8 h-8 text-[#D35400] mx-auto" />
              </motion.div>
              <motion.span 
                className="text-[#1B3022] text-[42px] font-extrabold block mb-2"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {stat.value}
              </motion.span>
              <span className="text-[#2C2C2C] text-[14px] uppercase tracking-wider opacity-70">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
