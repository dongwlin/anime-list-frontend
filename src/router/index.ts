import { createWebHashHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/home/index.vue')
  },
  {
    name: 'settings',
    path: '/settings',
    component: () => import('@/views/settings/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
