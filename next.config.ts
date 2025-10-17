import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "st5.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "static5.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "static7.depositphotos.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
