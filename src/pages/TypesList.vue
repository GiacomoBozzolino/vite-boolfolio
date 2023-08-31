<script>
import AppLoader from '../components/AppLoader.vue';
import { store } from '../store';
    export default {
        name: "TypesList",
        components:{
            AppLoader,
           
           
        },
        data() {
            return {
                store, 
            }
        },
    }
</script>


<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center align-items-center py-5" v-if="store.loading">
                <AppLoader/>
            </div>
            <div class="col-12" v-else>
                <h1 class="text-center">Boolfolio</h1>
            </div>
        </div> 
    </div>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-3">
                <div>
                    <h1>Tipologie</h1>
                </div>
            </div>
        </div>
        
    </div>
</template>





<style lang="">
    
</style>