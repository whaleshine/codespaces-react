import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
=======
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
>>>>>>> 414979d (feat: initialize React project with Vite and Tailwind CSS)
