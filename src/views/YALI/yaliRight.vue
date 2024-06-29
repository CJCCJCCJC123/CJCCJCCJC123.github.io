<script setup>
import MySvg from '@/components/mySvg.vue';
import bus from '@/bus/Index'
import { ref, onMounted } from 'vue';
const parameter = ref({
    distance: '',
    diameter: ''
})
onMounted(() => {
    bus.on('InstrumentData', (data) => {
        parameter.value.distance = data.distance
        parameter.value.diameter = data.diameter
    })
})
const isdisabled = ref(false)
const off = () => {
    isdisabled.value = true
}
defineExpose({
    isdisabled
})
</script>
<template>
    <div class="head">
        <mySvg name="info" size="40px" color="yellow"></MySvg>
        <p>提示信息</p>
    </div>
    <div class="body">
        <p
            style="font-size: 22px;color: black;font-weight: 700;width: 100%;background-color: rgb(147, 110, 181); padding: 5px;">
            当前参数
        </p>
        <ul class="parameter">
            <li v-show="parameter.distance">
                管径：{{ parameter.distance }}cm
            </li>
            <li v-show="parameter.diameter">
                距离：{{ parameter.diameter }}mm
            </li>
        </ul>
        <p
            style="font-size: 22px;color: black;font-weight: 700;width: 100%;background-color: rgb(147, 110, 181); padding: 5px;">
            选择方法
        </p>
        <ul class="next">
            <li>
                <router-link :to="{ path: '/yalis/steadySign' }"><el-button size="large" style="font-size: 18px;"
                        @click="off" :disabled="isdisabled">稳定流（单孔）</el-button></router-link>
            </li>
            <li>
                <router-link :to="{ path: '/yalis/steadyMany' }"><el-button size="large" style="font-size: 18px;"
                        @click="off" :disabled="isdisabled">稳定流（多孔）</el-button></router-link>
            </li>
            <li>
                <router-link :to="{ path: '/yalis/steadyYue' }"><el-button size="large" style="font-size: 18px;"
                        @click="off" :disabled="isdisabled">稳定流（越流）</el-button></router-link>
            </li>
            <li>
                <router-link :to="{ path: '/yalis/steadyNo' }"><el-button size="large" style="font-size: 18px;"
                        @click="off" :disabled="isdisabled">非稳定流</el-button></router-link>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.head {
    width: 100%;
    height: 70px;
    text-align: center;
    line-height: 70px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;

}

.body {
    width: 100%;
    height: calc(100% - 70px);

    li {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .parameter {
        color: white;
        font-size: 20px;
        min-height: 30px;
    }
}
</style>