<template>
    <div class="Counter">
        <div class="col">
            <h4>Counter</h4>
            <!-- <h6>{{ getter.getCounter }}</h6>
            <h6> ({{ getter.getCounter }}) <sup>2</sup> = {{ getter.getSquaredNumber }}</h6> -->

            <h6>{{ $store.state.counter }}</h6>
            <h6> ({{ $store.state.counter }}) <sup>2</sup> = {{ $store.getters.getSquaredNumber }}</h6>
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
import { computed } from 'vue';

let $store = useStore()

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
        return $store.state.counter == 0
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