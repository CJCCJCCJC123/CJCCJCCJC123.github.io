<script setup lang="ts">
</script>
<template>
  <el-card style="margin: 20px;">
    <template #header>
      <h1 style="font-size: 50px;">水文地质实用在线工具</h1>
    </template>
    <template #default>
      <div style="display: flex; justify-content:space-around ">
        <RouterLink to="/dc" style="text-decoration: none;">
          <div class="ele" style="width: 400px;height: 450px;">
            <p class="text">地层柱状图绘制</p>
            <img ref="imgRef" class="img" src="../assets/images/cd.png" />
          </div>
        </RouterLink>
        <RouterLink to="/yalis" style="text-decoration: none;">
          <div class="ele" style="width: 400px;height: 450px;">
            <p class="text">双压力计抽水试验</p>
            <img ref="imgRef" class="img" src="../assets/images/yali.png" />
          </div>
        </RouterLink>
      </div>
    </template>
  </el-card>
</template>

<style scoped lang="scss">
.ele:hover {
  //悬浮
  transform: scale(1.03);
  transition: all 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  .img {
    border-radius: 0 0 5px 5px;
  }
}

.text {
  width: 100%;
  height: 10%;
  line-height: 50px;
  font-size: 25px;
  text-align: center;
  color: black;
}

.img {
  width: 100%;
  height: 90%;
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  border: 3px solid black;
}
</style>
