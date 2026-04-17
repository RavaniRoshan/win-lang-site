"use client";

import { useState } from "react";

import styles from "./site.module.css";

type CodeBlockProps = {
  code: string;
  language: string;
  copyLabel?: string;
};

export function CodeBlock({ code, language, copyLabel = "Copy" }: CodeBlockProps) {
  const [buttonText, setButtonText] = useState(copyLabel);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setButtonText("Copied");
      window.setTimeout(() => setButtonText(copyLabel), 1400);
    } catch {
      setButtonText("Unavailable");
      window.setTimeout(() => setButtonText(copyLabel), 1400);
    }
  }

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeMeta}>
        <span>{language}</span>
        <button type="button" onClick={handleCopy} className={styles.copyButton}>
          {buttonText}
        </button>
      </div>
      <pre className={styles.codePre}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
