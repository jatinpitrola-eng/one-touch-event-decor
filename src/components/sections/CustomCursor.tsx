"use client";

import { useEffect, useState } from "react";

/**
 * Luxe Custom Cursor — magnetic dot + ring trail
 * Hides on touch devices (uses @media hover + pointer fine)
 */
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ringPos, setRingPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only enable on devices with fine pointer + hover
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    let rafId = 0;
    let targetX = 0,
      targetY = 0;
    let ringX = 0,
      ringY = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPos({ x: targetX, y: targetY });
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest("a, button, input, textarea, select, [role='button'], [data-cursor-hover]")
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    // Smooth ring follow via rAF
    const loop = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      setRingPos({ x: ringX, y: ringY });
      rafId = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.body.classList.add("luxe-cursor");

    // Defer the enabled flag to next tick to avoid setState-in-effect warning
    const t = setTimeout(() => setEnabled(true), 0);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
      clearTimeout(t);
      document.body.classList.remove("luxe-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className={hovering ? "luxe-cursor-hovering" : ""}>
      {/* Dot */}
      <div
        className="luxe-cursor-dot"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        }}
      />
      {/* Ring */}
      <div
        className="luxe-cursor-ring"
        style={{
          transform: `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}
