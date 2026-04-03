"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./FadeIn.module.css";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case "up": return styles.translateUp;
      case "down": return styles.translateDown;
      case "left": return styles.translateLeft;
      case "right": return styles.translateRight;
      default: return "";
    }
  };

  return (
    <div
      ref={domRef}
      className={`${styles.fadeIn} ${getDirectionClass()} ${isVisible ? styles.isVisible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
