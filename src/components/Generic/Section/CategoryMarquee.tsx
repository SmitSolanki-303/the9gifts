"use client";

import { motion } from "framer-motion";

const categories = [
  "Corporate Gifting",
  "Office Essentials",
  "Drinkware",
  "Tech Accessories",
  "Bags & Travel",
  "Apparel",
  "Festive Hampers",
  "Eco-Friendly",
  "Promotional Items",
  "Lifestyle",
];

export function CategoryMarquee() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1 }}
      className="absolute bottom-16 left-0 right-0 overflow-hidden w-full border-y border-gold/10 bg-onyx/80 py-3 backdrop-blur-md z-10"
    >
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex items-center gap-8 px-4"
        >
          {/* Double the array for seamless looping */}
          {[...categories, ...categories].map((category, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gold/60 font-medium">
                {category}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold/20" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
