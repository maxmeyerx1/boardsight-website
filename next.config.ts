import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Statischer Export für GitHub Pages: `npm run build` erzeugt den Ordner `out/`.
  output: "export",
  poweredByHeader: false,
};

export default nextConfig;
