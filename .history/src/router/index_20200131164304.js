import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'index',
    component: ()=>import('../views/Index'),
    children:[
      {
        path:'',
        redirect:'/home',
      },
      {
        path:'/home',
        name:"home",
        component:()=>import('../views/Home.vue')
      },
      {
        path:'/me',
        name:"me",
        component:()=>import('../views/Me.vue')
      },
      {
        path:'/order',
        name:"order",
        component:()=>import('../views/Order.vue')
      },

    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/Login")
  },
  {
    path: '/address',
    name: 'address',
    component: () => import("../views/Address")
  },
  {
    path: '/city',
    name: 'city',
    component: () => import("../views/City")
  },
  {
    path: '/search',
    name: 'search',
    component: () => import("../views/Search")
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import("../views/shops/Shop")
  },

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  link
  routes
})

export default router

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == '/login') {
    next()
  } else {
    isLogin ? next() : next('/login')
  }
})
