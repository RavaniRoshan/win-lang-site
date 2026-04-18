"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { ReleaseEntry } from "@/content/site";

import styles from "./site.module.css";

type LatestReleasePopupProps = {
  release: ReleaseEntry;
};

export function LatestReleasePopup({ release }: LatestReleasePopupProps) {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);

    try {
      const dismissed = window.localStorage.getItem(`winscript-release-dismissed:${release.id}`) === "1";
      setVisible(!dismissed);
    } catch {
      setVisible(true);
    }
  }, [release.id]);

  function handleDismiss() {
    try {
      window.localStorage.setItem(`winscript-release-dismissed:${release.id}`, "1");
    } catch {
      // Ignore storage failures and still hide the popup for this session.
    }

    setVisible(false);
  }

  if (!mounted || !visible) {
    return null;
  }

  return (
    <aside className={styles.releasePopup} aria-label="Latest WinScript update">
      <button
        type="button"
        className={styles.releasePopupDismiss}
        onClick={handleDismiss}
        aria-label="Dismiss latest update"
      >
        Close
      </button>
      <div className={styles.releasePopupMeta}>
        <span>{release.label}</span>
        <span>
          {release.version} / {release.releasedOn}
        </span>
      </div>
      <h2 className={styles.releasePopupTitle}>{release.headline}</h2>
      <p className={styles.releasePopupBody}>{release.summary}</p>
      <div className={styles.releasePopupHighlights}>
        {release.highlights.slice(0, 3).map((item) => (
          <span key={item} className={styles.signalPill}>
            {item}
          </span>
        ))}
      </div>
      <div className={styles.releasePopupActions}>
        <Link href="/updates" className={styles.releasePopupPrimary}>
          Read the changelog
        </Link>
        <Link href="/docs" className={styles.releasePopupSecondary}>
          View docs
        </Link>
      </div>
    </aside>
  );
}
