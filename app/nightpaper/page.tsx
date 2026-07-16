import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/print-button";
import SiteHeader from "@/components/site-header";
import styles from "./nightpaper.module.css";

export const metadata: Metadata = {
  title: "The Genesis Nightpaper — Kiduna",
  description:
    "The Kidunaverse: A New Architecture for Agentic Civilization. The Genesis Nightpaper by David Levine.",
  alternates: { canonical: "/nightpaper" },
  openGraph: {
    title: "The Kidunaverse: A New Architecture for Agentic Civilization",
    description: "Agency is life. We built a society that trades agency for scale. Here is a technology that provides both.",
    url: "/nightpaper",
    siteName: "Kiduna",
    type: "article",
    publishedTime: "2026-07-01T00:00:00.000Z",
    authors: ["David Levine"],
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Kiduna — The Agentic Internet Starts Here" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Genesis Nightpaper — Kiduna",
    description: "A new architecture for agentic civilization.",
    images: ["/og.png"],
  },
};

function AgencyNestsFigure() {
  return (
    <figure className={styles.figure}>
      <div className={`${styles.figureCanvas} ${styles.nests}`} aria-label="Agency nested across cells, organisms, organizations, and ecosystems">
        <div className={styles.nestCell}><strong>Cell</strong><span>senses · acts</span></div>
        <div className={styles.nestOrganism}><strong>Organism</strong><span>cells, still whole</span></div>
        <div className={styles.nestOrganization}><strong>Organization</strong><span>people, still whole</span></div>
        <span className={styles.ecosystemLabel}>Ecosystem</span>
      </div>
      <figcaption><span>Figure 1</span> Agency nests. Healthy systems coordinate their parts without hollowing them out: the cell keeps its membrane, the person keeps their choices.</figcaption>
    </figure>
  );
}

function AgencyAgesFigure() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureCanvas}>
        <svg className={styles.chart} viewBox="0 0 720 300" role="img" aria-label="The Kinship Age branches after writing into a declining Institutional Age and a rising Agentic Age">
          <line x1="72" y1="30" x2="72" y2="248" />
          <line x1="72" y1="248" x2="675" y2="248" />
          <path className={styles.kinshipLine} d="M84 62 C160 65 204 76 252 106" />
          <path className={styles.institutionLine} d="M252 106 C350 160 440 220 628 232" />
          <path className={styles.agenticLine} d="M252 106 C360 90 480 66 658 48" />
          <circle className={styles.writingPoint} cx="252" cy="106" r="5" />
          <circle className={styles.agenticPoint} cx="658" cy="48" r="5" />
          <circle className={styles.institutionPoint} cx="628" cy="232" r="5" />
          <text x="114" y="50">Kinship Age</text>
          <text x="238" y="91">writing</text>
          <text x="492" y="60">Agentic Age</text>
          <text x="423" y="214">Institutional Age</text>
          <text className={styles.axisText} x="347" y="282">scale of coordination →</text>
          <text className={styles.axisText} x="25" y="175" transform="rotate(-90 25 175)">individual agency</text>
        </svg>
      </div>
      <figcaption><span>Figure 2</span> The old trade: more coordination, less agency. For five thousand years the curve only bent one way. The Agentic Age is the first credible chance to bend it back - scale <em>and</em> agency, together.</figcaption>
    </figure>
  );
}

function AllyFigure() {
  const steps = [
    ["You", "the Source"],
    ["Your Ally", "instructed only by you"],
    ["Their Ally", "instructed only by them"],
    ["Them", "the Source"],
  ];
  return (
    <figure className={styles.figure}>
      <div className={`${styles.figureCanvas} ${styles.allyFlow}`} aria-label="You instruct your ally, which coordinates with another ally representing another person">
        {steps.map(([title, note], index) => (
          <div className={styles.allyStep} key={title}>
            <div><strong>{title}</strong><span>{note}</span></div>
            {index < steps.length - 1 && <b aria-hidden="true">→</b>}
          </div>
        ))}
      </div>
      <figcaption><span>Figure 3</span> The one rule that changes everything: instruction flows only from the Source. Everything anyone else says is context, never command.</figcaption>
    </figure>
  );
}

function MeshFigure() {
  return (
    <figure className={styles.figure}>
      <div className={`${styles.figureCanvas} ${styles.meshComparison}`}>
        <div className={styles.networkPanel}>
          <svg viewBox="0 0 300 180" role="img" aria-label="A platform with one center and many dependents">
            <g className={styles.platformNetwork}>
              <line x1="150" y1="90" x2="55" y2="35" /><line x1="150" y1="90" x2="245" y2="30" />
              <line x1="150" y1="90" x2="38" y2="110" /><line x1="150" y1="90" x2="262" y2="112" />
              <line x1="150" y1="90" x2="85" y2="158" /><line x1="150" y1="90" x2="220" y2="158" />
              <circle cx="150" cy="90" r="19" /><circle cx="55" cy="35" r="7" /><circle cx="245" cy="30" r="7" />
              <circle cx="38" cy="110" r="7" /><circle cx="262" cy="112" r="7" /><circle cx="85" cy="158" r="7" /><circle cx="220" cy="158" r="7" />
            </g>
          </svg>
          <span>the platform: one center, many dependents</span>
        </div>
        <div className={styles.networkPanel}>
          <svg viewBox="0 0 300 180" role="img" aria-label="A mesh of ecosystems as whole peers">
            <g className={styles.meshNetwork}>
              <line x1="60" y1="45" x2="155" y2="28" /><line x1="60" y1="45" x2="80" y2="138" />
              <line x1="60" y1="45" x2="235" y2="78" /><line x1="155" y1="28" x2="235" y2="78" />
              <line x1="155" y1="28" x2="80" y2="138" /><line x1="155" y1="28" x2="176" y2="150" />
              <line x1="235" y1="78" x2="80" y2="138" /><line x1="235" y1="78" x2="176" y2="150" />
              <line x1="80" y1="138" x2="176" y2="150" />
              <circle cx="60" cy="45" r="13" /><circle cx="155" cy="28" r="11" /><circle cx="235" cy="78" r="12" />
              <circle cx="80" cy="138" r="11" /><circle cx="176" cy="150" r="13" />
            </g>
          </svg>
          <span>the mesh: ecosystems as peers, each whole</span>
        </div>
      </div>
      <figcaption><span>Figure 4</span> Two shapes for the same technology. Where intelligence pools in a center, agency drains toward it. The Kidunaverse is built as the right-hand shape, on purpose, at the protocol level.</figcaption>
    </figure>
  );
}

export default function NightpaperPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <header className={styles.hero}>
        <div className={styles.heroMeta}>Genesis Nightpaper · v0.2 · July 2026</div>
        <h1>The Kidunaverse: <em>A New Architecture for Agentic Civilization</em></h1>
        <p className={styles.deck}>Agency is life. We built a society that trades agency for scale. Here is a technology that provides both.</p>
        <div className={styles.bylineRow}>
          <p>David Levine · Founder &amp; President, Kinship Intelligence Institute</p>
          <PrintButton />
        </div>
      </header>

      <div className={styles.readingLayout}>
        <aside className={styles.toc} aria-label="Nightpaper contents">
          <p>Contents</p>
          <ol>
            <li><a href="#agency">Agency all the way down</a></li>
            <li><a href="#ages">Three ages measured by agency</a></li>
            <li><a href="#technology">The technology, in plain language</a></li>
            <li><a href="#genesis">The genesis</a></li>
            <li><a href="#invitation">The invitation</a></li>
          </ol>
          <Link href="/#early-access">Request early access <span aria-hidden="true">→</span></Link>
        </aside>

        <article className={styles.article}>
          <section id="agency" className={styles.section}>
            <p className={styles.sectionNumber}>I.</p>
            <h2>Agency all the way down</h2>
            <p className={styles.lede}><strong>Politics is composed of cells.</strong></p>
            <p>A single bacterium, too simple to have anything we&apos;d call a mind, senses a sugar gradient in the water around it and swims toward the food. It senses a toxin and swims away. Nobody tells it to. Nothing outside it decides for it. It carries its own sensing, its own deciding, and its own acting inside its own membrane - and that little loop, sense-decide-act, run for its own sake, is agency. Agency is the signature of being alive.</p>
            <p>The pattern repeats at every scale. An organism is billions of cells, each with local agency, coordinated into something that can want waffles for breakfast. A forest is organisms coordinating - nutrients traded through fungal networks, warnings passed through chemistry - without any tree, sparrow, or fox being demoted to just a part. Each remains whole.</p>
            <p>An ecosystem holds all of its members in balance without even the illusion of an executive function. Life&apos;s trick, refined over about four billion years, is that <em>coordination doesn&apos;t have to diminish the agency of the elements being coordinated.</em> The cell keeps its membrane. The tree keeps its roots. The sparrow keeps its wings. The fox keeps its cunning. The system works because its parts stay whole.</p>
            <AgencyNestsFigure />
            <p className={styles.statement}>This paper presents Kiduna, a new sociotechnical architecture that enables people to coordinate at scale without diminishing the agency of individuals, organizations, or ecosystems.</p>
          </section>

          <section id="ages" className={styles.section}>
            <p className={styles.sectionNumber}>II.</p>
            <h2>Three ages measured by agency</h2>
            <p>We usually cut human history by tools - stone age, iron age, agricultural, industrial, information. That&apos;s a fine way to organize a museum, but not as effective when describing the ages of humanity. Tools are what we hold; they don&apos;t represent who we are. Let&apos;s measure instead the actual engine of life, agency. If you measure agency - who senses, who decides, who acts, and how far the consequences of a decision extend from the person who made it - you&apos;ll see that human history is an arc traversing through three ages. Two of them we&apos;ve experienced fully, the third has just begun.</p>

            <h3>The Kinship Age <span>roughly 300,000 years</span></h3>
            <p>For nearly all of human existence, coordination ran through kinship systems. Ceremony, ritual, and storytelling weren&apos;t just for entertainment; they were the core technology of society. They transmitted culture across generations without writing. They encoded identity, accountability, authority, obligations, commitments, relationships, and reciprocity: who owes what to whom, who shares when the hunt fails, who takes in whose children. Kinship systems were governance, insurance, education, and memory, all at once - and they ran on relationships between people who recognized one another by countenance, posture, presence, and voice.</p>
            <p>Agency in the Kinship Age was local and intact. If a decision touched you, you were probably sitting in the council circle when the decision was made - you could speak, object, walk out, consent, be seen. The distance between authority and effect was the distance across a fire. The limitation was scale: the whole apparatus lived in human memory and human presence. Kinship was effective at coordinating bands, clans, villages and confederacies, but it could not effectively coordinate a million strangers.</p>

            <h3>The Institutional Age <span>from writing to now</span></h3>
            <p>Writing changed the equation. Once obligation could be recorded instead of remembered, coordination no longer required presence. Ledgers, laws, priesthoods, empires, corporations, bureaucracies, platforms: each is a machine for coordinating strangers at a scale kinship systems could never achieve - and each works the same way. You surrender a piece of your agency to the institution, the institution pools the surrendered pieces and acts as your proxy, at a distance, according to priorities, procedures, and timelines you do not fully control.</p>
            <AgencyAgesFigure />
            <p>This is not a conspiracy. For most of recorded history, it has been the only practical way to coordinate at scale. But institutions come with a cost. Authority externalizes - it moves out of persons and into offices, titles, records, and files. The distance between authority and effect stretches from across a council fire to across an ocean: decisions that shape your town are made by people who will never see it. And agency is diminished. The rich texture of what a person could sense, decide, and perform gets compressed into the few slots the institution can process - a vote, a purchase, a form, a comment, a like. The information age, for all its noise about empowerment, perfected the pattern with “social” platforms that flattened three hundred thousand years of human relationship into engagement metrics, while calling the result “connection.”</p>
            <blockquote>For about nine thousand years, every gain in the scale of human coordination was paid for in individual agency. We stopped noticing the price because relatively few people alive have ever fully experienced the alternative.</blockquote>

            <h3>The Agentic Age <span>now possible</span></h3>
            <p>All of that is about to change. Agency - the capacity to sense, understand, and act - can now run in software. And for the first time, the capacity for agency doesn&apos;t have to pool in the center the way institutional authority does.</p>
            <p>Agency can be decentralized, <em>located in the relationships between individuals, organizations, and ecosystems.</em> An intelligent agent can belong to you, answer only to you, know what you&apos;ve chosen to share with it, and act on your behalf across the whole world&apos;s networks while coordinating with millions of other agents, each belonging to some other whole person, organization, or ecosystem, at planetary scale. What matters most is not the nodes but the edges - not entities in isolation, but the relationships through which agency emerges.</p>
            <p>Intelligent agents make coordination possible at an even greater scale than the fully deterministic systems of the Institutional Age, with the Agentic Age holding agency in the relational field. This model carries culture, obligation, and reciprocity the way kinship systems carried them in the Kinship Age - through relationships - but recorded, portable, and enforceable at planetary scale.</p>
            <p>An Agentic Age centered on relational agency is not inevitable. The same intelligence, concentrated in centralized institutions rather than distributed through accountable relationships, could produce the opposite: mass surveillance with perfect memory, autonomous systems - including killing machines - that act without meaningful responsibility, and policy decisions imposed with all the distance of the Institutional Age and none of its friction.</p>
            <p>The stakes rise as software agents gain access to physical interfaces: machines, vehicles, drones, meters, signals, robots, energy systems, and infrastructure. <strong>Where agency is located will determine which future we get.</strong></p>
            <p>But relational agency cannot stop at the boundary of the individual human. People do not exist apart from the living systems that sustain them. Rivers, forests, watersheds, species, landscapes, and future generations are not merely resources or externalities; they are participants in the conditions of life. An architecture capable of coordinating civilization must therefore make room for their interests, limits, and continuance to be represented within the relationships where decisions are made.</p>
            <p>Agency should remain grounded in whole natural persons, but it must also extend through them into the wider web of life. A person may act as the accountable source of an agent, an organization may hold legal responsibility, and an ecosystem may define the larger field of obligation within which both operate. The system must be able to ask not only who authorized an action and who benefits from it, but what living relationships it affects, what it consumes, what it preserves, and what obligations it creates beyond the human parties immediately present.</p>
            <p>Locate agency in these nested relationships - person, organization, community, ecosystem - and bind every consequential action to accountable authority within them. Then the most dangerous forms of autonomous power become architecturally difficult rather than merely discouraged, while coordination can remain responsive to the whole living world it acts upon.</p>
            <p className={styles.statement}>This is not an ethical ornament added after the machinery is built. It is an architectural requirement of the Kidunaverse.</p>
          </section>

          <section id="technology" className={styles.section}>
            <p className={styles.sectionNumber}>III.</p>
            <h2>The technology, in plain language</h2>

            <h3>Your ally <span>agency, located in your relationships</span></h3>
            <p>Every member has one <strong>Ally</strong> - an intelligent agent that knows what you choose to share about your experiences, virtues, values, aspirations, and challenges, and works for you wherever you act and relate: with other allies, within applications, over email and messaging, on social media, in enterprise systems, and across the open web.</p>
            <p>What distinguishes an ally from personal assistants and enterprise agents is that every ally has exactly one Source - the natural person it represents - and every person has one ally. The Source alone can steer the ally: informing it, instructing it, granting its authority, and setting its boundaries. Everyone else can speak to it, ask questions, and make proposals, but nothing another person or agent says becomes a command. When you and I collaborate, the path is always: you → your ally ↔ my ally → me. Two whole people, each represented without being replaced.</p>
            <AllyFigure />
            <p>Four privacy levels govern everything you and your ally hold - <strong>public</strong> (anyone), <strong>private</strong> (visible, permission required), <strong>secret</strong> (undiscoverable without permission), and <strong>personal</strong> (you and your ally only, ever - not grantable, not for sale, no exceptions). Say “that&apos;s personal now” once and it binds everywhere, instantly. Relationships between people are primary: when you connect with someone, each of you states exactly what the other may see and use, and the system enforces your words.</p>

            <h3>The one boundary <span>intelligence proposes, code decides</span></h3>
            <p>Intelligent agents can be brilliant but fallible - they can be persuaded, confused, manipulated, even tricked. So we never let brilliance be the security model. Every consequential action in the Kidunaverse - every payment, vote, grant of access, every tool an agent touches - passes through one deterministic checkpoint that verifies who&apos;s asking, on whose authority, with what permissions, before anything executes. An ally can be as clever as you like; it cannot sweet-talk the boundary, because the boundary doesn&apos;t listen to talk. And when an organization votes on an action, members read a plain sentence that is <em>generated from the exact instruction that will run</em>, so the sentence and the action physically cannot disagree. Receipts that cannot lie. The significant actions that are truly yours - votes, signatures, extending trust to another person - are sealed by your own hand, a deliberate press-and-hold, marked clearly, and never delegated to anyone or anything.</p>

            <h3>Organizations that are real</h3>
            <p>Coordination needs containers, and ours are durable. A <strong>DUNA</strong> (Decentralized Unincorporated Nonprofit Association) is a member-owned organization with full legal standing - filed under West Virginia&apos;s DUNA law, with a registered ID, a treasury, and a rulebook its members write. Decisions happen in <strong>Forums</strong>, where proposals are debated and the algorithms guide the membership toward consensus. Proposals that pass are executed automatically and become standing policy. Thirty-one dunas were initially filed, including a health community, a member-owned law practice, a solar collective, veteran support, table games, festivals, mutual-aid networks, tourism, local commerce, public advocacy, home finance, and a mutual insurer. Each is the same machinery configured differently; each answers legally for what happens under its name.</p>
            <p>The missing piece is coherence. DUNAs bring governance, culture, technology, and economics into one system instead of treating them as separate layers managed by different platforms and institutions. The rules a community lives by, the values it carries, the tools it uses, and the way resources move can now reinforce one another. That makes coordination and orchestration legible, durable, and capable at any scale.</p>

            <h3>Money as resource, intelligence, and agency</h3>
            <p>Each duna creates its own economy around <strong>Compute</strong>: prepaid credits used to operate its intelligent agents. The underlying intelligence has a measurable raw cost - the price of the models, tools, infrastructure, and other services required to perform the work. The duna sets the price of Compute above that cost. The difference is the economic margin created by turning commodity machine intelligence into useful, accountable agency.</p>
            <p>That margin is not fixed by the Kidunaverse. Each duna decides its own multiple between the raw cost of intelligence and the price charged for Compute, according to its mission, operating costs, and the value its agents produce. A duna providing basic community services may keep the multiple low. A professional practice, commercial venture, or highly specialized agentic service may charge considerably more. The essential economic activity is the same: acquire intelligence at one price, organize it into trusted action, and sell that agency at a higher one.</p>
            <p>Each duna also defines the economic terms of membership. It may require a one-time purchase of Compute, a recurring monthly purchase, or the maintenance of a minimum balance. Kinship Duna currently requires a one-time purchase of $100 in Compute for lifetime membership. That is one configuration, not a network-wide rule. Every duna determines what membership costs, what rights it carries, and how much operating capacity members receive.</p>
            <p>The organization also governs the supply of its Compute. Members decide when additional Compute may be issued, under what conditions, and for what purpose. New issuance might fund growth, expand the treasury, reward contribution, subsidize access, or meet increased demand - but it happens according to the duna&apos;s standing policy, not at the discretion of a platform operator.</p>
            <p>The proceeds flow into the organization&apos;s treasury and are distributed according to rules the members establish. Those rules may pay for the underlying intelligence, compensate members for work, support shared infrastructure, fund projects, maintain reserves, reward lineage or sponsorship, or advance the duna&apos;s mission. Agreements can divide revenue automatically among the people and organizations entitled to it, with every allocation recorded and inspectable.</p>
            <p>Compute is therefore more than a meter for AI usage. It is the mechanism through which a community prices agency, defines membership, governs issuance, and directs the value its collective efforts create. The economic system belongs to the duna because the choices that shape it - price, access, supply, and distribution - remain under member governance.</p>

            <h3>A mesh, not an empire</h3>
            <p>The Kidunaverse isn&apos;t a company&apos;s platform. It&apos;s software anyone can run. Install a <strong>Kiduna Server</strong> and you&apos;ve created a living <strong>ecosystem</strong> with its own genesis account and its own copy of Ki, the genesis ally that welcomes, supports, and teaches everyone who arrives. Ecosystems connect to one another over the <strong>Kinship Agency Protocol</strong> into a single mesh, where running a server contributes capacity rather than enclosing territory, and where each new ecosystem is sponsored by an existing one into the network of identity, accountability, authority, and trust.</p>
            <p>Obligations that must be provable - who owns what, who decided what, where money moved - are anchored on a public blockchain; everything intimate stays private.</p>
            <p>Artifacts on the open internet - such as a website, a page, a video, a podcast, or a photograph - can be <strong>registered</strong>: bound to a real member and, through that member, to a legally accountable organization. Registration does not mean “trust this.” It means <em>an identifiable entity answers for it.</em> An unregistered artifact is not automatically dangerous; it is simply treated as a stranger.</p>
            <p>Domains can be registered as well. Registering a domain establishes who stands behind the namespace itself, so every site, service, page, and artifact published beneath it can inherit a verifiable chain of accountability. A registered domain does not certify that everything it contains is true or safe; it makes authorship, control, and responsibility legible. That gives people and agents a reliable basis for deciding how much confidence to place in anything originating there.</p>
            <p>Trust is a separate dimension. Registered and unregistered artifacts can each be trusted or untrusted, creating a simple matrix: known or unknown provenance on one axis, confidence in the counterparty on the other. Within that matrix, trust can be established at three levels - low, medium, or high - based on the strength of the evidence, the history of the relationship, the authority presented, and the risk of the action being proposed.</p>
            <MeshFigure />
            <p>That allows people and agents to coordinate safely without pretending that trust is binary. A low-confidence counterparty might be permitted to exchange public information. A medium-confidence one might collaborate within defined limits. A high-confidence one might be allowed to transact, access protected resources, or act with delegated authority. The level of coordination rises with the level of confidence, and the granularity of trust metrics can increase over time.</p>
            <p className={styles.statement}>That, at internet scale, is how you get safety without surveillance: not by watching everyone, and not by treating every stranger as a threat, but by making provenance visible, trust legible, and authority proportional to confidence.</p>

            <h3>One world to stand in <span>the Field</span></h3>
            <p>You experience all of this through one interface: <strong>the Field</strong> - a living, navigable world where everything you need is always at hand. Your organizations are places. Your projects are rooms that grow and evolve as the work progresses. A feed you follow is a box you can open, close, filter, mix, assess, and transform. Conversation with your ally rides on a heads-up display that comes forward when you need to focus and melts away when you don&apos;t, and whenever something genuinely needs you - a decision, a signature, a response - the action gains your attention, in the Field or in the conversation, never buried in a list of notifications and alerts.</p>
            <p>The Field is one continuous world, expressed through several surfaces designed for different places, devices, and modes of attention. <strong>Kiduna Live</strong> is the Field on your phone. <strong>Kiduna TV</strong> is the large screen in your den, a conference room, or behind the DJ booth at a festival. <strong>Kiduna Studio</strong> is the same Field on your computer, where you can upload media, build with collaborators you trust, and hand work to coding agents that return it with provenance attached. <strong>Kiduna Express</strong> rides in your browser, showing you what&apos;s registered - who answers for what - as you move through the ordinary web. Same world, four different experiences.</p>

            <h3>Keeping the human and agentic field clean</h3>
            <p>An agentic world could easily become manipulative, chaotic, coercive, combative, or contentious, so the system includes the <strong>Sentinel</strong> - a background function that watches the health of human and agentic relationships and gently steers them toward coherence over chaos, cohesion over coercion, cooperation over competition: the meeting where the quietest person is seen and heard; the agent nudged back from telling you only what you want to hear.</p>
            <p>You never see meters or scores. Likes, follower counts, rankings, streaks, and other forms of social quantification are absent from the Kidunaverse except where measurement serves a clear human purpose - such as physical health monitoring, games, or training - so that nobody is ranked, rated, or reduced to a number. When a relationship crosses a hard limit, the Sentinel stops guiding and brings in qualified human support.</p>
            <p className={styles.statement}>Health, here, means that people remain whole, relationships remain voluntary, and the system operates with integrity. That is not a feature at the edge of the design; it is the standard by which the entire design succeeds or fails.</p>
          </section>

          <section id="genesis" className={styles.section}>
            <p className={styles.sectionNumber}>IV.</p>
            <h2>The genesis</h2>
            <p>Every ecosystem needs an inception point. Ours is <strong>Kiduna</strong>, operated by <strong>Kinship Duna</strong> - the genesis organization, West Virginia Org ID 628407 - whose whole purpose is to build out this technology, train members for an agentic economy, and spin out the organizations that come next. Genesis means first, not authoritative: every duna has equal power, ecosystems are peers, and the only central registry anywhere in the design is a public office where [the agentic internet and the real world connect - reference WV Secretary of State]. The first thirty-one organizations were filed on July 2nd, 2026. The first members, founders, catalysts and luminaries - real people building real communities, from veterans&apos; services to family health to festivals of art, culture, and music - are already at work inside the Kidunaverse. Everything we build, the surfaces, the server, and the protocol ship, is open source. [We work together the way we believe the world should work: from the inside out, with our own tools, in the open - the whole specification, every decision and every reversal.] Sign up today at <Link href="/#early-access">kiduna.ai</Link>.</p>
          </section>

          <section id="invitation" className={`${styles.section} ${styles.epilogue}`}>
            <p className={styles.sectionNumber}>Epilogue</p>
            <h2>The invitation</h2>
            <p>Three hundred thousand years ago, belonging began the same way every time: someone already inside turned to someone outside and said, <em>come join us.</em> Not a broadcast. Not a signup funnel. Not a social media post. A person, vouching, by name.</p>
            <p>The Kidunaverse works the same way. Nobody joins through a form; you join through a <strong>Kinship Code</strong> - a unique invitation, made for you by someone who knows you, carrying their name and their organization&apos;s standing behind it. It&apos;s the oldest social technology we have, finally given infrastructure worthy of it.</p>
            <p>This paper is one of those invitations. If the age we&apos;ve described is one you&apos;d rather shape than inherit, someone will be glad to offer you a code.</p>
            <div className={styles.invitationCta}>
              <p>Shape the age rather than inherit it.</p>
              <Link href="/#early-access">Request early access <span aria-hidden="true">→</span></Link>
            </div>
          </section>

          <footer className={styles.paperFooter}>
            Genesis Nightpaper v0.2 · July 2026 · Kinship Duna (WV Org 628407) · The full technical record lives at <a href="https://kiduna.team">kiduna.team</a>, including the Technical Specification, the Technical White Paper, and the Kiduna Kit. Compute is prepaid usage credit for operating intelligent agents; it is not an investment, and nothing in this paper is an offer of securities or a promise of earnings. The stack ships under Apache 2.0; Kiduna<sup>™</sup> marks are licensed separately. © 2026 Kiduna Club, all rights reserved, patent pending.
          </footer>
        </article>
      </div>
    </main>
  );
}
