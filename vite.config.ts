import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), tailwindcss(), tsconfigPaths(), dts({ rollupTypes: true })],
   build: {
      lib: {
         entry: resolve(__dirname, "/lib/main.ts"),
         name: "tuf-ui",
         fileName: "tuf-ui",
      },
      rollupOptions: {
         external: [
            "react",
            "react-dom",
            "react/jsx-runtime",
            "@radix-ui/react-slot",
            "class-variance-authority",
            "tailwind-merge",
         ],
         output: {
            globals: {
               react: "React",
               "react-dom": "ReactDOM",
               "react/jsx-runtime": "react/jsx-runtime",
               "class-variance-authority": "ClassVarianceAuthority",
               "tailwind-merge": "TailwindMerge",
               "@radix-ui/react-slot": "RadixSlot",
            },
         },
      },
   },
});
