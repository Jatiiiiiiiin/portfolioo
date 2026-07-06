import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Jatin Thakur | Full-Stack & AI/ML Developer",
  description: "Portfolio of Jatin Thakur — Full-Stack & AI/ML Developer specializing in LangChain, RAG pipelines, React, and intelligent systems.",
  keywords: ["Jatin Thakur", "AI Developer", "Full Stack Developer", "ML Developer", "React Developer", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F5F0] text-[#1A1A1A]">
        {children}
      </body>
    </html>
  );
}
