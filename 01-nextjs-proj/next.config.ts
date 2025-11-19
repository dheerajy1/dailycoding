import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: false,
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "r9k0j6rn-3000.inc1.devtunnels.ms",
      ],
    },
  },
};

export default nextConfig;
