import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import none from '../layout/none.vue'
import { authRoutes } from '@/router/auth'
// import defaultLayout from '../layout/default.vue'

export const routes = [
    ...authRoutes,
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/love-me',
    name: 'love-me',
    component: () => import('../views/LoveMe.vue'),
    meta: {
      layout: none
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior () {
    return { top: 0 }
  },
  routes: routes
})

export default router
