import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function dropConsole() {
  return {
    name: 'drop-console',
    transform(code) {
      if (process.env.NODE_ENV === 'production') {
        return code.replace(/console\.(log|info|debug|warn|error)/g, '// console removed')
      }
      return code
    }
  }
}

export default defineConfig({
  plugins: [react(), dropConsole()],
  base: './',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    minify: 'esbuild',
  },
})
