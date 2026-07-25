import type { Metadata } from "next";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/400-italic.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiduna.ai"),
  title: "Kiduna — Create Intelligent Allies. Build Powerful Movements.",
  description: "Kiduna is where you can build trust, form organizations, govern what you create, and act together with like-minded people and intelligent allies to make your mark on the world.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/apple-touch-icon.png" },
  openGraph: {
    title: "Create intelligent allies. Build powerful movements.",
    description: "Kiduna brings people and their intelligent allies into trusted relationships, where shared purpose becomes projects, movements, organizations, and action.",
    url: "/",
    siteName: "Kiduna",
    type: "website",
    images: [{ url: "/og-home-v2.png", width: 1659, height: 948, alt: "Kiduna — Create intelligent allies. Build powerful movements." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Create intelligent allies. Build powerful movements.",
    description: "Kiduna brings people and their intelligent allies into trusted relationships, where shared purpose becomes projects, movements, organizations, and action.",
    images: ["/og-home-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
