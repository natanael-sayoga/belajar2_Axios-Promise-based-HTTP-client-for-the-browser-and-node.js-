<template>
    <RouterLink
        active-class="active underlined">
        {{ pageTitle }}
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { defineProps } from 'vue';
const navBarLinkComps = defineProps(['pageTitle'])

</script>

<style scoped>
.underlined{
    text-decoration: underline !important
}
</style>