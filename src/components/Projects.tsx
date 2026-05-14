import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";
import { PROJECTS as ALL_PROJECTS } from "@/data/projects";

const PROJECTS = ALL_PROJECTS;

const ADDITIONAL_PROJECTS = ["Cookie Music", "Bussly", "ABESIT Clone", "Portfolio"];

export default function Projects() {
  return (
    <section id="projects" className="relative z-20 bg-black py-32 px-6 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white uppercase">
              Featured<br />Projects
            </h2>
            <div className="h-1 w-24 bg-white mt-8" />
          </div>
          <p className="text-white/40 text-xl max-w-sm font-light leading-relaxed">
            Building scalable, production-ready systems for tomorrow, today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-8 md:p-12 bg-black hover:bg-zinc-950 transition-colors duration-500 min-h-[500px]"
            >
              <div className="flex justify-between items-start">
                <span className="text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                  {project.id}
                </span>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                )}
              </div>

              <div className="mt-8">
                <p className="text-sm font-bold tracking-widest text-white/40 uppercase mb-4">
                  // {project.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 group-hover:translate-x-2 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="text-white/60 text-lg leading-relaxed max-w-md mb-8">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold tracking-tighter border border-white/20 px-2 py-1 uppercase text-white/40 group-hover:border-white/40 group-hover:text-white/60 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
                
                <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 text-white/40 group-hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs cursor-pointer">
                  Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 border-t border-white/10 pt-20">
          <h3 className="text-sm font-black tracking-[0.2em] text-white/30 uppercase mb-12">
            Other Experiments & Archive
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ADDITIONAL_PROJECTS.map((p) => (
              <div key={p} className="group p-8 border border-white/5 hover:border-white/20 transition-all cursor-pointer">
                <h4 className="text-xl font-bold text-white/60 group-hover:text-white transition-colors">
                  {p}
                </h4>
                <p className="text-xs text-white/20 mt-2 font-mono">View source — GitHub</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
