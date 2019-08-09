import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Exhibition from './components/Exhibition.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/Classification',
      name: 'Classification',
      component: () => import('./views/Classification.vue'),
      //分类子路由   商品展示模块
      children: [
        {
          path: '/Exhibition/:navName',
          name: 'Exhibition',
          component: Exhibition
          // component: () => import('./components/Exhibition.vue')
        }
      ]
    },{
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: () => import('./views/ShoppingCart.vue')
    },{
      path: '/Personal',
      name: 'Personal',
      component: () => import('./views/Personal.vue')
    }
  ]
})
