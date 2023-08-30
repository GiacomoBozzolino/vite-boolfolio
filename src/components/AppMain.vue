<script>
import axios from 'axios';
import AppLoader from './AppLoader.vue';

    export default {
        name: 'AppMain',


        components:{
            AppLoader

        },
        data (){
            return {
                baseUrl:'http://localhost:8000',
                projects: [],
                loading:true,
                maxNumChar:50,
                currentPage: 1,
                lastPage:null,
                loading: true,
            }
        },
        created(){
            this.getProjects(1);

        },
        methods:{
            // IMPOSTO AXIOS
            getProjects(num_page){
                this.loading = true;
                axios.get(`${this.baseUrl}/api/projects`,{params: {page: num_page}}).then((response)=> {
                    if(response.data.success){
                        this.projects = response.data.results.data;
                        this.currentPage = response.data.results.current_page;
                        this.lastPage= response.data.results.last_page;
                        this.loading = false;
                       
                    }
                })
            },

            truncateText(text){
                if(text.length > this.maxNumChar){
                    return text.substr(0,50) + '...'
                }
                return text;
            }

        }
        
    }
</script>


<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">Boolfolio</h1>
            </div>
        </div> 
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="loading">
                <AppLoader/>
            </div>
            <div class="row "  v-else>
                <div class='col-12 col-md-4' v-for="project in projects" :key="project.id">
                <div class="card my-3">
                    <div class="card-header">
                        {{project.name}}
    
                    </div>
                    <div class= "">
                        <img :src="`${baseUrl}/storage/${project.img}`" class="card-img-top" :alt="projects.name">
    
                    </div>
                    <div class="card-body">
                        {{truncateText(project.link)}}
                        <div>
                            <span v-if='project.type'>{{project.type.name}} </span>
                            <span v-else>Nessuna tecnologia</span>
                        </div>
                        <div v-if='project.technologies'>
                            <span>
                                <span class="badge text-bg-primary text-decoration-none mx-2" v-for='tech in project.technologies' :key='tech.id'>
                                    {{tech.name}}
                                </span>

                            </span>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a href="" class="btn btn-sm btn-primary"> Guarda il progetto</a>
                    </div>

                </div>
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