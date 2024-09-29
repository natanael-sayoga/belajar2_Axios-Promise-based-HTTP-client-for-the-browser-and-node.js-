<template>
    <div class="Counter">
        <div class="col">
            <h4>Counter</h4>
            <!-- this not work?! -->
            <!-- <h6>{{ data.counter }}</h6> -->

            <h6>{{ $store.getters.getCounter }}</h6>
            <h6> ({{ $store.getters.getCounter }}) <sup>2</sup> = {{ $store.getters.getSquaredNumber }}</h6>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <!-- <button v-bind:disabled="isDisabled" class="btn btn-success" v-on:click.prevent="setter.increment">+</button>
            <button v-bind:disabled="isDisabled" class="btn btn-danger" v-on:click.prevent="setter.decrement">-</button> -->

            <button v-bind:disabled="isDisabled" class="btn btn-success" v-on:click.prevent="$store.commit('increaseCounter')">+</button>
            <button v-bind:disabled="isDisabled" class="btn btn-danger" v-on:click.prevent="$store.commit('decreaseCounter')">-</button>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <!-- <button id="randButton" class="btn btn-primary" v-on:click="action.getRandomNumber">Get Random Number</button> -->
            <button id="randButton" class="btn btn-primary" v-on:click="$store.dispatch('fetchRandomNumber')">Get Random Number</button>
        </div>
    </div>
</template>

<script setup>
import { mapActions, mapGetters, mapMutations, useStore } from 'vuex';
import { computed, onBeforeMount, reactive } from 'vue';

let $store = useStore()
let data = reactive({
    counter: $store.getters.getCounter
})

// let computedCounter = computed(
    
// )

// let setter = {...mapMutations('counterModule', {
//     setCounter:'setCounter',
//     increment:'increaseCounter',
//     decrement:'decreaseCounter'
// })}

// let getter = {...mapGetters('counterModule', ['getSquaredNumber','getCounter']) }

// let action = {...mapActions('counterModule', {
//     getRandomNumber: 'fetchRandomNumber'
// })}

// const counter = computed(() => {return $store.getters.value});
// console.log(counter)


let isDisabled = computed(
    () => {
        return $store.getters.getCounter == 0
    }
)

onBeforeMount(
    () => {
        //console.log($store._state.data.counterModule.counter)
        console.log("CounterPage.vue mounted!")
        console.log(data.counter)
    }
)

</script>

<style scoped>
.Counter{
    width: 215px;
    text-align: center;
}

.btn{
    margin: 0px 6px 5px;
    width: 100px;
    font-size: 20px;
}

#randButton{
    width: fit-content;
}
</style>