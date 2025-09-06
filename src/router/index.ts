import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '../components/SignupPage.vue'
import LandingPage from '../components/LandingPage.vue'
import ProductPage from '../components/ProductPage.vue'
import AddProductPage from '../components/AddProductPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/landing',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/product',
    name: 'Product',
    component: ProductPage
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: AddProductPage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'Signup',
    component: SignupPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
