import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Grow With Us — Kiduna",
  description:
    "Learn how Compute, member-governed treasuries, and contributor roles help value circulate through Kiduna organizations.",
  alternates: { canonical: "/grow-with-us" },
  openGraph: {
    title: "Grow With Us — Kiduna",
    description: "Build value. Advance the mission. Share the gains.",
    url: "/grow-with-us",
    siteName: "Kiduna",
    type: "website",
    images: [{
      url: "/og/grow-with-us.png",
      width: 1200,
      height: 630,
      alt: "Kiduna — Grow With Us: Build value. Advance the mission. Share the gains.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow With Us — Kiduna",
    description: "Build value. Advance the mission. Share the gains.",
    images: ["/og/grow-with-us.png"],
  },
};

const flow = [
  {
    number: "01",
    title: "Money enters the treasury",
    paragraphs: [
      "Each organization can issue its own form of local Compute: fungible units of capacity that people acquire to engage the organization’s intelligence, tools, storage, automations, and services. Local Compute can be purchased directly from an organization with US dollars or exchanged on secondary markets for USDC or KIDUNA, the ecosystem-wide form of Compute. Proceeds from an organization’s Compute sales enter its member-governed treasury.",
    ],
  },
  {
    number: "02",
    title: "Compute powers the work",
    paragraphs: [
      "Compute is consumed whenever members and allies use the organization’s capabilities. Each charge covers two components: the underlying cost of the resources consumed and an Agency Premium established by the organization. The underlying cost pays for the infrastructure and services required to perform the work. The Agency Premium reflects the additional value created by the organization’s knowledge, tools, relationships, coordination, purpose, and capabilities. That premium returns to the organization’s treasury.",
    ],
  },
  {
    number: "03",
    title: "Members allocate the gains",
    paragraphs: [
      "Members decide how treasury funds are used. They can establish transparent rules that compensate people according to their attributable contributions: organizers for the sustained activity generated through relationships they support, builders when their tools and agents are used, creators when people use or experience what they create, catalysts for bringing new work into being, and luminaries for providing a significant body of work.",
      "Members also establish budgets and direct resources toward the organization’s mission. A legally recognized organization can hire people, run payroll, fund programs, purchase property, enter agreements, own assets, make grants, and take other lawful actions in the world.",
    ],
  },
  {
    number: "04",
    title: "Members govern the economy",
    paragraphs: [
      "Members regulate the organization’s Compute economy. They determine how much of their local Compute is issued, what it can be used for, how the Agency Premium is calculated, what reserves the treasury maintains, and how proceeds are allocated.",
      "When demand for the organization’s capabilities grows, members may authorize the issuance and sale of additional Compute to fund more work. If Compute is available on decentralized exchanges, its market price is determined by buyers and sellers and can rise or fall with supply, demand, utility, and market conditions. New issuance raises funds only when buyers choose to purchase it; increasing supply can also reduce the market price.",
      "Governance can make Compute more useful, credible, and widely used, but it cannot guarantee appreciation. The purpose of Compute is to provide usable capacity and circulate resources through the organization—not to promise passive returns from other people’s work.",
    ],
  },
];

const roles = [
  {
    number: "01",
    title: "Catalyst",
    copy: "Bring a project, program, or organization into being. Catalysts clarify the initial purpose, gather the founding participants, assemble the necessary resources, and carry an emerging idea through formation and into motion.",
    result: "Start a movement that matters.",
  },
  {
    number: "02",
    title: "Organizer",
    copy: "Form and sustain the relationships that make collective action possible. Organizers bring people together around a shared purpose, help them find their place, and nurture the participation and activity that grow through the communities they support.",
    result: "Build a community with purpose and power.",
  },
  {
    number: "03",
    title: "Creator",
    copy: "Turn knowledge, imagination, and lived experience into living capabilities. Creators add wisdom, shape an organization’s presence, design its stories and experiences, train its allies, and create the instructions, media, methods, and processes through which its purpose becomes real.",
    result: "Bring the work to life.",
  },
  {
    number: "04",
    title: "Builder",
    copy: "Create the apps, agents, tools, automations, systems, and infrastructure that expand what an organization can do. Builders make valuable work easier to perform, repeat, improve, share, and extend into entirely new forms of individual and collective agency.",
    result: "Expand the realm of possibility.",
  },
  {
    number: "05",
    title: "Luminary",
    copy: "Contribute a defining work, body of wisdom, creative practice, or deep intellectual grounding around which a collective can form and grow. Luminaries may be supported through project budgets, royalties, repayment of development costs, or allocations established by the organization.",
    result: "Give the work depth and direction.",
  },
  {
    number: "06",
    title: "Sponsor",
    copy: "Provide agreed financial, computational, promotional, or other support to a Realm, Source, Ally, Actor, or other eligible recipient. Sponsors may pay for compute, provide Resources such as Rewards or Coupons, fund activity, or offer other agreed value. Every sponsorship follows the receiving Realm’s rules and the terms of the agreement.",
    result: "Support participation and possibility.",
  },
];

const governance = [
  ["01", "Equal standing", "Your membership carries the same governing authority as everyone else’s."],
  ["02", "Shared treasury", "Resources are held for the organization and allocated according to the priorities of the members."],
  ["03", "Visible decisions", "Budgets, authority, consent, and provenance are transparent, and remain connected to authorized actions."],
  ["04", "Legal capacity", "DUNA registration with a public office gives the collective a legal body capable of acting beyond the screen and into the world."],
];

const comparisons = [
  [
    "You enter as a user, creator, seller, developer, or group under terms established, changed, and enforced by a platform owner.",
    "You participate as an equal member governing the organizations you form and join. Neither capital nor popularity can gain a bigger voice.",
  ],
  [
    "All users contribute the attention, relationships, data, creativity, and activity that make the platform valuable, yet only a select few can earn a meaningful income. Fees, commissions, eligibility rules, ranking systems, and shifting monetization policies determine who gets paid and how much.",
    "Members establish transparent ways to compensate people for the work they perform and the value they directly contribute. Earnings circulate as shared resources and individual compensation through member-governed treasuries instead of being extracted by an outside ownership class.",
  ],
  [
    "Growth compounds the platform’s network, data, revenue, and market value. The platform extracts the lion’s share of the value to benefit the interests of the owners and executives, subordinating the interests of users.",
    "Growth can compound the organization’s capabilities, reserves, assets, reach, and ability to advance its mission—while creating greater economic opportunity for the members and contributors who make that growth possible.",
  ],
  [
    "Your access, audience, income, community, and mission depend on infrastructure you do not control. Visibility can fall, terms can change, costs can rise, and participation can be restricted whenever the platform’s commercial or regulatory priorities shift.",
    "Each organization has its own governance, treasury, relationships, memory, and legal standing. Members can create new projects, programs, communities, alliances, and movements; decide how formally to organize; and grow as large or remain as intimate as their purpose requires.",
  ],
  [
    "Algorithms, feeds, moderation systems, advertising models, and platform policies are designed to advance corporate priorities. The people living and working inside these systems have little power to inspect, alter, or govern them.",
    "Members shape the collective intelligence around them: its wisdom, instructions, intelligent allies, automations, permissions, governance, and use of resources. The system can evolve with the people it serves because those people share the authority to shape it.",
  ],
];

export default function GrowWithUs() {
  return (
    <main className="grow-page" id="main">
      <SiteHeader />

      <section className="grow-hero">
        <div className="grow-hero-copy">
          <p className="eyebrow"><span className="live-dot" aria-hidden="true" /> Grow with us</p>
          <h1>Build value.<span>Advance the mission.</span><em>Share the gains.</em></h1>
          <p className="grow-hero-lead">Kiduna organizations create and compound value, then use the gains to strengthen the mission and compensate the people whose work moves it forward. Members govern shared treasuries, direct resources toward the work, are paid for the work they perform and the value they directly contribute, and participate as equals in organizations with real legal standing.</p>
          <div className="grow-actions">
            <Link className="button button-primary" href="/#early-access">Request early access <span aria-hidden="true">→</span></Link>
            <a className="text-link" href="#compute">Follow the flow</a>
          </div>
        </div>

        <div className="grow-economy-orbit" role="img" aria-label="Value circulates between members, shared resources, collective work, and value">
          <div className="grow-orbit grow-orbit-outer" />
          <div className="grow-orbit grow-orbit-inner" />
          <div className="grow-flow-line grow-flow-one" />
          <div className="grow-flow-line grow-flow-two" />
          <div className="grow-flow-dot grow-flow-dot-one" />
          <div className="grow-flow-dot grow-flow-dot-two" />
          <div className="grow-economy-node grow-node-members"><span>01</span><strong>Members</strong></div>
          <div className="grow-economy-node grow-node-resources"><span>02</span><strong>Resources</strong></div>
          <div className="grow-economy-node grow-node-work"><span>03</span><strong>Work</strong></div>
          <div className="grow-economy-node grow-node-value"><span>04</span><strong>Value</strong></div>
          <div className="grow-economy-center"><Image src="/kiduna-mark.svg" alt="" width={78} height={78} /></div>
        </div>
      </section>

      <section className="grow-signal-strip" aria-label="Principles of the Kiduna economy">
        <div><span>01</span><strong>Earn through contribution</strong></div>
        <div><span>02</span><strong>Govern as equals</strong></div>
        <div><span>03</span><strong>Put resources to work</strong></div>
        <div><span>04</span><strong>Act with legal standing</strong></div>
      </section>

      <section className="grow-compute" id="compute">
        <div className="grow-section-intro">
          <div><p className="eyebrow">The Compute economy</p><h2>Money enters a treasury.<em>Compute puts it to work.</em></h2></div>
          <p>Compute is prepaid capacity for intelligence, agents, tools, storage, automation, and action. It is not purchased for status or control. Organizations acquire and allocate Compute so people and allies can accomplish useful work together.</p>
        </div>

        <div className="grow-flow-grid">
          {flow.map((step, index) => (
            <div className="grow-flow-item" key={step.number}>
              <article>
                <span className="grow-flow-index">{step.number}</span>
                <h3>{step.title}</h3>
                <div className="grow-flow-copy">{step.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              </article>
              {index < flow.length - 1 && <div className="grow-flow-arrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>

        <aside className="grow-extraction">
          <span>Freedom from extraction</span>
          <div>
            <p>Kiduna organizations are legal entities that can earn revenue, build reserves, grow assets, and create substantial economic value. What they cannot do is distribute profits to outside investors, owners, or shareholders simply because they supplied capital. Without an external ownership class extracting the surplus, more of the value created can remain with the organization to compensate the people who contribute, strengthen its shared capacities, and advance the purpose for which it was formed.</p>
            <p>This makes self-regulation fundamental. Individuals regulate how they participate and apply their agency. Members collectively regulate the organization’s economy, permissions, priorities, and conduct. Organizations, in turn, participate within an ecosystem that establishes shared standards, accountability, and safeguards. Agency is connected at every level: personal choice, collective governance, and ecosystem-wide responsibility reinforcing one another.</p>
            <p>The result is an economy in which value circulates toward contribution and purpose rather than being extracted through ownership.</p>
          </div>
        </aside>
      </section>

      <section className="grow-roles">
        <div className="grow-roles-intro">
          <p className="eyebrow">Play your part</p>
          <h2>Do what moves you.<em>Share in what grows.</em></h2>
          <p>This is not work handed down by a management class. Members choose how they want to contribute across the six contribution roles and shape the work together. Every organization establishes transparent ways to recognize, support, and reward the people whose energy, relationships, ideas, creations, capabilities, and support bring the work to life.</p>
        </div>
        <div className="grow-roles-grid">
          {roles.map((role, index) => (
            <article className={roles.length % 2 === 1 && index === roles.length - 1 ? "grow-role-card grow-role-card-wide" : "grow-role-card"} key={role.number}>
              <span>{role.number}</span><h3>{role.title}</h3><p>{role.copy}</p><strong>{role.result}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="grow-governance">
        <div className="grow-governance-copy">
          <p className="eyebrow">Member-governed by design</p>
          <h2>Your organization belongs<em>to its members.</em></h2>
          <p>Kiduna organizations are not records in a database or pages on a platform. They are member-governed collectives that can hold resources, enter agreements, earn revenue, pay contributors, own assets, accept responsibility, and continue through changes in membership, focus, circumstances, and direction.</p>
          <p>Every member participates on equal footing. Capital cannot purchase a bigger voice. Members decide how capital is raised, how funds in the treasury are allocated, which projects receive financial support, how contributors are compensated, and the limits, boundaries, and guardrails of collective action.</p>
        </div>
        <div className="grow-governance-points">
          {governance.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="grow-comparison">
        <div className="grow-section-intro">
          <div><p className="eyebrow">A different economic relationship</p><h2>Build on Big Tech—or<em>belong to something bigger.</em></h2></div>
          <p>Big Tech platforms can provide reach, but you enter them as a “user”. The platform controls the rules, access, data, visibility, and economics—often according to incentives at cross-purposes with yours. Kiduna is designed so people and organizations can retain their agency, govern themselves, shape their culture, and direct the value they create toward contributors and shared purpose.</p>
        </div>
        <div className="grow-comparison-table" role="table" aria-label="Big Tech platforms compared with Kiduna organizations">
          <div className="grow-comparison-row grow-comparison-head" role="row"><span role="columnheader">Big Tech platform</span><span role="columnheader">Kiduna organization</span></div>
          {comparisons.map(([platform, kiduna]) => (
            <div className="grow-comparison-row" role="row" key={platform}>
              <p role="cell">{platform}</p><p role="cell">{kiduna}</p>
            </div>
          ))}
        </div>
        <aside className="grow-value-callout">
          <p className="eyebrow">Purpose over profits</p>
          <h2>Big Tech extracts value by diminishing your agency.<em>Kiduna creates value by expanding it.</em></h2>
          <p>Kiduna begins with a different economic premise: the value generated by an organization should strengthen its purpose and compensate its contributors—not enrich an outside platform owner. When less value is extracted by an intermediary, more can flow to the people who organize, create, build, and sustain what the organization accomplishes.</p>
        </aside>
      </section>

      <section className="grow-closing">
        <p className="eyebrow">Grow with us</p>
        <h2>Put your good where<em>it does the most.</em></h2>
        <p>We’re beginning with a small number of people, projects, and organizations ready to explore and expand the frontiers of individual and collective agency.</p>
        <div className="grow-closing-actions">
          <Link className="button button-primary" href="/#early-access">Request early access <span aria-hidden="true">→</span></Link>
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
