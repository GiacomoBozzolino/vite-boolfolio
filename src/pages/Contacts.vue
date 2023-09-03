
<script>
import ContactForm from '../components/ContactForm.vue';

export default {
    components: {
        ContactForm,
    }
}
</script>


<template lang="">
    <div class="container pb-5">
        <div class="row justify-content-center">
            <ContactForm/>
        </div>
    </div>
</template>

<!-- STYLE SCSS -->
<style lang="scss">

@use '../styles/generals.scss' as *;
</style>