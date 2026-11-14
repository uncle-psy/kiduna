import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/the-dunas.html", destination: "/crypto-compute.html", permanent: true },
      { source: "/the-dunas", destination: "/crypto-compute.html", permanent: true },
      { source: "/meet-ki.html", destination: "/kinship-intelligence", permanent: true },
      { source: "/meet-ki", destination: "/kinship-intelligence", permanent: true },
      { source: "/kinship-intelligence.html", destination: "/kinship-intelligence", permanent: true },
    ];
  },
  async rewrites() {
    return { beforeFiles: [
      { source: "/", destination: "/index.html" },
      { source: "/kinship-intelligence", destination: "/kinship-intelligence.html" },
      { source: "/privacy", destination: "/privacy.html" },
      { source: "/terms", destination: "/terms.html" },
    ], afterFiles: [], fallback: [] };
  },
};
export default nextConfig;
