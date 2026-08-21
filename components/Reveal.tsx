"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "up" | "left" | "right" | "scale" | "cinematic";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Important: the element is ALWAYS visible by default.
    // We only add the animation class when it enters the viewport.
    // This prevents a failed/interrupted IntersectionObserver from ever
    // creating a giant blank section in the page.
    const show = () => el.classList.add("is-visible");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
      show();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "180px 0px 180px 0px" }
    );

    observer.observe(el);

    // If a browser fails to deliver an intersection callback, still animate
    // the element after a short delay rather than leaving anything hidden.
    const safetyTimer = window.setTimeout(show, 900);

    return () => {
      window.clearTimeout(safetyTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
