/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

import appScreenshot from "./assets/gc-magazine.jpg";

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
                  <div className="text-2xl font-headline text-primary">4.5/5</div>
                  <div className="text-xs text-on-surface-variant font-accent uppercase tracking-wider">Rating</div>
                </div>
                <div>
                  <div className="text-2xl font-headline text-primary">30+</div>
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
              <a className="text-on-surface-variant hover:text-primary transition-all" href="https://t.me/girma_thoughts" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a className="text-on-surface-variant hover:text-primary transition-all" href="https://tiktok.com/" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                <svg className="w-4 h-4" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.22-2.45.92-4.94 2.88-6.18 1.25-.8 2.71-1.16 4.19-1.12v4.09c-1.32-.1-2.59.4-3.37 1.34-.69.83-.92 2-.6 3.05.3.93 1.05 1.65 1.96 1.96.95.31 2.05.2 2.9-.3 1.15-.67 1.83-1.95 1.79-3.28V0h3.58z" />
                </svg>
              </a>
            </div>
            <div className="text-[10px] text-on-surface-variant opacity-40 font-bold italic tracking-widest font-headline">
              © 2026 GC Magazine.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
