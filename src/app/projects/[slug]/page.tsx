"use client";

import { use, useEffect } from "react";
import { PROJECTS } from "@/data/projects";
import { ArrowLeft, Github, ExternalLink, Cpu, Code2, Database, Zap, Globe, CpuIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Effect to scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-10 pointer-events-none">
        <Link 
          href="/#projects" 
          className="pointer-events-auto inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
        >
          <div className="p-2 border border-white/10 rounded-full group-hover:border-white/40 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="text-xs font-black tracking-widest uppercase mt-0.5">Back to Work</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-24 border-b border-white/10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-4xl">
              <p className="text-sm font-black tracking-[0.3em] uppercase text-white/30 mb-6">
                // {project.id} — {project.category}
              </p>
              <h1 className="text-5xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85]">
                {project.title}
              </h1>
            </div>
            
            <div className="flex flex-col gap-6 border-l border-white/10 pl-8 md:min-w-[200px]">
              <div>
                <h3 className="text-[10px] font-black tracking-widest uppercase text-white/30 mb-1">Year</h3>
                <p className="text-xl font-medium">{project.year}</p>
              </div>
              <div>
                <h3 className="text-[10px] font-black tracking-widest uppercase text-white/30 mb-1">Status</h3>
                <p className="text-xl font-medium text-emerald-400">{project.status}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="px-6 md:px-24 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-24">
          
          {/* Main Body */}
          <div className="space-y-32">
            {/* Overview */}
            <div>
              <h2 className="text-sm font-black tracking-[0.3em] uppercase text-white/30 mb-12 flex items-center gap-4">
                <div className="h-px w-8 bg-white/20" />
                Overview
              </h2>
              <p className="text-2xl md:text-4xl font-light leading-snug text-white/80">
                {project.overview}
              </p>
              
              <div className="mt-16 flex flex-wrap gap-6">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-colors">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Features (If any) */}
            {(project.features?.seeker || project.features?.employer || project.features?.ai) && (
              <div className="space-y-16">
                <h2 className="text-sm font-black tracking-[0.3em] uppercase text-white/30 flex items-center gap-4">
                  <div className="h-px w-8 bg-white/20" />
                  Key Features
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-white/60">
                   {project.features.seeker && (
                     <div className="p-8 border border-white/5 bg-zinc-950/30">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                           <Zap className="w-3 h-3 text-white/40" />
                           For Job Seekers
                        </h3>
                        <ul className="space-y-4">
                          {project.features.seeker.map(f => <li key={f} className="text-sm border-b border-white/5 pb-2">— {f}</li>)}
                        </ul>
                     </div>
                   )}
                   {project.features.employer && (
                     <div className="p-8 border border-white/5 bg-zinc-950/30">
                        <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                           <Globe className="w-3 h-3 text-white/40" />
                           For Employers
                        </h3>
                        <ul className="space-y-4">
                          {project.features.employer.map(f => <li key={f} className="text-sm border-b border-white/5 pb-2">— {f}</li>)}
                        </ul>
                     </div>
                   )}
                </div>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && (
              <div className="space-y-16">
                <h2 className="text-sm font-black tracking-[0.3em] uppercase text-white/30 flex items-center gap-4">
                  <div className="h-px w-8 bg-white/20" />
                  Engineering Challenges
                </h2>
                <div className="grid grid-cols-1 gap-8">
                  {project.challenges.map((c, i) => (
                    <div key={i} className="group flex gap-8 items-start p-8 border border-white/5 hover:border-white/20 transition-colors">
                       <span className="text-white/10 font-black text-4xl group-hover:text-white/20 transition-colors">0{i+1}</span>
                       <div>
                         <h3 className="text-xl font-bold mb-4">{c.title}</h3>
                         <p className="text-white/50 leading-relaxed">{c.description}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-20 relative">
            <div className="sticky top-40 space-y-20">
              {/* Tech Breakdown */}
              <div className="space-y-12">
                <h3 className="text-[10px] font-black tracking-widest uppercase text-white/30 pb-4 border-b border-white/10">Technical Stack</h3>
                
                {project.stackBreakdown ? (
                  <>
                    <StackGroup title="Frontend" items={project.stackBreakdown.frontend} icon={<Code2 className="w-4 h-4" />} />
                    <StackGroup title="Backend / AI" items={project.stackBreakdown.backend} icon={<CpuIcon className="w-4 h-4" />} />
                    <StackGroup title="Database" items={project.stackBreakdown.database} icon={<Database className="w-4 h-4" />} />
                  </>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/40">{t}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Stats */}
              {project.stats && (
                <div className="space-y-12 pt-12 border-t border-white/10">
                   <h3 className="text-[10px] font-black tracking-widest uppercase text-white/30">Impact & Stats</h3>
                   <div className="grid grid-cols-1 gap-6">
                      {project.stats.map(s => (
                        <div key={s.label}>
                           <p className="text-3xl font-bold tracking-tight">{s.value}</p>
                           <p className="text-[10px] font-black tracking-widest uppercase text-white/20 mt-1">{s.label}</p>
                        </div>
                      ))}
                   </div>
                </div>
              )}
            </div>
          </aside>

        </div>
      </section>

      {/* Footer Nav */}
      <section className="px-6 md:px-24 py-40 border-t border-white/10 bg-zinc-950/20">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <p className="text-white/20 text-xs font-black tracking-widest uppercase mb-12">Ready to see more?</p>
            <Link 
              href="/#projects"
              className="text-white font-bold text-4xl md:text-7xl tracking-tighter hover:text-white/60 transition-colors uppercase flex items-center gap-8 group"
            >
              Explore All Work
              <ArrowLeft className="w-8 h-8 md:w-16 md:h-16 rotate-180 group-hover:translate-x-4 transition-transform" />
            </Link>
        </div>
      </section>
    </main>
  );
}

function StackGroup({ title, items, icon }: { title: string, items?: string[], icon: React.ReactNode }) {
  if (!items) return null;
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-white/60">
        {icon}
        <h4 className="text-[10px] font-black tracking-widest uppercase">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map(item => (
          <li key={item} className="text-xs text-white/40 font-medium">— {item}</li>
        ))}
      </ul>
    </div>
  );
}
