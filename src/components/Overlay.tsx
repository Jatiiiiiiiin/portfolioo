"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { RESUME_DATA } from "@/data/resume";

export default function Overlay() {
  const { name, title, education } = RESUME_DATA;
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = useScroll();
  const [docHeight, setDocHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      setDocHeight(window.innerHeight * 5);
      setWindowHeight(window.innerHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const scrollRange = windowHeight > 0 ? docHeight - windowHeight : 1;
  const progress = useTransform(scrollY, [0, scrollRange], [0, 1]);

  const opacity1 = useTransform(progress, [0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -100]);

  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.55], [100, -100]);

  const opacity3 = useTransform(progress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.85], [100, -100]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center px-10 md:px-24">
      {/* Section 1 */}
      <motion.div
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center p-8 text-center"
      >
        <h1 className="text-4xl md:text-8xl font-bold tracking-tight text-white mix-blend-difference">
          {name}.<br />
          <span className="text-white/40 text-3xl md:text-5xl font-medium tracking-normal italic mt-4 block">
            {title}.
          </span>
        </h1>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start p-8 md:p-24"
      >
        <h2 className="text-2xl md:text-5xl font-light max-w-3xl text-white mix-blend-difference leading-snug">
          Student at {education[0].school}.<br />
          <span className="text-white/60 font-medium">Specializing in AI-powered applications and modern web systems.</span>
        </h2>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end p-8 md:p-24 text-right"
      >
        <h2 className="text-3xl md:text-6xl font-semibold max-w-2xl text-white mix-blend-difference uppercase tracking-tighter">
          Clean Code. Scalable Architecture.<br />
          <span className="text-white/30 lowercase italic font-normal tracking-wide">Building for tomorrow today.</span>
        </h2>
      </motion.div>
    </div>
  );
}
