<script>
   import { store } from '../store';
   import axios from 'axios';
   import AppLoader from '../components/AppLoader.vue';

    export default {
        name:'SingleProject',
        components:{
            AppLoader,
             
        },

        data() {
            return {
                store,
                project:null
            }
        },

        created() {
            this.getSingleProject()
        },

        methods: {
            getSingleProject(){
                store.loading=true
                axios.get(`${store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) =>{
                    if(response.data.success){
                        this.project =response.data.project
                        store.loading=false
                    }else{
                        this.$router.push({name:'not-found'});
                    }

                });
            }
        },
    }
</script>

<template lang="">
    <div class="container">
        <div class="row" v-if="store.loading">
            <div class="col-12 d-flex justify-content-center" >
                <AppLoader/>
            </div>
        </div> 
        <div class="row" v-else>
            <div class="col-12">
                <h1 class="text-center"> {{project.name}}</h1>
            </div>
               
            <div class= "">
                <img :src="`${store.baseUrl}/storage/${project.img}`" class="img-fluid" :alt="project.name"/>
            </div>
            <div >
                {{project.link}}
                <div>
                    <span v-if='project.type'>{{project.type.name}} </span>
                    <span v-else>Nessuna tecnologia</span>
                </div>
                <div v-if='project.technologies'>
                    <span class="badge text-bg-primary text-decoration-none mx-2" v-for='tech in project.technologies' :key='tech.id'>
                        {{tech.name}}
                    </span>
                </div>
            </div>
        </div>   
    </div>
            
</template>


<style lang="">
    
</style>