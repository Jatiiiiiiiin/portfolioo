"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_DATA } from "@/data/resume";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const { faq } = RESUME_DATA;
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-background py-28 md:py-40 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] sticky top-40">
              FREQUENT
              <br />
              <span className="text-foreground/30">QUESTIONS</span>
            </h2>
          </motion.div>

          {/* Right: Accordion */}
          <div className="space-y-0">
            {faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-t border-foreground/10"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left group"
                >
                  <span className="text-sm md:text-base font-bold tracking-wider uppercase text-foreground/80 group-hover:text-foreground transition-colors pr-4">
                    {index + 1}. {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all">
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-sm md:text-base text-foreground/50 leading-relaxed max-w-2xl pl-6 border-l-2 border-accent/20">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            {/* Bottom border */}
            <div className="border-t border-foreground/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
