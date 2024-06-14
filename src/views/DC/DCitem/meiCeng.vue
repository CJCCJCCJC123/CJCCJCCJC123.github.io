<script setup>
import { useStore } from '@/stores/index.ts'
defineProps(["thickness"]);
const store = useStore()
</script>
<template>
    <div class="mei" :style="`height:${thickness * 10 / store.sizeval}px`"></div>
</template>
<style scoped lang="scss">
.mei {
    min-height: 20px;
    background-color: black;
}
</style>