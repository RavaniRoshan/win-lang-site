import type { ConstructItem } from "@/content/site";

import styles from "./site.module.css";

type ConstructListProps = {
  items: ConstructItem[];
};

export function ConstructList({ items }: ConstructListProps) {
  return (
    <div className={styles.constructList}>
      {items.map((item) => (
        <div key={item.name} className={styles.constructRow}>
          <div className={styles.constructName}>{item.name}</div>
          <div className={styles.constructSyntax}>{item.syntax}</div>
          <div className={styles.constructSummary}>{item.summary}</div>
        </div>
      ))}
    </div>
  );
}
