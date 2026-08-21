import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import styles from "../sigils.module.css";

export const metadata: Metadata = {
  title: "Royals & Rogues Sigil — Kiduna",
  description: "Meaning, associations, expression, usage, and production artwork for the Royals & Rogues identity sigil.",
  openGraph: {
    title: "Royals & Rogues Sigil — Kiduna",
    description: "Deal the hand — change the world around it.",
    images: [{ url: "/sigils/royals-and-rogues.png", width: 2048, height: 2048, alt: "Royals & Rogues sigil" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Royals & Rogues Sigil — Kiduna",
    description: "Deal the hand — change the world around it.",
    images: ["/sigils/royals-and-rogues.png"],
  },
};

export default function RoyalsAndRoguesSigilPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.detail}>
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

        <article className={styles.identityCopy}>
          <Link className={styles.back} href="/sigils">← Sigil Lexicon</Link>
          <p className={styles.eyebrow}>Named identity · Canonical</p>
          <h1>Royals &amp; Rogues</h1>
          <p className={styles.essence}>Deal the hand — change the world around it.</p>

          <dl className={styles.definitionList}>
            <div>
              <dt>Meaning</dt>
              <dd>
                The identity sigil for Royals &amp; Rogues, a strategic card-game world
                in which every hand is played inside shifting powers, courts, dangerous
                items, and consequential table states.
              </dd>
            </div>
            <div>
              <dt>Associations</dt>
              <dd>Strategic play · Courts and rogues · Reversal · Consequential choice</dd>
            </div>
            <div>
              <dt>Expression</dt>
              <dd>
                A gold ascent and descent are held across an ivory horizon by a garnet
                pivot. The exact, cold-lit enamel construction expresses a hand whose
                choices can reverse direction and reshape the field around it.
              </dd>
            </div>
            <div>
              <dt>Usage</dt>
              <dd>
                Use only for the Royals &amp; Rogues identity, navigation, publication,
                and signed artifacts. Do not use it as a generic mark for royalty,
                games, gambling, hierarchy, or risk.
              </dd>
            </div>
            <div>
              <dt>Artwork</dt>
              <dd>Production-ready circular enamel sigil · Transparent PNG · 2048 × 2048</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <a className={styles.primary} href="/sigils/royals-and-rogues.png" download>Download 2048px PNG</a>
            <Link className={styles.secondary} href="/sigils">Browse the Lexicon</Link>
          </div>
        </article>
      </section>
    </main>
  );
}
