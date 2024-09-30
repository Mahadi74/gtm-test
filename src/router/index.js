import Vue from 'vue'
import Router from 'vue-router'

// Tell Vue to use the Router
Vue.use(Router)

// Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: { title: 'Home Page' }
  },
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('../views/CustomerPage.vue'),
    meta: { title: 'Customer Page' }
  }
]

// Create and export the router instance
const router = new Router({
  mode: 'history',
  routes
})

export default router
