export default [


    {
        path: '/login',
        name: 'auth-login',
        component: () => import('@/views/Login.vue'),
        meta: {
            layout: 'full',
            resource: 'Auth',
            redirectIfLoggedIn: true,
            requiresAuth: false,
        },
    },
]