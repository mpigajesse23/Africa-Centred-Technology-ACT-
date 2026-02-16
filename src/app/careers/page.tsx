"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Users, TrendingUp, Award, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const openPositions = [
  {
    title: "Ingénieur Full-Stack Senior",
    department: "Engineering",
    location: "Casablanca, Maroc",
    type: "Temps plein",
    description: "Nous recherchons un ingénieur full-stack passionné pour concevoir et développer des solutions web de haute qualité pour nos clients africains.",
    requirements: ["5+ ans d'expérience", "React/Next.js", "Node.js", "TypeScript", "Cloud (AWS/Azure)"],
    color: "#D35400"
  },
  {
    title: "Data Scientist",
    department: "Data & Analytics",
    location: "Casablanca, Maroc / Remote",
    type: "Temps plein",
    description: "Rejoignez notre équipe data pour transformer les données en insights stratégiques et aider nos clients à prendre des décisions éclairées.",
    requirements: ["3+ ans d'expérience", "Python/R", "Machine Learning", "SQL", "Visualisation de données"],
    color: "#F39C12"
  },
  {
    title: "Consultant en Transformation Digitale",
    department: "Conseil Stratégique",
    location: "Casablanca, Maroc",
    type: "Temps plein",
    description: "Accompagnez les entreprises africaines dans leur transformation digitale en tant que consultant expert.",
    requirements: ["4+ ans en conseil", "Gestion de projet", "Connaissance secteur africain", "Anglais/Français"],
    color: "#1B3022"
  },
  {
    title: "Designer UI/UX",
    department: "Design",
    location: "Casablanca, Maroc",
    type: "Temps plein / Remote",
    description: "Créez des expériences utilisateur exceptionnelles pour des produits digitaux destinés au marché africain.",
    requirements: ["3+ ans d'expérience", "Figma/Adobe XD", "Design System", "Mobile-first", "Portfolio requis"],
    color: "#C0392B"
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Croissance & Formation",
    description: "Accès à des formations continues et opportunités de développement professionnel."
  },
  {
    icon: Users,
    title: "Équipe Multiculturelle",
    description: "Travaillez avec des talents venant de toute l'Afrique et au-delà."
  },
  {
    icon: Award,
    title: "Projets Innovants",
    description: "Participez à des projets qui transforment le paysage technologique africain."
  },
  {
    icon: Heart,
    title: "Équilibre Vie/Travail",
    description: "Flexibilité, télétravail et environnement de travail bienveillant."
  }
];

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#FCF9F2]">
      <Header />
      
      {/* Hero Section */}
      <ImmersiveWrapper 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-young-people-working-in-a-modern-office-4625-large.mp4"
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
                Rejoignez-nous
              </span>
            </motion.div>
            
            <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
              Construisons l'{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">Avenir</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {" "}Tech Africain
            </h1>
            
            <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[600px]">
              Rejoignez une équipe passionnée d'ingénieurs, de consultants et de créatifs qui transforment les entreprises africaines en leaders technologiques mondiaux.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Postuler Maintenant
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#positions"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1B3022] transition-all"
                >
                  Voir les Postes
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] font-extrabold text-[#1B3022] mb-4">
              Pourquoi Rejoindre ACT ?
            </h2>
            <p className="text-[16px] text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Nous offrons un environnement stimulant où votre talent peut s'épanouir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#FCF9F2] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-[#D35400]" />
                </div>
                <h3 className="text-[18px] font-bold text-[#1B3022] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[14px] text-[#2C2C2C]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-[#FCF9F2]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] font-extrabold text-[#1B3022] mb-4">
              Postes Ouverts
            </h2>
            <p className="text-[16px] text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Découvrez nos opportunités actuelles et trouvez le poste qui correspond à vos ambitions.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div
                  className="p-8 cursor-pointer"
                  onClick={() => setSelectedPosition(selectedPosition === index ? null : index)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${position.color}15` }}
                        >
                          <Briefcase className="w-6 h-6" style={{ color: position.color }} />
                        </div>
                        <div>
                          <h3 className="text-[20px] font-bold text-[#1B3022]">
                            {position.title}
                          </h3>
                          <span className="text-[12px] text-[#D35400] font-semibold uppercase tracking-wider">
                            {position.department}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-[13px] text-[#2C2C2C]/60 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>

                      <p className="text-[14px] text-[#2C2C2C]/70 leading-relaxed mb-4">
                        {position.description}
                      </p>

                      {selectedPosition === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 pt-6 border-t border-gray-200"
                        >
                          <h4 className="text-[14px] font-bold text-[#1B3022] mb-3 uppercase tracking-wider">
                            Profil Recherché
                          </h4>
                          <ul className="space-y-2 mb-6">
                            {position.requirements.map((req, i) => (
                              <li key={i} className="flex items-center gap-2 text-[14px] text-[#2C2C2C]/70">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#D35400]" />
                                {req}
                              </li>
                            ))}
                          </ul>

                          <button className="px-6 py-3 bg-[#D35400] text-white font-bold text-[13px] uppercase tracking-wider rounded-full hover:bg-[#1B3022] transition-all">
                            Postuler Maintenant
                          </button>
                        </motion.div>
                      )}
                    </div>

                    <motion.div
                      animate={{ rotate: selectedPosition === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-6 h-6 text-[#2C2C2C]/40" />
                    </motion.div>
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
              Vous ne trouvez pas le poste idéal ?
            </h2>
            <p className="text-[16px] text-white/80 max-w-2xl mx-auto mb-8">
              Nous sommes toujours à la recherche de talents exceptionnels. Envoyez-nous votre candidature spontanée.
            </p>
            <button className="px-8 py-4 bg-[#D35400] text-white font-bold text-[14px] uppercase tracking-wider rounded-full hover:bg-[#F39C12] transition-all">
              Candidature Spontanée
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
