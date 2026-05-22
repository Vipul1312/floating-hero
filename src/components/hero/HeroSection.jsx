"use client";

import { motion } from "framer-motion";
import { FloatingCard } from "./FloatingCard";
import { MessageCard } from "./MessageCard";
import { BackgroundBlobs } from "./BackgroundBlobs";
import { floatingCards } from "./floatingData";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-bg dark:bg-[#0f0a1f]">
      <BackgroundBlobs />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:py-32 lg:grid-cols-2 lg:gap-8">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-brand-dark sm:text-5xl md:text-6xl lg:text-[64px] dark:text-white">
            A single platform to{" "}
            <span className="font-bold">manage</span> every part of your{" "}
            <span className="font-bold">legal work</span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-brand-dark/80 md:text-lg dark:text-white/70">
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication – all in one system.
          </p>
        </motion.div>

        <div className="relative hidden h-[600px] md:block">
          {floatingCards.map((card, idx) => (
            <div
              key={card.id}
              className="absolute"
              style={{ top: card.top, left: card.left }}
            >
              <FloatingCard
                icon={card.icon}
                label={card.label}
                color={card.color}
                rotation={card.rotation}
                size={card.size}
                delay={0.2 + idx * 0.15}
              />
            </div>
          ))}

          <div className="absolute top-[32%] left-[38%]">
            <MessageCard
              name="John Doe - Portal"
              message="Hey! Could you please review a document for me?"
              reference="MAT-2233"
              timeAgo="2 h ago"
              rotation={-4}
              delay={0.7}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-3 md:hidden">
          {floatingCards.map((card, idx) => (
            <FloatingCard
              key={card.id}
              icon={card.icon}
              label={card.label}
              color={card.color}
              rotation={0}
              size="sm"
              delay={0.1 * idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
