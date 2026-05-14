"use client";

import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";
import { Award, ExternalLink, Trophy, Star } from "lucide-react";

export default function Certifications() {
  const { certifications } = RESUME_DATA;

  return (
    <section id="certifications" className="relative z-20 bg-background py-32 px-6 md:px-24 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-sm font-black tracking-[0.3em] uppercase text-foreground/40 mb-8">// Recognition & Achievements</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground uppercase">
            Certifications<br />& Milestones
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-10 bg-foreground/[0.02] border border-foreground/5 hover:border-foreground/20 transition-all duration-500 rounded-3xl flex flex-col justify-between min-h-[300px] h-full cursor-pointer"
              >
                <div>
                  <div className="mb-8 p-4 bg-foreground/5 w-fit rounded-2xl border border-foreground/10 group-hover:bg-foreground group-hover:border-foreground transition-all duration-500">
                    {index === 0 ? (
                      <Award className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                    ) : index === 1 ? (
                      <Star className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                    ) : (
                      <Trophy className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                    )}
                  </div>
                  
                  <h4 className="text-2xl font-bold text-foreground mb-2 group-hover:translate-x-2 transition-transform duration-500">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-black tracking-widest uppercase text-foreground/30 mb-6">
                    {cert.issuer}
                  </p>
                  <p className="text-foreground/50 text-sm leading-relaxed">
                    {cert.details}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-foreground/5 flex items-center justify-between">
                  <span className="text-[10px] font-black tracking-widest uppercase text-foreground/20">Verified Achievement</span>
                  <ExternalLink className="w-4 h-4 text-foreground/20 group-hover:text-foreground transition-colors" />
                </div>
              </motion.div>
            );

            return cert.link ? (
              <a key={cert.title} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                {CardContent}
              </a>
            ) : (
              <div key={cert.title}>{CardContent}</div>
            );
          })}
        </div>

        {/* LeetCode/Coding Stats Banner */}
        <a href={RESUME_DATA.leetcode} target="_blank" rel="noopener noreferrer" className="block group">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 p-12 bg-foreground flex flex-col md:flex-row items-center justify-between gap-12 rounded-[40px] overflow-hidden relative group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <div className="relative z-10 text-center md:text-left">
              <h4 className="text-background font-black tracking-tighter text-4xl md:text-6xl mb-4 group-hover:translate-x-2 transition-transform duration-500">
                Solving Complex<br />Challenges Daily
              </h4>
              <p className="text-background/60 font-medium max-w-md">
                Strong foundation in Data Structures & Algorithms with a focus on optimization and scalability.
              </p>
            </div>

            <div className="flex gap-12 relative z-10">
              <div className="text-center">
                <span className="block text-6xl md:text-8xl font-black text-background tracking-tighter">80+</span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-background/40">Problems Solved</span>
              </div>
              <div className="text-center">
                <span className="block text-6xl md:text-8xl font-black text-background tracking-tighter">5★</span>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-background/40">Python Rating</span>
              </div>
            </div>
            
            <div className="absolute bottom-8 right-12 text-background/20 group-hover:text-background/60 transition-colors">
              <ExternalLink className="w-8 h-8" />
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
}
