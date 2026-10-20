import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async rewrites() {
    return { beforeFiles: [
      { source: "/", destination: "/index.html" },
      { source: "/privacy", destination: "/privacy.html" },
      { source: "/terms", destination: "/terms.html" },
    ], afterFiles: [], fallback: [] };
  },
};
export default nextConfig;
