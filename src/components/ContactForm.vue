<script>

import { store } from '../store';

import axios from 'axios';
    
    export default {
        name:'ContactForm',

        data() {
            return {
            store,
            loading: false,
            name: '',
            email: '',
            content: '',
            errors: {},
            }
        },

        methods: {
            sendForm(){
                this.loading=true;

                const data = {
                    name: this.name,
                    email: this.email,
                    content: this.message,
                   
                };
                // SVUOTO I MESSAGGI DI ERRORE  
                this.errors ={},

                // EFFETTUO LA CHIAMATA AXIOS IN POST
                axios.post(`${store.baseUrl}/api/contacts`, data),then((response)=>{
                    this.success = response.data.success;
                    if(!this.success){
                        this.errors = response.data.errors;
                    }
                    else{
                        // RIPULIAMO I DATI IN INPUT
                            this.name='';
                            this.email='';
                            this.message='';
                    }
                    this.loading=false
                })





            }

        },
        
    }
</script>




<template lang="">
    <div>
        
    </div>
</template>




<style lang="">
    
</style>