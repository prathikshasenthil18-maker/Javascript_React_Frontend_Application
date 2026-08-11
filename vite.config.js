import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + Vite build for Customer Version 20 (ES2023 / Node.js 20)
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    outDir: "dist",
    sourcemap: true,
  },
});
