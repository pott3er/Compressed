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
      "@/": path.resolve(__dirname, "./terminus2/"),
      "@/ui": path.resolve(__dirname, "./terminus2/ui"),
      "@/lib": path.resolve(__dirname, "./terminus2/lib"),
      "@/hooks": path.resolve(__dirname, "./terminus2/hooks"),
      "@/layout": path.resolve(__dirname, "./terminus2/layout"),
      "@/components": path.resolve(__dirname, "./terminus2/src/components"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
