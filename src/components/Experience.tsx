"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function Experience() {
  const { experience, education } = RESUME_DATA;

  return (
    <section
      id="experience"
      className="relative bg-white py-28 md:py-40 px-6 md:px-12"
    >
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
              CAREER PATH
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            WORK &
            <br />
            <span className="text-foreground/30">EDUCATION</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/50">
                Work Experience
              </h3>
            </div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l-2 border-foreground/10 group hover:border-accent transition-colors"
                >
                  {/* Dot */}
                  <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-foreground/10 group-hover:bg-accent transition-colors" />

                  <div className="mb-3">
                    <h4 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 mt-1">
                      <span className="text-sm font-medium text-foreground/60">
                        {exp.company}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-foreground/20" />
                      <span className="flex items-center gap-1 text-xs text-foreground/40">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-foreground/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-foreground/40 mb-4">
                    {exp.period}
                  </span>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground/50 leading-relaxed"
                      >
                        — {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-xl bg-foreground flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-foreground/50">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border border-foreground/5 rounded-2xl hover:border-accent/20 transition-colors group"
                >
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {edu.school}
                  </h4>
                  <p className="text-sm text-foreground/50 mb-4">
                    {edu.degree}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-foreground/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-foreground/40">
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 bg-foreground/5 rounded-full text-[10px] font-bold tracking-widest uppercase text-foreground/40">
                      {edu.location}
                    </span>
                  </div>

                  {edu.details.length > 0 && (
                    <p className="text-2xl font-bold text-accent">
                      {edu.details[0]}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
