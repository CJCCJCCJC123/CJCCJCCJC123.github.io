<script setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { useBaseStore } from '@/stores/yali/base';
import getxlsx from '@/utils/excel'
import bus from '@/bus/Index'
const dialogVisible = ref(false)
const baseStore = useBaseStore()
const Select = () => {
    dialogVisible.value = true
}
//仪器规格
const InstrumentData = {
    distance: [
        { label: '150cm', value: 150 },
        { label: '190cm', value: 190 },
        { label: '230cm', value: 230 },
        { label: '270cm', value: 270 }
    ],
    diameter: [
        { label: '14mm', value: 14 },
        { label: '16mm', value: 16 },
        { label: '18mm', value: 18 },
        { label: '20mm', value: 20 },
        { label: '22mm', value: 22 },
    ]
}
//非空校验
const validate = () => {
    if (distanceSel.value === '' || diameterSel.value === '') {
        ElMessage.error('请选择仪器规格')
        return false
    }
    return true
}
const distanceSel = ref('')
const diameterSel = ref('')
//弹窗事件
const isConfirm = ref(false)
const closed = () => {
    if (!isConfirm.value) {

        distanceSel.value = ''
        diameterSel.value = ''
    }
    isConfirm.value = false
}
const onConfirm = () => {
    if (!validate()) {
        return
    }
    dialogVisible.value = false
    //向middle传递仪器规格
    bus.emit('InstrumentData', { distance: distanceSel.value, diameter: diameterSel.value })
    baseStore.parameter = { distance: distanceSel.value, diameter: diameterSel.value }
    isConfirm.value = true
}
//上传文件
const beforeUpload = (file) => {
    return getxlsx(file)
}
const getBaseFig = () => {
    if (distanceSel.value === '' || diameterSel.value === '') {
        ElMessage.error('请先选择仪器规格')
        return
    } else if (!baseStore.testData) {
        ElMessage.error('请先导入试验数据')
        return
    }
    bus.emit('getBaseFig')
}
</script>
<template>
    <div class="head">
        <mySvg name="stress" size="40px" color="orange"></mySvg>
        <p>双压力计放水试验</p>
    </div>
    <div class="body">
        <ul>
            <li>
                <el-button size="large" style="font-size: large;" @click="Select">选择仪器规格</el-button>
            </li>
            <li>
                <el-upload action="#" :before-upload="beforeUpload" :show-file-list="false" accept=".xlsx, .xls">
                    <template v-slot:trigger>
                        <el-button size="large" style="font-size: large;">导入试验数据</el-button>
                    </template>
                </el-upload>
            </li>
            <li>
                <el-button size="large" style="font-size: large;" @click="getBaseFig">基础图标获取</el-button>
            </li>
        </ul>
    </div>
    <el-dialog v-model="dialogVisible" title="测压管规格" width="500px" @closed="closed">
        <el-form>
            <el-form-item label="距离：">
                <el-select placeholder="两压力计之间的间隔" v-model="distanceSel">
                    <el-option v-for="ele in InstrumentData.distance" :key="ele" :value="ele.value"
                        :label="ele.label"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="管径：">
                <el-select placeholder="测压管直径" v-model="diameterSel">
                    <el-option v-for="ele in InstrumentData.diameter" :key="ele" :value="ele.value"
                        :label="ele.label"></el-option>
                </el-select>
            </el-form-item>
            <div style="width: 100%;display: flex;justify-content: end;">
                <el-button type="primary" @click="onConfirm">确定</el-button>
                <el-button type="danger" @click="dialogVisible = false">取消</el-button>
            </div>
        </el-form>
    </el-dialog>
</template>
<style lang="scss" scoped>
.head {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        text-align: center;
        line-height: 70px;
        font-size: 16px;
        font-weight: 700;
        color: rgb(255, 255, 255)
    }
}

.body {
    width: 100%;
    height: calc(100% - 70px);

    li {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>