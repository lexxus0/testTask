import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
    root: ".", 
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        about: "about-us.html",
        blog: "blog.html",
        contact: "contact-us.html",
        blogItem: "blog-item.html", 
      },
    },
  },
  plugins: [tailwindcss()],
});
