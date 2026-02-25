"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  { title: "The Advocate", category: "Politics", color: "bg-[#050A18]", text: "Fighting for equity in the heart of the city.", image: "/images/profile5.webp" },
  { title: "The Visionary", category: "CEO @ Trelio", color: "bg-slate-900", text: "Building tech that scales with purpose.", image: "/images/trelioceo.webp" },
  { title: "The Icon", category: "Editorial", color: "bg-black", text: "Redefining elegance through the walkway.", image: "/images/img3.webp" },
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
    <div ref={container} className="overflow-hidden bg-[#050A18]">
      <div ref={slider} className="flex w-[300vw] h-screen">
        {slides.map((slide, i) => (
          <section 
  key={i} 
  className={`panel w-screen h-full flex items-start md:items-center justify-center p-8 pt-24 md:p-12 ${slide.color}`}
>
            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-[#D4AF37] font-bold tracking-[0.3em] uppercase text-sm">{slide.category}</span>
                <h2 className="text-6xl md:text-8xl font-serif text-white leading-tight">{slide.title}</h2>
                <p className="text-white/60 text-lg max-w-md leading-relaxed">{slide.text}</p>
              </div>
              
              <div className="aspect-[4/5] relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
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