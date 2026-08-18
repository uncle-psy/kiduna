import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import styles from "./build-with-us.module.css";

export const metadata: Metadata = {
  title: "Build With Us — Kiduna",
  description: "Follow Kiduna as it is built, work from the Canon, and explore the Sigil Library.",
  alternates: { canonical: "/build-with-us" },
  openGraph: {
    title: "Build With Us — Kiduna",
    description: "Work in progress, the Kiduna Canon, and the living Sigil Library.",
    url: "/build-with-us",
    siteName: "Kiduna",
    type: "website",
    images: [{ url: "/og-home-design-system.png", width: 1659, height: 948, alt: "Build With Us — Kiduna" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build With Us — Kiduna",
    description: "Work in progress, the Kiduna Canon, and the living Sigil Library.",
    images: ["/og-home-design-system.png"],
  },
};

const portals = [
  {
    number: "01",
    eyebrow: "Open work",
    title: "Work in Progress",
    copy: "Review the current Kiduna Chrome study in the Apiary Scene. Open panels, select Tasks, communicate with Ki, and comment on the working design.",
    href: "/build-with-us/work-in-progress",
    action: "Enter the current build",
    kind: "work",
  },
  {
    number: "02",
    eyebrow: "Shared language",
    title: "The Canon",
    copy: "Use the authoritative language of Kiduna: the categories, Realms, Elements, Roles, Scenes, Forms, Components, Designs, and Surfaces that make the system coherent.",
    href: "/the-canon",
    action: "Explore the Canon",
    kind: "canon",
  },
  {
    number: "03",
    eyebrow: "Visual language",
    title: "Sigil Library",
    copy: "Browse the enamel symbolic system used throughout Kiduna. Search Domains, Realm Forms, Roles, Totems, states, instruments, and other canonical marks.",
    href: "/build-with-us/sigil-library",
    action: "Open the library",
    kind: "sigils",
  },
] as const;

export default function BuildWithUsPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className="eyebrow"><span className="live-dot" aria-hidden="true" /> Build With Us</p>
          <h1>See what is forming.<span>Help shape what comes next.</span></h1>
          <p>Kiduna is being built in the open. Review active design work, use the language that holds the system together, and explore the visual grammar that makes it recognizable.</p>
        </div>

        <div className={styles.livingMark} aria-hidden="true">
          <i /><i /><i /><i />
          <Image src="/kiduna-mark.svg" alt="" width={154} height={154} priority />
        </div>
      </section>

      <section className={styles.portalSection} aria-labelledby="build-paths-title">
        <div className={styles.sectionIntro}>
          <p className="eyebrow">Three ways in</p>
          <h2 id="build-paths-title">Enter through the work,<span>the language, or the symbols.</span></h2>
        </div>

        <div className={styles.portalGrid}>
          {portals.map((portal) => (
            <Link className={`${styles.portal} ${styles[portal.kind]}`} href={portal.href} key={portal.number}>
              <header><span>{portal.number}</span><small>{portal.eyebrow}</small></header>
              <div className={styles.portalVisual} aria-hidden="true">
                {portal.kind === "work" && <Image src="/work-in-progress/apiary/assets/stills/05-apiary-chrome-build-02.png" alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />}
                {portal.kind === "canon" && <><i /><i /><i /><Image src="/kiduna-mark.svg" alt="" width={92} height={92} /></>}
                {portal.kind === "sigils" && <div className={styles.sigilCluster}>
                  <Image src="/sigil-library/assets/bee.png" alt="" width={118} height={118} />
                  <Image src="/sigil-library/assets/photon.png" alt="" width={118} height={118} />
                  <Image src="/sigil-library/assets/collection-scenes.png" alt="" width={118} height={118} />
                </div>}
              </div>
              <div className={styles.portalCopy}>
                <h3>{portal.title}</h3>
                <p>{portal.copy}</p>
                <strong>{portal.action}<span aria-hidden="true">↘</span></strong>
              </div>
            </Link>
          ))}
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
