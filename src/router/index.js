import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
            path: '/home',
            name: "Home",
            component: () => import('@/views'),
        },
        // 重定向
        {
            path: '/',
            redirect: '/home'
        },
    ],
});

export default router;
