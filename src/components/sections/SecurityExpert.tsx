"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Fingerprint, ShieldCheck, Lock, Unlock, Zap } from "lucide-react";

export default function SecurityExpert() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#020305] flex items-center justify-center overflow-hidden font-mono">
      
      {/* 1. BACKGROUND TECH-GRID */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#d4af37 0.5px, transparent 0.5px)`, backgroundSize: '30px 30px' }} />

      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          /* STATE 1: THE LOCK (The Hook) */
          <motion.div 
            key="locked"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.1 }}
            className="relative z-10 flex flex-col items-center cursor-pointer group"
            onClick={() => setIsUnlocked(true)}
          >
            <div className="relative">
              <motion.div 
                animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 border-2 border-dashed border-gold-accent/30 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Fingerprint className="w-16 h-16 text-gold-accent group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <p className="mt-8 text-gold-accent tracking-[0.5em] text-[10px] animate-pulse">
              [ CLICK TO AUTHENTICATE PROFESSIONAL PROFILE ]
            </p>
          </motion.div>
        ) : (
          /* STATE 2: THE REVEAL (The Epic Intro) */
          <motion.div 
            key="unlocked"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="relative z-10 w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 p-8"
          >
           {/* LEFT: Technical ID Card - UPDATED WITH PROFESSIONAL TITLE */}
<div className="border border-gold-accent/20 bg-black/60 backdrop-blur-xl p-8 rounded-sm relative overflow-hidden group">
  {/* Animated Scanner Bar */}
  <motion.div 
    animate={{ top: ["0%", "100%", "0%"] }} 
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute left-0 right-0 h-[1px] bg-gold-accent/50 z-20"
  />
  
  <div className="flex justify-between items-start mb-8">
    <ShieldCheck className="text-gold-accent w-10 h-10" />
    <div className="text-right text-[9px] text-white/30 uppercase leading-tight font-mono">
      Subject: WAKESHO_01<br/>Status: Field_Active<br/>Clearance: Level_IV
    </div>
  </div>

  <div className="mb-8">
    <p className="text-[10px] text-gold-accent font-mono uppercase tracking-[0.3em] mb-2">Professional Field</p>
    <h2 className="text-5xl md:text-7xl font-serif text-white leading-none">
      Cyber <span className="text-gold-accent italic">Architect</span>
    </h2>
  </div>

  <p className="text-white/50 text-sm leading-relaxed mb-8 border-l border-gold-accent pl-4">
    Operating at the intersection of critical infrastructure defense and ethical governance. 
    Engineering resilient systems to protect digital sovereignty.
  </p>

  <div className="flex gap-4">
    <div className="px-3 py-1 bg-gold-accent/10 border border-gold-accent/20 text-gold-accent text-[9px] font-mono">CORE_COMPETENCY</div>
  </div>
</div>

            {/* RIGHT: Live Feed / Skills */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "Vulnerability Assessment", val: "99%", icon: <Zap size={14}/> },
                { label: "Zero Trust Architecture", val: "Active", icon: <Lock size={14}/> },
                { label: "Cloud Sovereignty", val: "Verified", icon: <Unlock size={14}/> }
              ].map((skill, i) => (
                <motion.div 
                  initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}
                  key={i} className="flex items-center justify-between p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gold-accent">{skill.icon}</span>
                    <span className="text-white text-xs uppercase tracking-widest">{skill.label}</span>
                  </div>
                  <span className="text-gold-accent font-mono text-xs">{skill.val}</span>
                </motion.div>
              ))}

              {/* Terminal Output */}
              <div className="mt-4 p-4 bg-black border border-white/5 font-mono text-[10px] text-green-500/60">
                {'>'} ACCESS_GRANTED: PROCEEDING TO CORE_INTEL...<br/>
                {'>'} ENCRYPTING SESSION... [OK]<br/>
                {'>'} SUBJECT_KNOWLEDGE_BASE: LOADED.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}