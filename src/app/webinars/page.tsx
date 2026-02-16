"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Clock, Users, ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const upcomingWebinars = [
  {
    title: "IA Générative pour les Entreprises Africaines",
    description: "Découvrez comment l'IA générative peut transformer vos processus métier et améliorer votre compétitivité.",
    date: "15 Mars 2026",
    time: "14:00 - 15:30 GMT",
    instructor: "Dr. Amina Kaba",
    role: "Lead AI Engineer",
    attendees: 145,
    status: "upcoming",
    color: "#D35400"
  },
  {
    title: "Architecture Microservices à Grande Échelle",
    description: "Apprenez à concevoir et déployer des architectures microservices robustes et scalables.",
    date: "22 Mars 2026",
    time: "15:00 - 16:30 GMT",
    instructor: "Omar Diallo",
    role: "Solutions Architect",
    attendees: 98,
    status: "upcoming",
    color: "#F39C12"
  },
  {
    title: "Cybersécurité : Protéger Vos Actifs Numériques",
    description: "Stratégies essentielles pour sécuriser vos applications et données contre les menaces modernes.",
    date: "5 Avril 2026",
    time: "13:00 - 14:30 GMT",
    instructor: "Sarah Mensah",
    role: "Security Specialist",
    attendees: 67,
    status: "upcoming",
    color: "#C0392B"
  }
];

const pastWebinars = [
  {
    title: "Transformation Cloud : Migration AWS",
    description: "Retour d'expérience sur la migration d'applications legacy vers AWS.",
    date: "12 Février 2026",
    duration: "90 min",
    views: 342,
    color: "#1B3022"
  },
  {
    title: "Data Analytics avec Power BI",
    description: "Création de dashboards analytiques professionnels pour la prise de décision.",
    date: "28 Janvier 2026",
    duration: "75 min",
    views: 289,
    color: "#D35400"
  },
  {
    title: "DevOps : CI/CD avec GitHub Actions",
    description: "Automatisez vos déploiements avec des pipelines CI/CD modernes.",
    date: "18 Janvier 2026",
    duration: "60 min",
    views: 256,
    color: "#F39C12"
  }
];

export default function WebinarsPage() {
  const [selectedTab, setSelectedTab] = useState<"upcoming" | "past">("upcoming");

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
                Webinaires
              </span>
            </motion.div>
            
            <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
              Apprenez avec les{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">Experts</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            
            <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[600px]">
              Participez à nos webinaires techniques et stratégiques pour rester à la pointe de l'innovation technologique.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="#upcoming"
                  className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  S'inscrire Maintenant
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#past"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1B3022] transition-all"
                >
                  Voir les Replays
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

      {/* Tab Navigation */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setSelectedTab("upcoming")}
              className={`px-8 py-3 text-[13px] font-bold uppercase tracking-wider transition-all rounded-full ${
                selectedTab === "upcoming"
                  ? 'bg-[#D35400] text-white shadow-lg'
                  : 'bg-[#FCF9F2] text-[#1B3022] hover:bg-[#F39C12] hover:text-white'
              }`}
            >
              À Venir ({upcomingWebinars.length})
            </button>
            <button
              onClick={() => setSelectedTab("past")}
              className={`px-8 py-3 text-[13px] font-bold uppercase tracking-wider transition-all rounded-full ${
                selectedTab === "past"
                  ? 'bg-[#D35400] text-white shadow-lg'
                  : 'bg-[#FCF9F2] text-[#1B3022] hover:bg-[#F39C12] hover:text-white'
              }`}
            >
              Replays ({pastWebinars.length})
            </button>
          </div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      {selectedTab === "upcoming" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {upcomingWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                >
                  <div className="p-8 md:flex gap-8">
                    <div
                      className="w-full md:w-32 h-32 rounded-xl flex items-center justify-center mb-6 md:mb-0 flex-shrink-0"
                      style={{ backgroundColor: `${webinar.color}15` }}
                    >
                      <Video className="w-12 h-12" style={{ color: webinar.color }} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[24px] font-bold text-[#1B3022] mb-3">
                        {webinar.title}
                      </h3>

                      <p className="text-[14px] text-[#2C2C2C]/70 leading-relaxed mb-6">
                        {webinar.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-[13px] text-[#2C2C2C]/60">
                          <Calendar className="w-4 h-4 text-[#D35400]" />
                          <span>{webinar.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[13px] text-[#2C2C2C]/60">
                          <Clock className="w-4 h-4 text-[#D35400]" />
                          <span>{webinar.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[13px] text-[#2C2C2C]/60">
                          <Users className="w-4 h-4 text-[#D35400]" />
                          <span>{webinar.attendees} inscrits</span>
                        </div>
                        <div className="text-[13px] text-[#2C2C2C]/60">
                          <span className="font-semibold text-[#1B3022]">{webinar.instructor}</span>
                          <br />
                          <span className="text-[12px]">{webinar.role}</span>
                        </div>
                      </div>

                      <button className="px-6 py-3 bg-[#D35400] text-white font-bold text-[13px] uppercase tracking-wider rounded-full hover:bg-[#1B3022] transition-all flex items-center gap-2">
                        S'inscrire Maintenant
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Webinars (Replays) */}
      {selectedTab === "past" && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
                >
                  <div
                    className="h-48 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: `${webinar.color}15` }}
                  >
                    <Video className="w-16 h-16" style={{ color: webinar.color }} />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-[#D35400]" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-[18px] font-bold text-[#1B3022] mb-3 leading-tight">
                      {webinar.title}
                    </h3>

                    <p className="text-[13px] text-[#2C2C2C]/70 leading-relaxed mb-4">
                      {webinar.description}
                    </p>

                    <div className="flex items-center justify-between text-[12px] text-[#2C2C2C]/60">
                      <span>{webinar.date}</span>
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="mt-2 text-[12px] text-[#D35400] font-semibold">
                      {webinar.views} vues
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1B3022] to-[#2C4A35] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white font-display text-[36px] md:text-[48px] font-bold uppercase mb-6 leading-tight">
              Proposez un Sujet
            </h2>
            <p className="text-[16px] text-white/80 max-w-2xl mx-auto mb-8">
              Vous avez un sujet technique que vous aimeriez voir couvert ? Contactez-nous pour suggérer un webinaire.
            </p>
            <button className="px-8 py-4 bg-[#D35400] text-white font-bold text-[14px] uppercase tracking-wider rounded-full hover:bg-[#F39C12] transition-all">
              Proposer un Sujet
            </button>
          </motion.div>
        </div>
      </section>    </div>
  );
}
