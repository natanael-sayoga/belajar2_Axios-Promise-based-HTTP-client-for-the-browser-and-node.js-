<template>
    <form action="" v-on:submit.prevent="onSubmit()">
        <InputEmail v-bind:name="'email'" v-bind:placeholder-email="'isikan email'" v-model="data.email"></InputEmail> 
        <InputPassword v-bind:name="'password'"></InputPassword>
        <InputUrl :name="'link.github'" :placeholder-url="'github url'"/>
        <InputUrl :name="'link.twt'" :placeholder-url="'x url'"/>
        <input type="submit" :disabled ="isSubmitting" :value="isSubmitting? 'submitting...':'submit'" class="btn btn-primary">
    </form>
    <hr>
    values
    <pre>
        {{ values }}
    </pre>
    <hr>
    <pre>
        {{ meta }}
    </pre>
    <hr>
    <pre>
        reactive:
        {{ data.email }}
    </pre>
</template>

<script setup>
import InputEmail from '@/components/formFields/InputEmail.vue';
import InputPassword from '@/components/formFields/InputPassword.vue';
import InputUrl from '@/components/formFields/InputUrl.vue';

import * as yup from 'yup'
import { useForm } from 'vee-validate';
import { reactive, onBeforeMount } from 'vue';

let data = reactive({
    email:""
})

const validation = yup.object({
    email: yup.string().required('email harus diisi').email(),
    password: yup.string().min(8, 'panjang password minimal 8 karakter').required('password tidak boleh kosong!'),
    link: yup.object({
        github:yup.string().url().required('link github tidak boleh kosong'),
        twt:yup.string().url().required('link twitter tidak boleh kosong')})
    })
const {values, handleSubmit, isSubmitting, meta, resetForm} = useForm({
    validationSchema: validation
})
const onSubmit = handleSubmit(
    //on success    
    values => {
        return new Promise(
            resolve => {
                setTimeout(
                    () => {
                        alert(JSON.stringify(values, null, 2))
                        resolve()},
                    2000
                )
            }
        )
    },
    //on failure
    ({values, errors, results}) => {
        alert("submission fail")
        alert(JSON.stringify(errors, null, 2))
        alert(JSON.stringify(results, null, 2))
    }
)

//simulating data fetching
async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                email: 'test@email.com',
                password: 'p@$$w0rd',
                link: {
                    github: 'https://github.com/logaretm',
                    twt: 'https://x.com/logaretm'
                }
            });
        }, 1500);
    });
}
onBeforeMount(
    async ()=>{
        // setValues({
        //     email: 'test@example.com',
        //     password: 'p@$$w0rd',
        // })
        const data = await fetchData();
        resetForm({ values: data, errors: { } });
    }
)
</script>