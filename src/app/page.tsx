"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, Globe, CheckCircle, Users, Award, Target, Sparkles, Play, Quote, ArrowUpRight, Zap, Shield, Code, BrainCircuit, Cpu, Rocket, Laptop } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import CookieConsent from '@/components/sections/cookie-consent';
import { AINodesBackground, AfricanPattern, ImmersiveWrapper, AIParticleFlow } from '@/components/ui/immersive-backgrounds';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const services = [
  { 
    title: "Transformation Digitale", 
    icon: BarChart3, 
    description: "Modernisez vos opérations avec des solutions sur mesure",
    stats: "45+ projets"
  },
  { 
    title: "Intelligence Artificielle", 
    icon: BrainCircuit, 
    description: "Solutions d'IA générative et prédictive pour l'Afrique",
    stats: "15+ projets"
  },
  { 
    title: "Excellence en Ingénierie", 
    icon: Code, 
    description: "Des applications robustes et évolutives",
    stats: "30+ projets"
  },
];

const stats = [
  { value: "15", suffix: "+", label: "Projets Réalisés", icon: Target },
  { value: "20", suffix: "+", label: "Clients Satisfaits", icon: Users },
  { value: "3", suffix: "+", label: "Années d'innovation", icon: Award },
  { value: "10", suffix: "+", label: "Talents", icon: CheckCircle },
];

const projects = [
  {
    title: "Chatbot Multimodal RAG",
    category: "IA",
    image: "/realisationprojet/2025/chatbotmulitmodale.png",
    description: "RAG multimodal sur documents, images, audio et vidéo"
  },
  {
    title: "CODRescue",
    category: "E-commerce",
    image: "/realisationprojet/2025/CODRescue-v2.png",
    description: "Gestion e-commerce et logistique avec dashboards temps réel"
  },
  {
    title: "GreenSIG V1",
    category: "SIG",
    image: "/realisationprojet/2026/GreenSIGapp.png",
    description: "Gestion des espaces verts avec cartographie interactive"
  },
  {
    title: "GAM (Génies Afrique Médias)",
    category: "Média",
    image: "/realisationprojet/2026/GAM-Genies-Afrique-Medias.png",
    description: "Web TV panafricaine et contenus éditoriaux headless"
  },
];

const testimonials = [
  {
    quote: "ACT a transformé notre vision en réalité. Leur expertise en IA et leur compréhension du marché africain sont inégalées.",
    author: "Marie Koné",
    role: "CEO, FinBank Côte d'Ivoire",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Une équipe exceptionnelle qui livre toujours au-delà des attentes. Notre transformation digitale n'aurait pas été possible sans eux.",
    author: "Kwame Asante",
    role: "CTO, TechGhana",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const clients = [
  "Orange", "MTN", "Ecobank", "Total", "Société Générale", "Air Sénégal"
];

const AnimatedCounter = ({ value, suffix }: { value: string; suffix: string }) => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });
  
  return (
    <motion.span
      ref={counterRef}
      className="text-[#1B3022] text-[56px] md:text-[72px] font-extrabold block leading-none"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {value}<span className="text-[#D35400]">{suffix}</span>
    </motion.span>
  );
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
      <main className="min-h-screen bg-white overflow-x-hidden">
        
        {/* Hero Section with Immersive Background */}
        <ImmersiveWrapper 

        ref={heroRef}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-sun-setting-over-the-horizon-of-a-savannah-34531-large.mp4"
        className="min-h-[100vh] flex items-center"
        priority={true}
      >
        <div className="container mx-auto px-4 relative z-10 py-32">
          <motion.div 
            className="max-w-[900px]"
            style={{ opacity: heroOpacity }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-[#1B3022]/40 text-white px-5 py-2.5 mb-8 border border-white/20"
            >
              <BrainCircuit className="w-5 h-5 text-[#F39C12]" />
              <span className="text-[12px] font-bold uppercase tracking-[3px]">
                L'IA au service de l'émergence africaine
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white font-display text-[48px] md:text-[64px] lg:text-[80px] font-extrabold uppercase leading-[0.95] mb-8 tracking-tight"
            >
              L'Afrique de{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">Demain</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-2 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
              <br />
              <span className="text-[40px] md:text-[56px] lg:text-[64px] font-light normal-case">
                se construit avec l'IA
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 font-body text-[18px] md:text-[20px] mb-12 max-w-[650px] leading-relaxed"
            >
              Africa Centred Technology ( ACT ) fusionne l'intelligence artificielle et l'ingénierie de pointe 
              pour propulser les entreprises africaines au sommet de l'innovation mondiale.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="group bg-[#D35400] hover:bg-white text-white hover:text-[#D35400] px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Démarrer votre transformation IA
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/projects"
                  className="group flex items-center gap-4 text-white"
                >
                  <span className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F39C12] transition-colors relative">
                    <Play className="w-5 h-5 ml-1 relative z-10" fill="white" />
                    <motion.span 
                      className="absolute inset-0 rounded-full border border-white/30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </span>
                  <span className="text-[14px] font-bold uppercase tracking-wider border-b border-white/30 pb-1 group-hover:border-[#F39C12] transition-colors">
                    Explorer nos solutions
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 pt-8 border-t border-white/20"
            >
              <p className="text-white/50 text-[12px] uppercase tracking-wider mb-4">Pionniers de la tech africaine</p>
              <div className="flex flex-wrap items-center gap-8">
                {clients.map((client, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.6, y: 0 }}
                    transition={{ delay: 1.2 + i * 0.1 }}
                    whileHover={{ opacity: 1, scale: 1.05, color: "#F39C12" }}
                    className="text-white text-[14px] font-bold uppercase tracking-wider cursor-default transition-colors"
                  >
                    {client}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ImmersiveWrapper>

{/* Stats Section */}
<ImmersiveWrapper showAI={true} showPattern={true} showGrowth={true} className="py-20">
<div className="container mx-auto px-4 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
{stats.map((stat, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
className="text-center relative group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
>
<AnimatedCounter value={stat.value} suffix={stat.suffix} />
<span className="text-white/70 text-[13px] uppercase tracking-wider font-medium">
{stat.label}
</span>
</motion.div>
))}
</div>
</div>
</ImmersiveWrapper>

      {/* AI & Innovation Section */}
      <ImmersiveWrapper 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-abstract-movement-of-a-digital-data-network-1064-large.mp4"
        className="py-28"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Innovation IA Africa Centred Technology ( ACT )"
                  width={600}
                  height={600}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022]/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#F39C12] rounded-full flex items-center justify-center">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[18px] font-bold">Innovation Core</span>
                  </div>
                  <p className="text-white/80">Développement de modèles d'IA adaptés aux réalités africaines.</p>
                </div>
              </div>
              <motion.div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#D35400]/10 rounded-full blur-3xl -z-10"
                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 8, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
                L'IA pour le Futur
              </span>
              <h2 className="text-white font-display text-[40px] md:text-[48px] font-bold uppercase mb-6 leading-tight">
                L'Innovation <span className="text-[#F39C12]">Sans Limites</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#D35400] mb-8" />
              <p className="text-white/70 text-[17px] leading-relaxed mb-10">
                Nous ne nous contentons pas d'implémenter des technologies. Nous créons les moteurs 
                de croissance de demain en intégrant l'IA générative, l'analyse prédictive et 
                l'automatisation intelligente dans le cœur de votre métier.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { icon: BrainCircuit, title: "IA Générative", text: "Personnalisation client à grande échelle" },
                  { icon: Zap, title: "Edge Computing", text: "Performance locale optimisée" },
                  { icon: Shield, title: "Data Ethics", text: "Solutions responsables et sécurisées" },
                  { icon: Rocket, title: "Scalabilité", text: "Architecture produit prête pour la croissance" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="p-6 bg-[#1B3022]/40 rounded-xl border border-white/10"
                  >
                    <item.icon className="w-8 h-8 text-[#F39C12] mb-4" />
                    <h3 className="text-white font-bold text-[16px] mb-2 uppercase">{item.title}</h3>
                    <p className="text-white/60 text-[13px]">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </ImmersiveWrapper>

{/* Expertise Section */}
<ImmersiveWrapper showAI={true} showGrowth={true} className="py-28">
<div className="container mx-auto px-4 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<motion.div
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
>
<span className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
Notre Expertise
</span>
<h2 className="text-white font-display text-[40px] md:text-[48px] font-bold uppercase mb-6 leading-tight">
Ingénierie de <span className="text-[#F39C12]">Haut Niveau</span>
</h2>
<div className="w-24 h-1.5 bg-[#D35400] mb-8" />
<p className="text-white/70 text-[17px] leading-relaxed mb-8">
De la conception à l'implémentation, nous apportons une rigueur d'ingénierie 
exceptionnelle pour garantir des solutions robustes, sécurisées et évolutives.
</p>

<div className="space-y-6">
{services.map((service, index) => (
<motion.div
key={index}
initial={{ opacity: 0, x: -30 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.1 }}
whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.05)" }}
className="group flex items-start gap-5 p-5 bg-white/5 backdrop-blur-sm border border-white/10 cursor-pointer relative overflow-hidden rounded-lg"
>
<motion.div
className="absolute left-0 top-0 w-1 h-full bg-[#D35400] scale-y-0 group-hover:scale-y-100 transition-transform origin-top"
/>
<div className="w-14 h-14 bg-[#1B3022] group-hover:bg-[#D35400] transition-all duration-300 flex items-center justify-center flex-shrink-0 rounded-lg border border-white/10">
<service.icon className="w-6 h-6 text-white" />
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h3 className="text-white font-bold text-[16px] uppercase group-hover:text-[#F39C12] transition-colors">
{service.title}
</h3>
<span className="text-[#F39C12] text-[11px] font-bold">{service.stats}</span>
</div>
<p className="text-white/60 text-[14px]">{service.description}</p>
</div>
<ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#F39C12] transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
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
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Équipe Africa Centred Technology ( ACT ) au travail"
                  width={600}
                  height={700}
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#F39C12] -z-10 rounded-full blur-2xl opacity-20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -top-8 -right-8 bg-[#1B3022] text-white p-8 z-20 shadow-2xl rounded-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <span className="text-[56px] font-extrabold block leading-none">2023</span>
                <span className="text-[14px] uppercase tracking-wider opacity-80">Année de création</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ImmersiveWrapper>

      {/* Portfolio Section */}
      <ImmersiveWrapper 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1065-large.mp4"
        className="py-28"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
                Portfolio Immersif
              </span>
              <h2 className="text-white font-display text-[40px] md:text-[48px] font-bold uppercase mb-4 leading-tight">
                Nos <span className="text-[#F39C12]">Impacts</span> Technologiques
              </h2>
              <div className="w-24 h-1.5 bg-[#D35400]" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/projects"
                className="group text-white text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 hover:text-[#F39C12] transition-all mt-6 md:mt-0 bg-white/5 px-6 py-3 border border-white/10 rounded-full hover:bg-white/10"
              >
                Voir tous les projets
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -15 }}
                className="group cursor-pointer"
              >
                <div className="relative h-[450px] overflow-hidden mb-6 rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022] via-[#1B3022]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <motion.span
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="w-16 h-16 bg-[#D35400] flex items-center justify-center rounded-xl"
                    >
                      <ArrowUpRight className="w-6 h-6 text-white -rotate-45" />
                    </motion.span>
                  </motion.div>

                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="bg-[#D35400] text-white text-[10px] font-bold uppercase px-4 py-1.5 tracking-wider rounded-full mb-4 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-white font-bold text-[24px] uppercase mb-2 group-hover:text-[#F39C12] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-[14px] line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ImmersiveWrapper>

{/* Testimonials */}
<ImmersiveWrapper showAI={true} showPattern={true} className="py-28">
<div className="container mx-auto px-4 relative z-10">
<motion.div
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
className="text-center mb-16"
>
<span className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
Témoignages
</span>
<h2 className="text-white font-display text-[40px] font-bold uppercase mb-4">
La Voix de nos <span className="text-[#F39C12]">Partenaires</span>
</h2>
<div className="w-24 h-1.5 bg-[#D35400] mx-auto" />
</motion.div>

<div className="grid md:grid-cols-2 gap-8">
{testimonials.map((testimonial, index) => (
<motion.div
key={index}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: index * 0.2 }}
whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.08)" }}
className="bg-white/5 backdrop-blur-md p-12 relative group rounded-2xl border border-white/10 shadow-2xl"
>
<Quote className="w-16 h-16 text-[#F39C12]/10 absolute top-8 right-8" />
<p className="text-white/80 text-[18px] leading-relaxed mb-10 relative z-10 font-medium">
"{testimonial.quote}"
</p>
<div className="flex items-center gap-5">
<div className="relative">
<Image
src={testimonial.image}
alt={testimonial.author}
width={70}
height={70}
className="rounded-full object-cover border-4 border-white/10"
/>
<div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#D35400] rounded-full flex items-center justify-center">
<CheckCircle className="w-3 h-3 text-white" />
</div>
</div>
<div>
<h4 className="text-white font-bold text-[17px]">{testimonial.author}</h4>
<p className="text-[#F39C12] text-[14px] font-medium">{testimonial.role}</p>
</div>
</div>
</motion.div>
))}
</div>
</div>
</ImmersiveWrapper>

{/* About Link Section */}
<ImmersiveWrapper showAI={true} showPattern={true} className="py-28">
<div className="container mx-auto px-4 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<motion.div
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
className="relative order-2 lg:order-1"
>
<div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
<Image
src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
alt="Africa Centred Technology ( ACT ) Team"
width={600}
height={500}
className="w-full h-[550px] object-cover"
/>
<div className="absolute inset-0 bg-[#1B3022]/40 mix-blend-multiply" />
</div>
<motion.div 
className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#F39C12]/20 -z-10 rounded-full blur-3xl"
animate={{ scale: [1, 1.2, 1] }}
transition={{ duration: 5, repeat: Infinity }}
/>
<div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl z-20 flex items-center gap-4">
<div className="w-12 h-12 bg-[#D35400] rounded-full flex items-center justify-center">
<Users className="w-6 h-6 text-white" />
</div>
<div>
<div className="text-[20px] font-bold text-white">25+ Experts</div>
<div className="text-[12px] text-white/60 uppercase tracking-widest">Dédiés à votre succès</div>
</div>
</div>
</motion.div>

<motion.div
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
viewport={{ once: true }}
className="order-1 lg:order-2"
>
<span className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
Qui sommes-nous
</span>
<h2 className="text-white font-display text-[40px] font-bold uppercase mb-6 leading-tight">
Architectes de la <span className="text-[#F39C12]">Révolution</span> Numérique
</h2>
<div className="w-24 h-1.5 bg-[#D35400] mb-8" />
<p className="text-white/70 text-[17px] leading-relaxed mb-8">
Africa Centred Technology ( ACT ) est né d'une ambition simple : prouver que l'Afrique peut non seulement 
adopter la technologie, mais aussi la créer et la diriger. Notre mission est d'armer 
les entreprises locales avec les outils technologiques les plus avancés au monde.
</p>

<div className="grid grid-cols-2 gap-6 mb-12">
{[
{ icon: BrainCircuit, text: "Vision IA First" },
{ icon: Shield, text: "Cyber-Souveraineté" },
{ icon: Globe, text: "ADN Pan-Africain" },
{ icon: Target, text: "Impact Mesurable" }
].map((item, i) => (
<motion.div 
key={i}
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: i * 0.1 }}
className="flex items-center gap-3"
>
<div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center group border border-white/10">
<item.icon className="w-5 h-5 text-[#F39C12] group-hover:scale-110 transition-transform" />
</div>
<span className="text-white font-bold text-[14px]">{item.text}</span>
</motion.div>
))}
</div>

<motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
<Link 
href="/about"
className="inline-flex items-center gap-4 bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-10 py-5 text-[14px] font-bold uppercase tracking-widest transition-all rounded-lg shadow-lg hover:shadow-2xl"
>
Découvrir notre ADN
<ArrowRight className="w-4 h-4" />
</Link>
</motion.div>
</motion.div>
</div>
</div>
</ImmersiveWrapper>

      {/* Final CTA */}
      <ImmersiveWrapper 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-abstract-movement-of-a-digital-data-network-1064-large.mp4"
        className="py-32"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto mb-10 bg-gradient-to-tr from-[#D35400] to-[#F39C12] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(211,84,0,0.5)]"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            <h2 className="text-white font-display text-[40px] md:text-[60px] font-bold uppercase mb-8 leading-tight">
              Rejoignez la <br /><span className="text-[#F39C12]">Révolution Tech</span>
            </h2>
            <p className="text-white/70 text-[20px] mb-12 max-w-[700px] mx-auto leading-relaxed">
              Prêt à transformer vos défis en opportunités technologiques ? Africa Centred Technology ( ACT ) est 
              votre partenaire stratégique pour l'ère de l'Intelligence Artificielle.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#D35400] text-white px-12 py-6 text-[15px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#D35400] transition-all rounded-full shadow-2xl"
                >
                  Démarrer un projet
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 text-white px-12 py-6 text-[15px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all rounded-full backdrop-blur-sm"
                >
                  Nos expertises IA
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ImmersiveWrapper>
    </main>
  );
}
