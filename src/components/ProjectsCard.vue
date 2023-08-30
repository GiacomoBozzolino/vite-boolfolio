<script>
import { store } from '../store';


    export default {
        name:"ProjectsCard",

        props:{
            project: Object
        },

        data() {
            return {
                maxNumChar:50,
                store,
                
            }
        },

        methods: {
            truncateText(text){
                    if(text.length > this.maxNumChar){
                        return text.substr(0,50) + '...'
                    }
                    return text;
                }
            
        },




        
    }

</script>


<template lang="">
     
            <div class="card my-3">
                <div class="card-header">
                    {{project.name}}
                </div>
                <div class= "">
                    <img :src="`${store.baseUrl}/storage/${project.img}`" class="card-img-top" :alt="project.name">
                </div>
                <div class="card-body">
                    {{truncateText(project.link)}}
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
                <div class="card-footer">
                    <a href="" class="btn btn-sm btn-primary"> Guarda il progetto</a>
                </div>
            </div>
       
       
</template>



<style lang="">
    
</style>