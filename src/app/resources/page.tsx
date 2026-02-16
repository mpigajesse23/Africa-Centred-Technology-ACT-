"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, BookOpen, Video, Code, Database, Shield, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const resourceCategories = [
  { id: "all", name: "Tous", icon: BookOpen },
  { id: "guides", name: "Guides", icon: FileText },
  { id: "videos", name: "Vidéos", icon: Video },
  { id: "code", name: "Code", icon: Code },
];

const resources = [
  {
    title: "Guide de Transformation Digitale pour PME Africaines",
    description: "Un guide complet pour aider les PME à naviguer leur transformation digitale.",
    category: "guides",
    type: "PDF",
    size: "2.4 MB",
    icon: FileText,
    color: "#D35400"
  },
  {
    title: "Architecture Cloud pour Applications Scalables",
    description: "Meilleures pratiques pour concevoir des architectures cloud robustes.",
    category: "guides",
    type: "PDF",
    size: "3.1 MB",
    icon: Database,
    color: "#F39C12"
  },
  {
    title: "Sécurité des Applications Web Modernes",
    description: "Techniques et outils pour sécuriser vos applications web.",
    category: "guides",
    type: "PDF",
    size: "1.8 MB",
    icon: Shield,
    color: "#C0392B"
  },
  {
    title: "Introduction à l'IA pour les Entreprises",
    description: "Comment intégrer l'intelligence artificielle dans votre stratégie.",
    category: "videos",
    type: "Vidéo",
    size: "45 min",
    icon: Cpu,
    color: "#1B3022"
  },
  {
    title: "Modèles de Code - API REST avec Next.js",
    description: "Templates de démarrage pour construire des APIs robustes.",
    category: "code",
    type: "GitHub",
    size: "Open Source",
    icon: Code,
    color: "#D35400"
  },
  {
    title: "Dashboard Analytics - Template React",
    description: "Template professionnel pour tableaux de bord analytics.",
    category: "code",
    type: "GitHub",
    size: "Open Source",
    icon: Code,
    color: "#F39C12"
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FCF9F2]">      
      {/* Hero Section */}
      <ImmersiveWrapper 
        videoUrl="https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4"
        priority={true}
        className="min-h-[650px] flex items-center"
      >
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-[#D35400] text-white px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-[12px] font-bold uppercase tracking-[2px]">
                Centre de Ressources
              </span>
            </motion.div>
            
            <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
              Documentation &{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">Ressources</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            
            <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[600px]">
              Accédez à notre bibliothèque de guides, templates et outils pour accélérer votre transformation digitale.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Demander l'Accès
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#resources"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1B3022] transition-all"
                >
                  Explorer les Ressources
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D35400] via-[#F39C12] to-[#D35400]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </ImmersiveWrapper>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {resourceCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-[13px] font-bold uppercase tracking-wider transition-all rounded-full flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-[#D35400] text-white shadow-lg'
                    : 'bg-[#FCF9F2] text-[#1B3022] hover:bg-[#F39C12] hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="p-8">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${resource.color}15` }}
                  >
                    <resource.icon className="w-8 h-8" style={{ color: resource.color }} />
                  </div>

                  <h3 className="text-[20px] font-bold text-[#1B3022] mb-3 leading-tight">
                    {resource.title}
                  </h3>

                  <p className="text-[14px] text-[#2C2C2C]/70 leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-[12px] text-[#2C2C2C]/60">
                      <span className="font-semibold">{resource.type}</span>
                      <span className="mx-2">•</span>
                      <span>{resource.size}</span>
                    </div>

                    <button
                      className="w-10 h-10 bg-[#D35400] text-white rounded-full flex items-center justify-center hover:bg-[#1B3022] transition-all"
                      aria-label="Télécharger"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1B3022] to-[#2C4A35] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white font-display text-[36px] md:text-[48px] font-bold uppercase mb-6 leading-tight">
              Besoin d'Aide ?
            </h2>
            <p className="text-[16px] text-white/80 max-w-2xl mx-auto mb-8">
              Notre équipe est là pour vous accompagner dans l'utilisation de nos ressources et outils.
            </p>
            <button className="px-8 py-4 bg-[#D35400] text-white font-bold text-[14px] uppercase tracking-wider rounded-full hover:bg-[#F39C12] transition-all">
              Contacter le Support
            </button>
          </motion.div>
        </div>
      </section>    </div>
  );
}
