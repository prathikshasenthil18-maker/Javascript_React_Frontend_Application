import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + Vite build for Customer Version 24 (ES2024+ / Node.js 24)
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    outDir: "dist",
    sourcemap: true,
  },
});
