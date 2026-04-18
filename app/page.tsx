import Link from "next/link";

import { CodeBlock } from "@/components/site/CodeBlock";
import { ConstructList } from "@/components/site/ConstructList";
import { DiagramCard } from "@/components/site/DiagramCard";
import { FeatureTile } from "@/components/site/FeatureTile";
import { HeroMedia } from "@/components/site/HeroMedia";
import { LatestReleasePopup } from "@/components/site/LatestReleasePopup";
import { SectionReveal } from "@/components/site/SectionReveal";
import siteStyles from "@/components/site/site.module.css";
import {
  constructs,
  docsStats,
  footerTags,
  footerWordmark,
  heroCode,
  heroEyebrow,
  heroIcons,
  heroSupportingLine,
  homepageFeatures,
  latestRelease,
  siteNav,
  wsdictSnippet
} from "@/content/site";

import styles from "./page.module.css";

function renderFeatureVisual(type: "logos" | "logic" | "agent", items: string[]) {
  if (type === "logos") {
    return (
      <div className={siteStyles.logoStack}>
        {items.map((item) => (
          <span key={item} className={siteStyles.logoPill}>
            {item}
          </span>
        ))}
      </div>
    );
  }

  if (type === "logic") {
    return (
      <div className={siteStyles.logicStack}>
        {items.map((item, index) => (
          <div key={item} className={siteStyles.logicLine}>
            <span className={siteStyles.logicIndex}>{String(index + 1).padStart(2, "0")}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={siteStyles.agentRail}>
      {items.map((item, index) => (
        <div key={item} className={siteStyles.agentNode}>
          <strong>{item}</strong>
          <span>{index === items.length - 1 ? "MCP tool" : "signal"}</span>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const repoUrl = "https://github.com/RavaniRoshan/winscript-lang";

  return (
    <main className={styles.page}>
      <div className={styles.navWrap}>
        <header className={styles.nav}>
          <Link href="/" className={styles.brand}>
            {heroEyebrow}
          </Link>
          <nav className={styles.navLinks} aria-label="Primary">
            {siteNav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link href="/docs" className={styles.navCta}>
            Read the docs
          </Link>
        </header>
      </div>

      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          <SectionReveal className={styles.heroCopy}>
            <div className={styles.eyebrow}>AppleScript had 40 years. Windows had nothing. Until now.</div>
            <h1 className={styles.heroH1}>Your language for automation.</h1>
            <p className={styles.heroLead}>
              WinScript-lang. {heroSupportingLine}
            </p>
            <p className={styles.heroHook}>
              Parse, resolve, dispatch, and execute Windows automation the way humans and agents think:
              readable, structured, and API aware.
            </p>
            <div className={styles.heroActions}>
              <Link href="/docs" className={styles.heroPrimary}>
                Explore docs
              </Link>
              <a
                href={repoUrl}
                className={styles.heroSecondary}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub repo
              </a>
              <Link href="/updates" className={styles.heroSecondary}>
                Latest updates
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <span className={styles.metaPill}>Grammar-first</span>
              <span className={styles.metaPill}>Open dictionaries</span>
              <span className={styles.metaPill}>MCP ready</span>
            </div>
          </SectionReveal>

          <SectionReveal delay={140}>
            <HeroMedia
              imageSrc="/hero-terminal.svg"
              alt="A stylized WinScript terminal running a tell Chrome automation sequence."
              icons={heroIcons}
            />
          </SectionReveal>
        </div>
      </section>

      <section id="system" className={styles.section}>
        <SectionReveal className={styles.sectionIntro}>
          <div className={styles.eyebrow}>Every script executes a system</div>
          <h2 className={styles.sectionTitle}>Readable syntax on the surface. Structured runtime underneath.</h2>
          <p className={styles.sectionBody}>
            The language looks natural, but each command resolves through dictionaries, dispatchers, and
            backends designed for real Windows automation.
          </p>
        </SectionReveal>

        <div className={styles.masonry}>
          <SectionReveal className={styles.terminalWrap} delay={80}>
            <CodeBlock code={heroCode} language="WinScript" copyLabel="Copy script" />
          </SectionReveal>

          <SectionReveal className={styles.stack} delay={180}>
            <DiagramCard
              eyebrow=".wsdict mapping"
              title="Human commands, backend methods."
              description="Open dictionaries turn natural scripting into concrete calls against application-specific backends."
            >
              <div className={siteStyles.diagramFlow}>
                <div className={siteStyles.diagramNode}>
                  <span>open</span>
                  <span>CDP.Page.navigate</span>
                </div>
                <div className={siteStyles.diagramNode}>
                  <span>click button</span>
                  <span>CDP.DOM.click</span>
                </div>
                <div className={siteStyles.diagramNode}>
                  <span>wait until loaded</span>
                  <span>CDP.Page.lifecycleEvent</span>
                </div>
              </div>
            </DiagramCard>
            <CodeBlock code={wsdictSnippet} language=".wsdict" copyLabel="Copy mapping" />
          </SectionReveal>

          <SectionReveal delay={260}>
            <article className={styles.mcpBadge}>
              <div className={styles.mcpBadgeMark}>AI</div>
              <h3>MCP Ready</h3>
              <p>
                WinScript exposes discrete tools for validation, capability discovery, command introspection,
                and execution, which gives Claude-class agents a safer way to automate Windows.
              </p>
              <div className={styles.mcpSignals}>
                <span className={siteStyles.signalPill}>Validate</span>
                <span className={siteStyles.signalPill}>Inspect</span>
                <span className={siteStyles.signalPill}>Run</span>
              </div>
            </article>
          </SectionReveal>
        </div>
      </section>

      <section className={styles.section}>
        <SectionReveal className={styles.sectionIntro}>
          <div className={styles.eyebrow}>Automate the way you think</div>
          <h2 className={styles.sectionTitle}>Choose the surface, the logic, or the agent path.</h2>
          <p className={styles.sectionBody}>
            The language is designed so a human can describe a workflow plainly and an agent can still reason
            about the execution path underneath.
          </p>
        </SectionReveal>

        <div className={styles.featuresGrid}>
          {homepageFeatures.map((feature, index) => (
            <SectionReveal key={feature.eyebrow} delay={index * 100}>
              <FeatureTile
                eyebrow={feature.eyebrow}
                title={feature.title}
                description={feature.description}
                visual={renderFeatureVisual(feature.visual.type, feature.visual.items)}
              />
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <SectionReveal className={styles.sectionIntro}>
          <div className={styles.eyebrow}>Know what you&rsquo;re building</div>
          <h2 className={styles.sectionTitle}>Five core constructs. One brutally clear language surface.</h2>
          <p className={styles.sectionBody}>
            Start with the small set of primitives that make WinScript readable for people and executable for
            automation systems.
          </p>
        </SectionReveal>

        <SectionReveal className={styles.constructShell} delay={80}>
          <ConstructList items={constructs} />
        </SectionReveal>
      </section>

      <section className={styles.section}>
        <div className={styles.docsPanel}>
          <SectionReveal className={styles.docsCard}>
            <div className={styles.eyebrow}>Documentation</div>
            <h3>Know the runtime, not just the pitch.</h3>
            <p>
              The docs route covers the architecture pipeline, MCP tools, language primitives, `.wsdict`
              format, and the testing baseline behind the project.
            </p>
            <ul className={styles.docsBulletList}>
              <li>Grammar, AST, resolver, dispatcher, and backend flow</li>
              <li>Agent-facing MCP tools and how they fit into execution</li>
              <li>Language primitives, dictionaries, and benchmark snapshots</li>
            </ul>
            <div className={styles.heroActions}>
              <Link href="/docs" className={styles.docsCta}>
                Open /docs
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal className={styles.statsCard} delay={120}>
            <div className={styles.eyebrow}>Benchmarks</div>
            <h3>Built for serious automation paths.</h3>
            <p>
              The current shape of the project already points to a language runtime rather than a fragile
              browser hack.
            </p>
            <div className={styles.statsGrid}>
              {docsStats.map((stat) => (
                <div key={stat.label} className={styles.statTile}>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statValue}>{stat.value}</div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerTags}>
            {footerTags.map((tag) => (
              <span key={tag} className={styles.metaPill}>
                {tag}
              </span>
            ))}
          </div>
          <Link href="/docs" className={styles.heroSecondary}>
            Start with the docs
          </Link>
        </div>
        <div className={styles.footerWordmark}>{footerWordmark}</div>
      </footer>

      <LatestReleasePopup release={latestRelease} />
    </main>
  );
}
