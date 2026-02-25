"use client";
import React from "react";
import { motion } from "framer-motion";
import { Send, Instagram, Mail, Linkedin } from "lucide-react";

export default function ContactCard() {
  return (
    <section className="py-24 bg-white dark:bg-[#050A18] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          
          {/* LEFT: SOCIAL & INFO */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif text-[#050A18] dark:text-white leading-tight">
                Let's <br /> <span className="italic text-[#D4AF37]">Connect</span>
              </h2>
              <p className="mt-6 text-[#050A18]/60 dark:text-white/60 leading-relaxed">
                Available for national advocacy, brand partnerships, and speaking engagements.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Email</p>
                  <p className="text-sm text-[#050A18] dark:text-white">Lizwakesho4@gmail.com</p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                  <Instagram size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Instagram</p>
                  <p className="text-sm text-[#050A18] dark:text-white">@lizwakesho_</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">LinkedIn</p>
                  <p className="text-sm text-[#050A18] dark:text-white">Liz Wakesho</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: THE FORM CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-[#F8F9FA] dark:bg-[#0A0F1D] p-8 md:p-12 rounded-[3rem] shadow-2xl border border-[#D4AF37]/10"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  className="w-full bg-white dark:bg-[#050A18] border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-[#D4AF37] outline-none transition-all text-[#050A18] dark:text-white placeholder:text-gray-400"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  className="w-full bg-white dark:bg-[#050A18] border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-[#D4AF37] outline-none transition-all text-[#050A18] dark:text-white placeholder:text-gray-400"
                />
              </div>

              {/* Message Input */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#D4AF37] ml-2">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="What's on your mind?" 
                  className="w-full bg-white dark:bg-[#050A18] border border-gray-200 dark:border-white/10 rounded-2xl p-4 focus:border-[#D4AF37] outline-none transition-all text-[#050A18] dark:text-white resize-none placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <button className="group relative w-full md:w-auto overflow-hidden rounded-full bg-[#050A18] dark:bg-[#D4AF37] px-12 py-4 text-white font-bold transition-all duration-300 active:scale-95">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message <Send size={16} />
                  </span>
                  {/* Hover Background Slide */}
                  <div className="absolute inset-0 bg-[#D4AF37] dark:bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}