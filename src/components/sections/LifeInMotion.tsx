"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { 
    title: "The Advocate", 
    category: "Politics", 
    // LIGHT: Warm Ivory | DARK: Deep Navy
    color: "bg-[#F9F7F2] dark:bg-[#050A18]", 
    text: "Fighting for equity in the heart of the city.", 
    image: "/images/profile5.webp" 
  },
  { 
    title: "The Visionary", 
    category: "CEO @ Trelio", 
    // LIGHT: Minimalist Paper White | DARK: Slate 900
    color: "bg-[#FFFFFF] dark:bg-slate-900", 
    text: "Building tech that scales with purpose.", 
    image: "/images/trelioceo.webp" 
  },
  { 
    title: "The Icon", 
    category: "Editorial", 
    // LIGHT: Soft Pearl Grey/White | DARK: True Black
    color: "bg-[#F2F2F2] dark:bg-black", 
    text: "Redefining elegance on the walkway.", 
    image: "/images/img3.webp" 
  },
];

export default function LifeInMotion() {
  const container = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!slider.current || !container.current) return;
    const panels = gsap.utils.toArray(".panel");
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1, 
        end: () => "+=" + (slider.current?.offsetWidth || 0),
        invalidateOnRefresh: true,
      },
    });
  }, { scope: container });

  return (
    // We set the main container to Ivory so the transition starts smoothly
    <div ref={container} className="overflow-hidden bg-[#F9F7F2] dark:bg-[#050A18] transition-colors duration-700">
      <div ref={slider} className="flex w-[300vw] h-screen">
        {slides.map((slide, i) => (
          <section 
            key={i} 
            className={`panel w-screen h-full flex items-start md:items-center justify-center p-8 pt-24 md:p-12 transition-colors duration-700 ${slide.color}`}
          >
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                {/* Gold accent looks incredible against Ivory and White */}
                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">
                  {slide.category}
                </span>
                
                {/* Text is a soft 'Charcoal Navy' in light mode instead of harsh black */}
                <h2 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] dark:text-white leading-tight">
                  {slide.title}
                </h2>
                
                <p className="text-slate-500 dark:text-white/60 text-lg max-w-md leading-relaxed">
                  {slide.text}
                </p>
              </div>
              
              {/* Glassmorphism card for the image */}
              <div className="aspect-[4/5] relative bg-white/40 dark:bg-white/5 border border-white dark:border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-2xl backdrop-blur-sm">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}