import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function devHealthFallbackPlugin() {
  return {
    name: 'dev-health-fallback',
    configureServer(server) {
      server.middlewares.use('/api/health', async (req, res, next) => {
        if (req.method !== 'GET') {
          next()
          return
        }

        try {
          const backendResponse = await fetch('http://localhost:3001/api/health', {
            method: 'GET',
          })

          const responseBody = await backendResponse.text()
          res.statusCode = backendResponse.status
          res.setHeader('Content-Type', backendResponse.headers.get('content-type') || 'application/json')
          res.end(responseBody)
        } catch {
          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(
            JSON.stringify({
              ok: false,
              mailConfigured: false,
              devFallback: true,
              error: 'Contact API server is not running on port 3001.',
            }),
          )
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devHealthFallbackPlugin()],
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
