import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/HomePage.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/FavoritesPage.vue')
  },
  {
    path: '/photo/:id',
    name: 'photo',
    component: () => import(/* webpackChunkName: "about" */ '@/pages/PhotoPage.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
