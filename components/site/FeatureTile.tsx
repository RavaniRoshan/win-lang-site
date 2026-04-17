import type { ReactNode } from "react";

import styles from "./site.module.css";

type FeatureTileProps = {
  eyebrow: string;
  title: string;
  description: string;
  visual: ReactNode;
};

export function FeatureTile({ eyebrow, title, description, visual }: FeatureTileProps) {
  return (
    <article className={styles.featureTile}>
      <div>
        <div className={styles.tileEyebrow}>{eyebrow}</div>
        <h3 className={styles.tileTitle}>{title}</h3>
        <p className={styles.tileDescription}>{description}</p>
      </div>
      <div className={styles.featureVisual}>{visual}</div>
    </article>
  );
}
