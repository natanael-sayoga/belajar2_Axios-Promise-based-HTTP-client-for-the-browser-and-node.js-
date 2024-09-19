<template>
    <NavBar>

    </NavBar>
    <div class="container border">
        <RouterView>
            
        </RouterView>
    </div>
</template>

<script setup>
import { reactive } from "vue";
import NavBar from "./components/NavBar.vue";

let data = reactive({
    content: "My Page Content"
})
</script>