<script setup>
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
//四大点击事件
const $emits = defineEmits(['refreshEcharts', 'mig'])
const refresh = () => {
    //使用router刷新页面
    $emits('refreshEcharts')
}
const fullScreen = () => {
    let full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
const Delete = () => {
    router.go(0)
}
const out = () => {
    router.push('/')
}
const returnLast = () => {
    $emits('mig')
    router.push('/yalis')
}
</script>
<template>
    <div class="head">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="ele in route.matched" :key="ele" :to="{ path: `${ele.path}` }">
                {{ ele.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="head_left">
            <el-popover placement="bottom" :width="1000" trigger="click">
                <template #reference>
                    <el-button circle>
                        <mySvg name="wenhao" size="20px" color="black"></mySvg>
                    </el-button>
                </template>
                <myCarousel>
                    <template #title>
                        <h2 style="text-align: center; background-color: gray;color:white;margin-bottom: 20px;">
                            excel表格文件格式规定（区分大小写）</h2>
                    </template>
                </myCarousel>
            </el-popover>
            <el-button type="primary" circle>
                <mySvg name="refresh" size="20px" color="white" @click="refresh"></mySvg>
            </el-button>
            <el-button type="success" circle>
                <mySvg name="fullScreen" size="20px" color="white" @click="fullScreen"></mySvg>
            </el-button>
            <el-button type="info" circle>
                <mySvg name="returnLast" size="20px" color="white" @click="returnLast"></mySvg>
            </el-button>
            <el-popconfirm width="220" confirm-button-text="确定" cancel-button-text="取消" @confirm="Delete"
                title="确定要清空数据吗?">
                <template #reference>
                    <el-button type="warning" circle>
                        <mySvg name="delete" size="20px" color="white"></mySvg>
                    </el-button>
                </template>
            </el-popconfirm>
            <el-popconfirm width="220" cancel-button-text="取消" confirm-button-text="确定" @confirm="out"
                title="确定要返回首页吗?">
                <template #reference>
                    <el-button type="danger" circle>
                        <mySvg name="out" size="20px" color="white"></mySvg>
                    </el-button>
                </template>
            </el-popconfirm>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.head {
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    line-height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
}
</style>