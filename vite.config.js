import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// React + Vite build for Customer Version 18 (ES2022 / Node.js 18)
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022",
    outDir: "dist",
    sourcemap: true,
  },
});
