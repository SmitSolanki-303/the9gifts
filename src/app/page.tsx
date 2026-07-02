"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Sparkles, ArrowRight, Mail, Trophy } from "lucide-react";
import { FaInstagram as Instagram, FaXTwitter as Twitter, FaLinkedinIn as Linkedin } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightBackground = useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(212, 175, 55, 0.15), transparent 80%)`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Reset after a few seconds for demo purposes
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-background text-foreground selection:bg-gold/30 group/main"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition duration-500 group-hover/main:opacity-100"
        style={{ background: spotlightBackground }}
      />

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-48 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.05] pointer-events-none blur-[120px] rounded-full bg-gold" />

      {/* Header / Logo */}
      <header className="w-full p-6 md:p-12 flex justify-center md:justify-start relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-8 relative">
            <Image
              src="/images/the9gifts-logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-serif text-sm tracking-[0.3em] uppercase text-gold/90 mt-1">
            The 9 Gifts
          </span>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center justify-center flex-1 py-10 mt-[-5vh] lg:mt-0">
        
        {/* Left Column: Coming Soon */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative mb-10 flex items-center justify-center lg:justify-start w-20 h-20 md:w-28 md:h-28 drop-shadow-[0_0_40px_rgba(212,175,55,0.25)]"
          >
            <Image
              src="/images/the9gifts-logo.png"
              alt="The 9 Gifts Logo"
              fill
              className="object-contain brightness-125 lg:object-left"
            />
            <Sparkles
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-4 h-4 md:w-6 md:h-6 text-gold/80 animate-pulse"
              strokeWidth={1}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-6 overflow-hidden flex items-center justify-center lg:justify-start w-full"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.6em] font-medium text-gold/80 flex items-center justify-center lg:justify-start w-full">
              <span className="hidden lg:inline-block w-10 h-[1px] bg-gradient-to-r from-transparent to-gold/50 mr-4" />
              <span className="inline-block lg:hidden w-8 h-[1px] bg-gradient-to-r from-transparent to-gold/50 mr-3" />
              A New Era of Gifting
              <span className="inline-block lg:hidden w-8 h-[1px] bg-gradient-to-l from-transparent to-gold/50 ml-3" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight mb-6 text-foreground font-light leading-tight drop-shadow-sm"
          >
            We Are <br className="hidden md:block" />
            <span className="italic text-gold lg:px-0">Coming Soon.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-lg text-sm md:text-base text-muted/90 mb-12 font-light leading-relaxed tracking-wide"
          >
            We are meticulously crafting an atelier for bespoke and corporate
            gifting. The art of appreciation is being reimagined. Join our
            exclusive waitlist to be the first to experience the extraordinary.
          </motion.p>

          {/* Email Capture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full max-w-md relative mx-auto lg:mx-0"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0 rounded-none blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <div className="relative backdrop-blur-sm bg-background/80 border border-gold/20 p-1">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 px-4 text-center"
                >
                  <h3 className="text-xl font-serif text-gold mb-2 italic tracking-wide">
                    Welcome to the Inner Circle
                  </h3>
                  <p className="text-muted/80 text-[10px] uppercase tracking-[0.2em]">
                    Your invitation has been secured.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative flex items-center w-full group"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL ADDRESS"
                    className="w-full py-4 pl-6 pr-14 bg-transparent outline-none text-left text-[11px] md:text-xs tracking-[0.2em] uppercase text-foreground placeholder:text-muted/40"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold/10 hover:bg-gold/20 text-gold flex items-center justify-center transition-colors"
                  >
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      strokeWidth={1.5}
                    />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Right Column: Cricket Team Marketing */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="w-full relative mt-16 lg:mt-0 flex justify-center lg:justify-end"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 via-gold/10 to-transparent blur-3xl -z-10 rounded-full" />
          
          <a 
            href="https://www.instagram.com/p/DaQJ87nksYc/?utm_source=ig_web_button_share_sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="block cursor-pointer relative w-full max-w-sm border border-gold/20 bg-background/60 backdrop-blur-md p-6 md:p-8 overflow-hidden group hover:border-gold/40 transition-colors duration-500"
          >
            {/* Subtle glow on hover */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Sponsor Badge */}
            <div className="flex items-center gap-4 mb-8 border-b border-gold/10 pb-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                <Trophy className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <div className="text-[9px] uppercase tracking-[0.3em] text-muted/60 mb-1">
                  Title Sponsor & Owner
                </div>
                <div className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-gold/90 font-semibold">
                  UBN Cricket League 2.0
                </div>
              </div>
            </div>

            {/* Team Info */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif italic text-foreground mb-3 drop-shadow-md">
                The9 अपराजिता
              </h2>
              <div className="inline-block px-4 py-1.5 border border-gold/30 bg-gold/5 text-[10px] uppercase tracking-[0.2em] text-gold mt-2">
                Team Owner: Urvashi Parmar
              </div>
            </div>

            {/* Roster list */}
            <div className="space-y-3 relative z-10">
              <div className="text-[10px] uppercase tracking-[0.3em] text-center text-muted/50 mb-4 border-b border-gold/10 pb-2">
                Meet Our Team
              </div>
              
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-[11px] md:text-xs tracking-widest font-light text-muted/80">
                <div className="flex items-center gap-2">
                  <span className="text-gold/50 text-[10px]">1</span> Avni D
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold/50 text-[10px]">2</span> Reena S
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold/50 text-[10px]">3</span> Niti A
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold/50 text-[10px]">4</span> Purvi S
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold/50 text-[10px]">5</span> Poonam S
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gold/50 text-[10px]">6</span> Rachana N
                </div>
                <div className="flex items-center gap-2 col-span-2 justify-center mt-3 pt-3 border-t border-gold/10 text-gold font-medium">
                  <span className="text-gold/50 text-[10px]">7</span> Urvashi P (Capt.)
                </div>
              </div>
            </div>

            {/* Bottom CTA & Tagline */}
            <div className="mt-8 pt-6 border-t border-gold/10 flex flex-col items-center gap-5 relative z-10">
              <span className="text-[9px] md:text-[10px] font-medium tracking-[0.25em] uppercase text-gold/80 italic">
                Roar For Your Team! The Game Is On!
              </span>
              <div className="flex items-center gap-3 px-6 py-2.5 bg-gold/5 border border-gold/20 text-gold text-[10px] uppercase tracking-[0.2em] font-medium transition-all duration-300 group-hover:bg-gold/10 group-hover:border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]">
                <span>View on Instagram</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </div>
            </div>
          </a>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 md:p-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gold/10 bg-background/50 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-[10px] tracking-[0.2em] text-muted/60 uppercase flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-gold/50 animate-pulse" />
          Preparing to Launch
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex items-center gap-8"
        >
          {[
            { Icon: Instagram, href: "#" },
            { Icon: Twitter, href: "#" },
            { Icon: Linkedin, href: "#" },
            { Icon: Mail, href: "mailto:hello@the9gifts.com" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-muted/40 hover:text-gold transition-colors"
            >
              <item.Icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}
        </motion.div>
      </footer>
    </div>
  );
}
