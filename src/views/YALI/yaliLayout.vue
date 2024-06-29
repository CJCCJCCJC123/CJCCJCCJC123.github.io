<script setup>
import Left from './yaliLeft.vue'
import Right from './yaliRight.vue'
import MiddleHead from './yaliMiddleHead.vue'
import { ref, nextTick } from 'vue'
const refresh = ref(true)
const refresh_router = () => {
    refresh.value = !refresh.value
    nextTick(() => {
        setTimeout(() => {
            refresh.value = !refresh.value
        }, 500);
    })
}
const Rightref = ref()
const mig = () => {
    Rightref.value.isdisabled = false
}
</script>
<template>
    <div class="bigBox">
        <div class="left">
            <Left></Left>
        </div>
        <div class="middle">
            <MiddleHead @refreshEcharts="refresh_router" @mig="mig"></MiddleHead>
            <router-view v-show="refresh"></router-view>
        </div>
        <div class="right">
            <Right ref="Rightref"></Right>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bigBox {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #cccccc;

    .left {
        width: 12%;
        min-width: 200px;
        background-color: rgb(80, 60, 99);
    }

    .middle {
        width: 76%;

    }

    .right {
        width: 12%;
        min-width: 200px;
        background-color: rgb(80, 60, 99);
    }
}
</style>