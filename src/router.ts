import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from './pages/IndexPage.vue'
// import GamePage from '@/pages/GamePage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
    meta: {
      title: 'Cribbly - Home',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router