<script setup lang="ts">
import Figure from "@/views/DC/theFigure.vue";
import Data from "@/views/DC/theData.vue";
</script>
<template>
  <div class="container">
    <Data></Data>
    <Figure></Figure>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  overflow: hidden;
}
</style>
