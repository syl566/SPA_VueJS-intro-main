import { createRouter, createWebHistory } from 'vue-router'
import CitiesList from '../views/CitiesList.vue'
import City from '../components/City.vue'

const routes = [
  {
    path: '/villes',
    component: CitiesList
  },
  {
    path: '/ville',
    component: City
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router