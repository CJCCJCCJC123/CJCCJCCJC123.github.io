<script setup lang="ts">
</script>
<template>
  <el-card style="margin: 20px;">
    <template #header>
      <h1 style="font-size: 50px;">水文地质实用在线工具</h1>
    </template>
    <template #default>
      <div style="display: flex; justify-content:space-around ">
        <img src="@/assets/images/cd.png" alt="">
        <toolItems text="地层柱状图绘制" imgUrl="../assets/images/cd.png" path="/dc"></toolItems>
        <toolItems text="双压力计抽水试验" imgUrl="../assets/images/yali.png" path="/yali"></toolItems>
      </div>
    </template>
  </el-card>
</template>

<style scoped lang="scss"></style>
