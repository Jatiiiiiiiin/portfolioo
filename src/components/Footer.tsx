"use client";

import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function Footer() {
  const { email, location, github, linkedin, name } = RESUME_DATA;
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 bg-black text-white pt-40 pb-20 px-6 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
          <div>
            <h2 className="text-sm font-black tracking-[0.3em] uppercase text-white/40 mb-8">// Get in Touch</h2>
            <p className="text-4xl md:text-7xl font-bold tracking-tighter mb-12 uppercase leading-[0.8]">
              Let's build for<br />
              <span className="text-white/20 italic">Tomorrow.</span>
            </p>
            <a 
              href={`mailto:${email}`} 
              className="group flex items-center gap-4 text-2xl md:text-4xl font-semibold hover:text-white/60 transition-colors break-all"
            >
              {email}
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-black tracking-widest uppercase text-white/30 mb-4">Location</h3>
                <div className="flex items-center gap-2 text-white/60">
                  <MapPin className="w-4 h-4" />
                  <span className="text-lg font-medium">{location}</span>
                </div>
              </div>
              
              <div className="flex gap-6">
                <a href={github} target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 hover:border-white/40 transition-colors rounded-full text-white/40 hover:text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 hover:border-white/40 transition-colors rounded-full text-white/40 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-end items-end md:items-start">
               <button 
                 onClick={scrollToTop}
                 className="flex items-center gap-4 text-xs font-black tracking-widest uppercase text-white/30 hover:text-white transition-colors"
               >
                 Back to Top
                 <ArrowUpRight className="w-4 h-4 -rotate-45" />
               </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] font-black tracking-widest uppercase text-white/20">
          <p>© {new Date().getFullYear()} {name} — Portfolio</p>
          <p className="mt-4 md:mt-0 italic font-medium">Production-Ready Build v1.0</p>
        </div>
      </div>
    </footer>
  );
}
