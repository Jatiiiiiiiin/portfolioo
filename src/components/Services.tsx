"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";

const SERVICE_IMAGES: Record<string, string> = {
  "001": "/images/project-ai-youtube.png",
  "002": "/images/project-asterix-find.png",
  "003": "/images/project-quikping.png",
  "004": "/images/project-ai-youtube.png",
};

export default function Services() {
  const { services } = RESUME_DATA;

  return (
    <section
      id="services"
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
              SERVICES
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]">
            WHAT I
            <br />
            <span className="text-foreground/30">DO BEST</span>
          </h2>
        </motion.div>

        {/* Service Items */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border-t border-foreground/10 py-10 md:py-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-8 items-start">
                {/* Left: Number + Title */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-accent text-xs">✳</span>
                    <span className="text-sm font-medium text-foreground/40">
                      {service.id}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
                    {service.title.split("\n").map((line, i) => (
                      <span key={i}>
                        {i === 0 ? (
                          line
                        ) : (
                          <span className="text-accent">{line}</span>
                        )}
                        {i < service.title.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>

                {/* Middle: Description */}
                <div className="flex flex-col gap-6">
                  <p className="text-sm md:text-base font-medium text-foreground/50 uppercase tracking-wider leading-relaxed max-w-md">
                    {service.description}
                  </p>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-3 px-6 py-3 border border-foreground/20 rounded-full text-xs font-bold tracking-widest uppercase text-foreground/60 hover:bg-foreground hover:text-background transition-all w-fit group/btn"
                  >
                    VIEW PROJECT
                    <div className="w-6 h-6 rounded-md bg-accent flex items-center justify-center">
                      <ArrowUpRight className="w-3 h-3 text-white" />
                    </div>
                  </a>
                </div>

                {/* Right: Image (hidden on mobile) */}
                <div className="hidden md:block">
                  <div className="relative w-[200px] h-[140px] rounded-xl overflow-hidden img-hover-scale">
                    <Image
                      src={SERVICE_IMAGES[service.id] || "/images/project-ai-youtube.png"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
