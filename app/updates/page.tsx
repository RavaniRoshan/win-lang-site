import type { Metadata } from "next";
import Link from "next/link";

import { SectionReveal } from "@/components/site/SectionReveal";
import { latestRelease, releaseEntries, siteNav } from "@/content/site";

import styles from "./updates.module.css";

export const metadata: Metadata = {
  title: "Updates | WinScript-lang",
  description: "Release notes and changelog updates for WinScript-lang."
};

export default function UpdatesPage() {
  const repoUrl = "https://github.com/RavaniRoshan/winscript-lang";

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.nav}>
          <Link href="/" className={styles.brand}>
            WinScript-lang
          </Link>
          <nav className={styles.navLinks} aria-label="Updates navigation">
            {siteNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={styles.navActions}>
            <a href={repoUrl} className={styles.secondaryCta} target="_blank" rel="noreferrer">
              GitHub repo
            </a>
            <Link href="/docs" className={styles.navCta}>
              Read docs
            </Link>
          </div>
        </header>

        <section className={styles.hero}>
          <SectionReveal className={styles.heroCopy}>
            <div className={styles.eyebrow}>{latestRelease.label}</div>
            <h1 className={styles.heroTitle}>What changed in WinScript.</h1>
            <p className={styles.heroBody}>{latestRelease.summary}</p>
            <div className={styles.metaRow}>
              <span className={styles.metaPill}>{latestRelease.version}</span>
              <span className={styles.metaPill}>{latestRelease.releasedOn}</span>
            </div>
            <div className={styles.ctaRow}>
              <a href="#changelog" className={styles.navCta}>
                View changelog
              </a>
              <Link href="/" className={styles.secondaryCta}>
                Back to home
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal className={styles.spotlightCard} delay={120}>
            <div className={styles.cardEyebrow}>Major release focus</div>
            <h2>{latestRelease.spotlightTitle}</h2>
            <p>{latestRelease.spotlightBody}</p>
            <div className={styles.highlightRow}>
              {latestRelease.highlights.map((item) => (
                <span key={item} className={styles.highlightPill}>
                  {item}
                </span>
              ))}
            </div>
          </SectionReveal>
        </section>

        <section id="changelog" className={styles.section}>
          <SectionReveal className={styles.sectionIntro}>
            <div className={styles.eyebrow}>Changelog</div>
            <h2 className={styles.sectionTitle}>The current milestone, feature by feature.</h2>
            <p className={styles.sectionBody}>
              This page tracks the product changes worth advertising: new surfaces, new integrations, and
              the runtime maturity they unlock.
            </p>
          </SectionReveal>

          <div className={styles.releaseList}>
            {releaseEntries.map((release, releaseIndex) => (
              <SectionReveal key={release.id} className={styles.releaseBlock} delay={releaseIndex * 120}>
                <div className={styles.releaseHeader}>
                  <div>
                    <div className={styles.cardEyebrow}>
                      {release.version} / {release.releasedOn}
                    </div>
                    <h3>{release.headline}</h3>
                  </div>
                  <p>{release.summary}</p>
                </div>

                <div className={styles.featureGrid}>
                  {release.features.map((feature) => (
                    <article key={feature.title} className={styles.featureCard}>
                      <div className={styles.featureTop}>
                        <h4>{feature.title}</h4>
                        <p>{feature.summary}</p>
                      </div>
                      <p className={styles.featureDetail}>{feature.detail}</p>
                      <div className={styles.featureImpact}>{feature.impact}</div>
                    </article>
                  ))}
                </div>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.statusGrid}>
            <SectionReveal className={styles.statusCard}>
              <div className={styles.cardEyebrow}>Current project status</div>
              <h2>{latestRelease.statusTitle}</h2>
              <p>{latestRelease.statusBody}</p>
            </SectionReveal>

            <SectionReveal className={styles.statusList} delay={120}>
              {latestRelease.highlights.map((item) => (
                <div key={item} className={styles.statusItem}>
                  <strong>{item}</strong>
                  <span>Shipping now inside the current WinScript product story.</span>
                </div>
              ))}
            </SectionReveal>
          </div>
        </section>
      </div>
    </main>
  );
}
