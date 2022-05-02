export const aboutUs = [
  {
    name: 'about-us',
    path: '/about-us',
    component: () => import(/* webpackChunkName: "about-us" */ '@/views/about-us/AboutUs'),
    meta: {
      template: 'default-template'
    }
  }
]
