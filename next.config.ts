import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Hide the Next.js DevTools "N" badge (the floating circle the user noticed)
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "z-cdn.chatglm.cn",
        pathname: "/image-search-mcp/**",
      },
      {
        protocol: "https",
        hostname: "sfile.chatglm.cn",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
