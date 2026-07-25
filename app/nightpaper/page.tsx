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
        <h1>Kiduna: <span className={styles.subtitle}>A New Architecture for Agentic Civilization</span></h1>
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

            <h3>The Agentic Age <span className={styles.eraNote}>only now possible</span></h3>
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
            <p>People want things for themselves, for one another, and for the world. They want to make something, protect something, change something, or belong to something. They want to be seen and heard. They seek relationships with people who care about the same things and forms of organization capable of carrying those purposes into the world.</p>
            <p>Most digital systems begin somewhere else. They begin with the purposes of their owners, then organize people’s attention, behavior, and work around those ends. Kiduna begins with the purposes of the people and groups within it. Technology, governance, culture, and economics are composed around helping people make sense of their circumstances, make choices that serve them, and act in concert.</p>
            <p>The architecture is cellular. The same pattern repeats at every scale.</p>
            <p>A person has purpose, experience, memory, boundaries, resources, and some capacity to act. A relationship has shared history, trust, commitments, and choices of its own. A project has participants, resources, unfinished work, and a purpose it can advance. An organization has collective memory, authority, governance, an economy, and the capacity to act in the world. An ecosystem holds many organizations in relationship without needing to direct them from a central locus of control.</p>
            <p>Each can sense what is happening, decide within its authority, act, and respond to the consequences. Each participates in something larger without surrendering its own integrity.</p>

            <h3>The same architecture at every scale</h3>
            <p>Kiduna brings this living pattern into software. A person, relationship, project, organization, and ecosystem might not appear on the surface to be similar entities, but deep down, each exhibits the same basic capacities: there is something it knows, it has a way of presenting, it has abilities it can exercise, boundaries it must respect, and ways of responding when conditions change.</p>
            <p>Each form has its own knowledge and memory.</p>
            <p>A person carries their experience, preferences, commitments, and private understanding of the world. A relationship develops a shared history without absorbing everything either person knows. A project gathers the knowledge, decisions, resources, and unfinished work required to advance its purpose. An organization carries its collective memory, policies, methods, agreements, and accounts. An ecosystem preserves the protocols and relationships that allow many organizations to coordinate without becoming one organization.</p>
            <p>Knowledge is not pooled indiscriminately. Some information is public. Some is private and may be shared by permission. Some is secret and cannot be sought out or discovered, only revealed. Some is personal—held for one individual alone and never shared. Every piece of knowledge retains its source, ownership, history, and terms of use.</p>
            <p>Each form has a presence: a recognizable way of being in relationship with the world.</p>
            <p>A person has character, values, intentions, and a stance from which they act. A relationship develops its own tone, expectations, and ways of communicating. A project has a purpose, working culture, and sense of what matters now. An organization expresses a mission, identity, and way of treating its members and the world around it. An ecosystem establishes the conditions under which many different organizations can meet and cooperate.</p>
            <p>Presence is what keeps intelligence from becoming generic. The same information means something different when encountered within a friendship, a working project, a governing organization, or a planetary ecosystem. Intelligence must know not only what is true, but where it stands, whom it serves, and what relationships surround the decision.</p>
            <p>Each form has capacities: things it knows how to do and actions it may take.</p>
            <p>People act through their own abilities and through intelligent agents they guide. Relationships can share information, extend trust, make commitments, and coordinate the people within them. Projects can gather participants, assign work, use resources, create things, and adapt their plans. Organizations can establish policy, make collective decisions, enter agreements, hold and distribute resources, and act with legal responsibility. Ecosystems can establish common protocols, carry relationships among organizations, and coordinate activity without commanding every participant.</p>
            <p>Skills make these capacities repeatable. Tools extend them into the world. Automations allow agreed responses to occur when known conditions arise: when a resource runs low, a deadline approaches, a decision is required, a boundary is crossed, or an opportunity appears. But no tool, skill, or automation carries authority merely because it is capable. What may happen is always limited by purpose, permission, relationship, and the authority of the entity acting.</p>
            <p>The pattern is the same at every scale.</p>
            <p>Something changes. The change is perceived in context. Relevant knowledge and memory are brought forward. Intelligence interprets what the change means. Available actions are considered. Authority and permission are checked. An action is taken—or deliberately withheld—and its consequences become part of what the entity knows next.</p>
            <p>Sense. Decide. Act. Learn.</p>
            <p>This is how intelligence becomes agency. Intelligence understands what might be done. Agency joins that understanding to purpose, authority, capacity, and consequence.</p>
            <p>A person becomes better able to author their life. A relationship becomes better able to care for the connection between two people, and repair when the connection frays. A project becomes better able to accomplish its purpose. An organization becomes better able to govern itself and act in the world. An ecosystem becomes better able to coordinate the organizations within it without reducing them to extensions of a central power.</p>
            <p>The architecture does not create collective intelligence by extracting knowledge and authority from its parts. It builds intelligence and agency within each part, then gives those parts the means to act together.</p>
            <p>The person becomes more capable. The relationship becomes more responsive. The project becomes more purposeful. The organization becomes more effective. The ecosystem becomes more coherent.</p>
            <p className={styles.statement}>Nothing becomes smaller as the whole grow stronger.</p>

            <h3>Agency in practice</h3>
            <p>A living system also needs a metabolism, a way to make collective choices, and a body capable of acting in the world.</p>

            <h3>The economics of agency</h3>
            <p>Compute is the primary resource in Kiduna: prepaid capacity that powers intelligence, agents, tools, storage, and action. Whenever a person, project, or organization uses intelligence to accomplish something, Compute moves through the system. It is not purchased for status, influence, or control. It is consumed in the exercise of agency.</p>
            <p>The economy is designed so that the use of Compute sustains the people and relationships that make agency possible. As Compute circulates, it returns value to those who organize, create, build, and catalyze—expanding their capacity to act in proportion to the value they contribute.</p>
            <p>Organizers form relationships, bring people around a purpose, and help them participate. They receive a portion of the Compute purchased through the relationships they form and sustain—not payment for enrollment itself, but an ongoing share of the activity that follows.</p>
            <p>Creators contribute the wisdom and presence that give the system meaning: research, methods, stories, designs, experiences, culture, and ways of working. They share in the Compute that flows through what they create.</p>
            <p>Builders make the agents, tools, automations, and infrastructure through which work is performed. They share in the Compute that flows through the capabilities they build.</p>
            <p>Catalysts bring new projects, programs, and organizations into being. They establish the initial purpose, gather the first participants, assemble the resources, and carry the work through formation, supported by the initial funds flowing into the collective.</p>
            <p>Luminaries contribute the major works, bodies of wisdom, and deep grounding around which a collective may form, supported through project budgets, agreed royalties, repayment of development costs, and allocations made by the organization.</p>
            <p>The pattern changes as participation matures. The initial flow emphasizes organizing because a living system must first gather people, form relationships, and develop the trust, shared purpose, and patterns of participation that make sustained collective action possible. Continuing use shifts more value toward the creators and builders whose wisdom, presence, and capabilities make the system useful. A fixed share supports the common technology. The rest enters the organization’s treasury, where it can fund projects, compensate contributors, maintain reserves, support shared infrastructure, or pursue whatever purposes the members choose.</p>
            <p>Value is circulated rather than extracted. A useful contribution attracts activity. Activity consumes Compute. Compute returns resources to the people who organized, created, and built what was used, while strengthening the collective in which the activity occurred.</p>

            <h3>Governance Forums</h3>
            <p>Aggregated capital does not grant authority. Purchasing Compute does not buy influence. Governance follows its own path, independent of economic power.</p>
            <p>Members bring proposals into Governance Forums. Each member receives the same amount of governance tokens, so no one can purchase a larger voice. Envoys—a specialized type of Ally—use those tokens to trade pass and fail positions on the member’s behalf.</p>
            <p>A member gives their Envoy the knowledge, arguments, values, priorities, and limits it should represent. Members can also steer their Envoys as they exchange arguments, revise proposals, trade positions, and negotiate toward an agreement the membership can support. The Forum moves the membership away from polarity and toward consensus.</p>
            <p>Members can inspect the complete record: the arguments considered, the revisions made, the positions taken, and how the agreement was reached. Their governance tokens default to the position negotiated by their Envoy, resolving the participation problems experienced in many DAOs without removing human authority. Any member can intervene, overrule their Envoy, and place their tokens differently before ratification.</p>
            <p>Once ratified, a decision may authorize an action, allocate resources, assign responsibility, or become standing policy. Routine work can proceed under that policy; actions with greater consequences may require explicit approval, multiple signatures, or a new Forum decision.</p>

            <h3>Collective agency with legal standing</h3>
            <p>Software-based organizations were born with execution but without standing. Blockchains could move assets, count votes, and carry out decisions, but the collective itself often had no recognized body that could sign a contract, hold property, employ people, open conventional financial accounts, or answer a claim in court.</p>
            <p>The absence of a legal form did not create immunity. In the Ooki case, a federal court held that a DAO could be sued as an unincorporated association and treated as a “person” under the Commodity Exchange Act. In Sarcuni v. bZx DAO, the court found that governance-token holders formed a general partnership, potentially exposing participants to joint and several liability. Decentralization had distributed control without clearly locating accountability.</p>
            <p>Many projects responded by placing conventional legal wrappers around their DAOs: foundation companies, business companies, associations, and specialized DAO entities in jurisdictions such as the Cayman Islands, the British Virgin Islands, and the Marshall Islands. These forms supplied contracts, accounts, liability boundaries, and recognizable counterparties, but they often put a separate institutional body—directors, supervisors, service providers, or corporate officers—between the members and the organization they intended to govern.</p>
            <p>Wyoming brought that legal interface into the United States. Its DAO law allows an LLC to be member-managed or algorithmically managed, but it remains an ownership-based company; unless its governing documents provide otherwise, voting interests may be calculated from the digital assets members contribute. Wyoming’s later DUNA statute moved closer to member-governed organization, but its filing of an agent for service of process is optional: so there is no formal registry or record of entities managed by a public office.</p>
            <p>West Virginia closes those gaps.</p>
            <p>Under the West Virginia Decentralized Unincorporated Nonprofit Association Act, a DUNA consists of at least one hundred members joined by mutual consent around a common nonprofit purpose who elect to be governed by the Act. Its governing principles may include agreements, smart contracts, consensus algorithms, and enacted governance proposals. The law expressly permits governance through blockchain technology and allows reasonable algorithmic means of forming consensus and making organizational decisions.</p>
            <p>The association is legally separate from its members for contract and tort liability. It may own real and personal property, enter contracts, and assert or defend claims in its own name. Members are not personally liable merely because they belong, participate in management, or help administer its affairs.</p>
            <p>Every West Virginia DUNA must also file a statement appointing an in-state agent for service of process. The Secretary of State accepts that filing, assigns the organization a state record, and makes the filing discoverable through its public business system. The blockchain can show what the organization decided and who possessed authority; the state record shows which legal body stands behind those actions and where responsibility can reach it.</p>
            <p>Nonprofit does not mean economically inert. A DUNA may earn revenue and engage in profit-making activity, but the resulting profits must further, or be set aside for, its common nonprofit purpose. It may pay reasonable compensation for real work, reimburse expenses, and confer benefits consistent with its purpose. What it cannot do is distribute operating profits to members merely because they hold membership interests.</p>
            <p>This gives collective agency to a body capable of acting beyond the screen: holding resources, employing and compensating people, entering agreements, accepting responsibility, and continuing through changes in membership without value being extracted and the members exploited by founders, investors, or outside shareholders.</p>
            <p>The genesis DUNA is Kinship Duna (shortened to &quot;Kiduna&quot;) with Organization ID 628407 supplied by the West Virginia Secretary of State. Kiduna provides the legal and operational continuity of the ecosystem. It maintains the registered agent, banking and treasury relationships, shared infrastructure, legal response capacity, and the common Compute economy. Every member of a formal Kiduna-generated Organization is also a member of Kiduna, so the ecosystem that supports the organizations is itself governed by its members.</p>
            <p>That structure is not intended to permanently remain as a centralized system. The software will be open source. Other communities can operate independent ecosystems, adopt varying governing principles, issue different forms of Compute, and decide whether to connect with one another through the Kinship Agency Protocol. Kiduna is the genesis ecosystem: first, but not above the others.</p>
            <p>Companies, universities, foundations, governments, and other outside legal entities enter Kiduna as Institutions. They may contract with Organizations, sponsor projects or contributors, supply services, purchase Compute for members, or provide capital and resources. A DUNA may also create, acquire interests in, or operate outside entities when its members authorize it and applicable law permits.</p>
            <p>But Institutions do not possess the same standing within Kiduna as natural persons. Under Kiduna’s governing principles, they cannot vote in Governance Forums or become the source of collective authority. Only natural persons participate fully in governance, with their capacity increased—but never replaced—by their Allies. The statute itself defines “person” broadly enough to include legal entities, so reserving governance to natural persons is a deliberate constitutional choice made by Kiduna’s organizations, not a limitation imposed by the law.</p>
            <p>That distinction completes the movement from the Institutional Age to the Agentic Age. In the Institutional Age, people surrendered agency to institutions that accumulated authority over them. Here, institutions become instruments that people and member-governed collectives may create, own, contract with, and direct.</p>
            <p className={styles.statement}>The institution can act, but it cannot rule. Authority remains with natural persons, amplified by their Allies and organized through the collectives they govern.</p>
          </section>

          <footer className={styles.paperFooter}>
            Genesis Nightpaper v0.3 · July 23, 2026 · 1:38 PM EDT · Kinship Duna (WV Org 628407) · The full technical record lives at <a href="https://kiduna.team">kiduna.team</a>, including the Technical Specification, the Technical White Paper, and the Kiduna Kit. Compute is prepaid usage credit for operating intelligent agents; it is not an investment, and nothing in this paper is an offer of securities or a promise of earnings. The stack ships under Apache 2.0; Kiduna<sup>™</sup> marks are licensed separately. © 2026 Kiduna Club, all rights reserved, patent pending.
          </footer>
        </article>
      </div>
    </main>
  );
}
