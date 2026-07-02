"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.2 }}
      className="absolute bottom-4 left-0 right-0 flex justify-center items-center z-20"
    >
      <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
        © {new Date().getFullYear()} The 9 Gifts
      </p>
    </motion.footer>
  );
}
