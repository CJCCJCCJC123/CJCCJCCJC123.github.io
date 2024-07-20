<script setup>
import { useStore } from '@/stores/index.ts'
defineProps(["thickness"]);
const store = useStore()
</script>
<template>
    <div class="cushayan" v-for="ele in parseInt(thickness / (store.sizeval)) " :key="ele">
        <div :class="{ active: (item + (ele % 2)) % 2 }" class="cushayanItem" v-for="item in 12" :key="item">
        </div>
    </div>
</template>
<style scoped lang="scss">
.cushayan {
    height: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;

    .cushayanItem {
        flex: 1;
        height: 100%;

    }

    .active::after {
        content: "";
        height: 11px;
        width: 1px;
        background-color: black;
        position: absolute;
        transform: translateY(-1px)rotate(30deg)
    }

}
</style>