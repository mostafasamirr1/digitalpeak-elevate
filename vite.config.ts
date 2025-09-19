import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Hard-coding base to '/' since we're using a custom domain
// This ensures assets are loaded from the root of amazingmoaaz.online
const base = '/';

export default defineConfig({
  base,
  plugins: [react()],
  // Ensure proper module resolution for GitHub Pages
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled', 'lucide-react'],
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['digitalpeakeg.site'],
    headers: {
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'DENY',
      'X-XSS-Protection': '1; mode=block',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      'Content-Security-Policy': "default-src 'self' 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://static.cloudflareinsights.com; connect-src 'self' https://api.web3forms.com;",
    },
    fs: {
      strict: false,
    },
  },
  build: {
    assetsDir: 'assets',
    target: 'esnext',
    cssCodeSplit: true,
    // Force output as ES modules with proper extensions
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
          motion: ['framer-motion'],
        },
        // Ensure proper file extensions for GitHub Pages
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Force proper MIME types by ensuring .js extensions
        format: 'es'
      },
    },
  },
});