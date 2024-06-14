<script setup lang="ts">
import { ref, onMounted } from 'vue'
const props = defineProps({
    text: {
        type: String,
        default: '工具名'
    },
    imgUrl: {
        type: String,
        default: '../assets/images/404.png'
    },
    path: {
        type: String,
        default: ''
    }
})
onMounted(() => {
    imgRef.value.src = imgUrl
})
const imgRef = ref()
const imgUrl = new URL(props.imgUrl, import.meta.url).href

</script>
<template>
    <RouterLink :to="path" style="text-decoration: none;">
        <div class="ele" style="width: 400px;height: 450px;">
            <p class="text">{{ text }}</p>
            <img ref="imgRef" class="img" src="" />
        </div>
    </RouterLink>
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
