"use client";

import React, { useMemo, useState, useEffect, forwardRef, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Cpu, Zap, BrainCircuit, Network, Share2, BarChart, TrendingUp, Code, Database } from 'lucide-react';

// Force rebuild - 2026-01-28 - Optimization focus

export function AfricanPattern({ className, opacity = 0.08 }: { className?: string, opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke-width='0.7' opacity='0.8'%3E%3Cpath d='M0 60 L30 30 L60 60 L30 90 Z' stroke='%23D35400'/%3E%3Cpath d='M120 60 L90 30 L60 60 L90 90 Z' stroke='%23D35400'/%3E%3Cpath d='M60 0 L30 30 L60 60 L90 30 Z' stroke='%23F39C12'/%3E%3Cpath d='M60 120 L30 90 L60 60 L90 90 Z' stroke='%23F39C12'/%3E%3Ccircle cx='60' cy='60' r='3' fill='%23F39C12'/%3E%3Cpath d='M0 0 L20 20 M120 120 L100 100 M120 0 L100 20 M0 120 L20 100' stroke='%23D35400' stroke-dasharray='2,2'/%3E%3Cpath d='M60 0 v120 M0 60 h120' stroke='%23F39C12' stroke-width='0.2' opacity='0.3'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '80px 80px',
        opacity
      }}
    />
  );
}

export function AfricanDivider({ className }: { className?: string }) {
  return (
    <div className={`w-full h-8 flex items-center justify-center overflow-hidden opacity-30 ${className}`}>
      <div className="flex gap-4">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="flex gap-2 text-[#F39C12]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 12L12 22L20 12L12 2Z" stroke="currentColor" strokeWidth="1" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12H22M12 2V22" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export function VideoBackground({ videoUrl, overlayColor = "rgba(27, 48, 34, 0.9)", priority = false }: { videoUrl: string, overlayColor?: string, priority?: boolean }) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload={priority ? "auto" : "none"}
        className="absolute inset-0 w-full h-full object-cover scale-105 brightness-[0.4]"
        style={{ willChange: "transform" }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ backgroundColor: overlayColor }} />
    </div>
  );
}

export function AIParticleFlow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    // Reduced count for performance: 30 -> 15
    return [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * -20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      targetX: (Math.random() - 0.5) * 400,
      targetY: (Math.random() - 0.5) * 400,
    }));
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-25">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#F39C12] rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            willChange: "transform, opacity",
          }}
          animate={{
            x: [0, p.targetX],
            y: [0, p.targetY],
            opacity: [0, 0.6, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

export function AIWorkingAnimation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {/* Reduced count for performance: 8 -> 4 */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-[#F39C12]/20 rounded-lg bg-[#0A1A0F]/40 backdrop-blur-sm p-4 overflow-hidden shadow-xl"
          style={{
            width: 240,
            height: 140,
            left: `${(i * 35) % 100}%`,
            top: `${(Math.floor(i / 2) * 45 + (i % 2) * 15)}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <Cpu className="w-3 h-3 text-[#F39C12]" />
              <span className="text-[8px] text-white/50 font-mono uppercase tracking-widest">Task_0x{i}</span>
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-green-500/50 animate-pulse" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#D35400] to-[#F39C12]"
                  animate={{ width: ["10%", "90%", "40%"] }}
                  transition={{ duration: 5 + i, repeat: Infinity }}
                />
              </div>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {[...Array(12)].map((_, j) => (
                <motion.div
                  key={j}
                  className="h-1 bg-[#F39C12]/10 rounded-sm"
                  animate={{
                    opacity: [0.1, 0.6, 0.1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: j * 0.15 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function TechGrowthBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-5">
      <div className="absolute top-1/4 left-1/4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <Network className="w-48 h-48 text-[#D35400]" />
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 right-1/4">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <TrendingUp className="w-64 h-64 text-[#F39C12]" />
        </motion.div>
      </div>
    </div>
  );
}

export function AINodesBackground({ opacity = 0.1 }: { opacity?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const nodes = useMemo(() => {
    if (!mounted) return [];
    // Reduced count for extreme performance: 20 -> 12
    return [...Array(12)].map((_, i) => ({
      id: i,
      x1: Math.random() * 1000,
      y1: Math.random() * 1000,
      x2: Math.random() * 1000,
      y2: Math.random() * 1000,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * -10,
      randX: (Math.random() - 0.5) * 150,
      randY: (Math.random() - 0.5) * 150,
      nodeRandX: (Math.random() - 0.5) * 80,
      nodeRandY: (Math.random() - 0.5) * 80,
      nodeDuration: 8 + Math.random() * 8
    }));
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <defs>
          <radialGradient id="dotGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#F39C12" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        {nodes.map((node) => (
          <React.Fragment key={node.id}>
            <motion.line
              x1={node.x1}
              y1={node.y1}
              x2={node.x2}
              y2={node.y2}
              stroke="#F39C12"
              strokeWidth="0.3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.circle
              cx={node.x1}
              cy={node.y1}
              r="1"
              fill="url(#dotGradient)"
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: node.nodeDuration,
                repeat: Infinity
              }}
            />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
}

// Compatibility alias
export { AINodesBackground as NeuralNetworkBackground };

interface ImmersiveWrapperProps {
  children: React.ReactNode;
  videoUrl?: string;
  showAI?: boolean;
  showPattern?: boolean;
  showGrowth?: boolean;
  className?: string;
  priority?: boolean;
  noBackground?: boolean;
  showAfricanPattern?: boolean;
}

export const ImmersiveWrapper = forwardRef<HTMLElement, ImmersiveWrapperProps>(({
  children,
  videoUrl,
  showAI = false,
  showPattern = false,
  showGrowth = false,
  className = "",
  priority = false,
  noBackground = false,
  showAfricanPattern = false
}, ref) => {
  const localRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(localRef, { once: false, amount: 0.1 });
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (isInView && !hasBeenInView) {
      setHasBeenInView(true);
    }
  }, [isInView, hasBeenInView]);

  return (
    <section ref={(node) => {
      // Handle both local ref for useInView and external ref from forwardRef
      localRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }} className={`relative overflow-hidden w-full ${className}`}>
      {!noBackground && (
        videoUrl ? (
          <VideoBackground videoUrl={videoUrl} priority={priority} />
        ) : (
          <div className="absolute inset-0 bg-[#1B3022] -z-10" />
        )
      )}

      {/* Background elements are only rendered/active when in view or priority */}
      {(isInView || priority || hasBeenInView) && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 pointer-events-none"
          >
            {showAI && <AINodesBackground />}
            {showAI && <AIParticleFlow />}
            {showAI && <AIWorkingAnimation />}
            {showGrowth && <TechGrowthBackground />}
            {showPattern && <AfricanPattern opacity={0.06} />}
            {showAfricanPattern && <AfricanPattern opacity={0.06} />}
          </motion.div>
        </AnimatePresence>
      )}

      <div className="relative z-10">
        {children}
      </div>

      {!noBackground && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#1B3022]/40 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-[#D35400]/05 to-transparent" />
        </div>
      )}
    </section>
  );
});

ImmersiveWrapper.displayName = "ImmersiveWrapper";
