export default [
    {
        path: '/second-page',
        name: 'second-page',
        component: () => import('@/views/SecondPage.vue'),
        meta: {
          pageTitle: 'Second Page',
          breadcrumb: [
            {
              text: 'Second Page',
              active: true,
            },
          ],
        },
      },
  
    
]