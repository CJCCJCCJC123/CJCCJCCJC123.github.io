<script setup>
import { onMounted, defineProps, ref, watch } from "vue";
import { useStore } from "@/stores/index.ts";
import huangtu from "@/views/DCitem/huangTu.vue";
import lishi from "@/views/DCitem/liShi.vue";
import fenshayan from "@/views/DCitem/fenshaYan.vue";
import niyan from "@/views/DCitem/niYan.vue";
import xishayan from "@/views/DCitem/xishaYan.vue";
import tanzhiniyan from "@/views/DCitem/tanzhiniYan.vue";
import mei from "@/views/DCitem/meiCeng.vue";
import shazhiniyan from "@/views/DCitem/nizhishaYan.vue";
import cushayan from "@/views/DCitem/cushaYan.vue";
import zhongshayan from "@/views/DCitem/zhongshaYan.vue";
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
    ismei: false
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
    </div>
</template>
<style scoped lang="scss">
.DCcol {
    min-height: 20px;
    overflow: hidden;
}
</style>