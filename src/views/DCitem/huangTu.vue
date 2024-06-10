<script setup>
import { useStore } from '@/stores/index.ts'
defineProps(["thickness"]);
const store = useStore()
</script>
<template>
    <div class="huangtu" v-for="ele in parseInt(thickness / (6 * store.sizeval)) + 1 " :key="ele">
        <div class="huangtuItem" v-for="ele in 15" :key="ele"></div>
    </div>
</template>
<style scoped lang="scss">
.huangtu {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .huangtuItem {
        flex: 1;
        height: 100%;
        border-left: 1px solid black;
    }

    .huangtuItem:first-child {
        border-left: none;
    }
}
</style>