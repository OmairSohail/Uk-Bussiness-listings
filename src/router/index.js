import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import addbussiness from '../views/addbussiness'
import featured from '../views/featured'
import premium from '../views/premium'
import standard from '../views/standard'
import contact from '../views/contactus'
import faq from '../views/FAQs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/faq',
    name: 'faq',
    component: faq
  },
  {
    path: '/addbussiness',
    name: 'addbussiness',
    component: addbussiness
  },
  {
    path: '/featured',
    name: 'featured',
    component: featured
  },
  {
    path: '/premium',
    name: 'premium',
    component: premium
  },
  {
    path: '/standard',
    name: 'standard',
    component: standard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
