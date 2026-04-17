import type { ReactNode } from "react";

import styles from "./site.module.css";

type DiagramCardProps = {
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function DiagramCard({ eyebrow, title, description, children }: DiagramCardProps) {
  return (
    <article className={styles.diagramCard}>
      <div className={styles.cardEyebrow}>{eyebrow}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      {description ? <p className={styles.cardDescription}>{description}</p> : null}
      {children}
    </article>
  );
}
