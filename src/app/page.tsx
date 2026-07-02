"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background text-foreground selection:bg-gold/30">
      {/* The Gold Thread & Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-[0.08] pointer-events-none blur-[100px] rounded-full bg-gold" />
      
      {/* Atelier Header - Minimalist Navigation */}
      <header className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-20">
        <div className="text-xs uppercase tracking-[0.2em] font-medium text-muted hover:text-gold transition-colors cursor-pointer">
          Manifesto
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image 
            src="/images/the9gifts-logo.png" 
            alt="The 9 Gifts Logo" 
            width={48} 
            height={48}
            className="w-12 h-12 object-contain brightness-110 drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]" 
          />
        </div>
        <div className="text-xs uppercase tracking-[0.2em] font-medium text-muted hover:text-gold transition-colors cursor-pointer">
          Inquire
        </div>
      </header>

      <main className="relative z-10 w-full max-w-3xl mx-auto px-6 flex flex-col items-center justify-center text-center mt-12">
        
        {/* Monogram / Icon */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12"
        >
          <div className="relative flex items-center justify-center w-24 h-24 rounded-none border border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-onyx p-2">
            <Image 
              src="/images/the9gifts-logo.png" 
              alt="The 9 Gifts Logo" 
              fill
              className="object-contain p-3 brightness-110" 
            />
            <Sparkles className="absolute -top-4 -right-4 w-5 h-5 text-gold/60" strokeWidth={1} />
          </div>
        </motion.div>

        {/* Sub-label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-medium text-gold/80">
            The Gilded Atelier
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif tracking-tight mb-8 text-foreground font-light leading-tight"
        >
          Bespoke <br className="hidden md:block" />
          <span className="italic text-gold">Brilliance.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-xl text-sm md:text-base text-muted mb-16 font-light leading-relaxed tracking-wide"
        >
          We are redefining the art of gifting. A private, exclusive showroom 
          curated for those who appreciate the tactile quality of true craftsmanship. 
          Request an invitation to our grand opening.
        </motion.p>

        {/* Form / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-sm"
        >
          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 border-t border-b border-gold/20 text-center"
            >
              <h3 className="text-xl font-serif text-gold mb-3 italic">Invitation Requested</h3>
              <p className="text-muted text-xs uppercase tracking-widest">We shall contact you shortly</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS"
                className="w-full py-4 bg-transparent border-b border-gold/30 outline-none focus:border-gold transition-colors text-center text-sm tracking-[0.2em] uppercase text-foreground placeholder:text-muted rounded-none"
              />
              <button
                type="submit"
                className="group relative w-full py-4 mt-4 bg-gold text-onyx font-medium text-xs tracking-[0.2em] uppercase overflow-hidden hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-500"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request Access
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </form>
          )}
        </motion.div>

      </main>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center items-center"
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
          © {new Date().getFullYear()} The 9 Gifts
        </p>
      </motion.footer>
    </div>
  );
}
