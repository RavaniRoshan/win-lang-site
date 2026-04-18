import Link from "next/link";

import { NavLinks } from "@/components/site/Nav";
import { BrandLogo } from "@/components/site/BrandLogo";
import { CodeBlock } from "@/components/site/CodeBlock";
import { ConstructList } from "@/components/site/ConstructList";
import { DiagramCard } from "@/components/site/DiagramCard";
import { SectionReveal } from "@/components/site/SectionReveal";
import siteStyles from "@/components/site/site.module.css";
import {
  constructs,
  docsExampleScript,
  docsIntro,
  docsSections,
  docsStats,
  docsToolHighlights,
  docsWsdictExplanation,
  languagePrimitives,
  mcpTools,
  pipelineSteps,
  siteNav,
  wsdictSnippet
} from "@/content/site";

import styles from "./docs.module.css";

export default function DocsPage() {
  const repoUrl = "https://github.com/RavaniRoshan/winscript-lang";

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.nav}>
          <BrandLogo text="WinScript-lang" />
          <NavLinks />
          <div className={styles.navActions}>
            <a href={repoUrl} className={styles.secondaryCta} target="_blank" rel="noreferrer">
              GitHub repo
            </a>
            <Link href="/" className={`${styles.navCta} ${styles.dashboardStyle}`}>
              Dashboard
            </Link>
          </div>
        </header>

        <section className={styles.hero}>
          <SectionReveal className={styles.heroCopy}>
            <div className={styles.eyebrow}>Documentation</div>
            <h1 className={styles.heroTitle}>Know what you&rsquo;re building.</h1>
            <p className={styles.heroBody}>{docsIntro}</p>
            <div className={styles.ctaRow}>
              <Link href="#architecture" className={styles.navCta}>
                View architecture
              </Link>
              <a href={repoUrl} className={styles.secondaryCta} target="_blank" rel="noreferrer">
                Open GitHub repo
              </a>
              <Link href="#mcp" className={styles.secondaryCta}>
                Jump to MCP tools
              </Link>
            </div>
          </SectionReveal>

          <SectionReveal className={styles.summaryCard} delay={120}>
            <h2>At a glance</h2>
            <p>
              WinScript is a pipeline, a language surface, and an agent interface all at once. This reference
              explains the runtime path and the primitives that make that possible.
            </p>
            <ul className={styles.summaryList}>
              {docsSections.map((section) => (
                <li key={section.title}>
                  <strong>{section.title}:</strong> {section.body}
                </li>
              ))}
            </ul>
          </SectionReveal>
        </section>

        <div className={styles.grid}>
          <SectionReveal id="architecture" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Architecture pipeline</div>
              <h2>Grammar to backend, with dictionaries in the middle.</h2>
            </div>
            <div className={styles.stepList}>
              {pipelineSteps.map((step) => (
                <div key={step.name} className={styles.step}>
                  <strong>{step.name}</strong>
                  <p>{step.summary}</p>
                  <p>{step.detail}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <section className={styles.split}>
            <SectionReveal className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionEyebrow}>Core constructs</div>
                <h2>The smallest useful language surface.</h2>
              </div>
              <ConstructList items={constructs} />
            </SectionReveal>

            <SectionReveal className={styles.statsCard} delay={120}>
              <h2>Benchmarks snapshot</h2>
              <p>
                The project already has meaningful test coverage and performance targets that point toward a
                serious runtime.
              </p>
              <div className={styles.statsList}>
                {docsStats.map((stat) => (
                  <div key={stat.label} className={styles.statItem}>
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </section>

          <SectionReveal id="mcp" className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>MCP integration</div>
              <h2>Five tools that let agents inspect, validate, and run.</h2>
            </div>
            <div className={styles.toolsGrid}>
              {mcpTools.map((tool) => (
                <div key={tool.name} className={styles.toolCard}>
                  <strong>{tool.name}</strong>
                  <p>{tool.purpose}</p>
                  <p>{tool.detail}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <section className={styles.split}>
            <SectionReveal className={styles.sectionCard}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionEyebrow}>Language primitives</div>
                <h2>Control flow, timing, state, and comparison.</h2>
              </div>
              <div className={styles.pillRow}>
                {languagePrimitives.map((item) => (
                  <div key={item} className={styles.pill}>
                    {item}
                  </div>
                ))}
              </div>
              <div className={styles.ctaRow}>
                <CodeBlock code={docsExampleScript} language="WinScript example" copyLabel="Copy example" />
              </div>
            </SectionReveal>

            <SectionReveal className={styles.sectionCard} delay={100}>
              <div className={styles.sectionHeader}>
                <div className={styles.sectionEyebrow}>.wsdict format</div>
                <h2>Open dictionaries unlock app support without changing the parser.</h2>
              </div>
              <ul className={styles.bullets}>
                {docsWsdictExplanation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className={styles.ctaRow}>
                <CodeBlock code={wsdictSnippet} language=".wsdict example" copyLabel="Copy .wsdict" />
              </div>
            </SectionReveal>
          </section>

          <SectionReveal className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Technical framing</div>
              <h2>What makes WinScript different from brittle desktop automation.</h2>
            </div>
            <div className={styles.highlightGrid}>
              {docsToolHighlights.map((item) => (
                <div key={item.title} className={styles.highlight}>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}>Reference diagram</div>
              <h2>One script, many coordinated layers.</h2>
            </div>
            <DiagramCard
              eyebrow="Execution map"
              title="From natural command to backend call"
              description="The runtime stays readable on top by moving complexity into resolvers and dispatchers underneath."
            >
              <div className={siteStyles.diagramFlow}>
                <div className={siteStyles.diagramNode}>
                  <span>WinScript source</span>
                  <span>tell / set / wait</span>
                </div>
                <div className={siteStyles.diagramNode}>
                  <span>Resolver</span>
                  <span>.wsdict definitions</span>
                </div>
                <div className={siteStyles.diagramNode}>
                  <span>Dispatcher</span>
                  <span>CDP / COM / UIA</span>
                </div>
              </div>
            </DiagramCard>
          </SectionReveal>
        </div>
      </div>
    </main>
  );
}
