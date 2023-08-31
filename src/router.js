import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import Projects from './pages/Projects.vue';
import TypesList from './pages/TypesList.vue';
import AboutUs from './pages/AboutUs.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue'



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
        {
            path:'/projects/:slug',
            name:'SingleProject',
            component: SingleProject,
        },

        {
            path:'/pagina-non-trovata',
            name:'not-found',
            component:NotFound
        },
        {
            path:'/:catchAll(.*)',
            redirect:'/pagina-non-trovata'
        }
    ]
})


export {router};