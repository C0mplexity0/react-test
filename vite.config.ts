import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, "./index_app.html"),
        web: path.resolve(__dirname, "./index_web.html"),
      },
      output: [
        {
          name: "app",
        },
        {
          name: "web",
        },
      ]
    },
  },
});
