"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, Clock, Send, CheckCircle, AlertCircle, Info, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const supportChannels = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Envoyez-nous un email et recevez une réponse sous 24h.",
    contact: "support@act.africa",
    availability: "24/7",
    color: "#D35400"
  },
  {
    icon: Phone,
    title: "Support Téléphonique",
    description: "Appelez-nous pour une assistance immédiate.",
    contact: "+212 694-528498",
    availability: "Lun-Ven 9h-18h GMT",
    color: "#F39C12"
  },
  {
    icon: MessageSquare,
    title: "Chat en Direct",
    description: "Discutez avec notre équipe en temps réel.",
    contact: "Démarrer le chat",
    availability: "Lun-Ven 9h-18h GMT",
    color: "#1B3022"
  }
];

const priorityLevels = [
  {
    level: "Critique",
    description: "Service complètement indisponible",
    responseTime: "< 2 heures",
    icon: AlertCircle,
    color: "#C0392B"
  },
  {
    level: "Élevée",
    description: "Fonctionnalité majeure affectée",
    responseTime: "< 4 heures",
    icon: AlertCircle,
    color: "#D35400"
  },
  {
    level: "Moyenne",
    description: "Problème non bloquant",
    responseTime: "< 24 heures",
    icon: Info,
    color: "#F39C12"
  },
  {
    level: "Faible",
    description: "Question générale",
    responseTime: "< 48 heures",
    icon: CheckCircle,
    color: "#1B3022"
  }
];

export default function SupportPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    priority: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support ticket submitted:', formState);
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-[#FCF9F2]">
      <Header />
      
      {/* Hero Section */}
      <ImmersiveWrapper 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-person-on-a-support-call-4900-large.mp4"
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
                Support Client
              </span>
            </motion.div>
            
            <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
              Nous Sommes Là Pour{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">Vous Aider</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            
            <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[600px]">
              Notre équipe de support est disponible pour répondre à toutes vos questions et résoudre vos problèmes techniques.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#form"
                  className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Créer un Ticket
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a 
                  href="#channels"
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1B3022] transition-all"
                >
                  Voir les Canaux
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

      {/* Support Channels */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] font-extrabold text-[#1B3022] mb-4">
              Canaux de Support
            </h2>
            <p className="text-[16px] text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Choisissez le canal qui vous convient le mieux pour nous contacter.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#FCF9F2] rounded-2xl p-8 text-center hover:shadow-xl transition-all"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${channel.color}15` }}
                >
                  <channel.icon className="w-8 h-8" style={{ color: channel.color }} />
                </div>

                <h3 className="text-[20px] font-bold text-[#1B3022] mb-3">
                  {channel.title}
                </h3>

                <p className="text-[14px] text-[#2C2C2C]/70 leading-relaxed mb-4">
                  {channel.description}
                </p>

                <div className="mb-4">
                  <a
                    href={channel.icon === Mail ? `mailto:${channel.contact}` : channel.icon === Phone ? `tel:${channel.contact.replace(/\s/g, '')}` : '#'}
                    className="text-[15px] font-semibold hover:text-[#D35400] transition-colors"
                    style={{ color: channel.color }}
                  >
                    {channel.contact}
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 text-[12px] text-[#2C2C2C]/60">
                  <Clock className="w-4 h-4" />
                  <span>{channel.availability}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Levels */}
      <section className="py-20 bg-[#FCF9F2]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] font-extrabold text-[#1B3022] mb-4">
              Temps de Réponse
            </h2>
            <p className="text-[16px] text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Nos engagements de temps de réponse selon la priorité de votre demande.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {priorityLevels.map((priority, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <priority.icon
                  className="w-10 h-10 mx-auto mb-4"
                  style={{ color: priority.color }}
                />
                <h3
                  className="text-[18px] font-bold mb-2"
                  style={{ color: priority.color }}
                >
                  {priority.level}
                </h3>
                <p className="text-[13px] text-[#2C2C2C]/70 mb-3">
                  {priority.description}
                </p>
                <div className="text-[14px] font-semibold text-[#1B3022]">
                  {priority.responseTime}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-[36px] font-extrabold text-[#1B3022] mb-4">
              Créer un Ticket de Support
            </h2>
            <p className="text-[16px] text-[#2C2C2C]/70 max-w-2xl mx-auto">
              Remplissez le formulaire ci-dessous et notre équipe vous répondra dans les meilleurs délais.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-[#FCF9F2] rounded-2xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                  Nom complet *
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm rounded-xl"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm rounded-xl"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                  Entreprise
                </label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({...formState, company: e.target.value})}
                  className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm rounded-xl"
                  placeholder="Nom de l'entreprise"
                />
              </div>
              <div>
                <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                  Priorité *
                </label>
                <select
                  required
                  value={formState.priority}
                  onChange={(e) => setFormState({...formState, priority: e.target.value})}
                  className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm appearance-none cursor-pointer rounded-xl"
                >
                  <option value="">Sélectionnez une priorité</option>
                  <option value="low">Faible</option>
                  <option value="medium">Moyenne</option>
                  <option value="high">Élevée</option>
                  <option value="critical">Critique</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                Sujet *
              </label>
              <input
                type="text"
                required
                value={formState.subject}
                onChange={(e) => setFormState({...formState, subject: e.target.value})}
                className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm rounded-xl"
                placeholder="Résumé du problème"
              />
            </div>

            <div className="mb-8">
              <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                Description du problème *
              </label>
              <textarea
                required
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                rows={6}
                className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all resize-none text-[14px] shadow-sm rounded-xl"
                placeholder="Décrivez votre problème en détail..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-5 bg-[#D35400] text-white font-bold text-[14px] uppercase tracking-wider rounded-full hover:bg-[#1B3022] transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              Envoyer le Ticket
              <Send className="w-5 h-5" />
            </button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
