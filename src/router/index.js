import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'

Vue.use(VueRouter)

const city = () => import('views/city/City')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: city
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
