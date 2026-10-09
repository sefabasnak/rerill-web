"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Fades its children up the first time they enter the viewport. Hidden state
 * only applies when scripting is on (see `.rr-reveal` in globals.css), so the
 * content never stays invisible without JavaScript.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      node.dataset.revealed = "true";
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.dataset.revealed = "true";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`rr-reveal ${className}`} style={{ "--rr-delay": `${delay}ms` } as CSSProperties}>
      {children}
    </div>
  );
}

/**
 * Writes scroll progress into the `--p` custom property (0…1) so CSS can drive
 * transforms without re-rendering React.
 * - `view`: 0 when the element's top meets the viewport bottom, 1 when its
 *   bottom leaves the viewport top.
 * - `page`: 0 at the top of the page, 1 after `distance` pixels of scrolling.
 */
export function ScrollProgress({
  children,
  mode = "view",
  distance = 600,
  className = "",
}: {
  children: ReactNode;
  mode?: "view" | "page";
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      let progress: number;
      if (mode === "page") {
        progress = window.scrollY / distance;
      } else {
        const rect = node.getBoundingClientRect();
        const viewport = window.innerHeight;
        progress = (viewport - rect.top) / (viewport + rect.height);
      }
      node.style.setProperty("--p", Math.min(1, Math.max(0, progress)).toFixed(4));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [mode, distance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
