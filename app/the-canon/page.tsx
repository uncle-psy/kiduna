import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import { loadCanon } from "@/lib/canon";
import CanonExplorer from "./canon-explorer";
import styles from "./canon.module.css";

export const metadata: Metadata = {
  title: "The Canon — Kiduna",
  description: "Explore the authoritative Kiduna taxonomy: the shared language for understanding and building its living system.",
  alternates: { canonical: "/the-canon" },
  openGraph: {
    title: "The Canon — Kiduna",
    description: "Name the parts. See the whole. Explore the shared language of Kiduna.",
    url: "/the-canon",
    siteName: "Kiduna",
    type: "website",
    images: [{ url: "/og-home-design-system.png", width: 1659, height: 948, alt: "Kiduna — The Canon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Canon — Kiduna",
    description: "Name the parts. See the whole. Explore the shared language of Kiduna.",
    images: ["/og-home-design-system.png"],
  },
};

const pathways = [
  {
    number: "01–04",
    title: "Describe the system",
    copy: "Begin with the categories, dimensions of design, fields of meaning, and dynamic influences that shape Kiduna.",
    links: [["Categories", "categories"], ["Domains", "domains"], ["Themes", "themes"], ["Forces", "forces"]],
  },
  {
    number: "05–08",
    title: "Shape participation",
    copy: "See where activity happens, what exists there, how people participate, and what makes every Realm capable.",
    links: [["Realms", "realms"], ["Elements", "elements"], ["Roles", "roles"], ["Capacities", "capacities"]],
  },
  {
    number: "09–12",
    title: "Organize experience",
    copy: "Follow the reusable patterns, concurrent modes, situated scenes, and visual grammars through which Kiduna works.",
    links: [["Patterns", "patterns"], ["Modes", "modes"], ["Scenes", "scenes"], ["Forms", "forms"]],
  },
  {
    number: "13–16",
    title: "Express the world",
    copy: "Understand the building blocks, spatial systems, visual designs, and surfaces that let one world take many forms.",
    links: [["Components", "components"], ["Dimensions", "dimensions"], ["Designs", "designs"], ["Surfaces", "surfaces"]],
  },
];

const orbitNodes = Array.from({ length: 16 }, (_, index) => {
  const group = Math.floor(index / 4);
  const radius = 26 + group * 7.5;
  const angle = -78 + index * 22.5 + group * 5;
  const radians = angle * Math.PI / 180;
  return {
    number: String(index + 1).padStart(2, "0"),
    slug: [
      "categories", "domains", "themes", "forces",
      "realms", "elements", "roles", "capacities",
      "patterns", "modes", "scenes", "forms",
      "components", "dimensions", "designs", "surfaces",
    ][index],
    style: {
      left: `${50 + Math.cos(radians) * radius}%`,
      top: `${50 + Math.sin(radians) * radius}%`,
      "--group": group,
    } as CSSProperties,
  };
});

export default function CanonPage() {
  const canon = loadCanon();

  return (
    <main className={styles.page} id="main">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.heroMeta}>{canon.title} · {canon.version} · {canon.displayTimestamp}</p>
          <p className="eyebrow"><span className="live-dot" aria-hidden="true" /> The shared language of Kiduna</p>
          <h1>Name the parts.<span>See the whole.</span></h1>
          <p className={styles.heroLead}>The Canon is the authoritative language for understanding and building Kiduna: what exists, how it relates, what acts upon it, what people can do, and how one living world takes shape across every experience.</p>
          <div className={styles.heroActions}>
            <a className="button button-primary" href="#map">Explore the Canon <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="/downloads/Kiduna-Kit-V0.02-2026-08-11-1306-EDT.zip" download>Download the Kiduna Kit</a>
          </div>
        </div>

        <div className={styles.canonOrbit} role="img" aria-label="Sixteen sections of the Kiduna Canon arranged around the Kiduna mark">
          <div className={`${styles.orbitRing} ${styles.ringOne}`} aria-hidden="true" />
          <div className={`${styles.orbitRing} ${styles.ringTwo}`} aria-hidden="true" />
          <div className={`${styles.orbitRing} ${styles.ringThree}`} aria-hidden="true" />
          <div className={`${styles.orbitRing} ${styles.ringFour}`} aria-hidden="true" />
          <div className={styles.orbitGlow} aria-hidden="true" />
          {orbitNodes.map((node) => (
            <a href={`#${node.slug}`} className={styles.orbitNode} style={node.style} key={node.number} aria-label={`Go to Canon section ${node.number}`}>
              {node.number}
            </a>
          ))}
          <div className={styles.orbitCenter}><Image src="/kiduna-mark.svg" alt="" width={112} height={112} priority /></div>
        </div>
      </section>

      <section className={styles.canonMap} id="map">
        <div className={styles.mapIntro}>
          <p className="eyebrow">Four paths through the Canon</p>
          <h2>Start anywhere.<span>Everything connects.</span></h2>
          <p>The Canon is ordered from first principles to lived experience. Move through it in sequence, choose a pathway, or search the complete taxonomy below.</p>
        </div>
        <div className={styles.pathwayGrid}>
          {pathways.map((pathway) => (
            <article key={pathway.number}>
              <span>{pathway.number}</span>
              <h3>{pathway.title}</h3>
              <p>{pathway.copy}</p>
              <nav aria-label={`${pathway.title} sections`}>
                {pathway.links.map(([label, slug]) => <a href={`#${slug}`} key={slug}>{label}<i aria-hidden="true">↘</i></a>)}
              </nav>
            </article>
          ))}
        </div>
      </section>

      <CanonExplorer sections={canon.sections} />

      <section className={styles.kitSection} id="kiduna-kit">
        <div className={styles.kitMark}><Image src="/kiduna-mark.svg" alt="" width={98} height={98} /></div>
        <div className={styles.kitCopy}>
          <p className="eyebrow">Take the language with you</p>
          <h2>Teach your intelligence<span>how Kiduna works.</span></h2>
          <p>The Kiduna Kit is a compact, self-contained primer you can drop into Claude or ChatGPT to help it understand Kiduna. It includes the current Canon, a human-readable orientation, working instructions, and visual examples of the five canonical Forms.</p>
          <div className={styles.kitDetails}>
            <span>Kit V0.02</span><span>Canon V0.10</span><span>10.9 MB</span><span>Verified release</span>
          </div>
          <div className={styles.kitActions}>
            <a className={`button button-primary ${styles.downloadButton}`} href="/downloads/Kiduna-Kit-V0.02-2026-08-11-1306-EDT.zip" download>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
              </svg>
              Download the Kiduna Kit
            </a>
            <a className="text-link" href="/downloads/Kiduna-Canon-Taxonomy-V0.10-2026-08-11-1242-EDT.md" download>Download the Canon as Markdown</a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Image src="/kiduna-mark.svg" alt="" width={34} height={34} />
        <p>© 2026 Kinship Duna, WV Org ID 628407. All Rights Reserved. Kiduna<sup>™</sup> is a trademark of Kiduna Club.</p>
        <Link href="mailto:hello@kiduna.ai">hello@kiduna.ai</Link>
      </footer>
    </main>
  );
}
