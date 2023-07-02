import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: {
        name: 'formEditor'
      },
      // component: () => import('@/views/MainView.vue')
    },
    {
      path: '/main',
      name: 'mainView',
      component: () => import('@/views/MainView.vue')
    },
    {
      path: '/form',
      name: 'formEditor',
      component: () => import('@/views/FormEditor.vue')
    },
  ]
})

export default router
