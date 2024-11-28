import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Conditions if needed.
// router.beforeEach(async (to, from, next) => {
//   //
// })

export default router;