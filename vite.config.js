import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools({
      extendTransforms: (builtins) => [...builtins, (config) => config.w && ((state, image) => image.jpeg({ quality: 85, chromaSubsampling: "4:4:4" }))],
    }),
  ],
});
