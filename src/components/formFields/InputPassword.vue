<template>
    <div>
        <input type="password" v-model="value"> <br>
        <span v-if="errorMessage" class="warn">{{ errorMessage }}</span>
    </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { defineProps } from 'vue';
import * as yup from 'yup'

const props = defineProps({
    name: String
})

const {value, errorMessage} = useField(
    () => props.name,
    yup.string().required('harus diisi').min(8, 'panjang password minimal 8 karakter')
)
</script>

<style scoped>
.warn{
    color: crimson;
}
</style>