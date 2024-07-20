<script setup>
import { useStore } from '@/stores/index.ts'
defineProps(["thickness"]);
const store = useStore()
</script>
<template>
    <div class="cushayan" v-for="ele in parseInt(thickness / (store.sizeval)) * 2 " :key="ele">

    </div>
</template>
<style scoped lang="scss">
.cushayan {
    height: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;

    .cushayanItem {
        flex: 1;
        height: 100%;

    }

}
</style>