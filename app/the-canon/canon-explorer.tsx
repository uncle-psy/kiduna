"use client";

import { Fragment, useMemo, useState, type ReactNode } from "react";
import type { CanonSection } from "@/lib/canon";
import styles from "./canon.module.css";

const pathways = [
  {
    label: "Describe the system",
    range: "01–04",
    sections: ["categories", "domains", "themes", "forces"],
  },
  {
    label: "Shape participation",
    range: "05–08",
    sections: ["realms", "elements", "roles", "capacities"],
  },
  {
    label: "Organize experience",
    range: "09–12",
    sections: ["patterns", "modes", "scenes", "forms"],
  },
  {
    label: "Express the world",
    range: "13–16",
    sections: ["components", "dimensions", "designs", "surfaces"],
  },
];

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
    const beginsList = line.endsWith(":") && lines[index + 1]?.endsWith(";");

    if (beginsList) {
      const items: string[] = [];
      let cursor = index + 1;
      while (cursor < lines.length) {
        items.push(lines[cursor]);
        const currentEndsList = !lines[cursor].endsWith(";");
        cursor += 1;
        if (currentEndsList) break;
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

    output.push(
      <p key={`${groupId}-line-${index}`}>
        <Highlight query={query}>{line}</Highlight>
      </p>,
    );
  }

  return output;
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
          <h2>Find the language.<span>Follow the relationships.</span></h2>
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
          <a className={styles.navDownload} href="/downloads/Kiduna-Kit-V0.03-2026-08-11-1402-EDT.zip" download>
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
                <h2><Highlight query={query}>{section.title}</Highlight></h2>
                <a href="#explore">Back to index ↑</a>
              </header>

              {section.groups.map((group, groupIndex) => {
                const overview = !group.heading;
                const subsectionHeading = group.heading === "Canonical Themes and Focuses";
                return (
                  <section className={overview ? styles.sectionOverview : subsectionHeading ? styles.canonSubsectionHeader : styles.canonEntry} id={group.id} key={group.id}>
                    {subsectionHeading && (
                      <h2><Highlight query={query}>{group.heading!}</Highlight></h2>
                    )}
                    {group.heading && !subsectionHeading && (
                      <h3>
                        <Highlight query={query}>{group.heading}</Highlight>
                        {group.qualifier && <span><Highlight query={query}>{group.qualifier}</Highlight></span>}
                      </h3>
                    )}
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
