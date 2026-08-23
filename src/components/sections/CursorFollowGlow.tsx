"use client";

import { useEffect, useRef } from "react";

/**
 * CursorFollowGlow — a large soft gradient orb that smoothly
 * follows the cursor across the whole page. Desktop only.
 * Adds a sense of "atmosphere" + premium feel.
 */
export default function CursorFollowGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let curX = targetX;
    let curY = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const loop = () => {
      // Very slow lerp for dreamy trailing effect
      curX += (targetX - curX) * 0.06;
      curY += (targetY - curY) * 0.06;
      if (ref.current) {
        ref.current.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[500px] h-[500px] rounded-full opacity-40 blur-3xl mix-blend-multiply"
      style={{
        background:
          "radial-gradient(circle, rgba(224, 120, 86, 0.35) 0%, rgba(212, 165, 165, 0.15) 35%, transparent 70%)",
      }}
    />
  );
}
