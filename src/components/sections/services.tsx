"use client";

import React from "react";
import { BarChart3, Briefcase, Globe, Landmark, LineChart, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Transformation Digitale",
    description: "Architecture d'écosystèmes numériques modernes qui rationalisent les opérations et stimulent une croissance exponentielle.",
    icon: PieChart,
    color: "#1B3022"
  },
  {
    title: "Excellence en Ingénierie",
    description: "Application de principes d'ingénierie rigoureux pour résoudre les problèmes complexes de logique métier.",
    icon: Briefcase,
    color: "#D35400"
  },
  {
    title: "Intelligence des Données",
    description: "Exploitation de l'analyse avancée et de l'IA pour éclairer la prise de décision stratégique sur le continent.",
    icon: BarChart3,
    color: "#F39C12"
  },
  {
    title: "Conseil Stratégique",
    description: "Accompagnement technologique et business de haut niveau pour une expansion durable sur les marchés africains.",
    icon: Landmark,
    color: "#1B3022"
  },
  {
    title: "Cyber-Résilience",
    description: "Mise en place de frameworks de sécurité de classe mondiale pour protéger vos actifs numériques.",
    icon: LineChart,
    color: "#D35400"
  },
  {
    title: "Intégration Globale",
    description: "Connexion entre l'innovation africaine et les standards mondiaux via une intégration technologique sans faille.",
    icon: Globe,
    color: "#F39C12"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-[#FCF9F2] overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-[800px] mb-16"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block"
          >
            Ce que nous faisons
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#1B3022] font-display text-[42px] font-bold uppercase mb-4"
          >
            Notre Expertise
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[#2C2C2C] font-body text-[18px] opacity-80"
          >
            Nous proposons des solutions d'ingénierie et de conseil adaptées aux enjeux du marché africain, alliant innovation technologique et vision stratégique.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 }
              }}
              className="bg-white p-10 shadow-sm border border-gray-100 group relative overflow-hidden cursor-pointer"
            >
              <motion.div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: service.color }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div 
                className="absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-5"
                style={{ backgroundColor: service.color }}
                whileHover={{ scale: 2, opacity: 0.1 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div 
                className="mb-6 relative z-10"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <service.icon 
                  size={48} 
                  style={{ color: service.color }}
                />
              </motion.div>
              <h3 className="text-[#1B3022] font-display text-[20px] font-bold uppercase mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-[#2C2C2C] font-body text-[15px] opacity-70 mb-6 leading-relaxed relative z-10">
                {service.description}
              </p>
              <motion.a 
                href="#" 
                className="inline-flex items-center text-[13px] font-bold uppercase tracking-wider text-[#1B3022] hover:text-[#D35400] transition-colors relative z-10"
                whileHover={{ x: 5 }}
              >
                En savoir plus
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-[#1B3022] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #F39C12 0%, transparent 50%),
                               radial-gradient(circle at 80% 50%, #D35400 0%, transparent 50%)`
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[28px] font-bold mb-2"
            >
              À la recherche d'un partenaire stratégique ?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="opacity-80"
            >
              Nous sommes prêts à propulser votre entreprise vers de nouveaux sommets.
            </motion.p>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(211, 84, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white font-display text-[14px] font-bold px-10 py-4 uppercase tracking-wider transition-colors duration-300 relative z-10"
          >
            Contactez-nous
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
