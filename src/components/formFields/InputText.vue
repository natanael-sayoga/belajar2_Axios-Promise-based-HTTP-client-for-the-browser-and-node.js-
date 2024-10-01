<template>
    <div>
        <input type="text" v-model="value"> <br>
        <span v-if="errorMessage" class="warn">{{ errorMessage }}</span>
    </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { defineProps } from 'vue';
import * as yup from 'yup'

const props = defineProps({
    name: String,
    placeholderText: String
})

const {value, errorMessage} = useField(
    () => props.name,
    yup.string().required('harus diisi')
)
</script>

<style scoped>
.warn{
    color: crimson;
}
</style>