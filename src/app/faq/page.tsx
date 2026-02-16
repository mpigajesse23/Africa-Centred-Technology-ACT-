"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, Code, Briefcase, DollarSign, Users, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { ImmersiveWrapper } from '@/components/ui/immersive-backgrounds';

const faqCategories = [
  { id: "all", name: "Toutes", icon: HelpCircle },
  { id: "services", name: "Services", icon: Briefcase },
  { id: "technical", name: "Technique", icon: Code },
  { id: "pricing", name: "Tarification", icon: DollarSign },
  { id: "team", name: "Équipe", icon: Users },
];

const faqs = [
  {
    category: "services",
    question: "Quels types de projets ACT prend-il en charge ?",
    answer: "ACT accompagne les entreprises africaines dans tous types de projets technologiques : transformation digitale, développement d'applications web et mobile, intelligence des données, cybersécurité, et conseil stratégique. Nous travaillons avec des startups, PME et grandes entreprises."
  },
  {
    category: "services",
    question: "Travaillez-vous avec des clients internationaux ?",
    answer: "Oui, bien que notre focus soit l'Afrique, nous collaborons avec des clients internationaux qui souhaitent développer des solutions pour le marché africain ou qui recherchent notre expertise en ingénierie."
  },
  {
    category: "technical",
    question: "Quelles technologies utilisez-vous ?",
    answer: "Nous utilisons les technologies les plus modernes et adaptées à chaque projet : React, Next.js, Node.js, Python, AWS, Azure, Kubernetes, PostgreSQL, MongoDB, et bien d'autres. Nous choisissons la stack technique en fonction des besoins spécifiques de chaque client."
  },
  {
    category: "technical",
    question: "Proposez-vous de la maintenance après livraison ?",
    answer: "Absolument. Nous offrons des contrats de maintenance et de support post-livraison pour garantir la pérennité et l'évolution de vos solutions. Cela inclut les mises à jour, la correction de bugs, et l'ajout de nouvelles fonctionnalités."
  },
  {
    category: "pricing",
    question: "Comment sont calculés vos tarifs ?",
    answer: "Nos tarifs sont calculés en fonction de la complexité du projet, des technologies requises, et de la durée estimée. Nous proposons des devis personnalisés après une première consultation gratuite. La devise utilisée est le Dirham Marocain (MAD)."
  },
  {
    category: "pricing",
    question: "Proposez-vous des forfaits mensuels ?",
    answer: "Oui, nous proposons des forfaits mensuels pour des missions de conseil récurrent, de maintenance, ou d'augmentation d'équipe. Ces forfaits sont flexibles et adaptés à vos besoins."
  },
  {
    category: "team",
    question: "Où est basée votre équipe ?",
    answer: "Notre siège est à Casablanca, Maroc, mais nous avons une équipe distribuée à travers plusieurs pays africains. Nous travaillons également en mode remote pour offrir une flexibilité maximale."
  },
  {
    category: "team",
    question: "Puis-je rencontrer l'équipe avant de commencer un projet ?",
    answer: "Bien sûr ! Nous organisons systématiquement une réunion de découverte (en présentiel ou en visio) pour vous présenter l'équipe qui travaillera sur votre projet et discuter de vos objectifs."
  },
  {
    category: "services",
    question: "Combien de temps dure un projet en moyenne ?",
    answer: "La durée varie selon la complexité : de 4 à 12 semaines pour un MVP, et de 3 à 9 mois pour des projets d'envergure. Nous établissons un planning détaillé lors de la phase de cadrage."
  },
  {
    category: "technical",
    question: "Offrez-vous de la formation pour nos équipes ?",
    answer: "Oui, nous proposons des sessions de formation et de transfert de compétences pour que vos équipes puissent prendre en main les solutions que nous développons. Cela peut être inclus dans le projet ou proposé séparément."
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#FCF9F2]">
      <Header />
      
      {/* Hero Section */}
      <ImmersiveWrapper 
        videoUrl="https://assets.mixkit.co/videos/preview/mixkit-customer-service-person-4903-large.mp4"
        priority={true}
        className="min-h-[650px] flex items-center -mt-[150px] pt-[150px]"
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
                Questions Fréquentes
              </span>
            </motion.div>
            
            <h1 className="text-white font-display text-[42px] md:text-[56px] lg:text-[64px] font-extrabold uppercase leading-[1.05] mb-6">
              Comment Pouvons-Nous{" "}
              <span className="relative inline-block">
                <span className="text-[#F39C12]">Vous Aider</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1.5 bg-[#D35400]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              {" "}?
            </h1>
            
            <p className="text-white/80 text-[18px] leading-relaxed mb-10 max-w-[600px]">
              Trouvez rapidement des réponses à vos questions sur nos services, nos technologies et notre approche.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl relative mb-8">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2C2C2C]/40" />
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 bg-white text-[#1B3022] rounded-full text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D35400] shadow-xl"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="bg-[#D35400] hover:bg-white hover:text-[#D35400] text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest transition-all flex items-center gap-2"
                >
                  Nous Contacter
                  <ArrowRight className="w-4 h-4" />
                </Link>
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

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 text-[13px] font-bold uppercase tracking-wider transition-all rounded-full flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-[#D35400] text-white shadow-lg'
                    : 'bg-[#FCF9F2] text-[#1B3022] hover:bg-[#F39C12] hover:text-white'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFaqs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <HelpCircle className="w-16 h-16 text-[#2C2C2C]/20 mx-auto mb-4" />
                <p className="text-[16px] text-[#2C2C2C]/60">
                  Aucune question ne correspond à votre recherche.
                </p>
              </motion.div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#FCF9F2] transition-all"
                  >
                    <span className="font-bold text-[16px] text-[#1B3022] pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-[#D35400]" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-[14px] text-[#2C2C2C]/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            )}
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
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-[16px] text-white/80 max-w-2xl mx-auto mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions spécifiques.
            </p>
            <button className="px-8 py-4 bg-[#D35400] text-white font-bold text-[14px] uppercase tracking-wider rounded-full hover:bg-[#F39C12] transition-all">
              Nous Contacter
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
