<template>
    <div>
        <input type="email" v-model="value" :placeholder="props.placeholderEmail"> <br>
        <span v-if="errorMessage" class="warn">{{ errorMessage }}</span>
    </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import { defineProps } from 'vue';
import * as yup from 'yup'

const props = defineProps({
    name: String,
    placeholderEmail:String
})

const {value, errorMessage} = useField(
    () => props.name
)

</script>

<style scoped>
.warn{
    color: crimson;
}
</style>