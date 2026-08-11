import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import styles from "./events.module.css";

export const metadata: Metadata = {
  title: "Events — Kiduna",
  description: "Find Kiduna at gatherings where people are building intelligent agents, decentralized systems, and new forms of collective action.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events — Kiduna",
    description: "Come find us where the future is taking shape.",
    url: "/events",
    siteName: "Kiduna",
    type: "website",
    images: [{ url: "/og-home-design-system.png", width: 1659, height: 948, alt: "Kiduna — Events" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Events — Kiduna",
    description: "Come find us where the future is taking shape.",
    images: ["/og-home-design-system.png"],
  },
};

const events = [
  {
    number: "01",
    month: "SEP",
    days: "22–29",
    year: "2026",
    title: "mtnDAO X",
    location: "Salt Lake City, Utah",
    copy: "A week with the builders, founders, and communities shaping the Solana ecosystem. We’ll be there to explore how decentralized infrastructure can support intelligent, member-governed organizations.",
    link: "https://x.com/mtndao?lang=en",
    linkLabel: "Follow mtnDAO",
    color: "mint",
  },
  {
    number: "02",
    month: "SEP",
    days: "24",
    year: "2026",
    title: "Interrupt NYC",
    location: "Halo at 28 Liberty · New York City",
    copy: "LangChain’s agent conference brings together the builders and leaders moving agents into production. We’ll be there for the systems, practices, and relationships advancing agentic technology in the world.",
    link: "https://interrupt.langchain.com/nyc",
    linkLabel: "Explore Interrupt NYC",
    color: "sky",
  },
  {
    number: "03",
    month: "OCT",
    days: "12–14",
    year: "2026",
    title: "AI Engineer New York",
    location: "Sheraton New York Times Square · New York City",
    copy: "From the team behind AI Engineer World’s Fair, this focused New York flagship brings together AI engineers and leaders for three days of production systems, infrastructure, workshops, and high-signal connection.",
    link: "https://www.ai.engineer/nyc/2026",
    linkLabel: "Explore AI Engineer New York",
    color: "gold",
  },
];

export default function EventsPage() {
  return (
    <main className={styles.page} id="main">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className="eyebrow"><span className="live-dot" aria-hidden="true" /> Meet us in the world</p>
          <h1>Come find us where the future<span>is taking shape.</span></h1>
          <p className={styles.heroLead}>Kiduna is being built through real relationships. We’ll be at gatherings where people are advancing decentralized systems, intelligent agents, and new forms of collective action. If you’ll be there too, come find us.</p>
          <div className={styles.actions}>
            <a className="button button-primary" href="#upcoming">See upcoming events <span aria-hidden="true">↓</span></a>
            <Link className="text-link" href="/#early-access">Request early access</Link>
          </div>
        </div>

        <div className={styles.constellation} role="img" aria-label="A path connecting Kiduna gatherings in Salt Lake City and New York City">
          <div className={`${styles.orbit} ${styles.orbitOuter}`} aria-hidden="true" />
          <div className={`${styles.orbit} ${styles.orbitInner}`} aria-hidden="true" />
          <div className={styles.route} aria-hidden="true" />
          <div className={`${styles.gathering} ${styles.gatheringOne}`}><i>01</i><span>Salt Lake City</span></div>
          <div className={`${styles.gathering} ${styles.gatheringTwo}`}><i>02</i><span>New York City</span></div>
          <div className={`${styles.gathering} ${styles.gatheringThree}`}><i>03</i><span>New York City</span></div>
          <div className={`${styles.traveler} ${styles.travelerOne}`} aria-hidden="true"><i /></div>
          <div className={`${styles.traveler} ${styles.travelerTwo}`} aria-hidden="true"><i /></div>
          <div className={styles.center}><Image src="/kiduna-mark.svg" alt="" width={82} height={82} /></div>
        </div>
      </section>

      <section className={styles.signalStrip} aria-label="Upcoming Kiduna events">
        <div><span>03</span><strong>Upcoming gatherings</strong></div>
        <div><span>02</span><strong>Cities</strong></div>
        <div><span>SEP</span><strong>Solana and agents</strong></div>
        <div><span>OCT</span><strong>AI engineering</strong></div>
      </section>

      <section className={styles.eventsSection} id="upcoming">
        <div className={styles.sectionIntro}>
          <div><p className="eyebrow">Upcoming events</p><h2>Three gatherings.<span>One unfolding conversation.</span></h2></div>
          <p>We’re going where people are building the infrastructure, intelligence, and relationships that can give new organizations real power to act. These are the places to meet us next.</p>
        </div>

        <div className={styles.eventList}>
          {events.map((event) => (
            <article className={`${styles.eventCard} ${styles[event.color]}`} key={event.number}>
              <div className={styles.eventNumber}>{event.number}</div>
              <div className={styles.date} aria-label={`${event.month} ${event.days}, ${event.year}`}>
                <span>{event.month}</span>
                <strong>{event.days}</strong>
                <small>{event.year}</small>
              </div>
              <div className={styles.eventCopy}>
                <p className={styles.location}>{event.location}</p>
                <h3>{event.title}</h3>
                <p>{event.copy}</p>
                <a href={event.link} target="_blank" rel="noreferrer">{event.linkLabel} <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.closing}>
        <p className="eyebrow">Come find us</p>
        <h2>Let’s meet<span>in person.</span></h2>
        <p>If you’re attending one of these events and want to talk about intelligent allies, member-governed organizations, or the infrastructure of agency, tell us where you’ll be.</p>
        <div className={styles.closingActions}>
          <Link className="button button-primary" href="/#early-access">Request early access <span aria-hidden="true">→</span></Link>
          <a className="text-link" href="mailto:hello@kiduna.ai">hello@kiduna.ai</a>
        </div>
      </section>

      <footer className={styles.footer}><Image src="/kiduna-mark.svg" alt="" width={34} height={34} /><p>© 2026 Kinship Duna, WV Org ID 628407. All Rights Reserved. Kiduna<sup>™</sup> is a trademark of Kiduna Club.</p><a href="mailto:hello@kiduna.ai">hello@kiduna.ai</a></footer>
    </main>
  );
}
