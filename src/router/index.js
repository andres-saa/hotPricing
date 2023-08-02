    import { createRouter, createWebHashHistory } from 'vue-router';
    import AppLayout from '@/layout/AppLayout.vue';

    const router = createRouter({
        history: createWebHashHistory(),
        routes: [
            {
                path: '/',
                component: AppLayout,
                redirect:'/landing',
                children: [
                    
                    {
                        path: '/admin',
                        name: 'dashboard',
                        component: () => import('@/views/Dashboard.vue')
                    },

                    {
                        path: '/crudHoteles',
                        name: 'crudHoteles',
                        component: () => import('@/views/pages/CrudHoteles.vue')
                    },
                    {
                        path: '/crudNoticias',
                        name: 'crudNoticias',
                        component: () => import('@/views/pages/CrudNoticias.vue')
                    },

                ]
            },


            {
                path: '/Landing',
                name: 'landing',
                component: () => import('@/views/pages/Landing.vue')
            },
            // {
            //     path: '/pages/notfound',
            //     name: 'notfound',
            //     component: () => import('@/views/pages/NotFound.vue')
            // },

            {
                path: '/auth/login',
                name: 'login',
                component: () => import('@/views/pages/auth/Login.vue')
            },
            // {
            //     path: '/auth/access',
            //     name: 'accessDenied',
            //     component: () => import('@/views/pages/auth/Access.vue')
            // },
            // {
            //     path: '/auth/error',
            //     name: 'error',
            //     component: () => import('@/views/pages/auth/Error.vue')
            // },

            
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/pages/Home.vue'),
                children:[
                ]
                
            },

            {
                path: '/:hotel',
                name: 'hotel',
                component: () => import('@/views/pages/hotelView.vue'),
                children:[
                ]
                
            },

            {
                path: '/ciudad',
                name: 'ciudad',
                component: () => import('@/views/pages/HotelList.vue'),
                children:[
                ]
                
            },
        ]
    });

    export default router;
