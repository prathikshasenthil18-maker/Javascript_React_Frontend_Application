import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + Vite build for Customer Version 14 (ES2020 / Node.js 14)
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    outDir: "dist",
    sourcemap: true,
  },
});
