import fs from "node:fs";
import path from "node:path";

export type CanonGroup = {
  id: string;
  heading?: string;
  qualifier?: string;
  lines: string[];
};

export type CanonSection = {
  number: number;
  numberLabel: string;
  title: string;
  slug: string;
  groups: CanonGroup[];
};

export type CanonDocument = {
  title: string;
  version: string;
  timestamp: string;
  displayTimestamp: string;
  sections: CanonSection[];
};

const CANON_PATH = path.join(
  process.cwd(),
  "public",
  "downloads",
  "Kiduna-Canon-Taxonomy-V0.33-2026-08-15-0929-EDT.md",
);

const standaloneHeadings = new Set([
  "Shorthand",
  "Theme",
  "Focus",
  "Tag",
  "Classification Rule",
  "Canonical Themes and Focuses",
  "People & Care",
  "Society & Justice",
  "Culture & Play",
  "Place & Planet",
  "Work & Wealth",
  "Knowledge & Frontier",
  "Forces Interact",
  "The Key Principle of Forces",
  "Realm Relationship Roles",
  "Contribution Roles",
  "Realm-Defined Rights",
  "Membership Authority",
  "Role Principle",
  "Publishing lifecycle",
  "Literal Spatial",
  "Realistic",
  "Symbolic",
  "Impressionistic",
  "Diagrammatic",
  "Hybrid",
  "Scale",
  "Spatial Relationships",
  "Cross-Dimensional Representation",
  "Dimensional Principle",
  "Colors",
  "Typography",
  "Shape",
  "Materials",
  "Iconography",
  "Spacing",
  "Motion",
  "Lighting",
  "Interface Treatment",
  "Asset Treatment",
  "Design Systems",
  "Compatibility",
  "Inheritance",
  "Design + Dimension",
  "Design Principle",
  "Surface Adaptation",
  "Surface Principle",
]);

const contributionRoleHeadings = new Set([
  "Catalyst",
  "Organizer",
  "Creator",
  "Builder",
  "Luminary",
  "Sponsor",
]);

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function isSubheading(line: string) {
  if (standaloneHeadings.has(line)) return true;
  if ([...contributionRoleHeadings].some((role) => line.startsWith(`${role} — `))) return true;
  return line.length <= 96 && /^[A-Z0-9][^.!?;:]* — [^.!?;:]+$/.test(line);
}

function splitHeading(line: string) {
  const separator = line.indexOf(" — ");
  if (separator === -1) return { heading: line };
  const left = line.slice(0, separator);
  const right = line.slice(separator + 3);
  if (/^\d{2}$/.test(left)) {
    return { heading: right };
  }
  return {
    heading: left,
    qualifier: right,
  };
}

function displayTimestamp(timestamp: string) {
  const match = timestamp.match(/^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}) (EDT|EST)$/);
  if (!match) return timestamp;
  const [, year, month, day, hour24, minute, zone] = match;
  const monthName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ][Number(month) - 1];
  const hour = Number(hour24);
  const period = hour >= 12 ? "PM" : "AM";
  const hour12 = hour % 12 || 12;
  return `${monthName} ${Number(day)}, ${year} · ${hour12}:${minute} ${period} ${zone}`;
}

export function loadCanon(): CanonDocument {
  const lines = fs.readFileSync(CANON_PATH, "utf8").trim().split(/\r?\n/);
  const title = lines[0];
  const release = lines[1].match(/^(V\d+\.\d+) — (.+)$/);
  if (!release) throw new Error("The Kiduna Canon release header is invalid.");

  const sections: CanonSection[] = [];
  let current: CanonSection | undefined;
  let currentGroup: CanonGroup | undefined;
  const idCounts = new Map<string, number>();

  const pushGroup = () => {
    if (current && currentGroup && (currentGroup.heading || currentGroup.lines.length)) {
      current.groups.push(currentGroup);
    }
  };

  for (const line of lines.slice(2)) {
    const sectionMatch = line.match(/^(\d+)\.\s+(.+)$/);
    if (sectionMatch) {
      pushGroup();
      const number = Number(sectionMatch[1]);
      const sectionTitle = sectionMatch[2];
      current = {
        number,
        numberLabel: String(number).padStart(2, "0"),
        title: sectionTitle,
        slug: slugify(sectionTitle.replace(/ — .+$/, "")),
        groups: [],
      };
      sections.push(current);
      currentGroup = { id: `${current.slug}-overview`, lines: [] };
      continue;
    }

    if (!current || !currentGroup || !line.trim()) continue;

    const resourceSummary = current.slug === "resources"
      && /^(Capacity|Badge|Code|Coupon|Invitation|Ticket|Gift|Reward) — .+ — .+$/.test(line);
    if (resourceSummary) {
      currentGroup.lines.push(line);
      continue;
    }

    const categoryDefinition = current.number === 1
      ? line.match(/^([A-Za-z]+) — (.+)$/)
      : null;
    if (categoryDefinition) {
      pushGroup();
      const heading = categoryDefinition[1];
      const baseId = `${current.slug}-${slugify(heading)}`;
      currentGroup = {
        id: baseId,
        heading,
        lines: [categoryDefinition[2]],
      };
      continue;
    }

    if (isSubheading(line)) {
      pushGroup();
      const { heading, qualifier } = splitHeading(line);
      const baseId = `${current.slug}-${slugify(heading)}`;
      const count = idCounts.get(baseId) ?? 0;
      idCounts.set(baseId, count + 1);
      currentGroup = {
        id: count ? `${baseId}-${count + 1}` : baseId,
        heading,
        qualifier,
        lines: [],
      };
    } else {
      currentGroup.lines.push(line);
    }
  }

  pushGroup();

  return {
    title,
    version: release[1],
    timestamp: release[2],
    displayTimestamp: displayTimestamp(release[2]),
    sections,
  };
}
