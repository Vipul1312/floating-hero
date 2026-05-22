"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const colorStyles = {
  blue: "bg-brand-blue text-white",
  orange: "bg-brand-orange text-white",
  dark: "bg-brand-dark text-white dark:bg-[#1a1230]",
};

const sizeStyles = {
  sm: "px-6 py-3 text-lg",
  md: "px-8 py-4 text-xl",
  lg: "px-10 py-5 text-2xl",
};

export function FloatingCard({
  icon: Icon,
  label,
  color,
  rotation = 0,
  size = "md",
  delay = 0,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotation - 15 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        rotate: rotation + 2,
        transition: { duration: 0.3 },
      }}
      className={cn(
        "inline-flex items-center gap-3 rounded-full font-semibold shadow-xl cursor-pointer select-none",
        colorStyles[color],
        sizeStyles[size],
        "animate-floaty",
        className
      )}

      style={{ animationDelay: `${delay}s` }}
    >
      <Icon className="h-6 w-6 shrink-0" strokeWidth={2.2} />
      <span>{label}</span>
    </motion.div>
  );
}
