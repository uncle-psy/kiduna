import type { Metadata } from "next";
import Link from "next/link";
import PrintButton from "@/components/print-button";
import SiteHeader from "@/components/site-header";
import styles from "./nightpaper.module.css";

export const metadata: Metadata = {
  title: "The Genesis Nightpaper — Kiduna",
  description:
    "Kiduna: A New Architecture for Agentic Civilization. The Genesis Nightpaper by David Levine.",
  alternates: { canonical: "/nightpaper" },
  openGraph: {
    title: "Kiduna: A New Architecture for Agentic Civilization",
    description: "Agency is life. We built a society that trades agency for scale. Kiduna is a technology that provides collective agency at internet scale.",
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
      <div className={`${styles.figureImageFrame} ${styles.figureOneFrame}`}>
        <img
          className={styles.figureImage}
          src="/figure-1-agency-nests.png"
          width="1536"
          height="1024"
          alt="Figure 1, Agency nests: cells coordinate into organs, organs into organisms, people into organizations, and organizations into ecosystems, while agency remains intact at every scale."
        />
      </div>
      <figcaption><span>Figure 1</span> Agency nests. Life coordinates across scales without diminishing the life within. Kiduna follows the same pattern: people retain individual agency, organizations gain collective agency, and each remains distinct and retains capacity within the larger ecosystem.</figcaption>
    </figure>
  );
}

function AgencyAgesFigure() {
  return (
    <figure className={styles.figure}>
      <div className={styles.figureImageFrame}>
        <img
          className={styles.figureImage}
          src="/figure-2-institutional-tradeoff.png"
          width="1602"
          height="981"
          alt="The institutional tradeoff: as coordination scale increases from local relationships to mass platforms, individual agency decreases."
        />
      </div>
      <figcaption><span>Figure 2</span> The old trade: more coordination, less agency. For five thousand years the curve only bent one way. The Agentic Age is the first credible chance to bend it back - scale <em>and</em> agency, together.</figcaption>
    </figure>
  );
}

export default function NightpaperPage() {
  return (
    <main className={styles.page}>
      <SiteHeader />

      <header className={styles.hero}>
        <div className={styles.heroMeta}>Genesis Nightpaper · v0.3 · July 23, 2026 · 1:38 PM EDT</div>
        <h1>Kiduna: <em>A New Architecture for Agentic Civilization</em></h1>
        <p className={styles.deck}>Agency is life. We built a society that trades agency for scale. Kiduna is a technology that provides collective agency at internet scale.</p>
        <div className={styles.bylineRow}>
          <p>David Levine · Catalyst, Kinship Duna · david@kiduna.ai</p>
          <PrintButton />
        </div>
      </header>

      <div className={styles.readingLayout}>
        <aside className={styles.toc} aria-label="Nightpaper contents">
          <p>Contents</p>
          <ol>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#agency">Agency all the way down</a></li>
            <li><a href="#ages">Human history measured by agency</a></li>
            <li><a href="#architecture">The Architecture of Agency</a></li>
          </ol>
          <Link href="/#early-access">Request early access <span aria-hidden="true">→</span></Link>
        </aside>

        <article className={styles.article}>
          <section id="abstract" className={`${styles.section} ${styles.abstract}`}>
            <h2>Abstract</h2>
            <p>Agency is the capacity to sense, decide, and act. Individual agency allows a person to author their own life. Collective agency allows people to accomplish together what no individual could accomplish alone.</p>
            <p>The hard problem is preserving both. As organizations and societies grow, collective capacity usually increases by moving authority away from individuals and into centralized institutions. Organizations gain scale, but individuals lose control, context, and meaningful participation. A healthy collective should do the opposite: expand what people can do together without diminishing the individual agency of the people within it.</p>
            <p>Kiduna is a sociotechnical architecture designed to solve that problem. Each person directs intelligent Allies with explicit permissions and private information under their control. People and their allies form member-governed organizations that can make decisions, coordinate work, hold resources, and act with real-world legal standing. Deterministic systems verify identity, authority, privacy, provenance, and consent before consequential actions occur.</p>
            <p>These organizations connect as a distributed mesh rather than depending on a central platform. Identity, authority, decisions, and transactions can be independently verified, while personal and relational information remains private. Governance, culture, technology, and economics operate as parts of one coherent system.</p>
            <p>The result is collective agency at internet scale without the surrender of individual agency: people retain control over their own lives, relationships remain voluntary, and large-scale online organizations become capable of purposeful action in the world.</p>
          </section>

          <section id="agency" className={styles.section}>
            <p className={styles.sectionNumber}>I.</p>
            <h2>Agency all the way down</h2>
            <p className={styles.lede}><strong>Life is composed of cells.</strong></p>
            <p>A single bacterium, too simple to have anything we&apos;d call a mind, senses a sugar gradient in the water around it and swims toward the food. It senses a toxin and swims away. Nobody tells it to. Nothing outside it decides for it. It carries its own sensing, its own deciding, and its own acting inside its own membrane - and that little loop, sense-decide-act, run for its own sake, is agency. Agency is the signature of being alive.</p>
            <p>The pattern repeats at every scale. An organism is billions of cells, each with local agency, coordinated into something that wants waffles for breakfast. A forest is organisms coordinating: nutrients traded through fungal networks, warnings passed through chemistry, animals adapting to one another’s movements and needs. A flock of birds turns individual decisions into collective motion. A wolf pack hunts as one while each wolf remains independently lupine. No tree, sparrow, or fox is demoted to merely a component. Each remains a living participant in the larger system.</p>
            <p>An ecosystem holds its members in relationship without a central command. Life’s trick, refined over about four billion years, is that coordination does not require any diminishment of the agency being coordinated. The cell keeps its membrane. The tree keeps its roots. The sparrow keeps its wings. The fox keeps its cunning. Yet together they express capabilities none could possess alone, and the system works because the parts stay whole.</p>
            <AgencyNestsFigure />
            <p>Human societies have always attempted something similar: transforming individual agency into collective capacity. But unlike natural systems, human institutions often achieve coordination by concentrating authority and reducing the richness of individual agency into roles, permissions, records, and workflows. The person becomes the employee, the citizen, the customer, the account—the limited representation a system can process.</p>
            <p>The challenge is not creating coordination. Humans have always coordinated splendidly. The challenge is creating forms of collective agency where people can contribute to something larger without becoming smaller in the process.</p>
            <p className={styles.statement}>This paper presents Kiduna, a new sociotechnical architecture that resolves the historic tradeoff between scale and agency: allowing people to coordinate at scale without diminishing the agency of individuals, organizations, or ecosystems.</p>
          </section>

          <section id="ages" className={styles.section}>
            <p className={styles.sectionNumber}>II.</p>
            <h2>Human history measured by agency</h2>
            <p>We usually divide human history by the tools we created: Stone Age, Bronze Age, Iron Age, Agricultural Age, Industrial Age, Information Age. That is a useful way to organize a museum, but not the most revealing means of investigating humanity. Tools are what we hold; they do not describe who we are. The deeper story of humanity is the story of agency: who senses, who decides, who acts, and how far the effects of those decisions travel.</p>
            <p>Measured by agency, human history follows a different arc. For most of our existence, agency was local and relational. Then institutions allowed humans to coordinate across vast distances by concentrating authority. Now, for the first time, we can envision a new model: coordination at planetary scale without surrendering the agency of the individuals, organizations, communities, and the ecosystems they inhabit.</p>

            <h3>The Kinship Age <span><em>roughly 300,000 years</em></span></h3>
            <p>For nearly all of human existence, coordination ran through kinship systems. Ceremony, ritual, and storytelling were not just entertainment; they were the core technology of society. They transmitted culture across generations without writing. They encoded identity, accountability, authority, obligations, commitments, relationships, and reciprocity: who owes what to whom, who shares when the hunt fails, who takes in whose children. Kinship systems were governance, insurance, education, and memory all at once—and they ran on relationships between people who recognized one another by countenance, posture, presence, and voice.</p>
            <p>Agency in the Kinship Age was local and whole. If a decision touched you, you were probably sitting in the council circle when the decision was made—you could speak, object, walk out, consent, be seen. The distance between authority and effect was the distance across a fire. The limitation was scale: the whole apparatus lived in human memory and human presence. Kinship was effective at coordinating bands, clans, villages, and confederacies, but it could not effectively coordinate millions of strangers.</p>
            <p>The strength of kinship was agency. Its limitation was reach.</p>

            <h3>The Institutional Age <span><em>from writing to now</em></span></h3>
            <p>Writing changed the equation. Once obligations could be recorded instead of remembered, coordination no longer required presence. Ledgers, laws, priesthoods, empires, corporations, bureaucracies, and platforms: each is a mechanism for coordinating strangers at a scale kinship systems could never achieve—and each works through the same fundamental exchange. You surrender a piece of your agency to the institution; the institution pools those pieces and acts as your proxy, at a distance, according to priorities, procedures, and timelines you do not fully control.</p>
            <AgencyAgesFigure />
            <p>This is not a conspiracy. For most of recorded history, it was the only practical way to coordinate at scale. But institutions carry a cost. Authority externalizes—it moves out of persons and into offices, titles, records, and files. The distance between authority and effect stretches from across a council fire to across an ocean: decisions that shape your town may be made by people who will never see it. And agency is diminished. The rich texture of what a person can sense, decide, and perform gets compressed into the few slots an institution can process—a vote, a purchase, a form, a comment, a like.</p>
            <p>The information age, despite its language of connection and empowerment, extended this pattern into everyday life. Social platforms reduced the complexity of human relationships into attention metrics, turning presence into performance and genuine connection into parasocial engagement.</p>
            <blockquote>For about nine thousand years, humanity solved the problem of scale by exchanging individual agency for collective capacity. We don’t notice the tradeoff because we have never experienced a society where large-scale coordination did not require that exchange.</blockquote>

            <h3>The Agentic Age <span>now possible</span></h3>
            <p>All of that is about to change. Agency—the capacity to sense, understand, and act—can now be extended through software. For the first time, the capacity for agency does not have to pool in the center the way institutional authority does.</p>
            <p>Agency can be decentralized, located in the relationships between individuals, organizations, and ecosystems. Ecosystems are not legal agents in this architecture; they are living fields of obligation and relationship that shape the conditions within which human and organizational agency operates. An intelligent agent can belong to you, take direction from you, know what you have chosen to share with it, and act across the world&apos;s networks while coordinating with millions of other agents, each accountable to another person, organization, or ecosystem.</p>
            <p>Intelligent agents make coordination possible at a scale beyond the fully deterministic systems of the Institutional Age. The Agentic Age locates agency in the relationships between people, organizations, and the agents that represent them. It carries culture, obligation, and reciprocity forward from the Kinship Age—through relationships—but makes them recorded, portable, and enforceable at planetary scale.</p>
            <p>An Agentic Age centered on relational agency is not inevitable. The same intelligence, concentrated in centralized institutions rather than distributed through accountable relationships, could produce agency’s polar opposite: mass surveillance with perfect memory, autonomous killing machines that act without meaningful responsibility, and decisions imposed with all the distance of the Institutional Age and none of its friction.</p>
            <p>The stakes rise as software agents gain access to physical interfaces: equipment, vehicles, drones, meters, signals, robots, energy systems, weapons, and infrastructure. Where agency is located will determine which future we get.</p>
            <p>But relational agency cannot stop at the boundary of the individual human. People do not exist apart from the living systems that sustain them. Rivers, forests, watersheds, species, landscapes, and future generations are not merely resources or externalities; they are participants in the conditions of life. An architecture capable of coordinating civilization must therefore make room for their interests, limits, and continuance to be represented within the relationships where decisions are made.</p>
            <p>Agency should remain grounded in whole natural persons, but it must also extend through them into the wider web of life. A person may act as the accountable source of an agent, an organization may hold legal responsibility, and an ecosystem may define the larger field of obligation within which both operate. The system must ask not only who authorized an action and who benefits from it, but what living relationships it affects, what it consumes, what it preserves, and what obligations it creates beyond the human parties immediately present.</p>
            <p>Locate agency in these nested relationships—person, organization, community, ecosystem—and bind every consequential action to accountable authority within them. Then the most dangerous forms of autonomous power become architecturally difficult rather than merely discouraged. Coordination can scale, but it cannot escape relationship.</p>
            <p className={styles.statement}>This is not an ethical ornament added after the system is built. It is the foundation upon which the architecture stands.</p>
          </section>

          <section id="architecture" className={styles.section}>
            <p className={styles.sectionNumber}>III.</p>
            <h2>The Architecture of Agency</h2>
            <p>The architecture begins where agency begins: with purpose.</p>
            <p>People want things for themselves, for one another, and for the world. They want to make something, protect something, change something, or belong to something. They want to be seen and heard. They seek relationships with people who care about the same things and forms of organization capable of carrying those purposes into the world.</p>
            <p>Most digital systems begin somewhere else. They begin with the purposes of their owners, then organize people’s attention, behavior, and work around those ends. Kiduna begins with the purposes of the people and groups within it. Technology, governance, culture, and economics are composed around helping them sense their circumstances, make choices, and act.</p>
            <p>The architecture is cellular. The same pattern repeats at every scale.</p>
            <p>A person has purpose, experience, memory, boundaries, resources, and some capacity to act. A relationship has shared history, trust, commitments, and choices of its own. A project has participants, resources, unfinished work, and a purpose it can advance. An organization has collective memory, authority, governance, an economy, and the capacity to act in the world. An ecosystem holds many organizations in relationship without needing to direct them from a central locus of control.</p>
            <p>Each can sense what is happening, decide within its authority, act, and respond to the consequences. Each participates in something larger without surrendering its own integrity.</p>
            <blockquote>Coherence over chaos. Cohesion over coercion. Consequence over convenience.</blockquote>

            <h3>A living loop</h3>
            <p>An agent is not merely a more elaborate way to complete an old workflow. It is part of a living loop.</p>
            <p>Something happens: a person expresses an intention, a project encounters an obstacle, an invitation arrives, a resource moves, a condition changes. An agent receives that signal and interprets it in context. It draws on the relevant knowledge and memory, considers the purpose and boundaries of the person or group it serves, and determines what might happen next.</p>
            <p>It may answer a question, assemble collaborators, prepare a proposal, call a tool, commission another agent, or present a consequential action for approval. Before anything important occurs, the system verifies who is acting, whom they represent, what authority they hold, what information they may use, and whether the action is permitted.</p>
            <p>The action then returns to the system as a result: something learned, made, decided, paid, changed, or completed. That result becomes part of the context for whatever happens next.</p>
            <p>Signal becomes understanding. Understanding becomes choice. Choice becomes action. Action becomes experience.</p>
            <p>Intelligence proposes; accountable authority decides.</p>
            <p>This loop belongs not only to individuals. Relationships, projects, communities, organizations, and ecosystems can each perceive their own conditions, coordinate their own capacities, and respond within their own authority. Collective agency emerges from these loops interacting—not from one intelligence directing the whole.</p>

            <h3>Wisdom and presence</h3>
            <p>For intelligence to serve agency, it needs more than information. It needs wisdom and presence.</p>
            <p>Wisdom is what a person or collective can carry forward: experience, research, methods, agreements, artifacts, past decisions, lessons, and memory. It retains where something came from, who contributed it, how reliable it is, whom it belongs to, and what purposes it may serve. It is not one vast pool of data available to every agent. It remains held by the people and groups that create, receive, or maintain it.</p>
            <p>Presence is how that wisdom becomes situated and alive. It carries purpose, voice, stance, commitments, boundaries, and ways of relating. It is what allows intelligence to appear differently for a person, a relationship, a project, or an organization without pretending those contexts are interchangeable.</p>
            <p>Wisdom gives intelligence something worth knowing. Presence tells it where it stands.</p>
            <p>Together, they allow agents to participate meaningfully rather than merely generate answers. A project can remember why it exists. An organization can recognize its obligations. A relationship can preserve what has been shared without forgetting what has not. Intelligence can respond to the situation at hand without losing the larger purpose that gives the situation meaning.</p>

            <h3>Work that composes</h3>
            <p>Purpose becomes real through three closely related kinds of work: organizing, creating, and building.</p>
            <p>Organizing brings people into relationship around a purpose. It forms communities, projects, alliances, and organizations; holds commitments; coordinates participation; and helps people keep moving together.</p>
            <p>Creating gives purpose expression. It produces knowledge, research, stories, designs, methods, culture, experiences, and the shared meaning through which people understand what they are doing.</p>
            <p>Building gives purpose capacity. It produces the tools, agents, systems, infrastructure, and institutions through which people and collectives can act.</p>
            <p>Each depends on the others. Organization without creation becomes administration. Creation without building struggles to endure. Building without purpose produces machinery without meaning, in service of nothing.</p>
            <p>An economy supports all three. Resources can be gathered around a purpose, allocated under policies the participants establish and govern together, and distributed to the people who organize, create, and build. Projects can hold budgets. Contributors can agree to terms and receive their shares. Organizations can aggregate capital to fund the resources they consume.</p>
            <p>Value isn’t extracted from the community and delivered to owners outside it. It recirculates through the relationships and work that produced it, strengthening both the individuals and the collectives involved.</p>

            <h3>Privacy and trust</h3>
            <p>A living system needs boundaries. The cell has its membrane; a person has privacy.</p>
            <p>Information may be public, private, secret, or personal. Public information may be freely encountered. Private information may be known to exist but requires permission to enter. Secret information is not exposed at all without explicit access. Personal information remains with the person and the agents they direct; it cannot be granted away.</p>
            <p>These boundaries travel with the information. Moving something into a project or organization does not strip away its origin, ownership, or terms.</p>
            <p>Trust is different from privacy. It belongs to a relationship, not to a person as a permanent score. Each side determines its own degree of trust, and that trust may differ across relationships and contexts. It can deepen through experience, remain limited to a particular purpose, or be withdrawn.</p>
            <p>Authority is different again. Trusting someone does not automatically authorize them to act. Authority must be explicit, bounded, and accountable.</p>
            <p>Keeping privacy, trust, and authority distinct allows people to coordinate deeply without risking unwanted exposure. The system can know enough for cooperation without demanding surveillance as its price.</p>

            <h3>Self-regulation</h3>
            <p>The architecture works because regulation occurs wherever action occurs.</p>
            <p>Each person, relationship, project, community, and organization has boundaries, memory, authority, and feedback. Each can notice changing conditions and adjust. Problems do not all have to travel upward to a central administrator, and intelligence at the center does not need to comprehend or control the whole.</p>
            <p>Watchful agents help maintain the health of the contexts in which people and other agents interact. They attend to the field around a conversation, project, or decision—not to hidden scores attached to people. They can slow an overbearing agent, surface a neglected objection, reveal a growing risk, or ask for explicit permission when something feels wrong.</p>
            <p>Their power is deliberately limited. They do not vote, punish, move money, determine anyone’s standing, or make decisions without explicit approval. When a situation exceeds their authority, they stop regulating and convene the responsible parties.</p>
            <p>This is self-regulation, not automated rule. Intelligence helps every part perceive and respond more fully; boundaries keep that intelligence from becoming sovereign; consequences return as feedback; and people remain accountable for the systems in which they participate.</p>
            <p>The architecture is therefore simple.</p>
            <p>Whole people gather around purpose. Their agents carry much of the weight of coordination. Organizers form the relationships. Creators give them meaning. Builders give them capacity. An economy sustains the work. Privacy preserves boundaries. Trust grows through relationship. Authority remains explicit. Consequences return as experience, allowing every part to learn and regulate itself.</p>
            <p>The cell keeps its membrane. The person keeps authorship of their life. The organization gains the capacity to act. The ecosystem gains coherence without acquiring a center.</p>
            <p className={styles.statement}>Agency does not pool at the top. It moves through individuals, relationships, organizations, communities and ecosystems, always available, always present.</p>
          </section>

          <footer className={styles.paperFooter}>
            Genesis Nightpaper v0.3 · July 23, 2026 · 1:38 PM EDT · Kinship Duna (WV Org 628407) · The full technical record lives at <a href="https://kiduna.team">kiduna.team</a>, including the Technical Specification, the Technical White Paper, and the Kiduna Kit. Compute is prepaid usage credit for operating intelligent agents; it is not an investment, and nothing in this paper is an offer of securities or a promise of earnings. The stack ships under Apache 2.0; Kiduna<sup>™</sup> marks are licensed separately. © 2026 Kiduna Club, all rights reserved, patent pending.
          </footer>
        </article>
      </div>
    </main>
  );
}
