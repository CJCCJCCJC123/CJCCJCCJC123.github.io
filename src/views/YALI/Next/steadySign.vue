<script setup>
//需要参数，含水层厚度M，井半径rw
//需要函数，稳定流判断函数justifySteadyFlow(S，t)，迭代法求渗透系数函数iterative(K)
//需要文本，提示用户在何时判断为稳定流（也可以手动输入自己的计算值），选择迭代精度
import { ref } from 'vue'
import { useBaseStore } from '@/stores/yali/base';
import { ElMessage } from 'element-plus';
import interK from '@/utils/iterative';
const baseStore = useBaseStore()
const M = ref()
const rw = ref()
const Q = ref()
const St = baseStore.St
const steadySt = ref([0, 0])
const averages = ref()
const K = ref()
const inter = ref([])
const justifySteadyFlow = () => {
    steadySt.value = St.find((ele, index) => {
        const arrSt = St.slice(index)
        const arrStaverageS = arrSt.map(ele => ele[0]).reduce((a, b) => a + b) / arrSt.length
        averages.value = arrStaverageS.toFixed(2)
        Q.value = (arrSt.map(ele => ele[2]).reduce((a, b) => a + b) / arrSt.length).toFixed(2)
        return arrSt.map(ele => ele[0]).every(ele => Math.abs(ele - arrStaverageS) < 2)
    })
    iszhankai.value = true
}
const computedparameter = () => {
    if (M.value === undefined || rw.value === undefined || Q.value === undefined || averages.value === undefined) {
        ElMessage.error('请填写完整参数')
        return
    }
    const res = interK(Q.value, M.value, averages.value, rw.value)
    K.value = res.K.toFixed(5)
    inter.value = res.inter
}
const iszhankai = ref(false)
</script>
<template>
    <div class="box">
        <div class="left">
            <div style="font-size: 30px;font-weight: bolder;margin-bottom: 20px;">第一步</div>
            <el-button type="primary" @click="justifySteadyFlow">稳定时段获取</el-button>
            <myText>
                <template #context>
                    <p>降深：{{ averages }}m</p>
                    <br>
                    <p>流量：{{ Q }}m³/h</p>
                    <br>
                    <p>时间：{{ steadySt[1] }}h</p>
                    <br>
                    <p>判断依据：稳定时刻降深收敛差距小于2m（可以手动修改）</p>
                    <br>
                </template>
            </myText>
        </div>
        <div class="middle">
            <div style="font-size: 30px;font-weight: bolder;margin-bottom: 20px;">第二步</div>
            <el-button type="primary" @click="computedparameter" style="margin-bottom: 10px;">获取参数</el-button>
            <el-form>
                <el-form-item label="流量：">
                    <el-input v-model="Q" type="number" placeholder="稳定时刻流量（m³/h）"></el-input>
                </el-form-item>
                <el-form-item label="降深：">
                    <el-input v-model="averages" type="number" placeholder="稳定时刻流量（m³/h）"></el-input>
                </el-form-item>
                <el-form-item label="厚度：">
                    <el-input v-model="M" type="number" placeholder="请输入含水层厚度（m）"></el-input>
                </el-form-item>
                <el-form-item label="井径：">
                    <el-input v-model="rw" type="number" placeholder="井半径（m）"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="right">
            <div style="font-size: 30px;font-weight: bolder;margin-bottom: 20px;">计算结果</div>
            <el-empty description="暂无结果" v-if="!K" />
            <div v-else>
                <p style="font-size: 18px;">
                    渗透系数：{{ K }} m/d
                </p>
                <myText>
                    <template #context>
                        <p>迭代法(误差小于0.00001)</p>
                        <br>
                        <p v-for="ele in inter" :key="ele">第{{ ele.n + 1 }}次：K={{ ele.K }}</p>
                        <br>
                    </template>
                </myText>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.box {
    height: 90%;
    margin: 10px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;

    .left {
        flex: 1;
        height: 100%;
        border-right: 1px solid #ccc;
        padding: 20px;
    }

    .middle {
        flex: 1;
        height: 100%;
        border-right: 1px solid #ccc;
        padding: 20px;
    }

    .right {
        flex: 1;
        height: 100%;
        padding: 20px;
    }
}
</style>