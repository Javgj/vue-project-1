export const home = [
  {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/HomeView'),
    meta: {
      template: 'default-template'
    }
  }
]
