"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-accent text-white shadow-lg"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-12 py-5">
          {/* Logo */}
          <a href="#home" className="text-lg font-bold tracking-tight">
            {RESUME_DATA.name.split(" ")[0]}
            <sup className="text-[10px] font-normal ml-0.5">®</sup>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-wide hover:opacity-70 transition-opacity"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col gap-1.5">
                <span className="block w-6 h-[2px] bg-current" />
                <span className="block w-4 h-[2px] bg-current ml-auto" />
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-foreground text-background transition-all duration-500 flex flex-col ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between px-8 md:px-12 py-5">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-bold tracking-tight text-background"
          >
            {RESUME_DATA.name.split(" ")[0]}
            <sup className="text-[10px] font-normal ml-0.5">®</sup>
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-background"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-5xl md:text-7xl font-black tracking-tighter text-background uppercase hover:text-accent transition-colors"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="px-8 md:px-12 py-8 flex items-center justify-between text-background/40 text-xs font-medium tracking-widest uppercase">
          <span>{RESUME_DATA.email}</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </>
  );
}
