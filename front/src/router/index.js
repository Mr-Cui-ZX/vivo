import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Xplay from '../components/xplay'
import Shop from '../components/shop'
import Phone from '../components/phone'
import Detail from '../components/detail'
import Search from '../components/search'
import Login from '../components/login'
import Register from '../components/register'
import Cart from '../components/cart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/xplay',
      name: 'xplay',
      component:Xplay
    },
    {
      path: '/shop',
      name: 'shop',
      component:Shop
    },
    {
      path: '/phone',
      name: 'phone',
      component:Phone
    },
    {
      path: '/detail/:testid',
      name: 'detail',
      component:Detail
    },
    {
      path: '/search',
      name: 'search',
      component:Search
    },
    {
      path: '/login',
      name: 'login',
      component:Login,
    },
    {
      path: '/register',
      name: 'register',
      component:Register,
    },
    {
      path: '/cart',
      name: 'cart',
      component:Cart
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
