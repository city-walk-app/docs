import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    server: {
      port: 1216
    },
    optimizeDeps: {
      exclude: ['vitepress']
    },
    ssr: {
      format: 'cjs'
    },
    legacy: {
      buildSsrCjsExternalHeuristics: true
    },
  }
}
