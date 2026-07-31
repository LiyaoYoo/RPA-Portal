import {
    createRouter,
    createWebHistory
} from "vue-router";


import MainLayout from "../layouts/MainLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";


import Home from "../views/Home.vue";
import Profile from "../views/Profile.vue";


import DTMRA from "../views/apps/DTMRA.vue";
import NBMRA from "../views/apps/NBMRA.vue";
import Optimization from "../views/apps/Optimization.vue";

import Applications from "../views/Applications.vue";


import Login from "../views/Login.vue";



const routes = [

    // =========================
    // Authentication
    // =========================

    {
        path: "/",
        component: AuthLayout,

        children: [

            {
                path: "login",
                name: "Login",
                component: Login
            }

        ]

    },


    // =========================
    // Enterprise Application
    // =========================

    {
        path: "/",
        component: MainLayout,

        children: [

            {
                path: "Home",
                name: "Home",
                component: Home
            },


            {
                path: "dtmra",
                name: "DTMRA",
                component: DTMRA
            },


            {
                path: "optimization",
                name: "Optimization",
                component: Optimization
            },

            {
                path: "nbmra",
                name: "NBMRA",
                component: NBMRA
            },
            {
                path: "profile",
                name: "Profile",
                component: Profile
            },


            {
                path: "applications",
                name: "Applications",
                component: Applications
            }

        ]

    }

];



const router = createRouter({

    history: createWebHistory(),

    routes,

});



//
// Route Guard
//
// 检查用户是否登录
//

router.beforeEach((to, from, next) => {


    // 不需要登录的页面

    const publicPages = [
        "/login"
    ]


    const isPublic =
        publicPages.includes(to.path)



    // 检查登录状态

    const currentUser =
        localStorage.getItem(
            "currentUser"
        )



    if (!isPublic && !currentUser) {

        // 未登录

        next("/login")

    }
    else {

        next()

    }


})


export default router;