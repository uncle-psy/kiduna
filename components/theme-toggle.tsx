"use client";

export default function ThemeToggle() {
  function toggleTheme() {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("kiduna-theme", nextTheme);
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      title="Toggle dark and light mode"
    >
      <span className="theme-option theme-option-dark">
        <span className="theme-toggle-icon" aria-hidden="true">☼</span>
        <span className="theme-toggle-label">Light</span>
      </span>
      <span className="theme-option theme-option-light">
        <span className="theme-toggle-icon" aria-hidden="true">◐</span>
        <span className="theme-toggle-label">Dark</span>
      </span>
    </button>
  );
}
