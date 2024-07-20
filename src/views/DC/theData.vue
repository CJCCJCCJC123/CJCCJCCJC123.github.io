<script setup>
import { useStore } from '@/stores/index.ts'
const store = useStore()
const rules = {
    name: [{ required: true, message: '请选择地层类型' }],
    thickness: [{ required: true, message: '请输入地层厚度' }]
}
const refs = []
const adddc = () => {
    store.falg = true
    if (store.formList.length === 0) {
        store.falg = false
        store.add()
    } else {
        console.log(1)
        refs[refs.length - 1].validate((valid) => {
            if (valid) {
                store.add()
            } else {
                store.falg = false
                return false
            }
        })
    }
}
</script>
<template>
    <div class="box">
        <el-card class="data_card">
            <template #header>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <h2>地层数据</h2>
                </div>
            </template>
            <template #default>
                <el-form v-for="(ele, index) in store.formList" :key="ele.id" :model="ele" :rules="rules"
                    :ref="(vc) => refs[index] = vc">
                    <div style="display: flex;">
                        <h3 style="margin-bottom: 10px;">{{ ele.title }}</h3>
                    </div>
                    <div style="display:flex; justify-content: space-between;">
                        <el-form-item label="地层" style="width: 40%;" prop="name">
                            <el-select v-model="ele.name" placeholder="类型（必选）">
                                <el-option label="黄土" value="黄土"></el-option>
                                <el-option label="砾石" value="砾石"></el-option>
                                <el-option label="粗砂岩" value="粗砂岩"></el-option>
                                <el-option label="中砂岩" value="中砂岩"></el-option>
                                <el-option label="砂质泥岩" value="砂质泥岩"></el-option>
                                <el-option label="泥岩" value="泥岩"></el-option>
                                <el-option label="粉砂岩" value="粉砂岩"></el-option>
                                <el-option label="细砂岩" value="细砂岩"></el-option>
                                <el-option label="炭质泥岩" value="炭质泥岩"></el-option>
                                <el-option label="煤层" value="煤层"></el-option>
                                <el-option label="灰岩" value="灰岩"></el-option>
                                <el-option label="粘土" value="粘土"></el-option>
                                <el-option label="页岩" value="页岩"></el-option>
                                <el-option label="白云岩" value="白云岩"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="厚度（米）" style="width: 50%" prop="thickness">
                            <el-input v-model="ele.thickness" placeholder="厚度（必填）" type="number" min="1"></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item label="描述">
                        <el-input type="textarea" v-model="ele.description" placeholder="岩性描述（非必填）"></el-input>
                    </el-form-item>
                </el-form>
            </template>
            <template #footer>
                <div style="display: flex; justify-content: end;">
                    <el-button @click="adddc">添加地层</el-button>
                </div>
            </template>
        </el-card>
    </div>
</template>
<style scoped lang="scss">
.box {
    height: 100vh;
    width: 50vw;
    padding: 20px;

    .data_card {
        height: 100%;
        width: 100%;
        border: 1px solid black;
        overflow: auto;
    }
}
</style>