import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import libCss from 'vite-plugin-libcss';
import { resolve } from "path";
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [
    react(),
    libCss()

  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "./src/lib/main.js"),
      name: "page_container",
      fileName: "page_container",
    },
  },
})
