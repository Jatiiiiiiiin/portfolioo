"use client";

import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const { experience, education } = RESUME_DATA;

  return (
    <section id="experience" className="relative z-20 bg-black py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold tracking-tighter text-white uppercase">
                Work<br />Experience
              </h2>
            </div>

            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-8 border-l border-white/10 group"
                >
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                  
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-white/80 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-black tracking-widest uppercase text-white/40 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-white/40 mb-6 font-medium">
                    <span className="flex items-center gap-1.5 text-white/60">
                      {exp.company}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-white/10" />
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-white/50 leading-relaxed text-sm flex gap-3">
                        <span className="text-white/20 mt-1.5 text-[10px]">0{i + 1}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-16">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold tracking-tighter text-white uppercase">
                Academic<br />Background
              </h2>
            </div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 border border-white/5 bg-zinc-950/30 hover:border-white/20 transition-all rounded-2xl group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-white/80 transition-colors mb-2">
                        {edu.school}
                      </h3>
                      <p className="text-white/40 text-sm font-medium">
                        {edu.degree}
                      </p>
                    </div>
                    <Calendar className="w-5 h-5 text-white/20 group-hover:text-white/40 transition-colors" />
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-black tracking-widest uppercase text-white/30">
                    <span className="px-3 py-1 bg-white/5 rounded-full border border-white/5">
                      {edu.period}
                    </span>
                    <span>{edu.location}</span>
                  </div>

                  {edu.details.length > 0 && (
                    <div className="mt-6 pt-6 border-t border-white/5">
                      {edu.details.map((detail, i) => (
                        <p key={i} className="text-2xl font-bold text-white/60">
                          {detail}
                        </p>
                      ))}
                    </div>
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
