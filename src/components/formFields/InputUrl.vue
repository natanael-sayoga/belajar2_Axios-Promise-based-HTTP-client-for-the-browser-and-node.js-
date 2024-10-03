<template>
    <div>
        <input type="url" v-model="value" v-bind:placeholder="props.placeholderUrl"> <br>
        <span v-if="errorMessage" class="warn">{{ errorMessage }}</span>
    </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { defineProps } from 'vue';
import * as yup from 'yup'

const props = defineProps({
    name: String,
    placeholderUrl: String
})

const {value, errorMessage } = useField(
    () => props.name,
    yup.string().required('harus diisi').url('url tidak valid')
)
</script>

<style scoped>
.warn{
    color: crimson;
}
</style>