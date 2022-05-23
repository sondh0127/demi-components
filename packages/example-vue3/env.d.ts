/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
import type { Router } from 'vue-router'

declare global {
  interface Window {
    $router: Router
  }
}
