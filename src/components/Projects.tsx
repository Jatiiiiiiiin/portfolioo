"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import FlowingMenu from "@/components/FlowingMenu";

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
  const menuItems = PROJECTS.slice(0, 6).map((p) => ({
    link: `/projects/${p.slug}`,
    text: p.title,
    image: PROJECT_IMAGES[p.slug] || "/images/project-ai-youtube.png",
  }));

  return (
    <section
      id="projects"
      className="relative bg-background py-20 md:py-36 px-4 sm:px-6 md:px-12 border-t border-foreground/5"
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-24"
        >
          <div className="inline-block px-3 py-1 bg-surface border border-foreground/10 rounded text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/60 mb-5 shadow-sm">
            <span className="text-accent mr-1.5">✳</span>PORTFOLIO
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-foreground">
            SELECTED
            <br />
            <span className="text-foreground/30">WORKS.</span>
          </h2>
        </motion.div>

        {/* Flowing menu rows: hover reveals image marquee.
            mx-[calc(50%-50vw)] breaks out of the centered container so rows span the full viewport. */}
        <div className="mx-[calc(50%-50vw)] h-[78vh] md:h-[100vh] min-h-[560px]">
          <FlowingMenu
            items={menuItems}
            bgColor="transparent"
            textColor="#1A1A1A"
            borderColor="rgba(26,26,26,0.12)"
            marqueeBgColor="#E84D1A"
            marqueeTextColor="#F5F5F0"
          />
        </div>

        {/* ALL PROJECTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 md:mt-24 flex justify-start"
        >
          <a
            href="https://github.com/Jatiiiiiiiin"
            target="_blank"
            rel="noopener noreferrer"
            className="fill-rtl inline-flex items-center gap-3 px-5 py-2.5 bg-surface border border-foreground/10 hover:border-accent active:border-accent text-foreground hover:text-white active:text-white font-bold text-xs uppercase tracking-widest shadow-sm group"
          >
            ALL PROJECTS
            <div className="w-5 h-5 bg-accent text-white group-hover:bg-white group-hover:text-accent group-active:bg-white group-active:text-accent flex items-center justify-center rounded-sm group-hover:scale-110 transition-all">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
