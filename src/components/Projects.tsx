"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

const PROJECT_IMAGES: Record<string, string> = {
  "linkedin-automation": "/images/project-linkedin-automation.png",
  "asterix-find": "/images/project-asterix-find.png",
  "ai-youtube-summarizer": "/images/project-ai-youtube.png",
  "ai-pdf-chat": "/images/project-pdf-chat.png",
  "waste-management-ai": "/images/project-waste-ai.png",
  "quikping": "/images/project-quikping.png",
  "loovo": "/images/project-loovo.png",
  "pokemon-explorer": "/images/project-pokemon.png",
};

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const displayProjects = PROJECTS.slice(0, 6);

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative bg-background py-20 md:py-36 px-4 sm:px-6 md:px-12 border-t border-foreground/5"
    >
      {/* Container Layout */}
      <div className="max-w-[1140px] mx-auto">
        {/* Header - Exact Reference Match */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-20"
        >
          <div className="inline-block px-3 py-1 bg-white border border-foreground/10 rounded text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60 mb-5 shadow-sm">
            <span className="text-accent mr-1.5">✳</span>PORTFOLIO
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-foreground">
            OUR
            <br />
            <span className="text-foreground/30">PROJECTS.</span>
          </h2>
        </motion.div>

        {/* 2-Column Grid: Compact Small Cards (370px wide) with In-Between Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-28 items-start w-full">
          {displayProjects.map((project, index) => {
            const isWide = index === 2;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isWide={isWide}
              />
            );
          })}
        </div>

        {/* ALL PROJECTS Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 md:mt-20 flex justify-start"
        >
          <a
            href={PROJECTS[0].github || "https://github.com/Jatiiiiiiiin"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border border-foreground/10 hover:border-foreground/30 text-foreground font-bold text-xs uppercase tracking-widest transition-all shadow-sm group"
          >
            ALL PROJECTS
            <div className="w-5 h-5 bg-accent flex items-center justify-center text-white rounded-sm group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isWide,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  isWide: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Scroll-driven Zoom to Stop Animation
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  // Image starts at scale 1.15 and smoothly zooms down to 1.0 (and stops at 1.0)
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.12 }}
      className={`group w-full ${
        isWide
          ? "md:col-span-2 max-w-[760px] mx-auto"
          : index % 2 === 0
          ? "max-w-[370px]"
          : "max-w-[370px] md:ml-auto md:mt-20"
      }`}
    >
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Exact Framed Card Frame from Reference */}
        <div className="p-2 md:p-2.5 bg-white border border-foreground/10 shadow-sm group-hover:shadow-md transition-all rounded-sm">
          {/* Scroll Zoom Image Container */}
          <div
            className={`relative w-full overflow-hidden bg-foreground/5 ${
              isWide ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"
            }`}
          >
            <motion.div
              style={{ scale: imageScale, opacity: imageOpacity }}
              className="w-full h-full relative"
            >
              <Image
                src={
                  PROJECT_IMAGES[project.slug] ||
                  "/images/project-ai-youtube.png"
                }
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Minimalist Label Strip */}
          <div className="mt-2.5 px-2.5 py-1.5 bg-[#F0F0EC] flex items-center justify-between">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="text-accent text-[10px] flex-shrink-0">✳</span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase text-foreground/80 truncate">
                {project.title}
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-medium text-foreground/50 tracking-wider flex-shrink-0 ml-2">
              /{project.category.split(" ")[0]}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
