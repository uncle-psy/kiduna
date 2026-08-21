import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import styles from "./sigils.module.css";

export const metadata: Metadata = {
  title: "Sigil Lexicon — Kiduna",
  description: "The public Kiduna Sigil Lexicon: meanings, associations, expressions, usage, and production-ready artwork.",
};

export default function SigilLexiconPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Kiduna Sigil Lexicon</p>
        <h1>Marks with stable meaning.</h1>
        <p>
          Sigils give identities, capacities, states, and instruments a recognizable
          presence throughout Kiduna. Each entry records what a mark means, what it
          is associated with, how it is expressed, and where it should—and should not—be used.
        </p>
      </section>

      <section className={styles.gallery} aria-label="Published sigils">
        <article className={styles.card}>
          <div className={styles.sigilWell}>
            <Image
              className={styles.sigil}
              src="/sigils/royals-and-rogues.png"
              alt="Royals & Rogues sigil"
              width={2048}
              height={2048}
              priority
            />
          </div>
          <div className={styles.identityCopy}>
            <p className={styles.eyebrow}>Named identity</p>
            <h2>Royals &amp; Rogues</h2>
            <p className={styles.essence}>Deal the hand — change the world around it.</p>
            <p className={styles.meaning}>
              The identity sigil for Royals &amp; Rogues, a strategic card-game world
              in which every hand is played inside shifting powers, courts, dangerous
              items, and consequential table states.
            </p>
            <ul className={styles.associations} aria-label="Associations">
              <li>Strategic play</li>
              <li>Courts and rogues</li>
              <li>Reversal</li>
              <li>Consequential choice</li>
            </ul>
            <div className={styles.actions}>
              <Link className={styles.primary} href="/sigils/royals-and-rogues">Read the entry →</Link>
              <a className={styles.secondary} href="/sigils/royals-and-rogues.png" download>Download 2048px PNG</a>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
