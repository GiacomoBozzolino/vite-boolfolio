import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import Projects from './pages/Projects.vue';
import TypesList from './pages/TypesList.vue';
import AboutUs from './pages/AboutUs.vue';


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
        {
            path:'/types',
            name:'Types',
            component: TypesList,
        },
        {
            path:'/about-us',
            name:'AboutUs',
            component: AboutUs,
        },
    ]
})


export {router};