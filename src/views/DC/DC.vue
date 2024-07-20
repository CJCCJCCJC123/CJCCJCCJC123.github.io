<script setup>
import { onMounted, defineProps, ref, watch } from "vue";
import { useStore } from "@/stores/index.ts";
import huangtu from "@/views/DC/DCitem/huangTu.vue";
import lishi from "@/views/DC/DCitem/liShi.vue";
import fenshayan from "@/views/DC/DCitem/fenshaYan.vue";
import niyan from "@/views/DC/DCitem/niYan.vue";
import xishayan from "@/views/DC/DCitem/xishaYan.vue";
import tanzhiniyan from "@/views/DC/DCitem/tanzhiniYan.vue";
import mei from "@/views/DC/DCitem/meiCeng.vue";
import shazhiniyan from "@/views/DC/DCitem/nizhishaYan.vue";
import cushayan from "@/views/DC/DCitem/cushaYan.vue";
import zhongshayan from "@/views/DC/DCitem/zhongshaYan.vue";
import huiyan from "@/views/DC/DCitem/huiYan.vue"
import niantu from "@/views/DC/DCitem/nianTu.vue"
import yeyan from "@/views/DC/DCitem/yeYan.vue"
import baiyunyan from "@/views/DC/DCitem/baiyunYan.vue"
const props = defineProps(["DCitem"]);
const store = useStore()
const CDdata = ref({
    ...props.DCitem,
    ishuangtu: false,
    islishi: false,
    iscushayan: false,
    iszhongshayan: false,
    isshazhiniyan: false,
    isniyan: false,
    isfenshayan: false,
    isxishayan: false,
    istanzhiniyan: false,
    ismei: false,
    ishuiyan: false,
    isniantu: false,
    isyeyan: false,
    isbaiyunyan: false
})
const filterFn = () => {
    CDdata.value.ishuangtu = false;
    CDdata.value.islishi = false;
    CDdata.value.iscushayan = false;
    CDdata.value.iszhongshayan = false;
    CDdata.value.isshazhiniyan = false;
    CDdata.value.isniyan = false;
    CDdata.value.isfenshayan = false;
    CDdata.value.isxishayan = false;
    CDdata.value.istanzhiniyan = false;
    CDdata.value.ismei = false;
    CDdata.value.ishuiyan = false;
    CDdata.value.isniantu = false;
    CDdata.value.isyeyan = false;
    CDdata.value.isbaiyunyan = false
    if (store.formList[CDdata.value.id - 1].name === "黄土") {
        CDdata.value.ishuangtu = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "砾石") {
        CDdata.value.islishi = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "粗砂岩") {
        CDdata.value.iscushayan = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "中砂岩") {
        CDdata.value.iszhongshayan = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "砂质泥岩") {
        CDdata.value.isshazhiniyan = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "泥岩") {
        CDdata.value.isniyan = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "粉砂岩") {
        CDdata.value.isfenshayan = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "细砂岩") {
        CDdata.value.isxishayan = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "炭质泥岩") {
        CDdata.value.istanzhiniyan = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "煤层") {
        CDdata.value.ismei = true;
        return;
    } else if (store.formList[CDdata.value.id - 1].name === "灰岩") {
        CDdata.value.ishuiyan = true
    } else if (store.formList[CDdata.value.id - 1].name === "粘土") {
        CDdata.value.isniantu = true
    } else if (store.formList[CDdata.value.id - 1].name === "页岩") {
        CDdata.value.isyeyan = true
    } else if (store.formList[CDdata.value.id - 1].name === "白云岩") {
        CDdata.value.isbaiyunyan = true
    }
}
onMounted(() => {
    filterFn()
})
watch(() => store.formList[CDdata.value.id - 1].name, () => {
    filterFn()
})
</script>
<template>
    <div class="DCcol" :style="'height: ' + props.DCitem.thickness * 10 / store.sizeval + 'px;'">
        <div v-show="CDdata.ishuangtu">
            <huangtu :thickness="props.DCitem.thickness"></huangtu>
        </div>
        <div v-show="CDdata.islishi">
            <lishi :thickness="props.DCitem.thickness"></lishi>
        </div>
        <div v-show="CDdata.isfenshayan">
            <fenshayan :thickness="props.DCitem.thickness"></fenshayan>
        </div>
        <div v-show="CDdata.isniyan">
            <niyan :thickness="props.DCitem.thickness"></niyan>
        </div>
        <div v-show="CDdata.isxishayan">
            <xishayan :thickness="props.DCitem.thickness"></xishayan>
        </div>
        <div v-show="CDdata.istanzhiniyan">
            <tanzhiniyan :thickness="props.DCitem.thickness"></tanzhiniyan>
        </div>
        <div v-show="CDdata.isshazhiniyan">
            <shazhiniyan :thickness="props.DCitem.thickness"></shazhiniyan>
        </div>
        <div v-show="CDdata.iscushayan">
            <cushayan :thickness="props.DCitem.thickness"></cushayan>
        </div>
        <div v-show="CDdata.iszhongshayan">
            <zhongshayan :thickness="props.DCitem.thickness"></zhongshayan>
        </div>
        <div v-show="CDdata.ismei">
            <mei :thickness="props.DCitem.thickness"></mei>
        </div>
        <div v-show="CDdata.ishuiyan">
            <huiyan :thickness="props.DCitem.thickness"></huiyan>
        </div>
        <div v-show="CDdata.isniantu">
            <niantu :thickness="props.DCitem.thickness"></niantu>
        </div>
        <div v-show="CDdata.isyeyan">
            <yeyan :thickness="props.DCitem.thickness"></yeyan>
        </div>
        <div v-show="CDdata.isbaiyunyan">
            <baiyunyan :thickness="props.DCitem.thickness"></baiyunyan>
        </div>
    </div>
</template>
<style scoped lang="scss">
.DCcol {
    min-height: 20px;
    overflow: hidden;
}
</style>