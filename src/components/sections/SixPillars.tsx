"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Leaf, Scale, Lightbulb, Globe, ShieldCheck } from "lucide-react";

const pillars = [
  {
    id: "mental-health",
    title: "Mental Health",
    icon: <Heart className="w-6 h-6" />,
    description: "Destigmatizing illness and providing support systems within correctional facilities.",
    impact: ["Awareness & Counseling", "Prison Staff Training", "Peer Support Networks"],
    color: "bg-navy-deep",
  },
  {
    id: "climate",
    title: "Climate Action",
    icon: <Leaf className="w-6 h-6" />,
    description: "Championing reforestation and sustainable community practices across Kenya.",
    impact: ["Indigenous Tree Planting", "Ecosystem Restoration", "National Campaign Leadership"],
    color: "bg-slate-900",
  },
  {
    id: "human-rights",
    title: "Human Rights",
    icon: <Scale className="w-6 h-6" />,
    description: "Advocating for the dignity and successful reintegration of incarcerated persons.",
    impact: ["Policy Advocacy", "Legal Aid Facilitation", "Living Condition Reform"],
    color: "bg-black",
  },
  {
    id: "empowerment",
    title: "Empowerment",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "Nurturing youth leadership and economic independence through mentorship.",
    impact: ["Youth Mentorship", "Women Workshops", "Skill Acquisition"],
    color: "bg-navy-deep",
  },
  {
    id: "culture",
    title: "Cultural Heritage",
    icon: <Globe className="w-6 h-6" />,
    description: "Celebrating and preserving the rich diversity of Taita Taveta traditions.",
    impact: ["Global Representation", "Local Resource Mobilization", "Heritage Advocacy"],
    color: "bg-slate-900",
  },
  {
    id: "peace",
    title: "Peace Building",
    icon: <ShieldCheck className="w-6 h-6" />,
    description: "Promoting conflict resolution to create safer, cohesive societies.",
    impact: ["Conflict Resolution", "Community Harmony", "Safety Initiatives"],
    color: "bg-black",
  },
];

export default function SixPillars() {
  const [expanded, setExpanded] = useState<string | null>("mental-health");
  const [isPaused, setIsPaused] = useState(false);

  // Auto-animation logic
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setExpanded((prev) => {
        const currentIndex = pillars.findIndex(p => p.id === prev);
        const nextIndex = (currentIndex + 1) % pillars.length;
        return pillars[nextIndex].id;
      });
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualSelect = (id: string) => {
    setExpanded(id);
    setIsPaused(true);
    // Resume auto-cycling after 10 seconds of no interaction
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="py-24 bg-white dark:bg-navy-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center md:text-left">
        <h2 className="text-4xl md:text-6xl font-serif text-navy-deep dark:text-white">Advocacy Pillars</h2>
        <p className="text-gold-accent mt-4 tracking-[0.3em] uppercase text-sm font-bold">Driven by Justice & Sustainability</p>
      </div>

      {/* Responsive Container: Column on mobile, Row on desktop */}
      <div className="flex flex-col md:flex-row h-auto md:h-[650px] w-full border-t border-b border-navy-deep/10 dark:border-white/10">
        {pillars.map((pillar) => {
          const isExpanded = expanded === pillar.id;
          return (
            <motion.div
              key={pillar.id}
              onClick={() => handleManualSelect(pillar.id)}
              layout // This makes the resizing look smooth
              className={`relative cursor-pointer overflow-hidden transition-all duration-700 ease-in-out border-b md:border-b-0 md:border-r border-navy-deep/10 dark:border-white/10 flex flex-col
                ${isExpanded ? "flex-[5] min-h-[400px] md:min-h-0" : "flex-[1] min-h-[80px] md:min-h-0"}`}
            >
              {/* Background Color */}
              <div className={`absolute inset-0 z-0 ${pillar.color} transition-opacity duration-500 ${isExpanded ? "opacity-100" : "opacity-80"}`} />

              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                
                {/* Header: Icon + Title (Title hides on desktop when collapsed to save space) */}
                <div className="flex items-center gap-4 text-gold-accent">
                  <div className="flex-shrink-0">{pillar.icon}</div>
                  <h3 className={`font-serif text-white transition-opacity duration-300 ${isExpanded ? "text-2xl md:text-4xl opacity-100" : "text-xl md:opacity-0"}`}>
                    {pillar.title}
                  </h3>
                </div>

                {/* Vertical Title (Only visible on desktop when collapsed) */}
                {!isExpanded && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none"
                  >
                    <span className="rotate-90 md:-rotate-90 whitespace-nowrap text-white/40 uppercase tracking-[0.5em] font-bold text-xs">
                      {pillar.title}
                    </span>
                  </motion.div>
                )}

                {/* Expanded Content with Glassmorphism */}
                <AnimatePresence mode="wait">
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col h-full mt-6 justify-end"
                    >
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                          {pillar.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {pillar.impact.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-gold-accent flex-shrink-0" />
                              <span className="text-white/60 text-xs md:text-sm tracking-wide">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}