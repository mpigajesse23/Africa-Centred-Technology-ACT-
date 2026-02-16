"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { 
  BarChart3, Briefcase, Globe, Landmark, LineChart, PieChart, 
  ArrowRight, CheckCircle, Zap, Shield, Database,
  Cpu, Code, Server, Users, Sparkles, ArrowUpRight, ChevronRight
} from 'lucide-react';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const services = [
  {
    id: "transformation",
    icon: PieChart,
    title: "Transformation Digitale",
    shortDesc: "Modernisez vos opérations",
    description: "Architecture d'écosystèmes numériques modernes qui rationalisent les opérations et stimulent une croissance exponentielle.",
    features: ["Audit digital complet", "Roadmap stratégique", "Accompagnement au changement", "Optimisation des processus", "Formation des équipes"],
    stats: { projects: "45+", satisfaction: "98%" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#1B3022"
  },
  {
    id: "engineering",
    icon: Code,
    title: "Excellence en Ingénierie",
    shortDesc: "Applications robustes",
    description: "Application de principes d'ingénierie rigoureux pour résoudre les problèmes complexes de logique métier.",
    features: ["Architecture logicielle", "Développement sur mesure", "Intégration systèmes", "Maintenance évolutive", "Tests automatisés"],
    stats: { projects: "60+", satisfaction: "99%" },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#D35400"
  },
  {
    id: "data",
    icon: BarChart3,
    title: "Intelligence des Données",
    shortDesc: "Décisions éclairées",
    description: "Exploitation de l'analyse avancée et de l'IA pour éclairer la prise de décision stratégique sur le continent.",
    features: ["Data Analytics", "Machine Learning", "Business Intelligence", "Visualisation avancée", "Pipelines ETL"],
    stats: { projects: "35+", satisfaction: "97%" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#F39C12"
  },
  {
    id: "conseil",
    icon: Landmark,
    title: "Conseil Stratégique",
    shortDesc: "Vision à long terme",
    description: "Accompagnement technologique et business de haut niveau pour une expansion durable sur les marchés africains.",
    features: ["Stratégie IT", "Due diligence tech", "Gouvernance données", "Transformation organisationnelle", "Change management"],
    stats: { projects: "30+", satisfaction: "100%" },
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#1B3022"
  },
  {
    id: "security",
    icon: Shield,
    title: "Cyber-Résilience",
    shortDesc: "Protection maximale",
    description: "Mise en place de frameworks de sécurité de classe mondiale pour protéger vos actifs numériques.",
    features: ["Audit sécurité", "SOC & SIEM", "Tests d'intrusion", "Conformité réglementaire", "Réponse aux incidents"],
    stats: { projects: "25+", satisfaction: "100%" },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#C0392B"
  },
  {
    id: "data-sovereignty",
    icon: Database,
    title: "Souveraineté des Données",
    shortDesc: "Données locales & conformes",
    description: "Accompagnement pour conserver les données stratégiques sur le sol africain et réduire la dépendance aux clouds étrangers, en cohérence avec l'AU Data Policy Framework (AUDPF) validé en 2025.",
    features: ["Stratégie de souveraineté numérique", "Architecture data locale", "Conformité AUDPF", "Gouvernance & souveraineté", "Plan de continuité locale"],
    stats: { projects: "12+", satisfaction: "98%" },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#1B3022"
  },
  {
    id: "process-automation",
    icon: Zap,
    title: "Automatisation des Processus Métier",
    shortDesc: "Efficacité opérationnelle",
    description: "Optimisation et automatisation des workflows métiers, avec ou sans IA, pour réduire les coûts, améliorer la qualité et accélérer l'exécution.",
    features: ["Cartographie des processus", "Automatisation no-code/low-code", "Agents IA métiers", "Intégration ERP/CRM", "Suivi & optimisation"],
    stats: { projects: "20+", satisfaction: "97%" },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "#D35400"
  },
];

const technologies = [
  { name: "Python", icon: Cpu, category: "Languages" },
  { name: "React", icon: Code, category: "Frontend" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "TensorFlow", icon: Cpu, category: "AI/ML" },
];

const process = [
  { 
    step: "01", 
    title: "Découverte", 
    description: "Analyse approfondie de vos besoins, défis et objectifs business.",
    duration: "1-2 semaines"
  },
  { 
    step: "02", 
    title: "Stratégie", 
    description: "Élaboration d'une roadmap personnalisée avec des jalons clairs.",
    duration: "1-2 semaines"
  },
  { 
    step: "03", 
    title: "Exécution", 
    description: "Implémentation agile avec des sprints et revues régulières.",
    duration: "8-12 semaines"
  },
  { 
    step: "04", 
    title: "Optimisation", 
    description: "Amélioration continue et support post-déploiement.",
    duration: "Continu"
  },
];

const industries = [
  { name: "Finance & Banque", projects: "45+", icon: Landmark },
  { name: "Télécommunications", projects: "30+", icon: Globe },
  { name: "E-commerce", projects: "25+", icon: Briefcase },
  { name: "Agriculture", projects: "20+", icon: PieChart },
  { name: "Santé", projects: "15+", icon: Shield },
  { name: "Énergie", projects: "15+", icon: Zap },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredProcess, setHoveredProcess] = useState<number | null>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <ImmersiveWrapper 
        ref={heroRef}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-abstract-movement-of-a-digital-data-network-1064-large.mp4"
        priority={true}
        className="min-h-[650px] flex items-center"
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
                Excellence Technologique
              </span>
            </motion.div>
            
            <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
              Solutions{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">d'Excellence</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={isHeroInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            
            <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[600px]">
              Des services d'ingénierie et de conseil sur mesure pour propulser votre entreprise 
              vers de nouveaux sommets. Nous transformons vos défis en opportunités.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1B3022] transition-all"
                >
                  Explorer nos services
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

      <section id="services" className="py-28 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[700px] mx-auto mb-16"
          >
            <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              Notre Expertise
            </span>
            <h2 className="text-[#1B3022] font-display text-[40px] font-bold uppercase mb-4">
              Ce que nous <span className="text-[#D35400]">Offrons</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#D35400] mx-auto mb-6" />
            <p className="text-[#2C2C2C]/70 text-[17px]">
              Une gamme complète de services pour accompagner votre transformation digitale de bout en bout.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-3">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveService(index)}
                  className={`p-5 cursor-pointer transition-all relative overflow-hidden group rounded-lg ${
                    activeService === index 
                      ? 'bg-[#1B3022] text-white' 
                      : 'bg-[#FCF9F2] hover:bg-[#1B3022]/5'
                  }`}
                >
                  <motion.div
                    className={`absolute left-0 top-0 w-1 h-full ${activeService === index ? 'bg-[#D35400]' : 'bg-transparent'}`}
                  />
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className={`w-12 h-12 flex items-center justify-center transition-colors rounded-lg ${
                        activeService === index ? 'bg-[#D35400]' : 'bg-[#1B3022]'
                      }`}
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-[15px] uppercase ${
                        activeService === index ? 'text-white' : 'text-[#1B3022]'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-[12px] ${
                        activeService === index ? 'text-white/70' : 'text-[#2C2C2C]/60'
                      }`}>
                        {service.shortDesc}
                      </p>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${
                      activeService === index ? 'text-[#F39C12] translate-x-1' : 'text-[#2C2C2C]/40'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#FCF9F2] p-8 md:p-12 rounded-2xl shadow-xl"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className="w-16 h-16 flex items-center justify-center rounded-xl"
                          style={{ backgroundColor: services[activeService].color }}
                          whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                        >
                          {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
                        </motion.div>
                        <div>
                          <h3 className="text-[#1B3022] font-bold text-[24px] uppercase">
                            {services[activeService].title}
                          </h3>
                          <div className="flex gap-4 mt-1">
                            <span className="text-[#D35400] text-[12px] font-bold">
                              {services[activeService].stats.projects} projets
                            </span>
                            <span className="text-[#2C2C2C]/60 text-[12px]">
                              {services[activeService].stats.satisfaction} satisfaction
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-[#2C2C2C]/80 text-[16px] leading-relaxed mb-8">
                        {services[activeService].description}
                      </p>

                      <h4 className="text-[#1B3022] font-bold text-[13px] uppercase mb-4">
                        Ce qui est inclus
                      </h4>
                      <ul className="space-y-3 mb-8">
                        {services[activeService].features.map((feature, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-[#D35400] flex-shrink-0" />
                            <span className="text-[#2C2C2C]/80 text-[14px]">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link 
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-[#D35400] hover:bg-[#1B3022] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-colors rounded-lg shadow-lg"
                        >
                          Demander un devis
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </motion.div>
                    </div>

                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
                      >
                        <Image
                          src={services[activeService].image}
                          alt={services[activeService].title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/40 to-transparent" />
                      </motion.div>
                      <motion.div 
                        className="absolute -bottom-4 -right-4 w-32 h-32 -z-10 rounded-2xl"
                        style={{ backgroundColor: services[activeService].color }}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <ImmersiveWrapper 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1065-large.mp4"
        className="py-28"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[700px] mx-auto mb-16"
          >
            <span className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              Notre Méthode
            </span>
            <h2 className="text-white font-display text-[40px] font-bold uppercase mb-4">
              Un Processus <span className="text-[#F39C12]">Éprouvé</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#D35400] mx-auto mb-6" />
            <p className="text-white/70 text-[17px]">
              Une approche méthodique pour garantir le succès de chaque projet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProcess(index)}
                onMouseLeave={() => setHoveredProcess(null)}
                className="relative group"
              >
                <motion.div
                  className={`p-8 transition-all rounded-2xl ${
                    hoveredProcess === index 
                      ? 'bg-[#D35400] shadow-2xl' 
                      : 'bg-white/5 backdrop-blur-md border border-white/10'
                  }`}
                  whileHover={{ y: -10 }}
                >
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl ${
                      hoveredProcess === index ? 'bg-white' : 'bg-[#D35400]'
                    } transition-colors shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className={`text-[24px] font-extrabold ${
                      hoveredProcess === index ? 'text-[#D35400]' : 'text-white'
                    }`}>
                      {item.step}
                    </span>
                  </motion.div>
                  <h3 className="text-white font-bold text-[18px] uppercase mb-3 text-center">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-[14px] leading-relaxed text-center mb-4">
                    {item.description}
                  </p>
                  <div className={`text-center text-[12px] font-medium uppercase tracking-wider ${
                    hoveredProcess === index ? 'text-white/80' : 'text-[#F39C12]'
                  }`}>
                    {item.duration}
                  </div>
                </motion.div>
                
                {index < process.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#D35400]/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </ImmersiveWrapper>

      <section className="py-28 bg-[#FCF9F2] relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
                Industries
              </span>
              <h2 className="text-[#1B3022] font-display text-[40px] font-bold uppercase mb-6 leading-tight">
                Expertise <span className="text-[#D35400]">Sectorielle</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#D35400] mb-8" />
              <p className="text-[#2C2C2C]/70 text-[17px] leading-relaxed mb-10">
                Notre expérience couvre les principaux secteurs de l'économie africaine, 
                avec une compréhension approfondie des défis et opportunités spécifiques à chaque industrie.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 bg-white group cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <motion.div 
                      className="w-10 h-10 bg-[#1B3022] group-hover:bg-[#D35400] transition-colors flex items-center justify-center rounded-lg"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                    >
                      <industry.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <span className="text-[#1B3022] font-medium text-[14px] block">{industry.name}</span>
                      <span className="text-[#D35400] text-[12px] font-bold">{industry.projects} projets</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Industries Africa Centred Technology ( ACT )"
                width={600}
                height={550}
                className="w-full h-[550px] object-cover rounded-3xl shadow-2xl"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#D35400] -z-10 rounded-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-8 right-8 bg-[#1B3022] text-white p-6 rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[40px] font-extrabold block leading-none">150+</span>
                <span className="text-[12px] uppercase tracking-wider opacity-80">Projets Livrés</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ImmersiveWrapper className="py-20 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              Technologies
            </span>
            <h2 className="text-[#1B3022] font-display text-[36px] font-bold uppercase mb-4">
              Notre <span className="text-[#D35400]">Stack</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#D35400] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-[#FCF9F2] p-5 text-center group cursor-pointer rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-10 h-10 mx-auto mb-3 bg-[#1B3022] group-hover:bg-[#D35400] transition-colors flex items-center justify-center rounded-lg"
                >
                  <tech.icon className="w-5 h-5 text-white" />
                </motion.div>
                <span className="text-[#1B3022] font-bold text-[12px] uppercase block">
                  {tech.name}
                </span>
                <span className="text-[#2C2C2C]/50 text-[10px]">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </ImmersiveWrapper>

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
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 mx-auto mb-8 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-full shadow-2xl"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-white font-display text-[36px] md:text-[48px] font-bold uppercase mb-6 leading-tight">
              Prêt à démarrer <br />votre projet ?
            </h2>
            <p className="text-white/80 text-[18px] mb-10 max-w-[600px] mx-auto">
              Discutons de vos besoins et construisons ensemble la solution idéale 
              pour propulser votre entreprise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-[#D35400] px-10 py-5 text-[14px] font-bold uppercase tracking-widest hover:bg-[#1B3022] hover:text-white transition-all rounded-full shadow-xl"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 text-[14px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#D35400] transition-all rounded-full backdrop-blur-sm"
                >
                  Voir nos réalisations
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ImmersiveWrapper>

      <Footer />
    </main>
  );
}
