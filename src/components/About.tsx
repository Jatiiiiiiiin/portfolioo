"use client";

import { Brain, Code2, Database, Layout, Terminal, Cpu, Globe, Rocket } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import { motion } from "framer-motion";

const ICON_MAP: Record<string, React.ReactNode> = {
  "AI / ML": <Brain className="w-5 h-5" />,
  "Web Development": <Globe className="w-5 h-5" />,
  "IoT & Automation": <Cpu className="w-5 h-5" />,
  "Languages & Tools": <Terminal className="w-5 h-5" />,
};

const DEFAULT_ICON = <Rocket className="w-5 h-5" />;

export default function About() {
  const { summary, skills } = RESUME_DATA;

  return (
    <section id="about" className="relative z-20 bg-background text-foreground py-32 px-6 md:px-24 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-black tracking-[0.3em] uppercase text-foreground/40 mb-8">// Professional Summary</h2>
            <p className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-8">
              {summary.split("seeking")[0]} <span className="text-foreground/40">seeking impactful roles</span> in AI-powered product development.
            </p>
            <p className="text-foreground/60 text-xl leading-relaxed max-w-xl font-light">
              Building generative AI pipelines, real-time applications, and machine learning solutions 
              with an emphasis on clean UI, scalable architecture, and production-ready code. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.category} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-10 bg-background hover:bg-foreground/[0.02] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-6 text-foreground/40 group-hover:text-foreground transition-colors">
                  {ICON_MAP[skill.category] || DEFAULT_ICON}
                  <h3 className="text-xs font-black tracking-widest uppercase">{skill.category}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-foreground/60 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24 p-12 border border-foreground/10 bg-foreground/[0.02] backdrop-blur-xl"
        >
             <blockquote className="text-2xl md:text-4xl font-serif italic text-center text-foreground/80">
                "Clean code, scalable architecture, and production-ready systems. Building for tomorrow today."
             </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
