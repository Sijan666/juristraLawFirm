"use client";

import React, { useEffect, useRef, useState } from "react";

export const ScrollReveal = ({
  children,
  className = "",
  threshold = 0.1,
  direction = "up", // 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom'
  delay = 0, // delay in ms
  duration = 750, // duration in ms
  distance = 32, // distance in px
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold]);

  const getTransformStyle = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0) scale(1)`;
      case "down":
        return `translate3d(0, -${distance}px, 0) scale(1)`;
      case "left":
        return `translate3d(${distance}px, 0, 0) scale(1)`;
      case "right":
        return `translate3d(-${distance}px, 0, 0) scale(1)`;
      case "zoom":
        return "translate3d(0, 0, 0) scale(0.96)";
      case "fade":
      default:
        return "translate3d(0, 0, 0) scale(1)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      data-scroll-reveal
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransformStyle(),
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};
