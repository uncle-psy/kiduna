"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./sigils.module.css";

export type PortraitState = "open" | "engaged" | "focused" | "dreaming";

export type LibraryEntry = {
  id: string;
  name: string;
  slug: string;
  type: "sigil" | "portrait";
  category: string;
  essence: string;
  meaning: string;
  associations: string[];
  usage: string;
  status: string;
  referenceMaster: string;
  masterAsset: string | null;
  portraitStates: Record<PortraitState, string> | null;
};

const states: Array<{ id: PortraitState; name: string; copy: string }> = [
  { id: "open", name: "Open", copy: "Available, welcoming, and present." },
  { id: "engaged", name: "Engaged", copy: "Actively conversing, collaborating, or responding." },
  { id: "focused", name: "Focused", copy: "Deliberately working, reviewing, or making." },
  { id: "dreaming", name: "Dreaming", copy: "Imagining, incubating, reflecting, or exploring possibility." },
];

function categoryLabel(category: string) {
  const parts = category.split(" › ");
  if (parts[0] === "Designs") return parts[1] || parts[0];
  return parts[0];
}

export default function SigilLibrary({ sigils, portraits }: { sigils: LibraryEntry[]; portraits: LibraryEntry[] }) {
  const [portraitState, setPortraitState] = useState<PortraitState>("open");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");

  const categories = useMemo(() => ["All categories", ...Array.from(new Set(sigils.map((entry) => categoryLabel(entry.category)))).sort()], [sigils]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return sigils.filter((entry) => {
      const inCategory = category === "All categories" || categoryLabel(entry.category) === category;
      const haystack = [entry.name, entry.category, entry.essence, entry.meaning, ...entry.associations].join(" ").toLocaleLowerCase();
      return inCategory && (!needle || haystack.includes(needle));
    });
  }, [category, query, sigils]);

  const activeState = states.find((state) => state.id === portraitState) ?? states[0];

  return (
    <>
      <section className={styles.portraitSection} id="portraits">
        <div className={styles.sectionIntro}>
          <div>
            <p className="eyebrow">Portraits</p>
            <h2>One identity.<span>Many ways of being present.</span></h2>
          </div>
          <p>Every Ally and Avatar portrait has at least these four states. More states may be added when they are explicitly defined, accessible, and preserve recognizable identity. A displayed state communicates presentation; it is not proof of private emotion or hidden behavior.</p>
        </div>

        <div className={styles.stateControls} role="group" aria-label="Choose a portrait state">
          {states.map((state) => (
            <button className={state.id === portraitState ? styles.stateActive : ""} type="button" onClick={() => setPortraitState(state.id)} aria-pressed={state.id === portraitState} key={state.id}>
              <span>{state.name}</span><small>{state.copy}</small>
            </button>
          ))}
        </div>

        <div className={styles.stateReadout}><span>{activeState.name}</span><p>{activeState.copy}</p></div>
        <div className={styles.portraitGrid}>
          {portraits.map((portrait) => (
            <article className={styles.portraitCard} key={portrait.id}>
              <div className={styles.portraitImage}>
                <Image src={`/sigils/v031/portraits/${portrait.slug}/${portraitState}.webp`} alt={`${portrait.name}, ${activeState.name} state`} width={440} height={440} />
              </div>
              <div><span>{portrait.name}</span><small>{activeState.name}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.librarySection} id="library">
        <div className={styles.sectionIntro}>
          <div>
            <p className="eyebrow">Complete library</p>
            <h2>Find the mark.<span>Understand the meaning.</span></h2>
          </div>
          <p>The full v0.31 visual catalog is here, including the new card suits, archetypes, Major Arcana, Tarot suits, Alchemy, and classical elements. Search by name, meaning, association, or category.</p>
        </div>

        <div className={styles.libraryTools}>
          <label>
            <span>Search the library</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try “water,” “govern,” or “The Crone”" type="search" />
          </label>
          <label>
            <span>Category</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((value) => <option value={value} key={value}>{value}</option>)}
            </select>
          </label>
          <p><strong>{filtered.length}</strong> of {sigils.length} sigils</p>
        </div>

        {filtered.length ? (
          <div className={styles.sigilGrid}>
            {filtered.map((entry) => {
              const image = entry.masterAsset ? `/sigils/v031/masters/${entry.slug}.webp` : `/sigils/v031/reference/${entry.slug}.png`;
              return (
                <article className={styles.sigilCard} key={entry.id}>
                  <div className={styles.sigilImage}><Image src={image} alt={`${entry.name} sigil`} width={640} height={640} /></div>
                  <div className={styles.sigilCopy}>
                    <p>{entry.category}</p>
                    <h3>{entry.name}</h3>
                    <span>{entry.essence}</span>
                  </div>
                  {entry.masterAsset && <small className={styles.newBadge}>New in v0.31</small>}
                </article>
              );
            })}
          </div>
        ) : <p className={styles.emptyState}>No sigils match that search and category.</p>}
      </section>
    </>
  );
}
