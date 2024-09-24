import { useI18n } from '@/i18n'
import { createWebHashHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

const { t } = useI18n()

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: t('page.home.title')
    },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    meta: {
      title: t('page.settings.title')
    },
    component: () => import('@/views/settings/index.vue')
  },
  {
    path: '/404',
    name: 'not-found',
    meta: {
      title: t('page.not_found.title')
    },
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
