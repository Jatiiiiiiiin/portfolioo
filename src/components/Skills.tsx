"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Zap } from "lucide-react";

export default function Skills() {
  const { skills } = RESUME_DATA;

  return (
    <section className="relative bg-background py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent text-sm">✳</span>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/50">
              SKILLS & CAPABILITIES
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            SKILLS FOR
            <br />
            <span className="text-foreground/30">EVERY NEED</span>
          </h2>
        </motion.div>

        {/* Skills Cards - Black cards on light background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-foreground text-background rounded-3xl p-8 flex flex-col justify-between min-h-[380px] group hover:bg-foreground/90 transition-colors"
            >
              <div>
                {/* Category Badge */}
                <div className="inline-block px-3 py-1.5 border border-background/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-background/50 mb-8">
                  {skill.category}
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-background/70 text-sm font-medium"
                    >
                      <ArrowIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-8 pt-6 border-t border-background/10">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-background/40">
                    Production Ready
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "8+", label: "Projects Built" },
            { value: "2", label: "Internships" },
            { value: "80+", label: "LeetCode Problems" },
            { value: "5★", label: "Python Rating" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center p-8 border border-foreground/10 rounded-2xl hover:border-foreground/20 transition-colors"
            >
              <span className="block text-4xl md:text-5xl font-black tracking-tighter text-foreground">
                {stat.value}
              </span>
              <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/30 mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className="text-accent flex-shrink-0"
    >
      <path
        d="M2 6H10M10 6L7 3M10 6L7 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
