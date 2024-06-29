<script setup>
import getxlsx from '@/utils/excel'
import interK from '@/utils/iterative'
import { ref } from 'vue'
import * as echarts from "echarts";
const tableData = ref([])
const beforeUpload = (file) => {
    return getxlsx(file, tableData)
}

const ech1 = ref()
const ech2 = ref()
const isCount = ref(false)
const n = ref(0)
const K = ref(0)
const countK = () => {
    isCount.value = true
    const Q = tableData.value.map(item => item.流量)
    const S = tableData.value.map(item => item.降深)
    n.value = S.findIndex((ele, index) => {
        const F5 = S.slice(index, index + 5)
        return F5.every((ele, index, arr) => {
            return ele === arr[0]
        })
    })
    const NewQ = Q.filter((ele, index) => {
        return index > n.value
    })
    const averQ = (NewQ.reduce((sum, ele) => {
        return sum + ele
    }, 0) / NewQ.length).toFixed(2)
    console.log(averQ)
    K.value = interK(averQ, 10, S[n.value], 1)
}
const getEch = () => {
    const Q = tableData.value.map(item => item.流量)
    const S = tableData.value.map(item => item.降深)
    const myChart1 = echarts.init(ech1.value)
    const myChart2 = echarts.init(ech2.value)
    myChart1.setOption({
        xAxis: {
            type: 'category',
        },
        yAxis: {},
        series: [
            {
                data: Q,
                type: 'scatter'
            }
        ]
    })
    myChart2.setOption({
        xAxis: {
            type: 'category',
        },
        yAxis: {},
        series: [
            {
                data: S,
                type: 'scatter'
            }
        ]
    })
}

</script>
<template>
    <div>
        <div style="display: flex; justify-content: space-around; width: 300px;">
            <el-upload action="#" :before-upload="beforeUpload" :show-file-list="false" accept=".xlsx, .xls">
                <template v-slot:trigger>
                    <el-button size="small" type="primary">选取文件</el-button>
                </template>
            </el-upload>
            <el-button size="small" type="primary" @click="getEch">读取数据</el-button>
            <el-button size="small" type="primary" @click="countK">计算参数</el-button>
        </div>
        <!-- 解析出来的数据 -->
        <el-card>
            <el-row>
                <el-col :span="6">
                    <el-table :data="tableData">
                        <el-table-column prop="时间" label="时间" width="100"> </el-table-column>
                        <el-table-column prop="流量" label="流量" width="100"> </el-table-column>
                        <el-table-column prop="降深" label="降深" width="100"> </el-table-column>
                    </el-table>
                </el-col>
                <el-col :span="12">
                    <div class="echarts" ref="ech1"></div>
                    <div class="echarts" ref="ech2"></div>
                </el-col>
                <el-col :span="6">
                    <div class="count" v-show="isCount">
                        <el-descriptions title="序列选择" :column="2">
                            <el-descriptions-item label="稳定时间">{{ n }} 之后</el-descriptions-item>
                        </el-descriptions>
                        <el-descriptions title="计算结果" :column="2">
                            <el-descriptions-item label="渗透系数">{{ K }}</el-descriptions-item>
                        </el-descriptions>
                    </div>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<style lang="scss" scoped>
.echarts {
    width: 100%;
    height: 400px;
    background-color: pink;
    margin: 0 auto;
    margin-top: 50px;
}

.count {
    width: 80%;


    margin: 0 auto;
    margin-top: 50px;
}
</style>