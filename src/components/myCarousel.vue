<script setup>

</script>
<template>
  <slot name="title"></slot>
  <el-carousel height="500px" type="card" motion-blur :autoplay="false">
    <el-carousel-item>
      <h3>基础数据格式</h3>
      <img style="width: 95%;" src="@/assets/help/数据1.png" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <h3>稳定流（越流）数据格式</h3>
      <img style="width: 95%;" src="@/assets/help/数据2.png" alt="">
    </el-carousel-item>
    <el-carousel-item>
      <h3>非稳定流数据格式</h3>
      <img style="width: 95%;" src="@/assets/help/数据3.png" alt="">
    </el-carousel-item>

  </el-carousel>
</template>
<style lang="scss" scoped>
.demonstration {
  color: black;
}
</style>