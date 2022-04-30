// vue
import Vue from 'vue'
// vue-router
import VueRouter from 'vue-router'

// routes
import { home } from '@/router/routes/home'
import { aboutUs } from '@/router/routes/about-us'
import { details } from '@/router/routes/details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'full-page',
    component: () => import(/* webpackChunkName: "full-page" */ '@/layouts/full-page/FullPage'),
    redirect: '/home',
    children: [
      ...home,
      ...aboutUs,
      ...details
    ]

  },
  {
    path: '*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "not-found" */ '@/templates/NotFoundTemplate')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(() => {
  Vue.prototype.$store.commit('SET_LOADING', {
    show: true,
    message: 'Loading',
    variant: 'primary',
    type: 'border'
  })
  setTimeout(() => {
    Vue.prototype.$store.commit('SET_LOADING', {
      show: false,
      message: '',
      variant: '',
      type: ''
    })
  }, 2500)
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
