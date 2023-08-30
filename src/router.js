import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import Projects from './pages/Projects.vue';


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            component: HomePage,
        },
        {
            path:'/projects',
            name:'Projects',
            component: Projects,
        },
    ]
})


export {router};