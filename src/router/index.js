import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/game',
    name: 'game',
    component: () => import('../views/GameView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
