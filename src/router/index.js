import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import OrderingOptionsView from '../views/OrderingOptionsView.vue'
import FeaturedItemView from '../views/FeaturedItemView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutUs',
    name: 'AboutUs',
    component: AboutUsView
  },
  {
    path: '/orderingOptions',
    name: 'OrderingOptions',
    component: OrderingOptionsView
  },
  {
    path: '/featuredItem',
    name: 'FeaturedItem',
    component: FeaturedItemView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
