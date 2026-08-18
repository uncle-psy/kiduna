import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import styles from "../resource.module.css";

export const metadata: Metadata = {
  title: "Work in Progress — Build With Us — Kiduna",
  description: "Review the current Apiary Chrome design study and its interactive Task and communication controls.",
  alternates: { canonical: "/build-with-us/work-in-progress" },
};

export default function WorkInProgressPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.hero}>
        <div>
          <Link className={styles.back} href="/build-with-us">← Build With Us</Link>
          <p className="eyebrow"><span className="live-dot" aria-hidden="true" /> Work in Progress</p>
          <h1>Apiary<span>Chrome Review Build 02</span></h1>
          <p>Review the persistent desktop Chrome in the context of the Apiary Scene. Select the Scene Identifier, open contextual Task controls, choose a bee, send context to Ki, or prepare a meeting.</p>
        </div>
        <aside className={styles.status}>
          <span>Current study</span>
          <strong>Desktop Chrome</strong>
          <p>Interactive prototype · Apiary Scene</p>
          <a href="/work-in-progress/apiary/index.html" target="_blank" rel="noreferrer">Open without page frame ↗</a>
        </aside>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameHeader}>
          <div><i /><span>Interactive prototype</span></div>
          <a href="/work-in-progress/apiary/index.html" target="_blank" rel="noreferrer">Full screen ↗</a>
        </div>
        <iframe className={styles.frame} src="/work-in-progress/apiary/index.html" title="Apiary Chrome Review Build 02" />
      </section>
      <footer className={styles.footer}>
        <Image src="/kiduna-mark.svg" alt="" width={34} height={34} />
        <p>Kiduna · Build With Us · Work in Progress</p>
        <Link href="/the-canon">The Canon →</Link>
      </footer>
    </main>
  );
}
