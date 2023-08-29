<script>
import axios from 'axios';

    export default {
        name: 'AppMain',
        data (){
            return {
                baseUrl:'http://localhost:8000',
                projects: [],
                loading:true
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
            <div class='col-12' v-for="project in projects" :key="project.id">
                {{project.name}}
            </div>
        </div>   
    </div>
</template>


<style lang="scss">

  
</style>