<template>
    <RouterLink class="btn btn-secondary" :to="'/VeeValidateForm/classic'">classic form</RouterLink>
    <RouterLink class="btn btn-secondary" :to="'/VeeValidateForm/custom'">custom form</RouterLink>
    <RouterView> 

    </RouterView> 
</template>

<script setup> </script>

<style scoped>
.btn {
    margin: 5px 5px
}
</style>