"use client";

export default function PrintButton() {
  return (
    <button className="nightpaper-action" type="button" onClick={() => window.print()}>
      <span aria-hidden="true">↧</span> Print / save PDF
    </button>
  );
}
