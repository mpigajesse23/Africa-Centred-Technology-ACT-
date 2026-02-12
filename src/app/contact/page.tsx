"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Linkedin, Twitter, Facebook, ArrowRight, Sparkles, MessageCircle, Calendar, Globe, Shield, Zap } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ImmersiveWrapper, AINodesBackground } from '@/components/ui/immersive-backgrounds';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+212 694-528498", "+212 662-777507", "+212 779-635687"],
    action: "tel:+212694528498",
    actionLabel: "Appeler maintenant"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@binacod.africa", "support@binacod.africa"],
    action: "mailto:contact@binacod.africa",
    actionLabel: "Envoyer un email"
  },
  {
    icon: MapPin,
    title: "Siège Social",
    details: ["Mer Sultan 6e Rue chateau Ru d'Agadir", "Casablanca, Maroc"],
    action: "#offices",
    actionLabel: "Voir tous les bureaux"
  },
  {
    icon: Clock,
    title: "Disponibilité",
    details: ["Lun - Ven: 8h - 18h", "Sam: 9h - 13h"],
    action: "#form",
    actionLabel: "Planifier un appel"
  }
];

const offices = [
  { 
    city: "Casablanca", 
    country: "Maroc", 
    address: "Mer Sultan 6e Rue chateau Ru d'Agadir", 
    phone: "+212 694-528498",
    flag: "🇲🇦",
    timezone: "GMT+1",
    isHQ: true
  },
  { 
    city: "Dakar", 
    country: "Sénégal", 
    address: "123 Avenue de l'Innovation", 
    phone: "+221 33 123 45 67",
    flag: "🇸🇳",
    timezone: "GMT"
  },
  { 
    city: "Abidjan", 
    country: "Côte d'Ivoire", 
    address: "45 Rue du Commerce, Plateau", 
    phone: "+225 27 20 123 456",
    flag: "🇨🇮",
    timezone: "GMT"
  },
  { 
    city: "Nairobi", 
    country: "Kenya", 
    address: "12 Westlands Road", 
    phone: "+254 20 123 4567",
    flag: "🇰🇪",
    timezone: "GMT+3"
  },
];

const faqs = [
  {
    question: "Comment démarrer un projet avec Binacod ?",
    answer: "Contactez-nous via le formulaire ou par téléphone. Notre équipe vous recontactera sous 24h pour une première consultation gratuite où nous analyserons vos besoins et définirons ensemble la meilleure approche."
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Les délais varient selon la complexité du projet. En moyenne, un MVP est livré en 8-12 semaines avec des sprints de 2 semaines. Nous vous fournirons une estimation précise après l'analyse de votre projet."
  },
  {
    question: "Proposez-vous un support après livraison ?",
    answer: "Oui, nous offrons différentes formules de support et maintenance adaptées à vos besoins, de 3 mois à plusieurs années. Chaque projet inclut une période de garantie de 3 mois minimum."
  },
  {
    question: "Travaillez-vous avec des entreprises internationales ?",
    answer: "Absolument ! Nous collaborons avec des entreprises du monde entier souhaitant s'implanter ou opérer en Afrique. Notre expertise pan-africaine est notre force."
  },
  {
    question: "Quelles technologies utilisez-vous ?",
    answer: "Nous utilisons les technologies les plus adaptées à chaque projet : React, Node.js, Python, Cloud AWS/Azure, IA/ML, et bien plus. Notre approche est technology-agnostic."
  }
];

const benefits = [
  { icon: Zap, title: "Réponse en 24h", description: "Nous revenons vers vous rapidement" },
  { icon: Shield, title: "Consultation Gratuite", description: "Premier échange sans engagement" },
  { icon: Globe, title: "Expertise Pan-Africaine", description: "15 pays, une seule équipe" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    budget: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeOffice, setActiveOffice] = useState(0);
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true });
  const heroRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', company: '', phone: '', budget: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      
      <ImmersiveWrapper 
        ref={heroRef}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-abstract-movement-of-a-digital-data-network-1064-large.mp4"
        className="min-h-[600px] flex items-center"
        priority={true}
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
                  Consultation Gratuite
                </span>
              </motion.div>
              
              <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
                Construisons <br />
                <span className="relative">
                  <span className="text-[#F39C12]">Ensemble</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 h-1 bg-[#D35400]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </h1>
              
              <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[500px]">
                Vous avez une vision ? Nous avons l'expertise pour la concrétiser. 
                Discutons de votre projet et découvrez comment Binacod peut transformer vos ambitions en réalité.
              </p>

              <div className="grid grid-cols-3 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div 
                      className="w-12 h-12 mx-auto mb-3 bg-[#1B3022]/60 flex items-center justify-center rounded-xl border border-[#F39C12]/30"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(243, 156, 18, 0.3)" }}
                    >
                      <benefit.icon className="w-5 h-5 text-[#F39C12]" />
                    </motion.div>
                    <h4 className="text-white font-bold text-[13px] uppercase mb-1">{benefit.title}</h4>
                    <p className="text-white/60 text-[11px]">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.action}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-[#1B3022]/40 p-6 border border-white/10 group cursor-pointer rounded-2xl"
                >
                  <motion.div 
                    className="w-12 h-12 bg-[#D35400] flex items-center justify-center mb-4 group-hover:bg-[#F39C12] transition-colors rounded-xl shadow-lg"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                  >
                    <info.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h4 className="text-white font-bold text-[14px] uppercase mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-white/70 text-[13px]">{detail}</p>
                  ))}
                  <motion.span 
                    className="inline-flex items-center gap-1 text-[#F39C12] text-[11px] font-bold uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    {info.actionLabel}
                    <ArrowRight className="w-3 h-3" />
                  </motion.span>
                </motion.a>
              ))}
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

      <section ref={formRef} id="form" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FCF9F2] -z-10 hidden lg:block" />
        
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={isFormInView ? "visible" : "hidden"}
              className="lg:col-span-3"
            >
              <motion.div variants={itemVariants} className="mb-10">
                <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
                  Formulaire de Contact
                </span>
                <h2 className="text-[#1B3022] font-display text-[36px] font-bold uppercase mb-4">
                  Décrivez votre <span className="text-[#D35400]">Projet</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#D35400]" />
              </motion.div>

              <motion.form 
                variants={itemVariants}
                onSubmit={handleSubmit} 
                className="bg-[#FCF9F2] p-8 md:p-10 relative overflow-hidden rounded-3xl shadow-xl border border-[#1B3022]/5"
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#D35400] to-[#F39C12]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8 }}
                />
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                    <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm rounded-xl"
                      placeholder="Votre nom complet"
                    />
                  </motion.div>
                  <div>
                    <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                      Email professionnel *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm rounded-xl"
                      placeholder="votre@entreprise.com"
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
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  <div>
                    <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                      className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm rounded-xl"
                      placeholder="+221 XX XXX XX XX"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                      Type de projet *
                    </label>
                    <select
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState({...formState, subject: e.target.value})}
                      className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm appearance-none cursor-pointer rounded-xl"
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="web">Application Web</option>
                      <option value="mobile">Application Mobile</option>
                      <option value="data">Data & Analytics</option>
                      <option value="cloud">Infrastructure Cloud</option>
                      <option value="conseil">Conseil Stratégique</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                      Budget estimé
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({...formState, budget: e.target.value})}
                      className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all text-[14px] shadow-sm appearance-none cursor-pointer rounded-xl"
                    >
                      <option value="">Sélectionnez une fourchette</option>
                      <option value="small">5 000 - 15 000 €</option>
                      <option value="medium">15 000 - 50 000 €</option>
                      <option value="large">50 000 - 150 000 €</option>
                      <option value="enterprise">150 000 € +</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="text-[#1B3022] text-[12px] font-bold uppercase tracking-wider mb-2 block">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    rows={5}
                    className="w-full px-5 py-4 bg-white border-2 border-transparent focus:border-[#D35400] focus:outline-none transition-all resize-none text-[14px] shadow-sm rounded-xl"
                    placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                  />
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-8 px-8 rounded-xl"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                      >
                        <CheckCircle className="w-12 h-12" />
                      </motion.div>
                      <div className="text-center">
                        <span className="font-bold text-[18px] block mb-1">Message envoyé avec succès !</span>
                        <span className="text-white/80 text-[14px]">Nous vous recontacterons sous 24h</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#D35400] hover:bg-[#1B3022] disabled:bg-[#D35400]/70 text-white py-5 text-[14px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-3 relative overflow-hidden group rounded-xl shadow-lg"
                    >
                      <motion.span
                        className="absolute inset-0 bg-[#1B3022]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center gap-3">
                        {isSubmitting ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Envoi en cours...
                          </>
                        ) : (
                          <>
                            Envoyer ma demande
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.form>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-[#1B3022] p-8 text-white rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-[#F39C12]" />
                  <h3 className="font-bold text-[16px] uppercase">Préférez-vous parler directement ?</h3>
                </div>
                <p className="text-white/70 text-[14px] mb-6 leading-relaxed">
                  Réservez un créneau de 30 minutes avec l'un de nos experts pour discuter de votre projet en détail.
                </p>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full bg-[#D35400] hover:bg-[#F39C12] py-4 text-[13px] font-bold uppercase tracking-wider transition-colors rounded-xl shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  Planifier un appel
                </motion.a>
              </div>

              <div className="bg-[#FCF9F2] p-8 rounded-3xl shadow-sm border border-[#1B3022]/5">
                <h4 className="text-[#1B3022] font-bold text-[14px] uppercase mb-6">Nos Engagements</h4>
                <ul className="space-y-4">
                  {[
                    "Réponse garantie sous 24h ouvrées",
                    "Première consultation 100% gratuite",
                    "Devis détaillé et transparent",
                    "Confidentialité assurée (NDA disponible)"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-[#D35400] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C2C2C]/80 text-[14px]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-8 border-2 border-[#1B3022] rounded-3xl">
                <h4 className="text-[#1B3022] font-bold text-[14px] uppercase mb-4">Suivez-nous</h4>
                <p className="text-[#2C2C2C]/70 text-[13px] mb-6">
                  Restez connectés avec nos dernières actualités et insights.
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, label: "LinkedIn" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Facebook, label: "Facebook" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-[#1B3022] hover:bg-[#D35400] flex items-center justify-center transition-colors rounded-xl shadow-md"
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="offices" className="py-24 bg-[#1B3022] relative overflow-hidden">
        <AINodesBackground />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[700px] mx-auto mb-16"
          >
            <span className="text-[#F39C12] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              Présence Internationale
            </span>
            <h2 className="text-white font-display text-[36px] font-bold uppercase mb-4">
              Nos Bureaux <span className="text-[#F39C12]">Pan-Africains</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#D35400] mx-auto mb-6" />
            <p className="text-white/70 text-[16px]">
              Une présence locale pour un impact continental. Retrouvez-nous dans les principaux hubs technologiques d'Afrique.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveOffice(index)}
                  className={`p-6 cursor-pointer transition-all relative overflow-hidden rounded-2xl ${
                    activeOffice === index 
                      ? 'bg-[#D35400] shadow-xl' 
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {office.isHQ && (
                    <span className="absolute top-4 right-4 bg-[#F39C12] text-[#1B3022] text-[10px] font-bold uppercase px-2 py-1 rounded">
                      Siège
                    </span>
                  )}
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{office.flag}</span>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-[18px] uppercase mb-1">
                        {office.city}
                      </h3>
                      <p className={`text-[13px] font-medium mb-2 ${
                        activeOffice === index ? 'text-white/80' : 'text-[#F39C12]'
                      }`}>
                        {office.country}
                      </p>
                      <p className="text-white/70 text-[13px] mb-1">{office.address}</p>
                      <p className="text-white/70 text-[13px]">{office.phone}</p>
                    </div>
                    <span className={`text-[11px] uppercase tracking-wider ${
                      activeOffice === index ? 'text-white/60' : 'text-white/40'
                    }`}>
                      {office.timezone}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 border border-white/10 rounded-3xl shadow-2xl sticky top-8"
            >
              <div className="text-center mb-8">
                <span className="text-6xl mb-4 block">{offices[activeOffice].flag}</span>
                <h3 className="text-white font-bold text-[24px] uppercase mb-2">
                  {offices[activeOffice].city}
                </h3>
                <p className="text-[#F39C12] text-[14px] font-medium">
                  {offices[activeOffice].country}
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-white/80">
                  <MapPin className="w-5 h-5 text-[#D35400]" />
                  <span className="text-[14px]">{offices[activeOffice].address}</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Phone className="w-5 h-5 text-[#D35400]" />
                  <span className="text-[14px]">{offices[activeOffice].phone}</span>
                </div>
                <div className="flex items-center gap-4 text-white/80">
                  <Clock className="w-5 h-5 text-[#D35400]" />
                  <span className="text-[14px]">Fuseau horaire: {offices[activeOffice].timezone}</span>
                </div>
              </div>

              <motion.a
                href={`tel:${offices[activeOffice].phone.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full bg-[#D35400] hover:bg-[#F39C12] text-white py-4 text-[13px] font-bold uppercase tracking-wider transition-colors rounded-xl shadow-lg"
              >
                <Phone className="w-4 h-4" />
                Appeler ce bureau
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-[700px] mx-auto mb-16"
          >
            <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block">
              FAQ
            </span>
            <h2 className="text-[#1B3022] font-display text-[36px] font-bold uppercase mb-4">
              Questions <span className="text-[#D35400]">Fréquentes</span>
            </h2>
            <div className="w-20 h-1.5 bg-[#D35400] mx-auto" />
          </motion.div>

          <div className="max-w-[900px] mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full px-8 py-6 flex items-center justify-between text-left transition-all rounded-2xl ${
                    openFaq === index 
                      ? 'bg-[#1B3022] text-white shadow-xl' 
                      : 'bg-[#FCF9F2] hover:bg-[#1B3022]/5'
                  }`}
                >
                  <span className={`font-bold text-[16px] pr-4 ${
                    openFaq === index ? 'text-white' : 'text-[#1B3022]'
                  }`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    className={`w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-lg ${
                      openFaq === index ? 'bg-[#D35400]' : 'bg-[#1B3022]'
                    }`}
                  >
                    <span className="text-white text-[20px] font-bold">+</span>
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#FCF9F2] rounded-b-2xl"
                    >
                      <p className="px-8 py-6 text-[#2C2C2C]/80 text-[15px] leading-relaxed border-l-4 border-[#D35400]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ImmersiveWrapper 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-sun-setting-over-the-horizon-of-a-savannah-34531-large.mp4"
        className="py-24"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-[800px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="inline-block w-20 h-20 bg-white/20 mb-8 flex items-center justify-center mx-auto rounded-full shadow-2xl"
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.span>
              
              <h2 className="text-white font-display text-[36px] md:text-[48px] font-bold uppercase mb-6 leading-tight">
                Prêt à Transformer <br />Votre Entreprise ?
              </h2>
              <p className="text-white/80 text-[18px] mb-10 max-w-[600px] mx-auto">
                Rejoignez les 150+ entreprises africaines qui ont fait confiance à Binacod 
                pour leur transformation digitale.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="tel:+221331234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#D35400] px-10 py-5 text-[14px] font-bold uppercase tracking-widest hover:bg-[#1B3022] hover:text-white transition-all flex items-center gap-3 rounded-full shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  +221 33 123 45 67
                </motion.a>
                <motion.a
                  href="mailto:contact@binacod.africa"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent text-white px-10 py-5 text-[14px] font-bold uppercase tracking-widest border-2 border-white hover:bg-white hover:text-[#D35400] transition-all flex items-center gap-3 rounded-full"
                >
                  <Mail className="w-5 h-5" />
                  Envoyer un email
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </ImmersiveWrapper>

    </main>
  );
}
