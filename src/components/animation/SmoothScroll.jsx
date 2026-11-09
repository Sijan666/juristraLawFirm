"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export const SmoothScroll = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      autoResize: true,
    });

    // Make lenis globally accessible if needed
    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Resize observer to update Lenis whenever document height changes (e.g. images load or items animate)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });

    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  // Recalculate scroll limits on page navigation
  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.resize();
      window.__lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
};
