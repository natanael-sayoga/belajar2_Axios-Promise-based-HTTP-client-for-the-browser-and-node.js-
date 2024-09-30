<template>
    <form action="" class="myForm" v-on:submit.prevent="onSubmit()">
        <table>
            <tbody>
                <tr>
                    <td>
                        <label for="email">email</label>
                    </td>
                    <td>
                        <input id="email" type="text" v-bind="emailAttrs" v-model="email"> <br>
                        <span v-if="errors.email" class="warn"> {{ errors.email }}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="passwd">password</label>
                    </td>
                    <td>
                        <input id="passwd" type="password" v-bind="passwordAttrs" v-model="password"> <br>
                        <span v-if="errors.password" class="warn"> {{ errors.password }} </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="github">github</label>
                    </td>
                    <td>
                        <input type="url" id="github" v-bind="githubAttrs" v-model="github"> <br>
                        <span v-if="errors['link.github']" class="warn"> {{ errors['link.github'] }} </span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="twt">twitter</label>
                    </td>
                    <td>
                        <input id="twt" type="url" v-bind="twtbAttrs" v-model="twt"> <br>
                        <span v-if="errors['link.twt']" class="warn"> {{ errors['link.twt'] }} </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <input 
            type="submit" 
            class="btn btn-primary" 
            v-bind:disabled="isSubmitting" 
            v-bind:value="isSubmitting ? 'Submiting...':'Submit' "
        >
        <input 
            type="reset"
            value="clear"
            v-on:click="resetForm({ values: { email: '', password: '', link: {github: '', twt: ''} }, errors: { } })"
            class="btn btn-secondary"
        >
        <input
            type="reset"
            value="restore"
            class="btn btn-secondary"
            v-on:click="
                async () => {
                    const data = await fetchData();
                    resetForm({ values: data });
                }"
        >
    </form>
<hr>
<div>
    All Possible Value:
    <pre>{{ values }}</pre>
    only email value: <span>{{ email }}</span>
</div>
<hr>
<div>
    All Possible Errors:
    <pre class="warn">{{ errors }}</pre>
    only email Error: <span class="badge rounded-pill bg-secondary">errors.email</span> or <span class="badge rounded-pill bg-secondary">emailAttrs.error</span>
</div>
<hr>
<div>
    <pre>
        {{ meta }}
    </pre>
</div> 
</template>

<script setup>
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import { onBeforeMount, onMounted } from 'vue';
import * as yup from 'yup'

//form instance
const {
    defineField, 
    values, 
    errors, 
    handleSubmit, 
    isSubmitting, 
    meta, 
    setValues, 
    resetForm} 
= useForm({validationSchema: yup.object({
    email: yup.string().required('email tidak boleh kosong!').email(),
    password: yup.string().min(8, 'panjang password minimal 8 karakter').required('password tidak boleh kosong!'),
    link: yup.object({
        github:yup.string().url().required('url tidak boleh kosong!'),
        twt:yup.string().url()})
    })
})

const [email, emailAttrs] = defineField('email', {
    validateOnModelUpdate:false,
    props: state => ({ error: state.errors[0] })
})
const [password, passwordAttrs] = defineField('password')
const [github, githubAttrs] = defineField('link.github')
const [twt, twtbAttrs] = defineField('link.twt')

const onSubmit = handleSubmit(
    //onSuccess
    values => {
        //simulating a POST request:
        return new Promise(
            resolve => {
                setTimeout(
                    () => 
                        {
                            alert(JSON.stringify(values, null, 2))
                            resolve()
                }, 2000)
            })
        //alert(JSON.stringify(meta.value, null, 2))
    },
    //onError
    ({values, errors, results}) => {
        alert("fail to submit")
        alert(JSON.stringify(errors.email, null, 2))
        alert(JSON.stringify(meta.value, null, 2))
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

<style scoped>
.warn{
    color: crimson;
}
.myForm > div{
    margin: 5px 0px 5px
}
form > .btn{
    margin: 0px 5px;
}
</style>