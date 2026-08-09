"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** Delay in milliseconds before the reveal transition starts. */
  delay?: number;
  className?: string;
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", onStoreChange);
  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("scroll-reveal-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
