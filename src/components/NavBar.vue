<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Belajar Axio</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <NavBarLink v-for="(page, index) in $webPages.getAllPages()" 
                    class="nav-item nav-link"
                    :to="`${page.pageUrl}`"
                    v-bind:page-title="`${page.pageTitle}`"
                    v-bind:key="index">
                </NavBarLink>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { inject } from 'vue';
import NavBarLink from './NavBarLink.vue';

let $webPages = inject('$webPages')

console.log($webPages)

</script>