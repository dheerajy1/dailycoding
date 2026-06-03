import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["*.trycloudflare.com"],
  },
  define: {
    "process.env": process.env, // inject Bun’s env into frontend
  },
});
