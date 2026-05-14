"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // Cache for dimensions and ratios to avoid per-frame math
  const dimensions = useRef({ width: 0, height: 0, dpr: 1 });
  const drawContainer = useRef<number | null>(null);

  // Load and cache all images on mount
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const index = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${index}_delay-0.067s.png`;

      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };

      loadedImages.push(img);
    }

    setImages(loadedImages);
  }, []);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Adding physical momentum for premium smooth feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Handle Dimension Updates
  useEffect(() => {
    const updateDimensions = () => {
      if (!canvasRef.current) return;
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      dimensions.current = { width, height, dpr };
      
      canvasRef.current.width = width * dpr;
      canvasRef.current.height = height * dpr;
      
      // Force immediate redraw on resize
      drawFrame(Math.floor(frameIndex.get()));
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [images]);

  const drawFrame = (index: number) => {
    if (typeof window === "undefined" || !canvasRef.current || images.length === 0) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];
    if (!img) return;

    const { width, height, dpr } = dimensions.current;
    
    // Scale for High DPI displays
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;
    
    let renderWidth, renderHeight, xOffset, yOffset;

    if (canvasRatio > imgRatio) {
      renderWidth = width;
      renderHeight = width / imgRatio;
      xOffset = 0;
      yOffset = (height - renderHeight) / 2;
    } else {
      renderWidth = height * imgRatio;
      renderHeight = height;
      xOffset = (width - renderWidth) / 2;
      yOffset = 0;
    }

    // Performance: Clear is fast, but fill is only needed if image doesn't cover
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, xOffset, yOffset, renderWidth, renderHeight);
  };

  // Scrub through frames with physical momentum
  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (drawContainer.current) cancelAnimationFrame(drawContainer.current);
    
    drawContainer.current = requestAnimationFrame(() => {
      drawFrame(Math.floor(latest));
    });
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%" }}
          className="absolute inset-0"
        />
        
        <LoadingIndicator loaded={imagesLoaded} total={FRAME_COUNT} />
      </div>
    </div>
  );
}

// Separate component to prevent parent re-renders 120 times during load
function LoadingIndicator({ loaded, total }: { loaded: number; total: number }) {
  if (loaded >= total) return null;
  
  return (
    <div className="absolute bottom-10 left-10 flex flex-col gap-2 z-50">
      <div className="text-white/20 text-[10px] font-black tracking-[0.3em] uppercase">
        Initializing Sequence
      </div>
      <div className="flex items-end gap-3">
        <div className="text-white text-4xl font-bold tracking-tighter">
          {Math.floor((loaded / total) * 100)}%
        </div>
        <div className="h-6 w-px bg-white/10 mb-1" />
        <div className="text-white/40 text-[10px] font-bold mb-1 uppercase tracking-widest">
          {loaded} / {total} Assets
        </div>
      </div>
    </div>
  );
}
