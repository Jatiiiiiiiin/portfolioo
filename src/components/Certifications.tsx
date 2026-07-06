"use client";

import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Award, ExternalLink, Star, Trophy } from "lucide-react";

export default function Certifications() {
  const { certifications } = RESUME_DATA;

  const ICONS = [Award, Star, Trophy];

  return (
    <section
      id="certifications"
      className="relative bg-background py-28 md:py-40 px-6 md:px-12"
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
              ACHIEVEMENTS
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            CERTIFI-
            <br />
            <span className="text-foreground/30">CATIONS.</span>
          </h2>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = ICONS[index % ICONS.length];

            const card = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 border border-foreground/5 hover:border-accent/20 transition-all flex flex-col justify-between min-h-[320px] cursor-pointer"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                    <IconComponent className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:translate-x-1 transition-transform">
                    {cert.title}
                  </h3>
                  <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-foreground/30 mb-4">
                    {cert.issuer}
                  </p>
                  {cert.details && (
                    <p className="text-sm text-foreground/50 leading-relaxed">
                      {cert.details}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-6 border-t border-foreground/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-foreground/20">
                    Verified
                  </span>
                  <ExternalLink className="w-4 h-4 text-foreground/20 group-hover:text-accent transition-colors" />
                </div>
              </motion.div>
            );

            return cert.link ? (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {card}
              </a>
            ) : (
              <div key={cert.title}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
