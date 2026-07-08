import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base через mode: при `vite build` mode всегда "production",
// поэтому пути ассетов на GitHub Pages не слетают.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/byggexp-lp-react/" : "/",
}));
