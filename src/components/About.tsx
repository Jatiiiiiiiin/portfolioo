"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Brain, Code2, Rocket, Terminal, CheckCircle2, Zap } from "lucide-react";

const MARQUEE_WORDS_TOP = [
  "FULL-STACK DEVELOPER",
  "GENERATIVE AI & RAG",
  "REACT & NEXT.JS",
  "FASTAPI",
  "N8N WORKFLOW AUTOMATION",
  "IOT INTEGRATION",
  "LEETCODE 5★ RATING",
  "PYTHON & TYPESCRIPT",
  "SENTENCE EMBEDDINGS",
  "LANGCHAIN & VECTOR DB",
];

const MARQUEE_WORDS_BOTTOM = [
  "PRODUCTION-READY AI SOLUTIONS",
  "END-TO-END RAG PIPELINES",
  "HIGH-PERFORMANCE WEB APPS",
  "AUTOMATED WORKFLOW ORCHESTRATION",
  "REAL-TIME WEBSOCKET SYSTEMS",
  "LOW LATENCY & HIGH SCALABILITY",
  "CLEAN ARCHITECTURE & MODULAR CODE",
  "AGILE SPRINT DELIVERY",
];

const TABS = [
  { id: "story", label: "01 // BIO & MISSION" },
  { id: "philosophy", label: "02 // ARCHITECTURE & VISION" },
  { id: "skills", label: "03 // CORE COMPETENCIES" },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("story");
  const { name, summary, skills } = RESUME_DATA;

  return (
    <section
      id="about"
      className="relative bg-background pt-20 md:pt-28 pb-10 overflow-hidden border-t border-foreground/5"
    >
      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mb-12 md:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 md:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-3"
            >
              <span className="text-accent text-xs">✳</span>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-foreground/50">
                ABOUT {name.toUpperCase()}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85]"
            >
              ENGINEERING
              <br />
              <span className="text-foreground/30">INTELLIGENT AI.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 mt-2 lg:mt-8 bg-white p-3.5 px-5 rounded-2xl border border-foreground/10 shadow-sm w-fit"
          >
            <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[9px] font-bold tracking-widest uppercase text-foreground/40">
                STATUS
              </p>
              <p className="text-xs font-bold text-foreground">
                Building Next-Gen AI Products
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Top Infinite Text Marquee Banner (Dark) */}
      <div className="relative w-full overflow-hidden bg-foreground text-background py-3.5 md:py-5 my-8 md:my-12 -rotate-1 shadow-md">
        <div className="horizontal-scroll-strip flex flex-row flex-nowrap items-center whitespace-nowrap gap-6 md:gap-8">
          {[...MARQUEE_WORDS_TOP, ...MARQUEE_WORDS_TOP].map((word, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-8 flex-shrink-0">
              <span className="text-xs sm:text-sm md:text-lg font-black tracking-[0.18em] uppercase text-background">
                {word}
              </span>
              <span className="text-accent text-xs">✳</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Interactive Bio / Story Box */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 mt-12 md:mt-16 mb-12 md:mb-16">
        {/* Tab Buttons - Horizontal Scrollable Bar on Mobile */}
        <div className="flex flex-nowrap overflow-x-auto no-scrollbar items-center gap-2.5 mb-8 border-b border-foreground/10 pb-4">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-shrink-0 px-4 sm:px-5 py-2.5 rounded-xl text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-foreground text-background shadow-md"
                    : "bg-white text-foreground/60 border border-foreground/10 hover:border-foreground/30"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "story" && (
            <motion.div
              key="story"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-10 bg-white p-6 sm:p-8 md:p-12 rounded-3xl border border-foreground/10 shadow-sm"
            >
              <div>
                <span className="text-accent text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-2 block">
                  // MISSION STATEMENT
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-snug mb-4">
                  Dedicated to bridging the gap between <span className="text-accent">Generative AI</span>, real-time web architecture, and production engineering.
                </h3>
                <p className="text-foreground/60 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                  {summary}
                </p>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-5 border-t border-foreground/10">
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-foreground">4+</span>
                    <p className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-foreground/40 mt-0.5">
                      Production Projects
                    </p>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-black text-foreground">2</span>
                    <p className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-foreground/40 mt-0.5">
                      Industry Internships
                    </p>
                  </div>
                </div>
              </div>

              {/* Highlight Box */}
              <div className="bg-background p-6 sm:p-7 rounded-2xl border border-foreground/5 flex flex-col justify-between">
                <div>
                  <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-foreground text-background flex items-center justify-center mb-4">
                    <Rocket className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground mb-2">
                    Production-First Mindset
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    Building robust vector search pipelines, scalable React applications, and workflow automations engineered for low latency, maximum uptime, and real user value.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-foreground/10 flex items-center gap-2 text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-foreground/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  AGILE & SCRUM CERTIFIED WORKFLOW
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "philosophy" && (
            <motion.div
              key="philosophy"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {[
                {
                  title: "Clean Modular Code",
                  desc: "Writing maintainable, self-documenting code with strong typing, component isolation, and testable modules.",
                  icon: Code2,
                },
                {
                  title: "RAG & Vector Search",
                  desc: "Leveraging LangChain, Pinecone, and sentence embeddings to unlock context-aware AI over unstructured data.",
                  icon: Brain,
                },
                {
                  title: "Workflow Automation",
                  desc: "Connecting enterprise APIs, webhooks, and n8n pipelines to automate manual operational overhead by ~80%.",
                  icon: Terminal,
                },
              ].map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-foreground/10 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                      <p.icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">
                      {p.title}
                    </h4>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            >
              {skills.map((cat) => (
                <div
                  key={cat.category}
                  className="bg-white p-6 sm:p-7 rounded-3xl border border-foreground/10 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-accent text-xs">✳</span>
                    <h4 className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-foreground/50">
                      {cat.category}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-semibold text-foreground/70"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Infinite Text Marquee Banner (Vibrant Orange, Reverse Scroll) */}
      <div className="relative w-full overflow-hidden bg-accent text-white py-3.5 md:py-5 my-6 rotate-1 shadow-lg">
        <div className="horizontal-scroll-strip-reverse flex flex-row flex-nowrap items-center whitespace-nowrap gap-6 md:gap-8">
          {[...MARQUEE_WORDS_BOTTOM, ...MARQUEE_WORDS_BOTTOM].map((word, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-8 flex-shrink-0">
              <span className="text-xs sm:text-sm md:text-lg font-black tracking-[0.18em] uppercase text-white">
                {word}
              </span>
              <span className="text-foreground text-xs font-bold">✳</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
