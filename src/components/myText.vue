<script setup>
import { ref, watch } from 'vue'
const iszhankai = ref(false)
const $emits = defineEmits(['changeIszhankai'])
watch(iszhankai, () => {
    $emits('changeIszhankai', iszhankai.value)
})
</script>
<template>
    <div class="text">
        <div class="top">
            <div style="cursor: pointer;" title="展开" v-if="iszhankai" @click="iszhankai = false">
                <mySvg name="zhankai" size="14px" color="blue"></mySvg>
            </div>
            <div style="cursor: pointer;" title="折叠" v-else @click="iszhankai = true">
                <mySvg name="zhedie" size="14px" color="blue"></mySvg>
            </div>
        </div>
        <div class="context" v-if="iszhankai">
            <slot name="context"></slot>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.text {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(125, 180, 247);
    background-color: #dff0fb;

    .top {
        height: 20px;
        padding-right: 2px;
        display: flex;
        justify-content: end;
        align-items: center;
    }

    .context {
        padding: 0 10px;
        font-size: 16px
    }
}
</style>