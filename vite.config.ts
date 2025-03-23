import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
   plugins: [react(), tailwindcss()],
   build: {
      lib: {
         entry: "lib/main.ts",
         name: "tomato-ui",
         fileName: "tomato-ui",
      },
      rollupOptions: {
         external: ["react", "react-dom"],
         output: {
            globals: {
               react: "React",
               "react-dom": "ReactDOM",
            },
         },
      },
   },
});
