import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allows local static images in public/ to work even before all images are added
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
