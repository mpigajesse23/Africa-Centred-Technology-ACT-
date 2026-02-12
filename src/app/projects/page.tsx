"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Filter, Sparkles, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const categories = ["Tous", "Web", "Mobile", "Data", "Cloud"];

const projects = [
  {
    id: 1,
    title: "Plateforme FinTech Pan-Africaine",
    category: "Web",
    description: "Solution de paiement mobile permettant les transferts transfrontaliers en temps réel à travers 15 pays africains. Architecture microservices avec haute disponibilité.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Blockchain", "AWS"],
    client: "FinBank Africa",
    year: "2025",
    results: ["2M+ utilisateurs actifs", "15 pays connectés", "99.9% uptime"],
    featured: true
  },
  {
    id: 2,
    title: "App Mobile Agritech",
    category: "Mobile",
    description: "Application connectant les agriculteurs aux marchés et fournissant des analyses météo prédictives basées sur l'IA. Fonctionne hors ligne.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "AI/ML", "IoT", "Firebase"],
    client: "AgriConnect",
    year: "2025",
    results: ["50k+ agriculteurs", "+30% revenus", "80% précision météo"],
    featured: true
  },
  {
    id: 3,
    title: "Dashboard Analytics Télécoms",
    category: "Data",
    description: "Système d'analyse en temps réel pour optimiser les performances réseau d'un opérateur télécoms majeur avec prédiction de pannes.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Tableau", "Big Data", "Spark"],
    client: "TelecomPlus",
    year: "2024",
    results: ["-40% incidents", "ROI 300%", "5TB/jour traités"],
    featured: true
  },
  {
    id: 4,
    title: "Infrastructure Cloud E-commerce",
    category: "Cloud",
    description: "Migration et optimisation cloud pour une marketplace e-commerce régionale avec 2M+ utilisateurs actifs et scaling automatique.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["AWS", "Kubernetes", "Terraform", "GitOps"],
    client: "AfriShop",
    year: "2024",
    results: ["-60% coûts", "10x scalabilité", "Zero downtime"],
    featured: false
  },
  {
    id: 5,
    title: "Portail Bancaire Digital",
    category: "Web",
    description: "Refonte complète du portail client d'une banque majeure avec authentification biométrique et sécurité renforcée.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "Security", "OAuth2"],
    client: "BankWest Africa",
    year: "2024",
    results: ["500k clients", "+200% engagement", "0 breach"],
    featured: false
  },
  {
    id: 6,
    title: "Système IoT Smart City",
    category: "Data",
    description: "Réseau de capteurs intelligents pour la gestion urbaine d'une capitale africaine couvrant transport et énergie.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["IoT", "Edge Computing", "AI", "MQTT"],
    client: "Ville de Dakar",
    year: "2023",
    results: ["10k capteurs", "-25% énergie", "Traffic optimisé"],
    featured: false
  },
  {
    id: 7,
    title: "Plateforme EdTech",
    category: "Mobile",
    description: "Application d'apprentissage en ligne avec cours hors ligne pour zones à faible connectivité. Gamification intégrée.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Flutter", "Firebase", "Offline-first", "PWA"],
    client: "EduAfrica",
    year: "2023",
    results: ["100k étudiants", "85% complétion", "5 pays"],
    featured: false
  },
  {
    id: 8,
    title: "Solution HealthTech",
    category: "Web",
    description: "Plateforme de télémédecine connectant patients et médecins dans les zones rurales africaines avec dossiers médicaux électroniques.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Vue.js", "WebRTC", "HIPAA", "PostgreSQL"],
    client: "HealthBridge",
    year: "2023",
    results: ["25k consultations", "500 médecins", "12 régions"],
    featured: false
  },
  {
    id: 9,
    title: "Data Lake Assurance",
    category: "Cloud",
    description: "Architecture data lake pour centraliser et analyser les données clients d'un groupe d'assurance pan-africain.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["Snowflake", "dbt", "Airflow", "Azure"],
    client: "InsureAfrica Group",
    year: "2022",
    results: ["50TB données", "+45% insights", "8 filiales"],
    featured: false
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
                { value: "150+", label: "Projets" },
                { value: "98%", label: "Satisfaction" },
                { value: "15", label: "Pays" }
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
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
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
                      className="object-cover"
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
                L'équipe Binacod Africa est à votre écoute.
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

