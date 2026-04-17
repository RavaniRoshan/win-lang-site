import styles from "./site.module.css";
import type { FloatingIcon } from "@/content/site";

type HeroMediaProps = {
  imageSrc: string;
  alt: string;
  icons?: FloatingIcon[];
};

export function HeroMedia({ imageSrc, alt, icons = [] }: HeroMediaProps) {
  return (
    <div className={styles.heroMedia}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.mediaShell}>
        <img src={imageSrc} alt={alt} className={styles.mediaImage} />
      </div>
      {icons.map((icon) => (
        <div
          key={icon.label}
          className={styles.floatingIcon}
          style={{
            top: icon.top,
            left: icon.left,
            width: `${icon.size}px`,
            height: `${icon.size}px`,
            ["--float-delay" as string]: `${icon.delay}ms`,
            ["--icon-rotate" as string]: `${icon.rotate}deg`
          }}
        >
          <img src={icon.src} alt={icon.label} />
        </div>
      ))}
    </div>
  );
}
