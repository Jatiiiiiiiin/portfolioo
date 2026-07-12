import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // StrictMode's dev double-mount force-loses the WebGL context of the
  // r3f/rapier Lanyard canvas, leaving a dead white canvas.
  reactStrictMode: false,
};

export default nextConfig;
