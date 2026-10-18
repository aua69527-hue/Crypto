import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  plugins: [react()],
  root: path.resolve(root, "client"),
  resolve: {
    alias: { "@": path.resolve(root, "client/src") },
  },
  server: { host: "0.0.0.0", port: 5173 },
  build: {
    outDir: path.resolve(root, "dist/public"),
    emptyOutDir: true,
  },
});
