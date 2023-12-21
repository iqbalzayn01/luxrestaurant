import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: "./index.html",
        home: "./src/pages/Home.jsx",
        reservation: "./src/pages/Reservation.jsx",
      },
    },
  },
});
