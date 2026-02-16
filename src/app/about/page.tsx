"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle, Users, Award, Target, Lightbulb, Shield, Globe, Heart, ArrowRight, Play, Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const stats = [
  { value: "15", suffix: "", label: "Projets", description: "Solutions déployées avec succès" },
  { value: "100", suffix: "%", label: "Satisfaction", description: "Clients satisfaits" },
  { value: "2", suffix: "", label: "Pays", description: "Maroc et au-delà" },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Nous repoussons constamment les limites de la technologie pour créer des solutions avant-gardistes qui anticipent les besoins de demain.",
    color: "#D35400"
  },
  {
    icon: Shield,
    title: "Excellence",
    description: "Chaque projet bénéficie de notre engagement indéfectible envers la qualité, la précision et les standards les plus élevés de l'industrie.",
    color: "#1B3022"
  },
  {
    icon: Globe,
    title: "Impact Global",
    description: "Nous connectons l'Afrique au monde en exportant l'innovation africaine à l'échelle internationale, créant des ponts technologiques.",
    color: "#F39C12"
  },
  {
    icon: Heart,
    title: "Intégrité",
    description: "Transparence, honnêteté et éthique guident chacune de nos interactions et décisions, construisant des partenariats durables.",
    color: "#C0392B"
  }
];

const team = [
  {
    name: "MPIGA-ODOUMBA JESSE",
    role: "Membre fondateur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Co-créateur d'ACT, engagé pour l'innovation africaine et l'impact technologique.",
    linkedin: "#"
  },
  {
    name: "Aldrin, Bruno Junior DJOUROBI OMANDA",
    role: "Membre fondateur",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Co-créateur d'ACT, porté par l'ingénierie et la croissance des startups africaines.",
    linkedin: "#"
  },
  {
    name: "Elvis-Theo AKIEME OYONO",
    role: "Membre fondateur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Co-créateur d'ACT, passionné par les solutions IA et l'excellence produit.",
    linkedin: "#"
  },
  {
    name: "Sohaib BAROUD",
    role: "Membre fondateur",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Co-créateur d'ACT, animé par la collaboration et le déploiement rapide.",
    linkedin: "#"
  }
];

const timeline = [
  { year: "2023", title: "Naissance", description: "Création d'Africa Centred Technology ( ACT ) comme startup d'ingénierie tech portée par une équipe soudée.", highlight: true },
  { year: "2024", title: "Premiers POC", description: "Déploiement des premiers prototypes IA et data pour des entreprises africaines." },
  { year: "2025", title: "Accélération", description: "Déploiement du Système RAG Multi-sources et montée en puissance des missions de conseil pour l'écosystème africain." },
  { year: "2026", title: "Cap 2030", description: "Consolidation de notre vision pan-africaine avec une équipe dynamique et agile.", highlight: true }
];

const certifications = [
  { name: "ISO 27001", description: "Sécurité de l'information" },
  { name: "Qualité Produit", description: "Excellence en ingénierie" }
];

const AnimatedStat = ({ value, suffix, label, description }: { value: string; suffix: string; label: string; description: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center group"
    >
      <motion.div
        className="relative inline-block"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-white text-[64px] md:text-[80px] font-extrabold block leading-none">
          {value}
          <span className="text-[#F39C12]">{suffix}</span>
        </span>
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#D35400]"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
      </motion.div>
      <h3 className="text-white font-bold text-[16px] uppercase mt-4 mb-2">{label}</h3>
      <p className="text-white/60 text-[13px]">{description}</p>
    </motion.div>
  );
};

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      <ImmersiveWrapper 
        ref={heroRef}
        videoUrl="https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4"
        priority={true}
        className="min-h-[650px] flex items-center"
      >
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center gap-2 bg-[#D35400] text-white px-4 py-2 mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-[12px] font-bold uppercase tracking-[2px]">
                  Notre Histoire
                </span>
              </motion.div>
              
              <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
                Pionniers de la{" "}
                <span className="relative inline-block">
                  <span className="text-[#F39C12]">Tech</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  />
                </span>
                {" "}Africaine
              </h1>
              
              <p className="text-white/80 text-[18px] leading-relaxed mb-8 max-w-[550px]">
                Depuis 2023, nous accompagnons les entreprises africaines 
                en leaders technologiques mondiaux, avec l'énergie d'une startup 
                et une compréhension profonde du continent.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact"
                    className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                  >
                    Rejoignez l'aventure
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="#story"
                    className="flex items-center gap-3 text-white group"
                  >
                    <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-[#F39C12] transition-colors">
                      <Play className="w-4 h-4 ml-0.5" fill="white" />
                    </span>
                    <span className="text-[13px] font-bold uppercase tracking-wider">
                      Notre vidéo
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 4).map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/10 backdrop-blur-md p-6 border border-white/10 text-center"
                  >
                    <span className="text-white text-[36px] font-extrabold block">
                      {stat.value}<span className="text-[#F39C12]">{stat.suffix}</span>
                    </span>
                    <span className="text-white/70 text-[12px] uppercase tracking-wider">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D35400] via-[#F39C12] to-[#D35400]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </ImmersiveWrapper>

      <section id="story" className="py-28 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
                Notre ADN
              </span>
              <h2 className="text-[#1B3022] font-display text-[40px] font-bold uppercase mb-6 leading-tight">
                Une Vision Née en <span className="text-[#D35400]">Afrique</span>, Pour le Monde
              </h2>
              <div className="w-24 h-1.5 bg-[#D35400] mb-8" />
              
              <p className="text-[#2C2C2C]/80 text-[17px] leading-relaxed mb-6">
                <span className="text-[#1B3022] font-bold">Africa Centred Technology ( ACT )</span> est née en 2023 de la conviction 
                profonde que l'Afrique possède un potentiel technologique immense, prêt à être libéré.
              </p>
              <p className="text-[#2C2C2C]/70 text-[17px] leading-relaxed mb-6">
                Notre équipe fondatrice — MPIGA-ODOUMBA JESSE, Aldrin, Bruno Junior DJOUROBI OMANDA, Elvis-Theo AKIEME OYONO et Sohaib BAROUD — 
                a uni ses forces pour bâtir une startup africaine ambitieuse, sans hiérarchie figée.
              </p>
              <p className="text-[#2C2C2C]/70 text-[17px] leading-relaxed mb-8">
                Aujourd'hui, nous avançons avec une équipe soudée et dynamique, en accompagnant des startups et 
                des organisations africaines dans leur transformation digitale.
              </p>

              <div className="flex flex-wrap gap-6">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#FCF9F2] px-4 py-3 text-center"
                  >
                    <span className="text-[#1B3022] font-bold text-[13px] block">{cert.name}</span>
                    <span className="text-[#2C2C2C]/60 text-[11px]">{cert.description}</span>
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
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Bureau Africa Centred Technology ( ACT )"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-[#1B3022]/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 bg-[#D35400] rounded-full flex items-center justify-center"
                  >
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </motion.span>
                </motion.div>
              </div>
              <motion.div 
                className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#F39C12] -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -top-6 -right-6 bg-[#1B3022] text-white p-8 z-20"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[48px] font-extrabold block leading-none">2023</span>
                <span className="text-[13px] uppercase tracking-wider opacity-80">Année de création</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <ImmersiveWrapper className="py-24">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[700px] mx-auto mb-16"
          >
            <span className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              Notre Impact
            </span>
            <h2 className="text-white font-display text-[40px] font-bold uppercase mb-4">
              Les Chiffres qui <span className="text-[#F39C12]">Parlent</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#D35400] mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} {...stat} />
            ))}
          </div>
        </div>
      </ImmersiveWrapper>

      <section className="py-28 bg-[#FCF9F2]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[700px] mx-auto mb-16"
          >
            <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              Nos Valeurs
            </span>
            <h2 className="text-[#1B3022] font-display text-[40px] font-bold uppercase mb-4">
              Ce qui nous <span className="text-[#D35400]">Anime</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#D35400] mx-auto mb-6" />
            <p className="text-[#2C2C2C]/70 text-[17px]">
              Nos valeurs fondamentales guident chaque décision et chaque interaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15 }}
                className="bg-white p-8 group relative overflow-hidden shadow-lg"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ backgroundColor: value.color }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className="w-16 h-16 mb-6 flex items-center justify-center transition-colors"
                  style={{ backgroundColor: value.color }}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-[#1B3022] font-bold text-[18px] uppercase mb-4 group-hover:text-[#D35400] transition-colors">
                  {value.title}
                </h3>
                <p className="text-[#2C2C2C]/70 text-[14px] leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ImmersiveWrapper showVideo={false} className="py-28 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[700px] mx-auto mb-16"
          >
            <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              Notre Parcours
            </span>
            <h2 className="text-[#1B3022] font-display text-[40px] font-bold uppercase mb-4">
              Un Parcours en <span className="text-[#D35400]">Construction</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#D35400] mx-auto" />
          </motion.div>

          <div className="relative max-w-[1000px] mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#1B3022]/10 md:-translate-x-1/2" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-20 md:pl-0`}>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className={`p-6 ${item.highlight ? 'bg-[#1B3022] text-white shadow-2xl' : 'bg-[#FCF9F2] shadow-md'}`}
                    >
                      <span className={`text-[28px] font-extrabold ${item.highlight ? 'text-[#F39C12]' : 'text-[#D35400]'}`}>
                        {item.year}
                      </span>
                      <h3 className={`font-bold text-[18px] uppercase mt-2 mb-2 ${item.highlight ? 'text-white' : 'text-[#1B3022]'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-[14px] leading-relaxed ${item.highlight ? 'text-white/70' : 'text-[#2C2C2C]/70'}`}>
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#D35400] flex items-center justify-center z-10"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </motion.div>
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ImmersiveWrapper>

      <ImmersiveWrapper 
        videoUrl="https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4"
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
              L'Équipe
            </span>
            <h2 className="text-white font-display text-[40px] font-bold uppercase mb-4">
              Les Fondateurs <span className="text-[#F39C12]">ACT</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#D35400] mx-auto mb-6" />
            <p className="text-white/70 text-[17px]">
              Une équipe fondatrice soudée et dynamique, sans hiérarchie figée.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTeamMember}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={team[activeTeamMember].image}
                    alt={team[activeTeamMember].name}
                    width={500}
                    height={600}
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022] via-transparent to-transparent rounded-2xl" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-white font-bold text-[24px] uppercase mb-1">
                      {team[activeTeamMember].name}
                    </h3>
                    <p className="text-[#F39C12] text-[14px] font-medium uppercase tracking-wider mb-4">
                      {team[activeTeamMember].role}
                    </p>
                    <p className="text-white/80 text-[15px]">
                      {team[activeTeamMember].bio}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTeamMember((prev) => (prev === 0 ? team.length - 1 : prev - 1))}
                  className="w-12 h-12 bg-[#D35400] flex items-center justify-center pointer-events-auto rounded-full"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveTeamMember((prev) => (prev === team.length - 1 ? 0 : prev + 1))}
                  className="w-12 h-12 bg-[#D35400] flex items-center justify-center pointer-events-auto rounded-full"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveTeamMember(index)}
                  whileHover={{ scale: 1.03 }}
                  className={`relative cursor-pointer overflow-hidden rounded-xl ${
                    activeTeamMember === index ? 'ring-4 ring-[#D35400]' : ''
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={250}
                    height={200}
                    className="w-full h-[180px] object-cover"
                  />
                  <div className={`absolute inset-0 transition-colors ${
                    activeTeamMember === index ? 'bg-[#D35400]/30' : 'bg-[#1B3022]/50 hover:bg-[#1B3022]/30'
                  }`} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold text-[14px] uppercase">{member.name}</h4>
                    <p className="text-white/70 text-[11px]">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ImmersiveWrapper>

      <ImmersiveWrapper 
        videoUrl="https://videos.pexels.com/video-files/3163534/3163534-sd_640_360_30fps.mp4"
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
              Prêt à rejoindre <br />l'aventure ?
            </h2>
            <p className="text-white/80 text-[18px] mb-10 max-w-[600px] mx-auto">
              Découvrez comment Africa Centred Technology ( ACT ) peut transformer votre entreprise et 
              propulser votre croissance digitale.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-white text-[#D35400] px-10 py-5 text-[14px] font-bold uppercase tracking-widest hover:bg-[#1B3022] hover:text-white transition-all rounded-full shadow-xl"
                >
                  Contactez-nous
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 text-[14px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#D35400] transition-all rounded-full backdrop-blur-sm"
                >
                  Nos services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </ImmersiveWrapper>

    </div>
  );
}
