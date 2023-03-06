import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)*',
      component: HomeView,
      name: 'home',
    },
  ]
})

export default router
