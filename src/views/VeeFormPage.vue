<template>
<input type="text" v-bind="emailAttrs" v-model="email">    
<pre>{{ values }}</pre>
<pre>{{ errors }}</pre>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup'

//form instance
const validation = yup.object({
    email: yup.string().required().email()
})
const {defineField, values, errors} = useForm({validationSchema: validation})
const [email, emailAttrs] = defineField('email')

</script>