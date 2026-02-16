"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Filter, Sparkles, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const categories = ["Tous", "IA", "E-commerce", "SIG", "Média"];

const projects = [
  {
    id: 1,
    title: "Chatbot Multimodal RAG",
    category: "IA",
    description: "Chatbot multimodal capable de répondre à partir de documents, images, audio et vidéo grâce à un pipeline RAG et embeddings multimodaux.",
    image: "/realisationprojet/2025/chatbotmulitmodale.png",
    tags: ["RAG", "OpenAI GPT-5", "pgvector", "Streamlit"],
    client: "ACT Lab",
    year: "2025",
    results: ["Recherche multimodale", "Indexation vectorielle", "Pipeline robuste"],
    featured: true
  },
  {
    id: 2,
    title: "CODRescue",
    category: "E-commerce",
    description: "Système de gestion e-commerce pour la préparation de commandes, logistique et supervision avec dashboards temps réel.",
    image: "/realisationprojet/2025/CODRescue-v2.png",
    tags: ["Django", "Tailwind", "PostgreSQL", "IA assistée"],
    client: "CODRescue",
    year: "2025",
    results: ["Process optimisés", "Suivi logistique", "KPI temps réel"],
    featured: true
  },
  {
    id: 3,
    title: "GreenSIG V1",
    category: "SIG",
    description: "Plateforme SIG de gestion des espaces verts avec cartographie interactive, planification et suivi des interventions.",
    image: "/realisationprojet/2026/GreenSIGapp.png",
    tags: ["React", "TypeScript", "Leaflet", "Tailwind"],
    client: "GreenSIG",
    year: "2026",
    results: ["Cartographie centralisée", "Gestion des équipes", "Inventaire optimisé"],
    featured: true
  },
  {
    id: 4,
    title: "GAM (Génies Afrique Médias)",
    category: "Média",
    description: "Plateforme média digitale panafricaine (Web TV + contenus éditoriaux) en architecture headless.",
    image: "/realisationprojet/2026/GAM-Genies-Afrique-Medias.png",
    tags: ["Next.js", "Django", "Wagtail", "PWA"],
    client: "AFRITECK INSTITUT",
    year: "2026",
    results: ["CMS éditorial", "Web TV", "SEO Google News"],
    featured: true
  }
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      <ImmersiveWrapper 
        ref={heroRef}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1065-large.mp4"
        priority={true}
        className="min-h-[600px] flex items-center"
      >
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-[800px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-[#D35400] text-white px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-[12px] font-bold uppercase tracking-[2px]">
                Portfolio
              </span>
            </motion.div>
            
            <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
              Nos{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">Réalisations</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={isHeroInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            
            <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[600px]">
              Découvrez nos projets qui transforment les entreprises africaines et créent 
              un impact durable sur le continent. Plus de 150 success stories.
            </p>

            <div className="flex items-center gap-8">
              {[
                { value: "15", label: "Projets" },
                { value: "20%", label: "Satisfaction" },
                { value: "2", label: "Pays" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="text-center"
                >
                  <span className="text-white text-[32px] font-extrabold block">{stat.value}</span>
                  <span className="text-white/60 text-[12px] uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
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

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              Projets Phares
            </span>
            <h2 className="text-[#1B3022] font-display text-[36px] font-bold uppercase mb-4">
              Success <span className="text-[#D35400]">Stories</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#D35400] mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer relative"
              >
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022] via-[#1B3022]/40 to-transparent" />
                  
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }}
                  >
                    <span className="bg-[#D35400] text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-lg shadow-lg">
                      {project.category}
                    </span>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-[#1B3022]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      animate={{ scale: hoveredProject === project.id ? 1 : 0 }}
                      className="w-16 h-16 bg-[#D35400] flex items-center justify-center rounded-xl"
                    >
                      <ArrowUpRight className="w-7 h-7 text-white" />
                    </motion.div>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="bg-white/10 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-bold text-[20px] uppercase mb-2 group-hover:text-[#F39C12] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-[13px] mb-3">{project.client} • {project.year}</p>
                    <div className="flex items-center gap-4">
                      {project.results.slice(0, 2).map((result, i) => (
                        <span key={i} className="text-[#F39C12] text-[11px] font-bold">
                          {result}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  className="h-1 bg-[#D35400] rounded-full mt-2"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredProject === project.id ? 1 : 0 }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#FCF9F2] sticky top-0 z-40 border-y border-[#1B3022]/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-5 h-5 text-[#1B3022] mr-2" />
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 text-[12px] font-bold uppercase tracking-wider transition-all duration-300 rounded-full ${
                  activeCategory === cat 
                    ? 'bg-[#D35400] text-white shadow-lg' 
                    : 'bg-white text-[#1B3022] hover:bg-[#1B3022] hover:text-white shadow-sm'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <span className="ml-2 bg-white/20 px-1.5 py-0.5 text-[10px] rounded">
                    {cat === "Tous" ? projects.length : projects.filter(p => p.category === cat).length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-[#FCF9F2] overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/80 via-transparent to-transparent" />
                    
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute top-4 right-4 w-10 h-10 bg-[#D35400] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>

                    <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="bg-[#F39C12]/20 backdrop-blur-sm text-white text-[9px] font-bold uppercase px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#D35400] text-[11px] font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-[#2C2C2C]/50 text-[11px]">{project.year}</span>
                    </div>
                    <h3 className="text-[#1B3022] font-bold text-[16px] uppercase mb-2 group-hover:text-[#D35400] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[#2C2C2C]/60 text-[13px] line-clamp-2 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#1B3022]/5">
                      <span className="text-[#2C2C2C]/60 text-[11px]">{project.client}</span>
                        <motion.span 
                          className="text-[#D35400] text-[11px] font-bold uppercase flex items-center gap-1"
                          whileHover={{ x: 5 }}
                        >
                          Détails <ArrowRight className="w-3 h-3" />
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            >
              <motion.div 
                className="absolute inset-0 bg-[#1B3022]/95 backdrop-blur-xl"
                onClick={() => setSelectedProject(null)}
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-[#FCF9F2] hover:bg-[#D35400] text-[#1B3022] hover:text-white rounded-full flex items-center justify-center transition-all z-10"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="grid lg:grid-cols-2">
                  <div className="relative h-[300px] lg:h-auto overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <div className="p-8 md:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-[#D35400] text-white text-[11px] font-bold uppercase px-4 py-1.5 rounded-full">
                        {selectedProject.category}
                      </span>
                      <span className="text-[#2C2C2C]/50 text-[13px] font-medium">{selectedProject.year}</span>
                    </div>

                    <h2 className="text-[#1B3022] font-display text-[32px] md:text-[40px] font-extrabold uppercase leading-tight mb-6">
                      {selectedProject.title}
                    </h2>

                    <div className="space-y-8">
                      <div>
                        <h4 className="text-[#D35400] text-[12px] font-bold uppercase tracking-widest mb-3">Le Client</h4>
                        <p className="text-[#1B3022] font-bold text-[18px]">{selectedProject.client}</p>
                      </div>

                      <div>
                        <h4 className="text-[#D35400] text-[12px] font-bold uppercase tracking-widest mb-3">À propos du projet</h4>
                        <p className="text-[#2C2C2C]/70 text-[16px] leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-[#D35400] text-[12px] font-bold uppercase tracking-widest mb-4">Résultats Clés</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {selectedProject.results.map((result, i) => (
                            <div key={i} className="bg-[#FCF9F2] p-4 rounded-xl border border-[#1B3022]/5">
                              <span className="text-[#1B3022] font-extrabold text-[15px] block">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[#D35400] text-[12px] font-bold uppercase tracking-widest mb-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tags.map((tag, i) => (
                            <span key={i} className="bg-[#1B3022] text-white text-[11px] font-bold uppercase px-4 py-2 rounded-lg">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-8 border-t border-[#1B3022]/5">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-3 bg-[#1B3022] hover:bg-[#D35400] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all rounded-xl shadow-xl"
                        >
                          Démarrer un projet similaire
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final CTA */}
        <ImmersiveWrapper 
          videoUrl="https://assets.mixkit.co/videos/preview/mixkit-abstract-movement-of-a-digital-data-network-1064-large.mp4"
          className="py-24"
        >
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-white font-display text-[36px] md:text-[48px] font-bold uppercase mb-8 leading-tight">
                Votre Vision, <br /><span className="text-[#F39C12]">Notre Expertise</span>
              </h2>
              <p className="text-white/70 text-[18px] mb-12 max-w-[600px] mx-auto">
                Prêt à faire de votre prochain projet une success story technologique ? 
                L'équipe Africa Centred Technology ( ACT ) est à votre écoute.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#D35400] text-white px-12 py-6 text-[15px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#D35400] transition-all rounded-full shadow-2xl"
                >
                  Parlons de votre projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </ImmersiveWrapper>
      </main>
    );
  }

