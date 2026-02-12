"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["Tous", "Web", "Mobile", "Data", "Cloud"];

const projects = [
  {
    title: "Plateforme FinTech Pan-Africaine",
    category: "Web",
    description: "Solution de paiement mobile permettant les transferts transfrontaliers en temps réel.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Blockchain"]
  },
  {
    title: "App Mobile Agritech",
    category: "Mobile",
    description: "Application connectant les agriculteurs aux marchés et fournissant des analyses météo prédictives.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "AI/ML", "IoT"]
  },
  {
    title: "Dashboard Analytics Télécoms",
    category: "Data",
    description: "Système d'analyse en temps réel pour optimiser les performances réseau d'un opérateur majeur.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Tableau", "Big Data"]
  },
  {
    title: "Infrastructure Cloud E-commerce",
    category: "Cloud",
    description: "Migration et optimisation cloud pour une marketplace e-commerce régionale.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AWS", "Kubernetes", "Terraform"]
  },
  {
    title: "Portail Bancaire Digital",
    category: "Web",
    description: "Refonte complète du portail client d'une banque majeure avec authentification biométrique.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "Security"]
  },
  {
    title: "Système IoT Smart City",
    category: "Data",
    description: "Réseau de capteurs intelligents pour la gestion urbaine d'une capitale africaine.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["IoT", "Edge Computing", "AI"]
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-[#1B3022] overflow-hidden" id="projects">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[800px] mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white font-display text-[42px] font-bold uppercase mb-4"
          >
            Nos <span className="text-[#F39C12]">Réalisations</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1.5 bg-[#D35400] mb-6 mx-auto origin-center"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/70 font-body text-[18px]"
          >
            Des projets qui transforment les entreprises africaines et créent un impact durable sur le continent.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`px-6 py-3 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-[#D35400] text-white' 
                  : 'bg-transparent text-white/60 border border-white/20 hover:border-[#F39C12] hover:text-[#F39C12]'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-[#0D1A12] overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-[#1B3022] via-transparent to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.9 }}
                  />
                  
                  <motion.div
                    className="absolute top-4 right-4 w-10 h-10 bg-[#D35400] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>

                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-[#F39C12]/20 text-[#F39C12] text-[10px] font-bold uppercase px-2 py-1"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <motion.span 
                    className="text-[#D35400] text-[11px] font-bold uppercase tracking-wider mb-2 block"
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-white font-display text-[20px] font-bold uppercase mb-3 group-hover:text-[#F39C12] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 font-body text-[14px] leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <motion.a 
                    href="#"
                    className="inline-flex items-center text-[12px] font-bold uppercase tracking-wider text-[#F39C12] hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Voir le projet
                    <motion.span 
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </motion.a>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-[#D35400]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(211, 84, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D35400] hover:bg-[#F39C12] text-white px-10 py-4 text-[14px] font-bold uppercase tracking-widest transition-colors duration-300 inline-flex items-center gap-3"
          >
            Voir tous les projets
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
