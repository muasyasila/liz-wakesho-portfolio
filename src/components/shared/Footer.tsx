export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-navy-deep py-16 md:py-20 border-t border-navy-deep/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-12">
          
          {/* Brand Side */}
          <div className="space-y-6 max-w-sm w-full md:w-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-deep dark:text-white">
              LIZ WAKESHO
            </h2>
            <p className="text-navy-deep/60 dark:text-white/60 leading-relaxed text-sm sm:text-base">
              A leader for the people, a visionary for the mind, and an advocate for the future.
            </p>
          </div>

          {/* Quick Navigation - The Vision only */}
          <div className="md:mt-0 md:mr-8 lg:mr-16">
            <div className="space-y-4">
              <h4 className="font-bold uppercase tracking-tighter text-gold-accent text-sm sm:text-base">
                The Vision
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm opacity-80">
                <li className="hover:text-gold-accent cursor-pointer transition-colors">
                  Leadership
                </li>
                <li className="hover:text-gold-accent cursor-pointer transition-colors">
                  CEO of Trelio
                </li>
                <li className="hover:text-gold-accent cursor-pointer transition-colors">
                  Model
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright notice - moved outside the flex container to be at the bottom */}
        <div className="mt-12 md:mt-16 text-center md:text-left">
          <p className="text-navy-deep/40 dark:text-white/40 text-xs sm:text-sm">
            © {new Date().getFullYear()} Liz Wakesho. All rights reserved.
          </p>
        </div>
      </div>

      {/* The Monolithic Signature Backdrop - improved positioning */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden">
        <h1 className="text-[25vw] md:text-[19vw] font-black text-navy-deep/[0.03] dark:text-white/[0.03] leading-[0.7] text-center tracking-tighter whitespace-nowrap">
          WAKESHO
        </h1>
      </div>
    </footer>
  );
}