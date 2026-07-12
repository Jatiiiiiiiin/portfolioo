"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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

function projectImage(slug: string) {
  return PROJECT_IMAGES[slug] || "/images/project-ai-youtube.png";
}

export default function Projects() {
  const displayProjects = PROJECTS.slice(0, 6);

  const menuItems = displayProjects.map((p) => ({
    link: `/projects/${p.slug}`,
    text: p.title,
    image: projectImage(p.slug),
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

        {/* Desktop: full-bleed flowing menu rows, hover reveals image marquee */}
        <div className="hidden md:block mx-[calc(50%-50vw)] h-[100vh] min-h-[560px]">
          <FlowingMenu
            items={menuItems}
            bgColor="transparent"
            textColor="#1A1A1A"
            borderColor="rgba(26,26,26,0.12)"
            marqueeBgColor="#E84D1A"
            marqueeTextColor="#F5F5F0"
          />
        </div>

        {/* Mobile: overlapping sticky card stack */}
        <MobileCardStack projects={displayProjects} />

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

/* ---------- Mobile: overlapping sticky card stack ---------- */

function MobileCardStack({ projects }: { projects: typeof PROJECTS }) {
  const stackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={stackRef} className="md:hidden">
      {projects.map((project, index) => (
        <MobileCard
          key={project.id}
          project={project}
          index={index}
          total={projects.length}
          stackProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}

function MobileCard({
  project,
  index,
  total,
  stackProgress,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  total: number;
  stackProgress: MotionValue<number>;
}) {
  // Covered cards recede into the deck as the next one slides over.
  const targetScale = 1 - (total - 1 - index) * 0.05;
  const scale = useTransform(
    stackProgress,
    [(index + 1) / total, 1],
    [1, targetScale]
  );

  return (
    <div
      className="sticky mb-6"
      style={{ top: `calc(7vh + ${index * 14}px)` }}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className="bg-surface border border-foreground/10 rounded-sm shadow-sm overflow-hidden"
      >
        <Link href={`/projects/${project.slug}`} className="block group">
          <div className="relative aspect-[16/10] overflow-hidden bg-foreground/5 border-b border-foreground/10">
            <Image
              src={projectImage(project.slug)}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-accent text-xs">✳</span>
                <span className="text-sm font-medium text-foreground/40">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="text-[11px] font-medium text-foreground/50 tracking-wider">
                /{project.year}
              </span>
            </div>

            <h3 className="text-2xl font-black tracking-tighter uppercase leading-[0.95] text-foreground">
              {project.title}
            </h3>

            <p className="mt-2 text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
              {project.category}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 border border-foreground/15 rounded-full text-[9px] font-bold tracking-widest uppercase text-foreground/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="fill-rtl mt-5 inline-flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-full text-[11px] font-bold tracking-widest uppercase text-foreground/60 group-active:text-white group-active:border-accent">
              VIEW CASE
              <div className="w-5 h-5 rounded-sm bg-accent text-white group-active:bg-white group-active:text-accent flex items-center justify-center transition-all">
                <ArrowUpRight className="w-3 h-3" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
