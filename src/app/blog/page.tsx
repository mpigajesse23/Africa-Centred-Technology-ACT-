"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock, Tag, Search, Sparkles, TrendingUp, BookOpen, Mail } from 'lucide-react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const categories = ["Tous", "Réalisations", "IA", "E-commerce", "SIG", "Média", "FinTech", "Innovation", "Sécurité"];

const featuredPost = {
  id: 1,
  title: "GAM (Génies Afrique Médias): Lancement d'une Web TV panafricaine",
  excerpt: "Retour sur notre réalisation GAM : une plateforme média headless avec Web TV, CMS éditorial et diffusion optimisée pour l'Afrique.",
  image: "/realisationprojet/2026/GAM-Genies-Afrique-Medias.png",
  author: { name: "Équipe fondatrice ACT", avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80", role: "Startup collective" },
  date: "12 Feb 2026",
  readTime: "6 min",
  category: "Média",
  trending: true
};

const blogPosts = [
  {
    id: 3,
    title: "Chatbot Multimodal RAG: IA documentaire de nouvelle génération",
    excerpt: "Comment nous avons connecté documents, audio, images et vidéo pour un assistant IA réellement multimodal.",
    image: "/realisationprojet/2025/chatbotmulitmodale.png",
    author: { name: "Équipe fondatrice ACT", avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "8 Feb 2026",
    readTime: "5 min",
    category: "IA",
    featured: true
  },
  {
    id: 4,
    title: "CODRescue: Orchestration e-commerce & logistique",
    excerpt: "Notre plateforme pour centraliser préparation de commandes, stock et supervision en temps réel.",
    image: "/realisationprojet/2025/CODRescue-v2.png",
    author: { name: "Équipe fondatrice ACT", avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "4 Feb 2026",
    readTime: "6 min",
    category: "E-commerce",
    featured: false
  },
  {
    id: 5,
    title: "GreenSIG V1: cartographie des espaces verts",
    excerpt: "Une plateforme SIG complète pour planifier, inventorier et piloter les interventions terrain.",
    image: "/realisationprojet/2026/GreenSIGapp.png",
    author: { name: "Équipe fondatrice ACT", avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "28 Jan 2026",
    readTime: "5 min",
    category: "SIG",
    featured: false
  },
  {
    id: 6,
    title: "GAM (Génies Afrique Médias): média digital panafricain",
    excerpt: "Web TV, CMS éditorial et diffusion optimisée pour porter la voix africaine.",
    image: "/realisationprojet/2026/GAM-Genies-Afrique-Medias.png",
    author: { name: "Équipe fondatrice ACT", avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "12 Jan 2026",
    readTime: "5 min",
    category: "Média",
    featured: false
  },
  {
    id: 7,
    title: "Intelligence Artificielle et Agriculture: La révolution verte africaine",
    excerpt: "L'IA au service des agriculteurs africains pour optimiser les rendements et prédire les conditions météo.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: { name: "Kofi Mensah", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "5 Jan 2026",
    readTime: "6 min",
    category: "IA",
    featured: false
  },
  {
    id: 8,
    title: "Cybersécurité: Protéger les entreprises africaines contre les menaces modernes",
    excerpt: "Les menaces émergentes et les solutions pour sécuriser vos infrastructures digitales sur le continent.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: { name: "Aïcha Touré", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "28 Dec 2025",
    readTime: "5 min",
    category: "Sécurité",
    featured: false
  },
  {
    id: 9,
    title: "E-commerce en Afrique: Les tendances qui façonneront 2026",
    excerpt: "Les innovations qui transforment le commerce en ligne sur le continent africain et créent de nouvelles opportunités.",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: { name: "Équipe fondatrice ACT", avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "20 Dec 2025",
    readTime: "6 min",
    category: "Innovation",
    featured: false
  },
  {
    id: 10,
    title: "Blockchain et Traçabilité: Révolutionner la supply chain africaine",
    excerpt: "Applications concrètes de la blockchain pour améliorer la transparence et l'efficacité des chaînes d'approvisionnement.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: { name: "Kofi Mensah", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "10 Dec 2025",
    readTime: "8 min",
    category: "FinTech",
    featured: false
  },
  {
    id: 11,
    title: "StartupS africaines: Comment attirer les investisseurs internationaux",
    excerpt: "Guide pratique pour les entrepreneurs africains souhaitant lever des fonds auprès d'investisseurs globaux.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    author: { name: "Aïcha Touré", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    date: "5 Dec 2025",
    readTime: "9 min",
    category: "Innovation",
    featured: false
  }
];

const popularTags = ["Réalisations", "IA", "E-commerce", "SIG", "Média", "Startups", "FinTech", "Innovation", "Sécurité"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "Tous" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const secondaryFeatured = blogPosts.filter(p => p.featured).slice(0, 2);

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      
      <ImmersiveWrapper 
        ref={heroRef}
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-circuit-board-1065-large.mp4"
        priority={true}
        className="min-h-[650px] flex items-center -mt-[150px] pt-[150px]"
      >
        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-[700px]"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isHeroInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-[#D35400] text-white px-4 py-2 mb-6"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-[12px] font-bold uppercase tracking-[2px]">
                Insights & Actualités
              </span>
            </motion.div>
            
            <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
              Notre{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">Blog</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={isHeroInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
            </h1>
            
            <p className="text-white/80 text-[18px] leading-relaxed mb-10">
              Découvrez nos analyses, tendances et insights sur la technologie en Afrique. 
              Restez à la pointe de l'innovation avec nos experts.
            </p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="relative max-w-[500px]"
            >
              <input 
                type="text"
                placeholder="Rechercher un article..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#F39C12] transition-colors text-[14px] rounded-xl shadow-lg"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            </motion.div>
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
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-[#D35400]" />
              <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px]">
                Article à la une
              </span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <motion.article
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredPost(featuredPost.id)}
              onMouseLeave={() => setHoveredPost(null)}
              className="group cursor-pointer relative"
            >
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3022] via-[#1B3022]/50 to-transparent" />
                
                {featuredPost.trending && (
                  <motion.div
                    className="absolute top-6 left-6 flex items-center gap-2 bg-[#D35400] text-white px-3 py-1.5 rounded-lg shadow-lg"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[11px] font-bold uppercase">Trending</span>
                  </motion.div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="bg-[#F39C12] text-[#1B3022] text-[11px] font-bold uppercase px-3 py-1 mb-4 inline-block rounded-lg">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-white font-display text-[28px] md:text-[32px] font-bold uppercase mb-4 leading-tight group-hover:text-[#F39C12] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/70 text-[15px] leading-relaxed mb-6 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover border-2 border-white/20"
                    />
                    <div>
                      <span className="text-white font-bold text-[14px] block">{featuredPost.author.name}</span>
                      <div className="flex items-center gap-3 text-white/60 text-[12px]">
                        <span>{featuredPost.date}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime} de lecture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                className="h-1.5 bg-[#D35400] rounded-full mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: hoveredPost === featuredPost.id ? 1 : 0 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.article>

            <div className="space-y-6">
              {secondaryFeatured.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                  className="grid grid-cols-5 gap-6 group cursor-pointer bg-[#FCF9F2] p-4 rounded-2xl hover:shadow-xl transition-all duration-500"
                >
                  <div className="col-span-2 relative h-[200px] overflow-hidden rounded-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#1B3022]/30 group-hover:bg-[#1B3022]/10 transition-colors" />
                  </div>
                  <div className="col-span-3 flex flex-col justify-center">
                    <span className="text-[#D35400] text-[11px] font-bold uppercase tracking-wider mb-2">
                      {post.category}
                    </span>
                    <h3 className="text-[#1B3022] font-bold text-[18px] uppercase mb-3 leading-tight group-hover:text-[#D35400] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#2C2C2C]/60 text-[13px] line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                      <div className="flex items-center gap-2 text-[#2C2C2C]/50 text-[11px]">
                        <span className="font-medium text-[#1B3022]">{post.author.name}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-[#FCF9F2] sticky top-0 z-40 border-y border-[#1B3022]/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-[#1B3022] mr-1" />
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-all rounded-full ${
                    activeCategory === cat 
                      ? 'bg-[#D35400] text-white shadow-lg' 
                      : 'bg-white text-[#1B3022] hover:bg-[#1B3022] hover:text-white shadow-sm'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
            <span className="text-[#2C2C2C]/60 text-[12px] font-medium">
              {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-end justify-between mb-10"
              >
                <div>
                  <span className="text-[#D35400] text-[13px] font-bold uppercase tracking-[3px] mb-2 block">
                    Derniers Articles
                  </span>
                  <h2 className="text-[#1B3022] font-display text-[32px] font-bold uppercase">
                    Explorer nos <span className="text-[#D35400]">Insights</span>
                  </h2>
                </div>
              </motion.div>

              <AnimatePresence mode="popLayout">
                <motion.div layout className="grid md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.05 }}
                      onMouseEnter={() => setHoveredPost(post.id)}
                      onMouseLeave={() => setHoveredPost(null)}
                      className="group cursor-pointer bg-[#FCF9F2] overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-[#1B3022]/0 group-hover:bg-[#1B3022]/30 transition-colors" />
                        <span className="absolute top-4 left-4 bg-[#D35400] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-lg">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-3 text-[11px] text-[#2C2C2C]/50 mb-3">
                          <span className="flex items-center gap-1 font-medium">
                            <Calendar className="w-3 h-3 text-[#D35400]" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="w-3 h-3 text-[#D35400]" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="text-[#1B3022] font-bold text-[16px] uppercase mb-3 leading-tight group-hover:text-[#D35400] transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-[#2C2C2C]/60 text-[13px] leading-relaxed mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-[#1B3022]/5">
                          <div className="flex items-center gap-2">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={28}
                              height={28}
                              className="rounded-full object-cover"
                            />
                            <span className="text-[#1B3022] font-medium text-[12px]">{post.author.name}</span>
                          </div>
                          <motion.span
                            className="text-[#D35400] text-[11px] font-bold uppercase flex items-center gap-1"
                            animate={{ x: hoveredPost === post.id ? 5 : 0 }}
                          >
                            Lire <ArrowRight className="w-3 h-3" />
                          </motion.span>
                        </div>
                      </div>

                      <motion.div
                        className="h-1 bg-[#D35400] rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: hoveredPost === post.id ? 1 : 0 }}
                        style={{ originX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-[#2C2C2C]/60 text-[16px]">Aucun article trouvé pour cette recherche.</p>
                </motion.div>
              )}

              {filteredPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-[#1B3022] hover:bg-[#D35400] text-white px-10 py-4 text-[13px] font-bold uppercase tracking-widest transition-all rounded-full shadow-lg"
                  >
                    Charger plus d'articles
                  </motion.button>
                </motion.div>
              )}
            </div>

            <aside className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1B3022] p-8 text-white rounded-3xl shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-5 h-5 text-[#F39C12]" />
                  <h3 className="font-bold text-[14px] uppercase">Newsletter</h3>
                </div>
                <p className="text-white/70 text-[14px] mb-6 leading-relaxed">
                  Recevez nos derniers articles et insights directement dans votre boîte mail.
                </p>
                <input
                  type="email"
                  placeholder="Votre email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#F39C12] transition-colors text-[13px] mb-4 rounded-xl"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#D35400] hover:bg-[#F39C12] py-3 text-[12px] font-bold uppercase tracking-wider transition-colors rounded-xl shadow-lg"
                >
                  S'abonner
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#FCF9F2] p-8 rounded-3xl border border-[#1B3022]/5 shadow-sm"
              >
                <h3 className="text-[#1B3022] font-bold text-[14px] uppercase mb-6">Tags Populaires</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, i) => (
                    <motion.button
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSearchQuery(tag)}
                      className="bg-white hover:bg-[#D35400] hover:text-white text-[#1B3022] px-4 py-2 text-[11px] font-bold transition-all rounded-lg shadow-sm"
                    >
                      #{tag}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#FCF9F2] p-8 rounded-3xl border border-[#1B3022]/5 shadow-sm"
              >
                <h3 className="text-[#1B3022] font-bold text-[14px] uppercase mb-6">À propos</h3>
                <p className="text-[#2C2C2C]/70 text-[13px] leading-relaxed mb-6 font-medium">
                  Le blog Africa Centred Technology ( ACT ) partage des insights sur la technologie, l'innovation et la transformation digitale en Afrique.
                </p>
                <motion.div whileHover={{ scale: 1.02 }}>
                  <Link 
                    href="/about"
                    className="text-[#D35400] text-[12px] font-bold uppercase flex items-center gap-2 hover:text-[#1B3022] transition-colors"
                  >
                    En savoir plus <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              </motion.div>
            </aside>
          </div>
        </div>
      </section>

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
              Vous avez une <br />question ?
            </h2>
            <p className="text-white/80 text-[18px] mb-10 max-w-[600px] mx-auto">
              Notre équipe d'experts est là pour répondre à toutes vos interrogations 
              et vous accompagner dans vos projets.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-[#D35400] px-12 py-6 text-[14px] font-bold uppercase tracking-widest hover:bg-[#1B3022] hover:text-white transition-all rounded-full shadow-2xl"
              >
                Contactez-nous
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </ImmersiveWrapper>

      <Footer />
    </main>
  );
}
