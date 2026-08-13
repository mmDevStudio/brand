import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ["dev-box"],
  experimental: {
    turbopackRustReactCompiler: true,
    useTypeScriptCli: true,
  },
};

export default nextConfig;
