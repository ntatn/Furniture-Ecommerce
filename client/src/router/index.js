import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store/auth.js'

const ifNotAuthorized = (to, from, next) => {
  if(!store.getters.isLoggedIn){
    next()
    return
  }
  next("/")
}

const isAdmin = (to, from, next) => {
  if(store.getters.isLoggedIn && store.getters.isAdmin === '0001'){
    next()
    return
  }
  next("/")
}

const ifAuthorized = (to, from, next) => {
  if(store.getters.isLoggedIn){
    next()
    return
  }
  next("/login")
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/ShopView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue'),
    beforeEnter: ifNotAuthorized
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "login" */ '../views/LogoutView.vue'),
    beforeEnter: ifAuthorized
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "login" */ '../views/RegisterView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminView.vue'),
    beforeEnter: isAdmin
  },
  {
    path: '/admin/product',
    name: 'products',
    component: () => import(/* webpackChunkName: "admin" */ '../views/ProductView.vue'),
    beforeEnter: isAdmin
  },
  {
    path: '/admin/product/edit/:id',
    name: 'edit',
    props: true,
    component: () => import(/* webpackChunkName: "admin" */ '../views/EditProductView.vue'),
    beforeEnter: isAdmin
  },
  {
    path: '/product/:id',
    name: 'productDetails',
    props: true,
    component: () => import('../components/Shop/ProductDetails.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
