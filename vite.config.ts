import react from '@vitejs/plugin-react'
import { InlineConfig, UserConfig, defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

interface ViteWithVitestConfigExport extends UserConfig {
  test: InlineConfig
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: 'src/assets/svg/*.svg',
    }),
  ],
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@src': '/src',
      '@modules': '/src/modules',
      '@assets': '/src/assets',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    coverage: {
      provider: 'v8',
      lines: 90,
      functions: 90,
      branches: 90,
      statements: 90,
    },
  },
} as ViteWithVitestConfigExport)
