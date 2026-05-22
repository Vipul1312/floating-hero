"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function MessageCard({
  name,
  message,
  reference,
  timeAgo,
  avatar,
  rotation = 0,
  delay = 0,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotation - 10 }}
      animate={{ opacity: 1, y: 0, rotate: rotation }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
      className={cn(
        "flex items-start gap-3 rounded-2xl bg-brand-lilac/90 backdrop-blur px-4 py-3 shadow-xl max-w-xs animate-floaty",
        "dark:bg-[#3a2d5e]/90",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-1 self-stretch rounded-full bg-brand-dark/40 dark:bg-white/30" />

      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-white">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-lg">
            😀
          </div>
        )}
      </div>

      <div className="flex flex-col text-brand-dark dark:text-white">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs leading-snug opacity-80">{message}</p>
        <p className="mt-1 text-[11px] font-medium">
          <span className="underline">{reference}</span>
          <span className="opacity-60"> · {timeAgo}</span>
        </p>
      </div>
    </motion.div>
  );
}