"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WhyChooseMe() {
  return (
    <section className="relative bg-background py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16 md:mb-24">
          <div className="flex items-center gap-2">
            <span className="text-accent text-sm">✳</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/50">
              WHY CHOOSE ME
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] max-w-3xl"
          >
            FOCUSED ON{" "}
            <span className="text-foreground/30">CODE</span> THAT
            <br />
            DELIVERS RESULTS
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-foreground/5"
          >
            <div className="flex items-center gap-2 mb-8">
              <span className="text-accent text-xs">✳</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">
                DEVELOPMENT EXPERIENCE
              </span>
            </div>

            <div className="mb-8">
              <span className="text-7xl md:text-8xl font-black tracking-tighter text-foreground">
                2+
              </span>
            </div>

            <p className="text-sm text-foreground/50 leading-relaxed">
              Building production-grade AI solutions and modern web applications with a
              focus on scalability and impact.
            </p>
          </motion.div>

          {/* Card 2: Project Success */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-foreground/5"
          >
            {/* Avatars row (using hero portrait) */}
            <div className="flex -space-x-3 mb-6">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white"
                >
                  <Image
                    src="/images/hero-portrait-trimmed.png"
                    alt="Team"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2">
              8+ Projects Successfully
            </h3>
            <p className="text-lg font-bold text-foreground/30 mb-6">
              Delivered to Production
            </p>

            <div className="flex items-center gap-3 p-4 bg-foreground/[0.03] rounded-2xl">
              <div className="w-12 h-1.5 bg-accent rounded-full" />
              <div className="w-8 h-1.5 bg-foreground/10 rounded-full" />
              <div className="w-6 h-1.5 bg-foreground/5 rounded-full" />
            </div>
          </motion.div>

          {/* Card 3: Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden min-h-[300px]"
          >
            <Image
              src="/images/hero-portrait-trimmed.png"
              alt="Jatin Thakur"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
