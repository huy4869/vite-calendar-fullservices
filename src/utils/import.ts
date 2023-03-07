import { defineAsyncComponent } from "vue"

export function registerGlobalComponent(app) {
  app.component('AuthLayout', defineAsyncComponent(() => import('@/layouts/auth.vue')))
}
