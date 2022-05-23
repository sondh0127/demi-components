import 'library/style'
import 'uno.css'
import type { QiankunProps } from 'vite-plugin-qiankun/dist/helper'
import { qiankunWindow, renderWithQiankun } from 'vite-plugin-qiankun/dist/helper'
import type { App as VueInstance } from 'vue'
import { createApp } from 'vue'
import type { Router, RouterHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import generatedRoutes from '~pages'

let app: VueInstance | null = null
let history: RouterHistory | null = null
let router: Router | null = null

let unmounted = false
const isSubApp = qiankunWindow.__POWERED_BY_QIANKUN__

function render(props?: QiankunProps) {
  const routerBase = isSubApp ? props?.activeRule : '/'
  history = createWebHashHistory(routerBase)

  router = createRouter({
    history,
    routes: generatedRoutes,
  })
  window.$router = router
  app = createApp(App)
  app.use(router)

  router.isReady().then(() =>
    app!.mount(props?.container ? props?.container.querySelector('#app') : '#app'))
}

renderWithQiankun({
  mount(props) {
    console.log('[LOG] ~ mount')
    if (unmounted) {
      window.location.reload()
      unmounted = false
      return
    }
    render(props)
    props.container!.style.height = '100%'
  },
  bootstrap() {
    console.log('[LOG] ~ bootstrap')
  },
  unmount(props) {
    console.log('[LOG] ~ unmount')
    app!.unmount()
    app!._container.innerHTML = ''
    app = null
    router = null
    history!.destroy()
    history = null
    unmounted = true
  },
  update(props) {
    console.log('[LOG] ~ update')
  },
})

if (!isSubApp)
  render()
