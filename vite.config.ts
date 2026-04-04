import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Core vendor: React + Router + Query
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router") ||
            id.includes("node_modules/@tanstack/react-query") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor";
          }
          // UI framework chunk
          if (
            id.includes("node_modules/@radix-ui/") ||
            id.includes("node_modules/class-variance-authority") ||
            id.includes("node_modules/clsx") ||
            id.includes("node_modules/tailwind-merge") ||
            id.includes("node_modules/cmdk") ||
            id.includes("node_modules/sonner") ||
            id.includes("node_modules/lucide-react")
          ) {
            return "ui";
          }
          // Animation
          if (id.includes("node_modules/framer-motion")) {
            return "motion";
          }
          // Merge all lazy-loaded subpages into one chunk
          if (
            id.includes("src/pages/") &&
            !id.includes("src/pages/Index")
          ) {
            return "pages";
          }
        },
      },
    },
    chunkSizeWarningLimit: 80,
  },
}));
