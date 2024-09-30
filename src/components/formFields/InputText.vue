<template>
    <div>
        <input type="text" v-model="value"> <br>
        <span v-if="errorMessage" class="warn">{{ errorMessage }}</span>
    </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { defineProps } from 'vue';

const props = defineProps({
    name: String,
    placeholderText: String
})

const {value, errorMessage} = useField(() => props.name)
</script>

<style scoped>
.warn{
    color: crimson;
}
</style>