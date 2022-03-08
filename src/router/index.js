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
  },
  {
    path: '/LangOverview',
    name: 'overview',
    component: () => import(/* webpackChunkName: "AddNewLanguage" */ '../views/LangOverview.vue')
    // Todo ID übergeben
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
