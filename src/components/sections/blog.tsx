"use client";

import React from 'react';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: "GAM (Génies Afrique Médias)",
    excerpt: "Plateforme média digitale panafricaine avec Web TV et CMS éditorial.",
    image: "/realisationprojet/2026/GAM-Genies-Afrique-Medias.png",
    author: "Équipe fondatrice ACT",
    date: "12 Feb 2026",
    readTime: "5 min",
    category: "Média"
  },
  {
    title: "Chatbot Multimodal RAG",
    excerpt: "Assistant IA multimodal sur documents, images, audio et vidéo.",
    image: "/realisationprojet/2025/chatbotmulitmodale.png",
    author: "Équipe fondatrice ACT",
    date: "8 Feb 2026",
    readTime: "5 min",
    category: "IA"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const BlogSection = () => {
  return (
    <section className="py-24 bg-[#FCF9F2] overflow-hidden" id="blog">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-4 block"
            >
              Actualités
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#1B3022] font-display text-[42px] font-bold uppercase mb-4"
            >
              Notre <span className="text-[#D35400]">Blog</span>
            </motion.h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-1.5 bg-[#D35400] origin-left"
            />
          </div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 text-[#1B3022] text-[13px] font-bold uppercase tracking-wider flex items-center gap-2 hover:text-[#D35400] transition-colors"
          >
            Voir tous les articles
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </motion.button>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white group cursor-pointer overflow-hidden shadow-sm"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-[#1B3022]/0 group-hover:bg-[#1B3022]/30 transition-colors duration-300"
                />
                <motion.span 
                  className="absolute top-4 left-4 bg-[#D35400] text-white text-[11px] font-bold uppercase px-3 py-1"
                  whileHover={{ scale: 1.05 }}
                >
                  {post.category}
                </motion.span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-[12px] text-[#2C2C2C]/60 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-[#1B3022] font-display text-[20px] font-bold mb-3 leading-tight group-hover:text-[#D35400] transition-colors">
                  {post.title}
                </h3>

                <p className="text-[#2C2C2C]/70 font-body text-[14px] leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-2 text-[13px] text-[#2C2C2C]">
                    <User className="w-4 h-4 text-[#D35400]" />
                    {post.author}
                  </span>
                  <motion.a 
                    href="#"
                    className="text-[#D35400] text-[12px] font-bold uppercase tracking-wider flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    Lire
                    <ArrowRight className="w-3 h-3" />
                  </motion.a>
                </div>
              </div>

              <motion.div
                className="h-1 bg-[#D35400]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 bg-[#1B3022] p-12 relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F39C12' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-white text-[28px] font-bold mb-2"
              >
                Restez informé des dernières tendances tech
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/70"
              >
                Inscrivez-vous à notre newsletter pour recevoir nos articles et insights exclusifs.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
            >
              <input 
                type="email" 
                placeholder="Votre email"
                className="px-6 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#F39C12] transition-colors min-w-[280px]"
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(211, 84, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D35400] hover:bg-[#F39C12] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-wider transition-colors"
              >
                S'inscrire
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
