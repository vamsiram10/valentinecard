import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        about: "src/pagetwo.html", // Add this
      },
    },
  },
});
