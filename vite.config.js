// SPDX-License-Identifier: MIT
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://sweetpotato.github.io/ijinden-counter/',
  build: {
    outDir: 'docs',
  },
  plugins: [react()],
})
