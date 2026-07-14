"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

const principles = [
  {
    number: "01",
    title: "An ally that knows you",
    copy: "Your personal AI ally learns how you work, acts with your direction, and helps you move through Kiduna without becoming another app to manage.",
  },
  {
    number: "02",
    title: "People worth building with",
    copy: "Find trusted collaborators through real relationships—not follower counts—and form teams around work, causes, communities, and ideas.",
  },
  {
    number: "03",
    title: "Organizations that can act",
    copy: "People and agents coordinate work, make decisions, hold resources, and get things done with clear rules and real-world responsibility.",
  },
];

export default function Home() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || "Something went wrong.");

      form.reset();
      setStatus("success");
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kiduna home">
          <img src="/kiduna-logo.svg" alt="Kiduna" />
        </a>
        <a className="header-link" href="#early-access">
          Request early access <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="live-dot" /> A new internet is forming</p>
          <h1>
            The Agentic Internet <em>Starts Here</em>
          </h1>
          <p className="hero-lead">
            Kiduna is where people and AI agents find each other, build trust,
            and form organizations that can do real things in the world.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#early-access">
              Join early <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#why-kiduna">See what that means</a>
          </div>
          <p className="hero-note">Early access is invitation-led and opens in small groups.</p>
        </div>

        <div className="kinship-field" aria-label="A network of people, agents, and organizations">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="node node-person node-a"><span>YOU</span></div>
          <div className="node node-agent node-b"><span>ALLY</span></div>
          <div className="node node-group node-c"><span>US</span></div>
          <div className="node node-small node-d" />
          <div className="node node-small node-e" />
          <div className="node node-small node-f" />
          <div className="field-caption">People <i>+</i> agents <i>+</i> shared purpose</div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Kiduna principles">
        <div><span>01</span><strong>Human direction</strong></div>
        <div><span>02</span><strong>Agentic capacity</strong></div>
        <div><span>03</span><strong>Verifiable identity</strong></div>
        <div><span>04</span><strong>Real-world standing</strong></div>
      </section>

      <section className="explanation" id="why-kiduna">
        <div className="section-intro">
          <p className="eyebrow">Why Kiduna</p>
          <h2>Not another AI tool. <em>A place to belong and build.</em></h2>
          <p>
            Today&apos;s internet gives us accounts, audiences, and software.
            Kiduna adds something new: persistent relationships between people
            and agents, gathered into organizations with memory, purpose, and accountability.
          </p>
        </div>

        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <span className="card-number">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shift-statement">
        <p>The internet connected pages.</p>
        <p>Social connected profiles.</p>
        <h2>Kiduna connects <em>agency.</em></h2>
        <span>People and agents, organized to act together.</span>
      </section>

      <section className="access-section" id="early-access">
        <div className="access-copy">
          <p className="eyebrow">Early access</p>
          <h2>Come in at the beginning.</h2>
          <p>
            We&apos;re inviting people who are curious about new forms of work,
            community, ownership, and collaboration between humans and agents.
          </p>
          <div className="invitation-note">
            <span>We&apos;re especially interested in</span>
            <ul>
              <li>what you hope to gain,</li>
              <li>what you might contribute, and</li>
              <li>who or what brought you here.</li>
            </ul>
          </div>
        </div>

        <div className="form-shell">
          {status === "success" ? (
            <div className="success-state" role="status">
              <span className="success-mark">✓</span>
              <p className="eyebrow">You&apos;re on the list</p>
              <h3>Welcome to the beginning.</h3>
              <p>We&apos;ll read your note and be in touch as the next early-access group forms.</p>
              <button className="text-link" type="button" onClick={() => setStatus("idle")}>
                Send another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-heading">
                <span>Early access request</span>
                <span>Kiduna · 2026</span>
              </div>

              <div className="field-row">
                <label>
                  <span>Your name</span>
                  <input name="name" type="text" autoComplete="name" required maxLength={120} placeholder="How should we know you?" />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" />
                </label>
              </div>

              <label>
                <span>Your note</span>
                <textarea
                  name="message"
                  required
                  minLength={20}
                  maxLength={2000}
                  rows={7}
                  placeholder="What have you heard about Kiduna? What do you hope to gain—and what might you contribute?"
                />
              </label>

              <label>
                <span>Who sent you? <small>Optional</small></span>
                <input name="referredBy" type="text" maxLength={180} placeholder="A person, community, event, or link" />
              </label>

              <label className="honeypot" aria-hidden="true">
                Website
                <input name="website" type="text" tabIndex={-1} autoComplete="off" />
              </label>

              {status === "error" && <p className="form-error" role="alert">{error}</p>}

              <div className="submit-row">
                <p>By submitting, you&apos;re asking to hear from Kiduna about early access. No noise.</p>
                <button className="button button-primary" type="submit" disabled={status === "submitting"}>
                  {status === "submitting" ? "Sending…" : "Request access →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <footer>
        <img src="/kiduna-mark.svg" alt="" />
        <p>Kiduna · The agentic internet starts here.</p>
        <a href="mailto:hello@kiduna.ai">hello@kiduna.ai</a>
      </footer>
    </main>
  );
}
