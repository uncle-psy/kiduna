import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "How We Work — Kiduna",
  description:
    "See how Kiduna helps people and intelligent allies turn shared purpose into capable organizations and collective action.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work — Kiduna",
    description:
      "People and intelligent allies acting together on purpose.",
    url: "/how-we-work",
    siteName: "Kiduna",
    type: "website",
    images: [
      {
        url: "/og-home-design-system.png",
        width: 1659,
        height: 948,
        alt: "Kiduna — People and intelligent allies acting together on purpose.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work — Kiduna",
    description: "People and intelligent allies acting together on purpose.",
    images: ["/og-home-design-system.png"],
  },
};

const capacities = [
  {
    number: "01",
    title: "Wisdom",
    copy: "Shape the collective intelligence. Add information, share knowledge, connect sources, and grow a living body of expertise that remains available to the people and allies who need it.",
  },
  {
    number: "02",
    title: "Presence",
    copy: "Guide how allies, organizations, projects, and communities understand, respond, and participate. The instructions you provide will charge each element with a distinct stance, voice, and way of being—bringing the entire ecosystem to life and making everything feel purposeful, attentive, and responsive.",
  },
  {
    number: "03",
    title: "Connections",
    copy: "Choose where your organization can act. Connect messaging, meetings, documents, media, social platforms, financial systems, and other tools—always through permissions you can inspect and control.",
  },
  {
    number: "04",
    title: "Automations",
    copy: "Enable work that continues beyond a single request. Shape sequences, triggers, loops, and autonomous agents that can coordinate activity, follow conditions, and carry work forward under your direction.",
  },
  {
    number: "05",
    title: "Abilities",
    copy: "Expand what your organizations and allies can do. Add skills, methods, and practical knowledge that can be applied repeatedly, refined through experience, and extended through continuous learning.",
  },
  {
    number: "06",
    title: "Coherence",
    copy: "Align your organizations, projects, and allies with the values, sensitivities, and boundaries that matter. Sentinels help preserve understanding, trust, and human agency—keeping the human and agentic field healthy and clean as it grows more capable.",
  },
];

const foundations = [
  ["Identity", "Know who is acting."],
  ["Representation", "Know whom they represent."],
  ["Authority", "Understand what they can decide."],
  ["Privacy", "Control what knowledge can be used or shared."],
  ["Consent", "Choose how you participate and what you authorize."],
  ["Provenance", "Trace elements and actions back to their sources."],
];

export default function HowWeWork() {
  return (
    <main className="work-page">
      <SiteHeader />

      <section className="work-hero">
        <div className="work-hero-copy">
          <p className="eyebrow">
            <span className="live-dot" aria-hidden="true" /> How we work
          </p>
          <h1>
            People and intelligent allies
            <em>acting together on purpose.</em>
          </h1>
          <p className="work-hero-lead">
            We help you turn a purpose into a trusted group of people and
            intelligent allies—then give you the tools, governance, and legal
            standing to act together as one.
          </p>
          <div className="work-actions">
            <a className="button button-primary" href="/#early-access">
              Request early access <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#journey">
              See the four steps
            </a>
          </div>
        </div>

        <div
          className="work-system-map"
          role="img"
          aria-label="Purpose connects people and intelligent allies, who form an organization capable of action"
        >
          <div className="work-rays" aria-hidden="true" />
          <div className="work-glow" aria-hidden="true" />
          <div className="work-orbit work-orbit-outer" />
          <div className="work-orbit work-orbit-middle" />
          <div className="work-orbit work-orbit-inner" />
          <div className="work-orb-track work-orb-track-outer" aria-hidden="true"><i /></div>
          <div className="work-orb-track work-orb-track-middle" aria-hidden="true"><i /></div>
          <div className="work-orb-track work-orb-track-inner" aria-hidden="true"><i /></div>
          <div className="work-line work-line-one" />
          <div className="work-line work-line-two" />
          <div className="work-line work-line-three" />
          <div className="work-map-node work-purpose-node"><span>01</span><strong>Purpose</strong></div>
          <div className="work-map-node work-allies-node"><span>02</span><strong>Allies</strong></div>
          <div className="work-map-node work-organization-node"><span>03</span><strong>Organization</strong></div>
          <div className="work-map-node work-action-node"><span>04</span><strong>Action</strong></div>
          <div className="work-map-center">
            <Image src="/kiduna-mark.svg" alt="" width={74} height={74} />
          </div>
        </div>
      </section>

      <section className="work-signal-strip" aria-label="The Kiduna journey">
        <div><span>01</span><strong>Bring a purpose</strong></div>
        <div><span>02</span><strong>Shape your allies</strong></div>
        <div><span>03</span><strong>Govern together</strong></div>
        <div><span>04</span><strong>Take action as one</strong></div>
      </section>

      <section className="work-journey" id="journey">
        <div className="work-section-intro">
          <div>
            <p className="eyebrow">From intention to action</p>
            <h2>Action grows<br /><span className="work-heading-line">from <em>caring.</em></span></h2>
          </div>
          <p>
            Other systems begin with corporate templates or platform
            imperatives. We begin with people, what we care about, and the
            relationships that make coordinated action possible.
          </p>
        </div>

        <div className="work-step-list">
          <article className="work-step work-step-purpose">
            <div className="work-step-number">01</div>
            <div className="work-step-copy">
              <p className="work-step-kicker">Purpose</p>
              <h3>Begin with something that matters.</h3>
              <p>A problem to solve. A community to strengthen. A project, movement, or organization you want to bring into being. Your purpose gives the work direction.</p>
            </div>
            <p className="work-step-result">You can make a difference.</p>
          </article>

          <article className="work-step work-step-allies">
            <div className="work-step-number">02</div>
            <div className="work-step-copy">
              <p className="work-step-kicker">Intelligent allies</p>
              <h3>Build software that senses, reasons, and acts.</h3>
              <p>Your intelligent Allies will help you develop the idea, find relevant people and knowledge, and coordinate your work. Every Ally acts under the direction and within the clear scope of an individual or member-governed collective.</p>
            </div>
            <p className="work-step-result">Form, shape and guide allies that care.</p>
          </article>

          <article className="work-step work-step-organization">
            <div className="work-step-number">03</div>
            <div className="work-step-copy">
              <p className="work-step-kicker">Organization</p>
              <h3>From personal relationships to capable organizations.</h3>
              <p>Establish roles, permissions, resources, and rules for making decisions. Work, conversations, agreements, and memory remain connected and shared instead of scattering across unrelated documents, apps, and systems.</p>
            </div>
            <p className="work-step-result">Grow powerful movements over vast distances.</p>
          </article>

          <article className="work-step work-step-action">
            <div className="work-step-number">04</div>
            <div className="work-step-copy">
              <p className="work-step-kicker">Collective action</p>
              <h3>Together, we can make a difference.</h3>
              <p>Our organizations can govern projects, coordinate work, hold and direct resources, enter agreements, own assets, and act with legal standing. Verified identity, authority, permission, and consent make it possible to collaborate with confidence, coordinate across distance, and take consequential action together.</p>
            </div>
            <p className="work-step-result">Maintain individual freedom while working as a collective.</p>
          </article>
        </div>
      </section>

      <section className="work-capacities">
        <div className="work-capacities-intro">
          <p className="eyebrow">Individual and collective agency</p>
          <h2>A living system for <em>individual and collective agency.</em></h2>
          <p>These six capacities work together so that organizations can sense, decide, act, and learn without diminishing the authority of individual members.</p>
        </div>
        <div className="work-capacity-grid">
          {capacities.map((capacity) => (
            <article className="work-capacity-card" key={capacity.number}>
              <span>{capacity.number}</span>
              <h3>{capacity.title}</h3>
              <p>{capacity.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-living-field">
        <div className="work-callout-mark">
          <Image src="/kiduna-mark.svg" alt="" width={104} height={104} />
        </div>
        <div>
          <p className="eyebrow">The living field</p>
          <h2>Everyone shapes the collective. <em>The collective acts as one.</em></h2>
          <p>
            A shared purpose creates a living field of people, intelligent allies,
            knowledge, projects, decisions, and resources. As you shape it through
            what you know, choose, create, and do, others shape and guide it through
            their own knowledge, judgment, relationships, and actions. Kiduna keeps
            all activity connected, helping each individual, organization, alliance,
            community, relationship, and project remain aware, coordinate its work,
            learn from experience, and move together as their needs, relationships,
            and circumstances change.
          </p>
        </div>
      </section>

      <section className="work-foundations">
        <div className="work-section-intro work-section-intro-compact">
          <div>
            <p className="eyebrow">Take collective action with confidence</p>
            <h2>Work privately, secretly, or in public. <em>The choice is yours.</em></h2>
          </div>
          <p>
            Kiduna gives people, allies, and organizations a shared foundation
            for action: recognizable identities, clear representation, defined
            authority, protected knowledge, meaningful consent, and traceable
            decisions. With these foundations in place, you can remain in
            flow—building, coordinating, learning, and growing together with
            confidence.
          </p>
        </div>
        <div className="work-foundation-grid">
          {foundations.map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-closing">
        <p className="eyebrow">Shape what comes next</p>
        <h2>Bring your highest purpose.<em>Build something truly extraordinary.</em></h2>
        <p>
          We’re starting small, with genuine relationships and a few powerful
          ideas.<br />
          If you’re passionate about exploring new forms of work, community,
          ownership, and collaboration between humans and intelligent allies,
          request early access today.
        </p>
        <div className="work-closing-actions">
          <a className="button button-primary" href="/#early-access">
            Request early access <span aria-hidden="true">→</span>
          </a>
          <a className="text-link" href="/nightpaper">Read the Nightpaper</a>
        </div>
      </section>

      <footer>
        <Image src="/kiduna-mark.svg" alt="" width={34} height={34} />
        <p>© 2026 Kinship Duna, WV Org ID 628407. All Rights Reserved. Kiduna<sup>™</sup> is a trademark of Kiduna Club.</p>
        <a href="mailto:hello@kiduna.ai">hello@kiduna.ai</a>
      </footer>
    </main>
  );
}
