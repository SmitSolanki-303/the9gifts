"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function AnimatedHero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center mt-32 mb-32 md:mt-16 md:mb-20">
      {/* Monogram / Icon */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative mb-16"
      >
        <div className="relative flex items-center justify-center w-28 h-28 drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          <Image
            src="/images/the9gifts-logo.png"
            alt="The 9 Gifts Logo"
            fill
            className="object-contain brightness-110"
          />
          <Sparkles
            className="absolute -top-2 -right-6 w-6 h-6 text-gold/60"
            strokeWidth={1}
          />
        </div>
      </motion.div>

      {/* Sub-label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mb-10"
      >
        <span className="text-xs md:text-sm uppercase tracking-[0.4em] font-medium text-gold/90">
          The Gilded Atelier
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="text-6xl md:text-8xl font-serif tracking-tight mb-12 text-foreground font-light leading-tight drop-shadow-sm"
      >
        An Ocean of <br className="hidden md:block" />
        <span className="italic text-gold px-2">Creations.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-2xl text-sm md:text-base text-muted/90 mb-20 font-light leading-loose tracking-wide"
      >
        Elevating corporate and customized gifting into an art form. From
        bespoke office essentials and tech accessories to lifestyle curation
        and festive hampers, discover tailored solutions for every occasion.
        Request early access to our premium collections.
      </motion.p>

      {/* Form / CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full max-w-md mb-8"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-10 border-t border-b border-gold/10 text-center"
          >
            <h3 className="text-2xl font-serif text-gold mb-4 italic tracking-wide">
              Invitation Requested
            </h3>
            <p className="text-muted/80 text-xs uppercase tracking-[0.3em]">
              We shall contact you shortly
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="relative flex items-center w-full group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL"
              className="w-full py-4 pl-4 pr-12 bg-transparent border-b border-gold/30 outline-none focus:border-gold transition-colors text-left text-xs md:text-sm tracking-[0.2em] uppercase text-foreground placeholder:text-muted/40 rounded-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-gold/60 hover:text-gold transition-colors flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </button>
          </form>
        )}
      </motion.div>
    </main>
  );
}
