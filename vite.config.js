import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + Vite build for Customer Version 16 (ES2021 / Node.js 16)
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2021",
    outDir: "dist",
    sourcemap: true,
  },
});
