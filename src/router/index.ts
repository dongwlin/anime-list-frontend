import { createWebHashHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/settings/index.vue')
  },
  {
    path: '/refresh',
    name: 'refresh',
    component: () => import('@/views/refresh/index.vue')
  },
  {
    path: '/404',
    name: 'not-found',
    component: () => import('@/views/not-found/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  
  const { title } = to.meta
  if (title) document.title = title

  next()
})

export default router
