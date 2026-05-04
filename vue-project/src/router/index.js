import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from '../views/CitiesList.vue'
import CitiesMap from '../views/CitiesMap.vue'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/',
    redirect: '/villes'
  },
  {
    path: '/villes',
    component: CitiesList
  },
  {
    path: '/carte',
    component: CitiesMap
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router