import {createRouter, createWebHistory} from 'vue-router'

const router= createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: () => import('../views/HomeView.vue') },
        { path: '/department', component: () => import('../views/DepartmentView.vue') },
        { path: '/employee', component: () => import('../views/EmployeeView.vue') }
        //{ path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') }
    ]
})


export default router