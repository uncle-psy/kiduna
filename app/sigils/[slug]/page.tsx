import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/site-header";
import styles from "../sigils.module.css";
import {
  getRoyalsAndRoguesRole,
  royalsAndRoguesRoles,
} from "../royals-and-rogues-roles";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return royalsAndRoguesRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = getRoyalsAndRoguesRole(slug);
  if (!role) return {};
  const title = `${role.name} Sigil — Kiduna`;
  return {
    title,
    description: `Meaning, associations, expression, usage, and production artwork for the Royals & Rogues ${role.name} role sigil.`,
    openGraph: {
      title,
      description: role.essence,
      images: [
        {
          url: `/sigils/${role.slug}.png`,
          width: 2048,
          height: 2048,
          alt: `${role.name} sigil`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: role.essence,
      images: [`/sigils/${role.slug}.png`],
    },
  };
}

export default async function RoyalsAndRoguesRolePage({ params }: PageProps) {
  const { slug } = await params;
  const role = getRoyalsAndRoguesRole(slug);
  if (!role) notFound();

  return (
    <main className={styles.page}>
      <SiteHeader />
      <section className={styles.detail}>
        <div className={styles.sigilWell}>
          <Image
            className={styles.sigil}
            src={`/sigils/${role.slug}.png`}
            alt={`${role.name} sigil`}
            width={2048}
            height={2048}
            priority
          />
        </div>

        <article className={styles.identityCopy}>
          <Link className={styles.back} href="/sigils">
            ← Sigil Lexicon
          </Link>
          <p className={styles.eyebrow}>Royals &amp; Rogues role · Canonical</p>
          <h1>{role.name}</h1>
          <p className={styles.essence}>{role.essence}</p>

          <dl className={styles.definitionList}>
            <div>
              <dt>Meaning</dt>
              <dd>{role.meaning}</dd>
            </div>
            <div>
              <dt>Associations</dt>
              <dd>{role.associations.join(" · ")}</dd>
            </div>
            <div>
              <dt>Expression</dt>
              <dd>{role.expression}</dd>
            </div>
            <div>
              <dt>Usage</dt>
              <dd>{role.usage}</dd>
            </div>
            <div>
              <dt>Artwork</dt>
              <dd>Production-ready circular enamel sigil · Transparent PNG · 2048 × 2048</dd>
            </div>
          </dl>

          <div className={styles.actions}>
            <a className={styles.primary} href={`/sigils/${role.slug}.png`} download>
              Download 2048px PNG
            </a>
            <Link className={styles.secondary} href="/sigils">
              Browse the Lexicon
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
