export const details = [
  {
    name: 'details',
    path: '/details',
    component: () => import(/* webpackChunkName: "details" */ '@/views/details/DetailsIndex'),
    children: [
      {
        name: 'details-list',
        path: '/details-list',
        component: () => import(/* webpackChunkName: "details-list" */ '@/views/details/DetailsList'),
        meta: {
          template: 'default-template'
        }
      },
      {
        name: 'details-view',
        path: '/details-view/:id',
        component: () => import(/* webpackChunkName: "details-view" */ '@/views/details/DetailsView'),
        meta: {
          template: 'default-template'
        }
      }
    ]
  }
]
