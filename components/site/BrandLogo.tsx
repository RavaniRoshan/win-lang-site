import Link from "next/link";
import styles from "../../app/page.module.css";

export function BrandLogo({ text }: { text: string }) {
  return (
    <Link href="/" className={styles.brand}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.brandIcon}>
        <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h6v3h-6v-3zm0-3h3v3h-3v-3z" fill="#0078D4"/>
      </svg>
      <span className={styles.brandText}>{text}</span>
    </Link>
  );
}
