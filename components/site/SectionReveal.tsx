"use client";

import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import styles from "./site.module.css";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
} & HTMLAttributes<HTMLDivElement>;

export function SectionReveal({
  children,
  className,
  delay = 0,
  ...props
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const mergedClassName = [styles.reveal, visible ? styles.revealVisible : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={mergedClassName}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
}
