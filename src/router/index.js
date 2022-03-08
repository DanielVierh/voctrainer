import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/AddNewLanguage',
    name: 'AddNewLanguage',
    component: () => import(/* webpackChunkName: "AddNewLanguage" */ '../views/AddNewLanguage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
