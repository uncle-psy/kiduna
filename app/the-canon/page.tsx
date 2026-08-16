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
    number: "01–05",
    title: "Describe the system",
    copy: "Begin with the categories, dimensions of design, fields of meaning, intended purposes, and dynamic influences that shape Kiduna.",
    links: [["Categories", "categories"], ["Domains", "domains"], ["Themes", "themes"], ["Purposes", "purposes"], ["Forces", "forces"]],
  },
  {
    number: "06–10",
    title: "Shape participation",
    copy: "See where activity happens, what exists there, what can be held and exchanged, how people participate, and what makes every Realm capable.",
    links: [["Realms", "realms"], ["Elements", "elements"], ["Resources", "resources"], ["Roles", "roles"], ["Capacities", "capacities"]],
  },
  {
    number: "11–15",
    title: "Organize experience",
    copy: "Follow the reusable Patterns, complete Field, operational Modes, situated Scenes, and visual grammars through which Kiduna works.",
    links: [["Patterns", "patterns"], ["Field", "field"], ["Modes", "modes"], ["Scenes", "scenes"], ["Forms", "forms"]],
  },
  {
    number: "16–19",
    title: "Express the world",
    copy: "Understand the building blocks, spatial systems, visual designs, and surfaces that let one world take many forms.",
    links: [["Components", "components"], ["Dimensions", "dimensions"], ["Designs", "designs"], ["Surfaces", "surfaces"]],
  },
];

const orbitSections = [
  ["Categories", "categories"], ["Domains", "domains"], ["Themes", "themes"], ["Purposes", "purposes"], ["Forces", "forces"],
  ["Realms", "realms"], ["Elements", "elements"], ["Resources", "resources"], ["Roles", "roles"], ["Capacities", "capacities"],
  ["Patterns", "patterns"], ["Field", "field"], ["Modes", "modes"], ["Scenes", "scenes"], ["Forms", "forms"],
  ["Components", "components"], ["Dimensions", "dimensions"], ["Designs", "designs"], ["Surfaces", "surfaces"],
] as const;

const orbitColors = ["var(--camel)", "var(--accent)", "#9d7be8", "var(--mint)"] as const;

const orbitNodes = orbitSections.map(([label, slug], index) => {
  const group = index < 5 ? 0 : index < 10 ? 1 : index < 15 ? 2 : 3;
  const radius = 26 + group * 7.5;
  const angle = -78 + index * (360 / orbitSections.length) + group * 5;
  const radians = angle * Math.PI / 180;
  return {
    number: String(index + 1).padStart(2, "0"),
    label,
    slug,
    group,
    isLeft: Math.cos(radians) < 0,
    style: {
      left: `${50 + Math.cos(radians) * radius}%`,
      top: `${50 + Math.sin(radians) * radius}%`,
      "--group": group,
      "--node-color": orbitColors[group],
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
          <p className={styles.heroLead}>The Canon is the authoritative language for understanding and building Kiduna: what it is, how it relates, what acts upon it, what you can do, and how one living world takes shape across every experience. Prepare for our launch! Download the Kiduna Kit and drop it into Claude or ChatGPT to explore the frontiers of technology, economics, governance, and culture.</p>
          <div className={styles.heroActions}>
            <a className={`button button-primary ${styles.heroDownload}`} href="/downloads/Kiduna-Kit-V0.28-2026-08-16-1412-EDT.zip" download>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
              </svg>
              Download the Kiduna Kit
            </a>
            <Link className="text-link" href="/#early-access">Request Early Access</Link>
          </div>
        </div>

        <div className={styles.canonOrbit} role="img" aria-label="Nineteen sections of the Kiduna Canon arranged around the Kiduna mark">
          <div className={`${styles.orbitRing} ${styles.ringOne}`} aria-hidden="true" />
          <div className={`${styles.orbitRing} ${styles.ringTwo}`} aria-hidden="true" />
          <div className={`${styles.orbitRing} ${styles.ringThree}`} aria-hidden="true" />
          <div className={`${styles.orbitRing} ${styles.ringFour}`} aria-hidden="true" />
          <div className={styles.orbitGlow} aria-hidden="true" />
          <div className={styles.orbitRays} aria-hidden="true" />
          <div className={`${styles.movingOrb} ${styles.orbOne}`} aria-hidden="true"><span /></div>
          <div className={`${styles.movingOrb} ${styles.orbTwo}`} aria-hidden="true"><span /></div>
          <div className={`${styles.movingOrb} ${styles.orbThree}`} aria-hidden="true"><span /></div>
          <div className={`${styles.movingOrb} ${styles.orbFour}`} aria-hidden="true"><span /></div>
          <div className={`${styles.movingOrb} ${styles.orbFive}`} aria-hidden="true"><span /></div>
          {orbitNodes.map((node) => (
            <a href={`#${node.slug}`} className={`${styles.orbitNode} ${node.isLeft ? styles.nodeLeft : styles.nodeRight}`} style={node.style} key={node.number} aria-label={`Go to ${node.label}, Canon section ${node.number}`}>
              <b>{node.number}</b><span>{node.label}</span>
            </a>
          ))}
          <div className={styles.orbitCenter}><Image src="/kiduna-mark.svg" alt="" width={112} height={112} priority /></div>
        </div>
      </section>

      <section className={styles.canonMap} id="map">
        <div className={styles.mapIntro}>
          <p className="eyebrow">Four paths through the Canon</p>
          <h2>Start anywhere.<span>Connect it all.</span></h2>
          <p>The Canon is ordered from first principles to lived experience. Move through it in sequence, choose a pathway, skip around, or search the complete taxonomy below.</p>
        </div>
        <aside className={styles.languageNote} aria-label="A note about Kiduna language">
          <p><strong>Note:</strong> we are very particular about our language. Words have power. There are some terms we don’t ever use, and some terms are fairly unique to us in our usage. Three of those terms are particularly significant: <b>Source</b>, <b>Realm</b>, and <b>Ally</b>. We refer to the person who is participating in Kiduna as a <b>Source</b>, not in any other way. A <b>Realm</b> is a purposeful context or container for activity. An <b>Ally</b> is an intelligent agent that is shaped and guided by one and only one <b>Source</b>.</p>
        </aside>
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
          <p>The Kiduna Kit is a compact, self-contained primer you can drop into Claude or ChatGPT to help it understand Kiduna. It includes the current Canon, a human-readable orientation, working instructions, and visual examples of Kiduna Forms.</p>
          <div className={styles.kitDetails}>
            <span>Kit V0.28</span><span>Canon V0.36</span><span>10.9 MB</span><span>Verified release</span>
          </div>
          <div className={styles.kitActions}>
            <a className={`button button-primary ${styles.downloadButton}`} href="/downloads/Kiduna-Kit-V0.28-2026-08-16-1412-EDT.zip" download>
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
              </svg>
              Download the Kiduna Kit
            </a>
            <a className="text-link" href="/downloads/Kiduna-Canon-Taxonomy-V0.36-2026-08-16-1411-EDT.md" download>Download the Canon as Markdown</a>
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
