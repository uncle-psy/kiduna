export type RoyalsAndRoguesRole = {
  slug: "warrior" | "noble" | "rogue" | "merchant";
  name: string;
  essence: string;
  meaning: string;
  associations: string[];
  expression: string;
  usage: string;
};

export const royalsAndRoguesRoles: RoyalsAndRoguesRole[] = [
  {
    slug: "warrior",
    name: "Warrior",
    essence: "Resolve — meet danger with disciplined force",
    meaning:
      "A Royals & Rogues role for direct protection, decisive action, and controlled force. The Warrior accepts exposure in order to hold ground, answer danger, or create room for others.",
    associations: ["Resolve", "Protection", "Readiness", "Decisive action"],
    expression:
      "An upright ivory blade is held inside a compact gold-and-ivory shield, with restrained opposing arcs gathering force toward a garnet center. The construction expresses readiness governed by discipline.",
    usage:
      "Use only for the Warrior role, cards, characters, abilities, and game states within Royals & Rogues. Do not use it as a generic mark for violence, war, military authority, or security.",
  },
  {
    slug: "noble",
    name: "Noble",
    essence: "Stewardship — carry rank as responsibility",
    meaning:
      "A Royals & Rogues role for position, authority, obligation, and the consequences of visible standing. The Noble can direct attention and resources, but rank creates duties as well as privileges.",
    associations: ["Stewardship", "Rank", "Authority", "Obligation"],
    expression:
      "A restrained three-point gold coronet rises from an ivory horizon above a faceted midnight-blue lozenge. An amethyst pivot binds elevation to responsibility rather than ornament alone.",
    usage:
      "Use only for the Noble role, cards, characters, abilities, and game states within Royals & Rogues. Do not use it as a generic seal of leadership, social superiority, monarchy, or inherited legitimacy.",
  },
  {
    slug: "rogue",
    name: "Rogue",
    essence: "Maneuver — change the path before it closes",
    meaning:
      "A Royals & Rogues role for evasion, opportunism, inversion, and acting through openings others overlook. The Rogue changes position, expectation, or advantage without promising loyalty to the obvious route.",
    associations: ["Maneuver", "Evasion", "Opportunity", "Inversion"],
    expression:
      "A hooked ivory-and-gold dagger crosses a broken orbital path whose missing pieces open a route around the expected line. A garnet pivot marks the instant at which direction and advantage change.",
    usage:
      "Use only for the Rogue role, cards, characters, abilities, and game states within Royals & Rogues. Do not use it as a generic mark for crime, secrecy, betrayal, deception, or moral failure.",
  },
  {
    slug: "merchant",
    name: "Merchant",
    essence: "Exchange — move value through measured agreement",
    meaning:
      "A Royals & Rogues role for trade, negotiation, circulation, and turning differences in need or value into consequential exchange. The Merchant works through terms, timing, leverage, and reciprocal movement.",
    associations: ["Exchange", "Negotiation", "Circulation", "Measured value"],
    expression:
      "A faceted gold coin rests across an ivory measure while two opposing exchange paths carry emerald nodes around it. The composition expresses value moving through judgment, timing, and agreement.",
    usage:
      "Use only for the Merchant role, cards, characters, abilities, and game states within Royals & Rogues. Do not use it as a generic currency, wallet, marketplace, wealth, or financial-services mark.",
  },
];

export function getRoyalsAndRoguesRole(slug: string) {
  return royalsAndRoguesRoles.find((role) => role.slug === slug);
}
