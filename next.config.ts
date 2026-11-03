import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 only serves allow-listed qualities (default [75]); others silently
    // snap to the nearest. 85 = gallery thumbnails, 90 = lightbox.
    qualities: [75, 85, 90],
  },
  experimental: {
    // Dev server cold start is ~150ms on this site, so the persistent Turbopack
    // cache (.next/dev/cache, survives restarts) saves nothing and can carry stale
    // state between runs. Re-enable if the site ever gets slow to start.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
