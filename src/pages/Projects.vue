<script>
import axios from 'axios';
import AppLoader from '../components/AppLoader.vue';
import ProjectsCard from '../components/ProjectsCard.vue';
import { store } from '../store';


    export default {
        name: 'Projects',


        components:{
            AppLoader,
            ProjectsCard,
            

        },
        data (){
            return {
                store,
                projects: [],
                
                currentPage: 1,
                lastPage:null,
                
            }
        },
        created(){
            this.getProjects(1);

        },
        methods:{
            // IMPOSTO AXIOS
            getProjects(num_page){
                store.loading = true;
                axios.get(`${store.baseUrl}/api/projects`,{params: {page: num_page}}).then((response)=> {
                    if(response.data.success){
                        this.projects = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage= response.data.results.last_page;
                        store.loading = false;
                       
                    }
                })
            },
        }
        
    }
</script>


<template lang="">
    
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="loading">
                <AppLoader/>
            </div>
            <div class="row "  v-else>
                <div class='col-12 col-md-4' v-for="project in projects" :key="project.id">
                    <ProjectsCard :project="project"/>
                </div>
                <div class="col-12 ">
                    <div class="d-flex justify-content-center">
                        <nav >
                            <ul class="pagination">
                                <li :class="currentPage === 1 ? 'disabled' :''">
                                    <button class="page-link" @click='getProjects(currentPage - 1)'>Precedente</button>
                                </li>
                                <li :class="currentPage === lastPage ? 'disabled' :''">
                                    <button class="page-link" @click='getProjects(currentPage + 1)'>Successivo</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            
        </div>   
    </div>
</template>


<style lang="scss">

  
</style>