"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

export default function Footer() {
  const { email, phone, location, github, linkedin, name, firstName } =
    RESUME_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative bg-background pt-28 md:pt-40 pb-12 px-6 md:px-12"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top: Contact Card + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 md:mb-40">
          {/* Left: Contact Info */}
          <div>
            {/* "Let's Talk" card */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 bg-foreground text-background rounded-xl p-3 pr-5 mb-10 hover:scale-105 transition-transform group"
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/images/hero-portrait-trimmed.png"
                  alt={name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-bold">{name.split(" ")[0]}</p>
                <p className="text-[10px] text-background/40">
                  {RESUME_DATA.title}
                </p>
              </div>
              <div className="w-7 h-7 rounded-lg bg-background/10 flex items-center justify-center ml-2 group-hover:bg-accent transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            <p className="text-lg md:text-xl text-foreground/50 leading-relaxed max-w-md mb-10">
              Focused on crafting intelligent, scalable applications that blend
              AI, clean code, and modern UX to{" "}
              <strong className="text-foreground">
                help companies build smarter
              </strong>{" "}
              products.
            </p>

            <div className="space-y-2 text-foreground/40">
              <p className="text-sm">{phone}</p>
              <p className="text-base font-bold text-foreground">{email}</p>
            </div>
          </div>

          {/* Right: Newsletter-style CTA */}
          <div className="flex flex-col justify-end">
            <div className="bg-white rounded-2xl border border-foreground/5 p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Let&apos;s Connect
              </h3>
              <div className="flex items-center gap-3 p-3 border border-foreground/10 rounded-xl mb-4">
                <input
                  type="email"
                  placeholder={email}
                  className="flex-1 bg-transparent text-sm text-foreground/60 outline-none placeholder:text-foreground/30"
                  readOnly
                />
                <span className="text-foreground/20">📧</span>
              </div>
              <a
                href={`mailto:${email}`}
                className="block w-full bg-foreground text-background text-center py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors"
              >
                YOUR MESSAGE
              </a>
            </div>
          </div>
        </div>

        {/* Bottom: Nav + Social + Logo */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-12 pb-16 border-t border-foreground/10 pt-12">
          {/* Navigation */}
          <div>
            <h4 className="text-sm text-foreground/30 mb-4">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Projects", "Services", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm text-foreground/30 mb-4">Social</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                >
                  GitHub
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                >
                  LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={RESUME_DATA.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                >
                  LeetCode
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Massive Name Logo */}
          <div className="flex items-end justify-end">
            <button
              onClick={scrollToTop}
              className="text-right group"
            >
              <span className="text-6xl md:text-9xl font-black tracking-tighter text-foreground/10 group-hover:text-foreground/20 transition-colors leading-none">
                {firstName}
                <sup className="text-xl md:text-3xl font-bold">®</sup>
              </span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-foreground/5 text-[10px] font-bold tracking-widest uppercase text-foreground/20">
          <p>
            © {new Date().getFullYear()} {name} — Portfolio
          </p>
          <p className="mt-2 md:mt-0">Built with ❤️ and Next.js</p>
        </div>
      </div>
    </footer>
  );
}
