export default [
    {
        path: '/authorized',
        name: 'authorized',
        component: () => import('@/views/NotAuthorized.vue'),
        meta: {
          layout: 'full',
          resource: 'Auth',
        },
      },
]