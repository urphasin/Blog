import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning this allows next builds to complete successfully
    // even if your prject has build errors.
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
