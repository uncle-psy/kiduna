import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SigilLibrary, { type LibraryEntry } from "./sigil-library";
import styles from "./sigils.module.css";

export const metadata: Metadata = {
  title: "Sigil Library — Kiduna",
  description: "Explore the Kiduna Sigil Library and its stateful enamel Portraits for Allies and Avatars.",
  alternates: { canonical: "/sigils" },
  openGraph: {
    title: "Sigil Library — Kiduna",
    description: "Portraits, symbols, states, and the visual language of Kiduna.",
    url: "/sigils",
    siteName: "Kiduna",
    type: "website",
    images: [{ url: "/og-home-design-system.png", width: 1659, height: 948, alt: "Kiduna Sigil Library" }],
  },
};

type Catalog = {
  version: string;
  timestamp: string;
  sigilLibraryVersion: string;
  sigilCount: number;
  portraitCount: number;
  portraitStateAssetCount: number;
  entries: LibraryEntry[];
};

function loadCatalog(): Catalog {
  const filename = path.join(process.cwd(), "public/sigils/v031/catalog.json");
  return JSON.parse(readFileSync(filename, "utf8")) as Catalog;
}

export default function SigilsPage() {
  const catalog = loadCatalog();
  const sigils = catalog.entries.filter((entry) => entry.type === "sigil");
  const portraits = catalog.entries.filter((entry) => entry.type === "portrait");

  return (
    <main className={styles.page} id="main">
      <SiteHeader />

      <section className={styles.hero}>
        <div>
          <p className={styles.heroMeta}>Sigil Library {catalog.sigilLibraryVersion} · Lexicon {catalog.version} · {catalog.timestamp}</p>
          <p className="eyebrow"><span className="live-dot" aria-hidden="true" /> The visual language of Kiduna</p>
          <h1>Meaning,<span>made visible.</span></h1>
          <p className={styles.heroLead}>Sigils give Kiduna a stable symbolic vocabulary. Portraits carry recognizable identity across changing states. Together they help Sources understand what is present, what it means, and how it can be approached.</p>
          <div className={styles.heroActions}>
            <a className="button button-primary" href="https://github.com/uncle-psy/kiduna/releases/download/sigils-v1.5/Kiduna-Sigils-Kit-v1.5-2026-08-21.zip">Download the complete Sigil Kit</a>
            <a className="text-link" href="/downloads/Kiduna-Sigil-Lexicon-V1.5-2026-08-21.md" download>Download the Lexicon</a>
          </div>
        </div>
        <div className={styles.heroPortraits} aria-label="Six Kiduna enamel portrait examples in their Open state">
          {portraits.map((portrait, index) => (
            <div className={styles.heroPortrait} key={portrait.id} style={{ "--portrait-index": index } as CSSProperties}>
              <Image src={`/sigils/v031/portraits/${portrait.slug}/open.webp`} alt="" width={440} height={440} priority={index < 3} />
            </div>
          ))}
          <Image className={styles.heroMark} src="/kiduna-mark.svg" alt="" width={76} height={76} priority />
        </div>
      </section>

      <section className={styles.definition}>
        <p className="eyebrow">A category for Allies and Avatars</p>
        <div>
          <h2>Portraits preserve identity.<span>State communicates presence.</span></h2>
          <p>An Avatar portrait represents the Source through that Avatar. An Ally portrait represents the Ally intelligence itself. A portrait does not change the kind of Element represented, and it never transfers identity, Consent, Roles, Permissions, or Authority.</p>
        </div>
        <aside>
          <strong>Source preservation</strong>
          <p>Four original 1536 × 1024 boards are preserved untouched. The kit also contains 24 transparent native-resolution portrait-state assets—six identities across four required states.</p>
        </aside>
      </section>

      <section className={styles.publishedIdentity} aria-labelledby="royals-and-rogues-title">
        <div className={styles.publishedArt}>
          <Image src="/sigils/royals-and-rogues.png" alt="Royals & Rogues sigil" width={2048} height={2048} />
        </div>
        <div className={styles.publishedCopy}>
          <p className="eyebrow">Published named identity</p>
          <h2 id="royals-and-rogues-title">Royals &amp; Rogues</h2>
          <strong>Deal the hand — change the world around it.</strong>
          <p>This production identity sigil was published concurrently with Library v0.31 and is preserved here with its full entry and original 2048 × 2048 artwork.</p>
          <div>
            <Link className="button button-primary" href="/sigils/royals-and-rogues">Read the entry</Link>
            <a className="text-link" href="/sigils/royals-and-rogues.png" download>Download 2048px PNG</a>
          </div>
        </div>
      </section>

      <SigilLibrary sigils={sigils} portraits={portraits} />

      <section className={styles.downloadBand}>
        <Image src="/kiduna-mark.svg" alt="" width={82} height={82} />
        <div>
          <p className="eyebrow">A complete, verified release</p>
          <h2>Take the library with you.</h2>
          <p>The v1.5 kit includes the generated Lexicon, machine-readable catalog, 194 sigils, six portrait families, original portrait boards, high-resolution approved masters, reference artwork, metadata, provenance, and checksums.</p>
        </div>
        <div className={styles.downloadActions}>
          <a className="button button-primary" href="https://github.com/uncle-psy/kiduna/releases/download/sigils-v1.5/Kiduna-Sigils-Kit-v1.5-2026-08-21.zip">Download 1.5</a>
          <a className="text-link" href="/downloads/Kiduna-Sigil-Lexicon-V1.5-2026-08-21.md" download>Lexicon Markdown</a>
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
