import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },

  // resolve: {
  // alias: {
  //   '@': path.resolve(__dirname, '.'),
  // },
  // alias: [
  //   {
  //     find: new RegExp('@/'),
  //     replacement: path.resolve(__dirname, './src'),
  //   },
  //   // {
  //   //   find: new RegExp('^@/(.*)$'),
  //   //   replacement: path.resolve(__dirname, './$1'),
  //   // },
  // ],
  // alias: {
  //   '@': path.resolve(__dirname, './src/'),
  // },
  // },
});
