import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + Vite build for Customer Version 12 (ES2019 / Node.js 12)
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2019",
    outDir: "dist",
    sourcemap: true,
  },
});
