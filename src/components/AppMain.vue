<script>
import axios from 'axios';

    export default {
        name: 'AppMain',
        data (){
            return {
                baseUrl:'http://localhost:8000',
                projects: [],
                loading:true,
                maxNumChar:50
            }
        },
        created(){
            this.getProjects();

        },
        methods:{
            // IMPOSTO AXIOS
            getProjects(){
                this.loading = true;
                axios.get(`${this.baseUrl}/api/projects`).then((response)=> {
                    if(response.data.success){
                        this.projects = response.data.results;
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
        </div>   
    </div>
</template>


<style lang="scss">

  
</style>