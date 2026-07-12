"use client";

import { useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";

// three/rapier are client-only (WASM physics); skip SSR for the badge
const Lanyard = dynamic(() => import("./Lanyard"), { ssr: false });

export default function Hero() {
  const { firstName, name, title, tagline, email } = RESUME_DATA;
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll inside/past the hero section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // 1. Image Zoom-Out (Anchored strictly to Bottom with 0px gap)
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1.0, 0.75]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.95, 0.5]);

  // 2. Text Zoom-In at the same time
  const nameScale = useTransform(scrollYProgress, [0, 1], [0.95, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const bgTextScale = useTransform(scrollYProgress, [0, 1], [1, 1.35]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-[90vh] md:min-h-screen bg-accent overflow-hidden flex flex-col justify-between"
    >
      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical lines */}
        {[20, 40, 60, 80].map((pos) => (
          <div
            key={`v-${pos}`}
            className="absolute top-0 bottom-0 w-px bg-white/10"
            style={{ left: `${pos}%` }}
          />
        ))}
        {/* Horizontal lines */}
        {[25, 50, 75].map((pos) => (
          <div
            key={`h-${pos}`}
            className="absolute left-0 right-0 h-px bg-white/10"
            style={{ top: `${pos}%` }}
          />
        ))}
      </div>

      {/* Background Ghosted Name (Zooms In on Scroll) */}
      <motion.div
        style={{ scale: bgTextScale }}
        className="absolute top-[10%] sm:top-[8%] left-0 right-0 text-center pointer-events-none select-none z-0 origin-top"
      >
        <span className="text-white opacity-10 text-[16vw] sm:text-[14vw] font-black tracking-tighter uppercase leading-none block">
          {name.split(" ").join(" ")}
        </span>
      </motion.div>

      {/* Hero Portrait Image - Trimmed, compact size, 100% flush to absolute bottom with 0px gap */}
      <div className="absolute bottom-0 inset-x-0 h-full flex items-end justify-center pointer-events-none z-10 overflow-hidden">
        <motion.div
          style={{
            scale: portraitScale,
            opacity: portraitOpacity,
            transformOrigin: "bottom center",
          }}
          className="relative w-[65%] sm:w-[45%] md:w-[30%] h-full max-w-[420px] flex items-end justify-center"
        >
          <Image
            src="/images/hero-portrait-trimmed.png"
            alt={name}
            fill
            className="object-contain object-bottom filter drop-shadow-2xl translate-y-[1px]"
            priority
          />
        </motion.div>
      </div>

      {/* Tagline Text (left side) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ y: textY }}
        className="absolute left-6 sm:left-8 md:left-12 top-[22%] sm:top-[28%] max-w-[220px] sm:max-w-[280px] md:max-w-[350px] z-20"
      >
        <p className="text-white/80 text-[10px] sm:text-xs md:text-sm font-bold tracking-wider uppercase leading-relaxed">
          {tagline}
        </p>
      </motion.div>

      {/* Year Marker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute left-6 sm:left-8 md:left-12 bottom-[18%] sm:bottom-[22%] z-20"
      >
        <span className="text-white/60 text-xs sm:text-sm font-medium">©2026</span>
      </motion.div>

      {/* Main Name at Bottom (Zooms In on Scroll) */}
      <motion.div
        style={{ scale: nameScale, transformOrigin: "bottom left" }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-6 sm:left-8 md:left-12 z-20"
      >
        <h1 className="text-white text-[20vw] sm:text-[16vw] md:text-[12vw] font-black tracking-tighter leading-none uppercase drop-shadow-lg">
          {firstName}
        </h1>
      </motion.div>

      {/* Lanyard ID badge — hangs from the very top on the left, draggable (desktop only).
          Lower camera y pushes the strap anchor above the canvas edge so it starts at the navbar. */}
      {/* Canvas extends above the viewport so the strap's anchor is off-screen
          and the visible strap runs from the very top edge. */}
      <div className="absolute top-[-10vh] left-[2%] w-[180px] h-[75vh] lg:top-[-15vh] lg:left-[8%] lg:w-[420px] lg:h-[105vh] z-30">
        <Lanyard frontImage="/lanyard/card-front.png" position={[0, -1.5, 30]} />
      </div>

      {/* Floating Project Card (top right - hidden on small mobile) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute top-[18%] sm:top-[20%] right-6 sm:right-8 md:right-16 z-20 hidden sm:block"
      >
        <div className="w-[130px] sm:w-[160px] bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="relative w-full h-[110px] sm:h-[140px]">
            <Image
              src="/images/project-asterix-find.png"
              alt="Latest Project"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-2.5 sm:p-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-accent text-[10px]">✳</span>
              <span className="text-[9px] sm:text-[10px] font-bold text-foreground/60 uppercase tracking-wider">
                ASTERIX
              </span>
            </div>
            <span className="text-[9px] font-medium text-foreground/40">
              /AI
            </span>
          </div>
        </div>
      </motion.div>

      {/* Floating "Let's Talk" Card (Re-positioned for Mobile top-right, Desktop bottom-right) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute top-[15%] sm:top-[20%] right-4 sm:right-8 md:top-auto md:bottom-[10%] md:right-16 z-20 scale-85 sm:scale-100 origin-top-right md:origin-bottom-right"
      >
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2.5 sm:gap-3 bg-foreground text-background rounded-xl p-2.5 sm:p-3 pr-3.5 sm:pr-4 shadow-2xl hover:scale-105 transition-transform group"
        >
          {/* Avatar with object-top so face is perfectly framed */}
          <div className="relative w-9 sm:w-10 h-9 sm:h-10 rounded-lg overflow-hidden flex-shrink-0 bg-accent/20">
            <Image
              src="/images/hero-portrait-trimmed.png"
              alt={name}
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] sm:text-[10px] text-background/50 font-medium">
              Let&apos;s Talk
            </p>
            <p className="text-xs sm:text-sm font-bold">{name.split(" ")[0]}</p>
            <p className="text-[9px] sm:text-[10px] text-background/40 truncate max-w-[100px] sm:max-w-[120px]">
              {title}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-background/30 text-[10px]">✳</span>
            <div className="w-6 sm:w-7 h-6 sm:h-7 rounded-lg bg-background/10 flex items-center justify-center group-hover:bg-accent transition-colors">
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
