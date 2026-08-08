import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Our Work — Kiduna",
  description: "Meet Kinship Duna, its catalyst David Levine, and the organizations stewarding Kiduna’s technology, alignment, and implementation.",
  alternates: { canonical: "/about-our-work" },
  openGraph: {
    title: "About Our Work — Kiduna",
    description: "Agency that compounds with scale.",
    url: "/about-our-work",
    siteName: "Kiduna",
    type: "website",
    images: [{ url: "/og-home-design-system.png", width: 1659, height: 948, alt: "Kiduna — About Our Work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Our Work — Kiduna",
    description: "Agency that compounds with scale.",
    images: ["/og-home-design-system.png"],
  },
};

const dimensions = [
  {
    number: "01",
    label: "Governance",
    title: "Everyone has a place in the circle.",
    copy: "Kiduna is governed entirely by its members. No founders, investors, executives, or platform stands above the membership, and capital cannot purchase a greater voice. Members shape the organization’s priorities, policies, resources, boundaries, and direction together—including the boundaries of collective authority: what the whole organization decides together, and what individuals, projects, teams, and smaller groups remain free to decide and do on their own behalf.",
  },
  {
    number: "02",
    label: "Technology",
    title: "Tools that make people more powerful.",
    copy: "Kiduna is building technology for shared intelligence and coordinated action without creating systems that reduce people to users, data, or audiences. Our tools help people strengthen relationships, extend each member’s reach, remain meaningfully informed without becoming overwhelmed, and turn intention into action—individually, in small groups, and as a collective. As the network grows more capable, it compounds the agency of the people within it: every member gains greater capacity to understand, decide, create, coordinate, and act.",
  },
  {
    number: "03",
    label: "Economy",
    title: "Value that circulates toward shared possibility.",
    copy: "Kiduna’s economy is designed to sustain the people, projects, and resources that give the organization life. We make contribution visible, support work the community values, and direct shared resources where they can create the greatest benefit and expand the collective’s capacity to act. Economic value is converted into agency: compensating contributors, widening participation, strengthening shared capabilities, and giving members the resources to build the world we want.",
  },
  {
    number: "04",
    label: "Culture",
    title: "Individual freedom. Collective power.",
    copy: "Culture turns many distinct ways of knowing, being, and creating into a greater capacity to act together. Our culture is grounded in curiosity, care, candor, consent, and creative courage—and in the freedom to pursue ideas, initiate work, form collaborations, and build in your own way, supported by an organization that connects people, coordinates resources, and amplifies their efforts. It invites people to bring their full intelligence, emotions, experience, creativity, and talents into relationship with others—to learn across difference, create what none of us could create alone, and experience belonging without surrendering individuality.",
  },
];

const milestones = [
  ["1993-1998", "The early web", "Founded HuskyLabs, built pioneering public and enterprise web systems, and helped shape the internet’s first commercial era."],
  ["1998–2005", "Markets and worlds", "Created patented financial-market infrastructure and founded a platform for massively multiplayer online games and early cloud computing."],
  ["2005–2017", "Public purpose and climate", "Led technology commercialization and public-sector transformation, then built big-data geomatics systems that made solar energy easier to model and deploy."],
  ["2017–today", "The agentic organization", "Explored blockchain, intelligent infrastructure, governance, culture, and agentic systems—bringing them together right here, right now, in Kiduna AI."],
];

const organizations = [
  {
    number: "01", role: "Builds and maintains", title: "Kiduna Club",
    copy: "Kiduna Club stewards the core intellectual property behind Kiduna. It develops, maintains, secures, and continually upgrades the software, protocols, orchestration, identity, governance, and economic infrastructure on which the ecosystem depends. Its responsibility is to keep the shared technology powerful, dependable, and evolving—while serving organizations that remain governed by their own members.",
  },
  {
    number: "02", role: "Aligns and challenges", title: "Kinship Intelligence Institute",
    copy: "The Kinship Intelligence Institute is an independent 501(c)(3) nonprofit public charity working to ensure the agentic era expands human, organizational, and ecological agency. Through research, ethics, policy, education, measurement, and public-interest deployment, it advances equitable access to intelligent technologies and aligns their incentives, governance, and behavior with the communities they serve and the living systems they affect. Success means technologies that expand human agency, strengthen collective capacity, and help individuals, communities, and ecosystems flourish.",
  },
  {
    number: "03", role: "Integrates and deploys", title: "Kinship Systems",
    copy: "Kinship Systems brings the work into governments, companies, nonprofits, healthcare systems, financial institutions, critical infrastructure, communities, and AI-native ventures. It combines custom development, agentic systems integration, strategy, coaching, and organizational transformation so that intelligent agents become part of a coherent operating model and cohesive culture.",
  },
  {
    number: "04", role: "Governs and publishes", title: "Kinship Agents DAO LLC",
    copy: "Kinship Agents DAO LLC is a member-governed decentralized autonomous organization chartered and licensed in the Republic of the Marshall Islands. It develops, governs, and publishes the Kinship Agency Protocol: decentralized, composable, and permissionless software connecting Kinship Intelligence, Kinship Media, compute, identity, access, provenance, attribution, and the programmatic distribution of commissions, royalties, and incentives. Through on-chain governance, it coordinates protocol upgrades, treasury stewardship, economic parameters, open-source development, and protocol tokens so the shared network can evolve without becoming controlled by a central platform.",
  },
];

export default function AboutOurWork() {
  return (
    <main className={styles.page} id="main">
      <SiteHeader />

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className="eyebrow"><span className="live-dot" aria-hidden="true" /> About our work</p>
          <h1>Agency that compounds<span>with scale.</span></h1>
          <p className={styles.heroLead}>Kinship Duna is designed to increase individual and collective agency by building organizations that become more capable as they grow while making every member more powerful, connected, and free.</p>
          <div className={styles.actions}>
            <a className="button button-primary" href="#kinship-duna">Meet Kinship Duna <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#catalyst">Meet the catalyst</a>
          </div>
        </div>

        <div className={styles.world} role="img" aria-label="Individual and collective agency expanding through organizations and ecosystems without concentrating control">
          <div className={styles.rays} aria-hidden="true" />
          <div className={`${styles.orbit} ${styles.orbitOne}`} />
          <div className={`${styles.orbit} ${styles.orbitTwo}`} />
          <div className={`${styles.orbit} ${styles.orbitThree}`} />
          <div className={`${styles.worldOrb} ${styles.individual}`}><span>INDIVIDUAL</span></div>
          <div className={`${styles.worldOrb} ${styles.organization}`}><span>ORGANIZATION</span></div>
          <div className={`${styles.worldOrb} ${styles.ecosystem}`}><span>ECOSYSTEM</span></div>
          <div className={`${styles.movingOrbit} ${styles.mint}`} aria-hidden="true"><i /></div>
          <div className={`${styles.movingOrbit} ${styles.goldOrb}`} aria-hidden="true"><i /></div>
          <div className={`${styles.movingOrbit} ${styles.sky}`} aria-hidden="true"><i /></div>
          <div className={`${styles.movingOrbit} ${styles.violet}`} aria-hidden="true"><i /></div>
          <div className={styles.worldCenter}><Image src="/kiduna-mark.svg" alt="" width={80} height={80} /></div>
        </div>
      </section>

      <section className={styles.signalStrip} aria-label="Kinship Duna commitments">
        <div><span>01</span><strong>100% member-governed</strong></div>
        <div><span>02</span><strong>Real legal standing</strong></div>
        <div><span>03</span><strong>Agency at every scale</strong></div>
        <div><span>04</span><strong>Software as big as the world</strong></div>
      </section>

      <section className={styles.dunaSection} id="kinship-duna">
        <div className={styles.sectionIntro}>
          <div><p className="eyebrow">About the ecosystem</p><h2>An organization owned and shaped<span>by the collective.</span></h2></div>
          <div className={styles.introCopy}>
            <p>Kinship Duna—shortened to Kiduna—is a decentralized unincorporated nonprofit association registered with the West Virginia Secretary of State under the West Virginia DUNA Act, Organization ID 628407.</p>
            <p>Our purpose is to help our members design, build, capitalize, launch, and scale organizations of their own—giving people the foundations they need to turn what they care about into meaningful, sustained action in the world.</p>
            <p>Its legal form makes that possible. Kiduna brings governance, technology, economy, and culture into one living system designed to expand human agency. Governance gives members real authority. Technology turns shared purpose into coordinated action. An economy directs resources toward what the community values and rewards the people whose contributions bring it to life. Culture shapes how people meet, create, cooperate, learn, and grow together.</p>
            <p>Each part depends on the others. Governance without useful tools can’t make a difference in the world. Technology without shared authority concentrates power. An economy without an animating culture becomes transactional, while culture without resources struggles to endure. Composed together, they create the conditions for people to build organizations that are capable, connected, and free—organizations their members can own, shape, govern, and grow as equals.</p>
          </div>
        </div>

        <div className={styles.dimensionGrid}>
          {dimensions.map((item) => <article key={item.number}><span>{item.number}</span><p className={styles.dimensionLabel}>{item.label}</p><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>

        <aside className={styles.horizon}>
          <p>Together, these four dimensions point toward Kiduna’s long horizon: a living ecosystem of people, projects, communities, intelligent allies, and legally capable organizations coordinating across any distance without diminishing individual or collective agency.</p>
          <strong>The whole world, coordinated, connected, and free.</strong>
        </aside>

      </section>

      <section className={styles.catalystSection} id="catalyst">
        <div className={styles.catalystHeading}>
          <p className="eyebrow">About the founder · David Levine</p>
          <h2>Thirty Years to Build<span>One Thing.</span></h2>
          <div className={styles.founderPortrait}>
            <Image src="/david-levine-headshot.png" alt="David Levine seated on a staircase" width={1600} height={1067} sizes="(max-width: 1100px) 82vw, 34vw" />
          </div>
        </div>
        <div className={styles.catalystBody}>
          <p className={styles.lead}>I’ve spent more than three decades building internet companies, platforms, and technologies while searching for something that grew ever more elusive: a way to unite purpose, prosperity, and people while protecting, preserving, and revitalizing our planetary ecosystem.</p>
          <p>My work began at the birth of the commercial web. I founded one of the first web development companies, presented at the first International Conference on the World Wide Web at CERN in 1994, and wrote one of the earliest books on the Java programming language. Since then, I’ve built and patented technologies for financial markets, massively multiplayer online games, renewable energy, geospatial intelligence, decentralized infrastructure, and agentic AI.</p>
          <p>Along the way I found extraordinary mentors, developed powerful platforms, led movements, and worked across government, business, science, media, and civil society—from DARPA and NASA to IBM, Sony, GE, major financial institutions, global brands, nonprofits, and local communities. Each chapter revealed another part of the same problem.</p>
          <p>Technology could amplify action, but too often turned human attention, relationships, and behavior into resources to extract, manipulate, and monetize. Economics could create abundance, but too often concentrated its benefits in the hands of a few. Governance could establish authority, but often placed it beyond the reach of the people that lived with its consequences. Culture could create meaning and belonging, but also polarized, alienated, and dehumanized. Each of these disciplines holds an essential part of the answer, but none can address the challenges we face as a society alone.</p>
          <p>That journey led to Kinship Duna—the genesis DUNA—and to Kiduna, the agentic software system that supports it. Enabled by the West Virginia DUNA Act, we can now build internet-native organizations with real legal standing, member governance, intelligent allies, and economies designed to help people and ecosystems flourish together.</p>
          <p>I’m here as a catalyst, not shareholder, executive, director, or owner. My role is to clarify the initial purpose, assemble the technology and legal foundations, gather the first participants, and help carry the organization into motion. The effort becomes real only when members congregate, govern, create, build, organize, challenge, and make Kiduna their own.</p>
          <p className={styles.invitation}>To me, this is not another project or product launch. It is an invitation to co-create the next chapter of civilization itself.</p>
        </div>
        <div className={styles.careerLine}>{milestones.map(([year, title, copy]) => <article key={year}><span>{year}</span><strong>{title}</strong><p>{copy}</p></article>)}</div>
        <div className={styles.catalystLinks}><a href="https://www.linkedin.com/in/motodave" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="mailto:david@kiduna.ai">david@kiduna.ai <span aria-hidden="true">→</span></a></div>
      </section>

      <section className={styles.loveSection}>
        <aside className={styles.loveCallout}>
          <div className={styles.loveMark}><Image src="/kiduna-mark.svg" alt="" width={90} height={90} /></div>
          <div><p className="eyebrow">The software embodiment of love</p><h2>Coordinate everything.<span>Control no one.</span></h2><p>Love is not an ornament added after the system is built. Love is the foundation. Love is what Kiduna does by recognizing every person as whole, protecting the boundaries that make love possible, connecting actions to relationships and consequences, sharing authority, rewarding contribution, preserving the freedom to choose, and supporting every part of the living system to flourish among the others.</p></div>
        </aside>
      </section>

      <section className={styles.relatedSection} id="related-organizations">
        <div className={styles.sectionIntro}>
          <div><p className="eyebrow">The Infrastructure of Agency</p><h2>Built to support the people<span>who rise to the moment.</span></h2></div>
          <div className={styles.introCopy}>
            <p>Kinship Duna and the wider ecosystem continually evolve through the work of our members. Together, we design, develop, and deploy new capabilities, worlds, and experiences that respond to emerging needs, challenges, and possibilities.</p>
            <p>Four supporting organizations provide distinct forms of stewardship—advancing the core technology, safeguarding its alignment, bringing its capabilities into practice, and governing the shared protocol. Together, they keep the ecosystem capable, stable, coherent, and powerfully present, giving member-governed, decentralized online organizations the infrastructure they need to fulfill their missions, adapt as circumstances change, and rise with the courage and power the moment demands.</p>
          </div>
        </div>
        <div className={styles.organizationMap}>
          <div className={styles.mapCenter}><Image src="/kiduna-mark.svg" alt="" width={76} height={76} /><span>Kinship Duna</span><strong>Member-governed ecosystem</strong></div>
          <div className={styles.organizationList}>{organizations.map((item) => <article className={styles.organizationCard} key={item.number}><span className={styles.organizationNumber}>{item.number}</span><div><p className={styles.organizationRole}>{item.role}</p><h3>{item.title}</h3></div><p>{item.copy}</p></article>)}</div>
        </div>
      </section>

      <section className={styles.closing}>
        <p className="eyebrow">Acting together for the benefit of all.</p>
        <h2>Software as big as the world.</h2>
        <p>Bring a purpose, a body of wisdom, a community, a capability, or just your curiosity, wonder, and openness to possibility. Become a member. Govern, organize, create, and build. Design the world you want to live in with the people you trust to make it real.</p>
        <div className={styles.closingActions}><Link className="button button-primary" href="/#early-access">Request early access <span aria-hidden="true">→</span></Link><Link className="text-link" href="/nightpaper">Read the Nightpaper</Link></div>
      </section>

      <footer className={styles.footer}><Image src="/kiduna-mark.svg" alt="" width={34} height={34} /><p>© 2026 Kinship Duna, WV Org ID 628407. All Rights Reserved. Kiduna<sup>™</sup> is a trademark of Kiduna Club.</p><a href="mailto:hello@kiduna.ai">hello@kiduna.ai</a></footer>
    </main>
  );
}
