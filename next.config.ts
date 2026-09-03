import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this directory — otherwise Next.js can walk
  // up and pick a stray lockfile from a parent folder as the root.
  outputFileTracingRoot: __dirname,
  // Standalone output — deployed as its own service on hack.durby.tech,
  // independent of the main Durby app/dashboard.
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
