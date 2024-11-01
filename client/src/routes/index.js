import Iphone from "@/components/products/Iphone.vue";
import Home from "@/components/user/Home.vue";
import UserLogin from "@/components/user/UserLogin.vue";
import UserRegister from "@/components/user/UserRegister.vue";
import UserLayout from "@/layout/user/UserLayout.vue";
import Dashboard from "@/views/admin/Dashboard.vue";
import Product from "@/views/admin/Product.vue";
import UserManager from "@/views/admin/UserManager.vue";
import Login from "@/views/auth/Login.vue";

import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/loginadmin',
            name:'adminlogin',
            component:Login
        },
        {
            path: '/admin',
            name: 'admin',
            component: Dashboard
        },
        {
            path: '/login',
            name: 'userlogin',
            component: UserLogin
        },
        {
            path: '/register',
            name: 'userregister',
            component: UserRegister
        },
        {
            path: '/usermanager',
            name:  'usermanager',
            component: UserManager,
        },
        {
            path:'/product',
            name:'userproduct',
            component: Product,
        },
        {
            path:'/',
            name:'home',
            component: Home,
        },
        {
            path: '/iphone',
            name:'iphone',
            component: Iphone,
        },

    ],
});
export default router;