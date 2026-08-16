"use client";

import { Fragment, useMemo, useState, type ReactNode } from "react";
import type { CanonSection } from "@/lib/canon";
import styles from "./canon.module.css";

const pathways = [
  {
    label: "Describe the system",
    range: "01–05",
    sections: ["categories", "domains", "themes", "purposes", "forces"],
  },
  {
    label: "Shape participation",
    range: "06–10",
    sections: ["realms", "elements", "resources", "roles", "capacities"],
  },
  {
    label: "Organize experience",
    range: "11–14",
    sections: ["patterns", "modes", "scenes", "forms"],
  },
  {
    label: "Express the world",
    range: "15–18",
    sections: ["components", "dimensions", "designs", "surfaces"],
  },
];

const subsectionHeadings = new Set([
  "Canonical Themes and Focuses",
  "Realm Relationship Roles",
  "Contribution Roles",
]);

const taxonomyLists = new Set([
  "People & Care",
  "Society & Justice",
  "Culture & Play",
  "Place & Planet",
  "Work & Wealth",
  "Knowledge & Frontier",
]);

const contributionRoleHeadings = new Set([
  "Catalyst",
  "Organizer",
  "Steward",
  "Creator",
  "Builder",
  "Luminary",
  "Sponsor",
]);

const explanationHeadings = new Set([
  "Scale",
  "Spatial Relationships",
  "Cross-Dimensional Representation",
  "Design Systems",
  "Compatibility",
  "Inheritance",
  "Design + Dimension",
  "Surface Adaptation",
]);

const principleHeadings = new Set([
  "Classification Rule",
  "First-Principles Distinction",
  "Forces Interact",
  "The Key Principle of Forces",
  "Realm-Defined Rights",
  "Membership Authority",
  "Role Principle",
  "Publishing lifecycle",
  "Dimensional Principle",
  "Design Principle",
  "Surface Principle",
]);

const categoryDefinitionTitles: Record<string, string> = {
  domains: "Four dimensions of every Realm",
  themes: "What a Realm is all about",
  purposes: "Why the work exists",
  forces: "What acts upon the system",
  realms: "Where life and activity come together",
  elements: "The building blocks",
  resources: "Usable holdings and instruments",
  roles: "How Sources participate",
  capacities: "What brings this to life",
  patterns: "Reusable Scene designs",
  modes: "How one Realm is experienced",
  scenes: "How a Realm becomes present",
  forms: "How a Scene is expressed",
  components: "What Scenes are made from",
  dimensions: "How space is represented",
  designs: "How the world looks and feels",
  surfaces: "Where Kiduna is experienced",
};

const categoryDefinitionLineCounts: Record<string, number> = {
  categories: 0,
  domains: 1,
  themes: 1,
  purposes: 1,
  forces: 2,
  realms: 1,
  elements: 1,
  resources: 2,
  roles: 1,
  capacities: 1,
  patterns: 2,
  modes: 1,
  scenes: 1,
  forms: 1,
  components: 2,
  dimensions: 1,
  designs: 1,
  surfaces: 1,
};

function Highlight({ children, query }: { children: string; query: string }) {
  if (!query.trim()) return children;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = children.split(new RegExp(`(${escaped})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase()
      ? <mark key={`${part}-${index}`}>{part}</mark>
      : <Fragment key={`${part}-${index}`}>{part}</Fragment>,
  );
}

function renderLines(lines: string[], query: string, groupId: string) {
  const output: ReactNode[] = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const remainingLines = lines.slice(index + 1);
    const semicolonList = line.endsWith(":") && lines[index + 1]?.endsWith(";");
    const terminalBareList = line !== "Example:"
      && line.endsWith(":")
      && remainingLines.length > 0
      && remainingLines.every((item) => !/[.!?]$/.test(item));
    const beginsList = semicolonList || terminalBareList;
    const beginsResourceIndex = line === "The eight canonical Resource types are:";

    if (beginsResourceIndex) {
      const items: Array<{ term: string; meaning: string; action: string }> = [];
      let cursor = index + 1;
      while (cursor < lines.length) {
        const match = lines[cursor].match(/^(.+?) — (.+?) — (.+)$/);
        if (!match) break;
        items.push({ term: match[1], meaning: match[2], action: match[3] });
        cursor += 1;
      }

      output.push(
        <div className={styles.resourceIndex} key={`${groupId}-resources-${index}`}>
          <p><Highlight query={query}>{line}</Highlight></p>
          <dl>
            {items.map((item) => (
              <div key={item.term}>
                <dt><Highlight query={query}>{item.term}</Highlight></dt>
                <dd><Highlight query={query}>{item.meaning}</Highlight><span><Highlight query={query}>{item.action}</Highlight></span></dd>
              </div>
            ))}
          </dl>
        </div>,
      );
      index = cursor - 1;
      continue;
    }

    if (beginsList) {
      const items: string[] = [];
      let cursor = index + 1;
      if (terminalBareList) {
        remainingLines.forEach((item) => items.push(...item.split(" · ")));
        cursor = lines.length;
      } else {
        while (cursor < lines.length) {
          items.push(lines[cursor]);
          const currentEndsList = !lines[cursor].endsWith(";");
          cursor += 1;
          if (currentEndsList) break;
        }
      }

      output.push(
        <div className={styles.canonListBlock} key={`${groupId}-list-${index}`}>
          <p><Highlight query={query}>{line}</Highlight></p>
          <ul>
            {items.map((item, itemIndex) => (
              <li key={`${groupId}-item-${index}-${itemIndex}`}>
                <Highlight query={query}>{item}</Highlight>
              </li>
            ))}
          </ul>
        </div>,
      );
      index = cursor - 1;
      continue;
    }

    const isQuestion = /\basks:/.test(line);
    const isExample = line === "Example:";
    const isDistinction = line.startsWith("Key distinction:");
    const isLifecycle = line.includes("→ publish as Draft →");

    output.push(
      <p
        className={isQuestion ? styles.entryQuestion : isExample ? styles.exampleLabel : isDistinction ? styles.keyDistinction : isLifecycle ? styles.lifecycleLine : undefined}
        key={`${groupId}-line-${index}`}
      >
        <Highlight query={query}>{line}</Highlight>
      </p>,
    );
  }

  return output;
}

function renderSectionOrientation(section: CanonSection, lines: string[], query: string, groupId: string) {
  const definitionCount = categoryDefinitionLineCounts[section.slug] ?? 1;
  const definitionLines = lines.slice(0, definitionCount);
  const explanationLines = lines.slice(definitionCount);
  const categoryName = section.title.replace(/ — .+$/, "");

  return (
    <section className={styles.sectionOrientation} key={groupId}>
      {definitionLines.length > 0 && (
        <div className={styles.categoryStatement}>
          {definitionLines.map((line, index) => {
            const beginsWithCategory = line.startsWith(`${categoryName} `);
            return (
              <p key={`${groupId}-definition-${index}`}>
                {beginsWithCategory ? (
                  <><strong><Highlight query={query}>{categoryName}</Highlight></strong><Highlight query={query}>{line.slice(categoryName.length)}</Highlight></>
                ) : <Highlight query={query}>{line}</Highlight>}
              </p>
            );
          })}
        </div>
      )}
      {explanationLines.length > 0 && (
        <div className={styles.orientationCopy}>{renderLines(explanationLines, query, `${groupId}-explanation`)}</div>
      )}
    </section>
  );
}

function renderCategoryMenu(section: CanonSection, query: string) {
  const baseSectionTitle = section.title.replace(/ — .+$/, "");
  const orientation = section.groups.find((group) => !group.heading || group.heading === baseSectionTitle);
  const categories = section.groups.filter((group) => group.heading && group.heading !== baseSectionTitle);

  return (
    <>
      {orientation && renderSectionOrientation(section, orientation.lines, query, orientation.id)}
      <nav className={styles.categoryMenu} aria-label="Kiduna taxonomy categories">
        {categories.map((category) => {
          const name = category.heading!;
          const slug = name.toLowerCase();

          return (
            <a href={`#${slug}`} key={name} aria-label={`Go to the ${name} definition`}>
              <strong><Highlight query={query}>{name}</Highlight></strong>
              <div className={styles.categoryMenuCopy}>{renderLines(category.lines, query, `${category.id}-menu`)}</div>
              <i aria-hidden="true">↓</i>
            </a>
          );
        })}
      </nav>
    </>
  );
}

export default function CanonExplorer({ sections }: { sections: CanonSection[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();

  const visibleSections = useMemo(() => {
    if (!normalizedQuery) return sections;

    return sections.flatMap((section) => {
      const sectionMatches = `${section.numberLabel} ${section.title}`.toLowerCase().includes(normalizedQuery);
      const groups = sectionMatches
        ? section.groups
        : section.groups.filter((group) =>
          [group.heading, group.qualifier, ...group.lines]
            .filter(Boolean)
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery),
        );
      return groups.length ? [{ ...section, groups }] : [];
    });
  }, [normalizedQuery, sections]);

  const resultCount = visibleSections.reduce((total, section) => total + section.groups.length, 0);

  function jumpToSection(value: string) {
    if (!value) return;
    const target = document.getElementById(value);
    if (target) {
      window.history.pushState(null, "", `#${value}`);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section className={styles.explorer} id="explore">
      <div className={styles.explorerTools}>
        <div>
          <p className="eyebrow">Explore the complete Canon</p>
          <h2>Find the meaning.<span>Trace the connections.</span></h2>
        </div>
        <label className={styles.searchField}>
          <span className={styles.srOnly}>Search the Canon</span>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search Sources, Forces, Realms…"
          />
          {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search">×</button>}
        </label>
      </div>

      <div className={styles.mobileJump}>
        <label htmlFor="canon-section">Jump to a section</label>
        <select id="canon-section" defaultValue="" onChange={(event) => jumpToSection(event.target.value)}>
          <option value="" disabled>Choose a section</option>
          {sections.map((section) => (
            <option value={section.slug} key={section.slug}>{section.numberLabel} · {section.title}</option>
          ))}
        </select>
      </div>

      <div className={styles.explorerLayout}>
        <aside className={styles.canonNav} aria-label="Canon sections">
          <p>The Canon</p>
          {pathways.map((pathway) => (
            <div key={pathway.label}>
              <span>{pathway.range} · {pathway.label}</span>
              <ol>
                {pathway.sections.map((slug) => {
                  const section = sections.find((item) => item.slug === slug);
                  if (!section) return null;
                  return <li key={slug}><a href={`#${slug}`}><b>{section.numberLabel}</b>{section.title}</a></li>;
                })}
              </ol>
            </div>
          ))}
          <a className={styles.navDownload} href="/downloads/Kiduna-Kit-V0.27-2026-08-15-2313-EDT.zip" download>
            Download the Kit <span aria-hidden="true">↓</span>
          </a>
        </aside>

        <div className={styles.canonContent} aria-live="polite">
          {normalizedQuery && (
            <p className={styles.resultSummary}>
              {resultCount
                ? `${resultCount} matching ${resultCount === 1 ? "entry" : "entries"} across ${visibleSections.length} ${visibleSections.length === 1 ? "section" : "sections"}.`
                : "No canonical entries match that search."}
            </p>
          )}

          {visibleSections.map((section) => (
            <article className={styles.canonSection} id={section.slug} key={section.slug}>
              <header>
                <span>{section.numberLabel}</span>
                <h2>
                  <Highlight query={query}>{section.title.replace(/ — .+$/, "")}</Highlight>
                  {categoryDefinitionTitles[section.slug] && <small> — {categoryDefinitionTitles[section.slug]}.</small>}
                </h2>
                <a href="#explore">Back to index ↑</a>
              </header>

              {section.slug === "categories" ? renderCategoryMenu(section, query) : section.groups.map((group, groupIndex) => {
                const baseSectionTitle = section.title.replace(/ — .+$/, "");
                const orientation = !group.heading || group.heading === baseSectionTitle;
                const subsectionHeading = !!group.heading && subsectionHeadings.has(group.heading);
                const taxonomyList = !!group.heading && taxonomyLists.has(group.heading);
                const explanation = !!group.heading && explanationHeadings.has(group.heading);
                const principle = !!group.heading && principleHeadings.has(group.heading);
                const contributionRole = !!group.heading && contributionRoleHeadings.has(group.heading);

                if (orientation) {
                  return renderSectionOrientation(section, group.lines, query, group.id);
                }

                if (subsectionHeading) {
                  return (
                    <section className={styles.canonSubsectionHeader} id={group.id} key={group.id}>
                      <h3><Highlight query={query}>{group.heading!}</Highlight></h3>
                      {group.lines.length > 0 && <div className={styles.subsectionCopy}>{renderLines(group.lines, query, `${section.slug}-${groupIndex}`)}</div>}
                    </section>
                  );
                }

                if (taxonomyList) {
                  return (
                    <section className={styles.taxonomyList} id={group.id} key={group.id}>
                      <h3><Highlight query={query}>{group.heading!}</Highlight></h3>
                      <div className={styles.entryCopy}>{renderLines(group.lines, query, `${section.slug}-${groupIndex}`)}</div>
                    </section>
                  );
                }

                if (explanation) {
                  return (
                    <section className={styles.explanationBlock} id={group.id} key={group.id}>
                      <h3><Highlight query={query}>{group.heading!}</Highlight></h3>
                      <div className={styles.entryCopy}>{renderLines(group.lines, query, `${section.slug}-${groupIndex}`)}</div>
                    </section>
                  );
                }

                if (principle) {
                  return (
                    <aside className={styles.principleCard} id={group.id} key={group.id}>
                      <h3><Highlight query={query}>{group.heading!}</Highlight></h3>
                      <div className={styles.entryCopy}>{renderLines(group.lines, query, `${section.slug}-${groupIndex}`)}</div>
                    </aside>
                  );
                }

                return (
                  <section className={styles.definitionCard} id={group.id} key={group.id}>
                    <h3>
                      <Highlight query={query}>{group.heading!}</Highlight>
                      {group.qualifier && <span className={contributionRole ? styles.contributionRoleSubhead : undefined}><Highlight query={query}>{group.qualifier}</Highlight></span>}
                    </h3>
                    <div className={styles.entryCopy}>
                      {renderLines(group.lines, query, `${section.slug}-${groupIndex}`)}
                    </div>
                  </section>
                );
              })}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
