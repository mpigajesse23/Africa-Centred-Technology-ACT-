"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    details: ["123 Avenue de l'Innovation", "Dakar, Sénégal"],
    color: "#D35400"
  },
  {
    icon: Phone,
    title: "Téléphone",
    details: ["+221 33 123 45 67", "+221 77 890 12 34"],
    color: "#F39C12"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["contact@binacod.africa", "support@binacod.africa"],
    color: "#1B3022"
  },
  {
    icon: Clock,
    title: "Horaires",
    details: ["Lun - Ven: 8h - 18h", "Sam: 9h - 13h"],
    color: "#D35400"
  }
];

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="contact">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-[800px] mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block"
          >
            Contactez-nous
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1B3022] font-display text-[42px] font-bold uppercase mb-4"
          >
            Parlons de votre <span className="text-[#D35400]">Projet</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1.5 bg-[#D35400] mb-6 mx-auto origin-center"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-[#2C2C2C]/70 font-body text-[18px]"
          >
            Prêt à transformer votre entreprise ? Notre équipe est là pour vous accompagner dans chaque étape de votre parcours digital.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex gap-4 p-6 bg-[#FCF9F2] group cursor-pointer"
                >
                  <motion.div 
                    className="flex-shrink-0 w-14 h-14 flex items-center justify-center"
                    style={{ backgroundColor: info.color }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-[#1B3022] font-bold text-[16px] mb-2 uppercase">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-[#2C2C2C]/70 text-[14px]">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-[#1B3022] text-white"
            >
              <h4 className="text-[18px] font-bold mb-4">Suivez-nous</h4>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Facebook'].map((social, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-[#D35400] flex items-center justify-center transition-colors text-[12px] font-bold"
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="bg-[#FCF9F2] p-10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="text-[#1B3022] text-[13px] font-bold uppercase tracking-wider mb-2 block">
                    Nom complet
                  </label>
                  <motion.input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#D35400] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="text-[#1B3022] text-[13px] font-bold uppercase tracking-wider mb-2 block">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#D35400] focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mb-6"
              >
                <label className="text-[#1B3022] text-[13px] font-bold uppercase tracking-wider mb-2 block">
                  Sujet
                </label>
                <motion.input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({...formState, subject: e.target.value})}
                  className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#D35400] focus:outline-none transition-colors"
                  placeholder="Sujet de votre message"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mb-8"
              >
                <label className="text-[#1B3022] text-[13px] font-bold uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <motion.textarea
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  rows={6}
                  className="w-full px-5 py-4 bg-white border border-gray-200 focus:border-[#D35400] focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet..."
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center justify-center gap-3 bg-green-500 text-white py-4 px-8"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-bold">Message envoyé avec succès !</span>
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(211, 84, 0, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#D35400] hover:bg-[#1B3022] text-white py-5 text-[14px] font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-3"
                  >
                    <span>Envoyer le message</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.span>
                  </motion.button>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
