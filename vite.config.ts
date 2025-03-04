
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/portofolio/", // GitHub Pages base path
  server: {
    host: "::",
    port: 8080, // Optionnel, utile uniquement en local
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Permet d'utiliser "@/components" au lieu de "../../components"
    },
  },
}));
