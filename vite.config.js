import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [react(), VitePWA({  
    registerType: 'prompt',  
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],  
    manifest: {  
name: 'ViewTube',  
      short_name: 'ViewTube',  
      description: 'An alternative Privacy friendly Frontend for YouTube',  
      theme_color: '#ffffff',  
      start_url: '/',  
      icons: [  
{  
src: 'pwa-192x192.png',  
          sizes: '192x192',  
          type: 'image/png',  
        },  
        {  
src: 'pwa-512x512.png',  
          sizes: '512x512',  
          type: 'image/png',  
        },  
        {  
src: 'pwa-512x512.png',  
          sizes: '512x512',  
          type: 'image/png',  
          purpose: 'any maskable',  
        },  
      ],  
    },  
  })],
  resolve: {
    alias: {
      'stream': 'stream-browserify'
    }
  }
});