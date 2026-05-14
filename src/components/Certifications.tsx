"use client";

import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Award, ExternalLink, Trophy, Star } from "lucide-react";

export default function Certifications() {
  const { certifications } = RESUME_DATA;

  return (
    <section id="certifications" className="relative z-20 bg-black py-32 px-6 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-black tracking-[0.3em] uppercase text-white/40 mb-8">// Recognition & Achievements</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">
            Certifications<br />& Milestones
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 bg-zinc-950/50 border border-white/5 hover:border-white/20 transition-all duration-500 rounded-3xl flex flex-col justify-between min-h-[300px]"
            >
              <div>
                <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:bg-white group-hover:border-white transition-all duration-500">
                  {index === 0 ? (
                    <Award className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  ) : index === 1 ? (
                    <Star className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  ) : (
                    <Trophy className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  )}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-500">
                  {cert.title}
                </h4>
                <p className="text-xs font-black tracking-widest uppercase text-white/30 mb-6">
                  {cert.issuer}
                </p>
                <p className="text-white/50 text-sm leading-relaxed">
                  {cert.details}
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-black tracking-widest uppercase text-white/20">Verified Achievement</span>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* LeetCode/Coding Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 p-12 bg-white flex flex-col md:flex-row items-center justify-between gap-12 rounded-[40px] overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -mr-32 -mt-32" />
          
          <div className="relative z-10 text-center md:text-left">
            <h4 className="text-black font-black tracking-tighter text-4xl md:text-6xl mb-4">
              Solving Complex<br />Challenges Daily
            </h4>
            <p className="text-black/60 font-medium max-w-md">
              Strong foundation in Data Structures & Algorithms with a focus on optimization and scalability.
            </p>
          </div>

          <div className="flex gap-12 relative z-10">
            <div className="text-center">
              <span className="block text-6xl md:text-8xl font-black text-black tracking-tighter">80+</span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-black/40">Problems Solved</span>
            </div>
            <div className="text-center">
              <span className="block text-6xl md:text-8xl font-black text-black tracking-tighter">5★</span>
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-black/40">Python Rating</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
