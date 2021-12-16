import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: "LogIn",
            component: () => import('@/views'),
        },
        {
            path: '/login',
            name: "LogIn",
            component: () => import('@/views/log-in'),
        },
        {
            path: '/tiny',
            name: "RichText",
            component: () => import('@/views/rich-text'),
        },
        // 重定向
        {
            path: '/',
            redirect: '/home'
        },
    ],
});

export default router;
