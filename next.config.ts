import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "production";

const nextConfig: NextConfig = {
  output: 'export', 
  distDir:'dist',
  images: {
      unoptimized: true,
    },
  basePath: isProd ? "/Pets-landing-page" : ""
};


export default nextConfig;
