import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from 'views/home/Home'

Vue.use(VueRouter)

const City = () => import('views/city/City')
const Detail = () => import('views/detail/Detail')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
