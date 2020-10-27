import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "../view/Home";

Vue.use(VueRouter)

const router=new VueRouter({
    routes: [
        {
            path: '/',
            name:'Home',
            component: Home,
        },
        {
        path: '/Users',
            component: ()=>import('../view/Users.vue')
        },
    ]
})

export default router
