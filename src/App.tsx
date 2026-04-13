/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, Github, Play, ChevronRight } from "lucide-react";
import appScreenshot from "./gc-magazine.jpg";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface selection:bg-primary selection:text-on-primary font-body">
      {/* TopNavBar */}
      <header className="sticky top-0 w-full z-50 glass-panel">
        <nav className="max-w-7xl mx-auto px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-medium text-primary font-headline  tracking-tight">
            GC Magazine
          </div>
          <div className="flex items-center gap-4">
            <button className="gold-gradient text-on-primary px-5 py-1.5 rounded-full font-bold text-xs transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(255,215,0,0.15)] font-headline ">
              Download App
            </button>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] -z-10" />

          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="lg:col-span-7 z-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-white/5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-primary-container font-accent">
                  The Future of Graduation Memories
                </span>
              </div>
              
              <h1 className="font-headline text-4xl md:text-6xl font-medium tracking-tight text-on-surface leading-[1.1] mb-6">
                Your Legacy, <br /> 
                <span className="text-primary italic">Perfectly</span> Echoed.
              </h1>
              
              <p className="text-body text-base md:text-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed font-light">
                GC Magazine lets you capture your graduation memories through photos, voice, and emotion. Share your journey, relive your best moments, and keep them forever.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="gold-gradient text-on-primary px-8 py-3 rounded-full font-bold text-base transition-all hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] hover:-translate-y-0.5 cursor-pointer">
                  Download
                </button>
              </div>

              {/* Stats/Social Proof */}
              <div className="mt-16 pt-8 border-t border-white/5 flex gap-12">
                <div>
                  <div className="text-2xl font-headline text-primary">10k+</div>
                  <div className="text-xs text-on-surface-variant font-accent uppercase tracking-wider">Graduates</div>
                </div>
                <div>
                  <div className="text-2xl font-headline text-primary">4.9/5</div>
                  <div className="text-xs text-on-surface-variant font-accent uppercase tracking-wider">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-headline text-primary">40+</div>
                  <div className="text-xs text-on-surface-variant font-accent uppercase tracking-wider">Universities</div>
                </div>
              </div>
            </motion.div>

            {/* Visual Content: Mobile Mockup */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="relative mx-auto w-[300px] h-[620px] bg-[#0a0a0a] rounded-[3.5rem] border-[10px] border-[#1c1c1c] shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden"
              >
                {/* Screen Content */}
                <div className="absolute inset-0 bg-surface overflow-hidden">
                  <img 
                    alt="GC Magazine App Interface" 
                    className="w-full h-full object-cover" 
                    src={appScreenshot}
                  />
                </div>
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1c1c1c] rounded-b-3xl z-20" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-low w-full py-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="text-xl font-medium text-primary font-headline">GC Magazine</div>
            <p className="text-[11px] text-on-surface-variant font-headline hidden md:block">
              Redefining the way we remember our greatest achievements.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5">
              <a className="text-on-surface-variant hover:text-primary transition-all" href="#" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-all" href="#" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-all" href="#" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-all" href="#" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
            </div>
            <div className="text-[10px] text-on-surface-variant opacity-40 font-bold italic tracking-widest font-headline">
              © 2026 GRADECHO.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
