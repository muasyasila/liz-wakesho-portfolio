"use client";
import { motion } from "framer-motion";

export default function DigitalSignature() {
  return (
    <footer className="relative bg-[#05070A] py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
        
        <div className="relative group mb-20">
          {/* THE SIGNATURE DRAWING */}
          <svg 
            width="400" 
            height="120" 
            viewBox="0 0 400 120" 
            className="w-64 md:w-[500px] h-auto"
          >
            <motion.text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-serif text-6xl md:text-8xl fill-transparent stroke-gold-accent stroke-[0.5]"
              initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            >
              WAKESHO
            </motion.text>
          </svg>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-center text-white/30 font-mono text-[10px] tracking-[0.8em] uppercase mt-4"
          >
            Professional Profile — 2026
          </motion.p>
        </div>

        {/* Links & Professional Sign-off */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 font-mono text-[9px] text-white/40 tracking-widest">
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold-accent transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-gold-accent transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-gold-accent transition-colors">CREDENTIALS</a>
          </div>
          
          <div className="text-center md:text-right">
            DESIGNED FOR THE FUTURE<br/>
            ALL RIGHTS RESERVED ©
          </div>
        </div>
      </div>

      {/* "W" Watermark Background */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none opacity-[0.02]">
        <h1 className="text-[30rem] font-serif text-white">W</h1>
      </div>
    </footer>
  );
}