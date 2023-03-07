import { LAYOUT_AUTH } from '@/constants'

export const authRoutes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: LAYOUT_AUTH, },
    component: () => import('@/views/auth/login.vue'),
    hidden: true
  },
]
