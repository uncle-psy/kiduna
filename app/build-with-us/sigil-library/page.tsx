import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import styles from "../resource.module.css";

export const metadata: Metadata = {
  title: "Sigil Library — Build With Us — Kiduna",
  description: "Browse the living enamel symbolic language of Kiduna.",
  alternates: { canonical: "/build-with-us/sigil-library" },
};

export default function SigilLibraryPage() {
  return (
    <main className={`${styles.page} ${styles.sigilPage}`}>
      <SiteHeader />
      <section className={styles.hero}>
        <div>
          <Link className={styles.back} href="/build-with-us">← Build With Us</Link>
          <p className="eyebrow">Visual language</p>
          <h1>Sigil Library<span>Every concept carries a signature.</span></h1>
          <p>Browse the enamel marks that identify Kiduna Domains, Realm Forms, Roles, Totems, states, instruments, and other parts of the living system.</p>
        </div>
        <aside className={`${styles.status} ${styles.sigilStatus}`}>
          <div>
            <Image src="/sigil-library/assets/bee.png" alt="Bee sigil" width={82} height={82} />
            <Image src="/sigil-library/assets/photon.png" alt="Photon sigil" width={82} height={82} />
            <Image src="/sigil-library/assets/collection-themes.png" alt="Themes Domain sigil" width={82} height={82} />
          </div>
          <span>Current catalog</span>
          <strong>150 sigils</strong>
          <p>Searchable · Filterable · Detailed</p>
          <a href="/sigil-library/index.html" target="_blank" rel="noreferrer">Open without page frame ↗</a>
        </aside>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameHeader}>
          <div><i /><span>Living Sigil Library</span></div>
          <a href="/sigil-library/index.html" target="_blank" rel="noreferrer">Full screen ↗</a>
        </div>
        <iframe className={`${styles.frame} ${styles.libraryFrame}`} src="/sigil-library/index.html" title="Kiduna Sigil Library" />
      </section>
      <footer className={styles.footer}>
        <Image src="/kiduna-mark.svg" alt="" width={34} height={34} />
        <p>Kiduna · Build With Us · Sigil Library</p>
        <Link href="/the-canon">The Canon →</Link>
      </footer>
    </main>
  );
}
