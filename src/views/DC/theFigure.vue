<script setup>
import { useStore } from '@/stores/index.ts'
import { ref } from 'vue'
import html2canvas from 'html2canvas';
import DC from "@/views/DC/DC.vue";
const store = useStore()
const timestamp = new Date().getTime();
const imgRef = ref();
//检测

// 渲染图片
function Render(src, width, height, cb) {
    const img = new Image();
    img.src = src;
    img.width = width;
    img.height = height;
    img.crossOrigin = ""; // 图像跨域时配置
    cb && cb(img);
}

// 下载图片
function Download(url, name) {
    const target = document.createElement("a");
    target.href = url;
    target.download = name;
    const event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    target.dispatchEvent(event);
}
const DownPdf = () => {
    if (!store.falg) {
        ElMessage.error('请填写完整的地层信息')
        return
    }
    const opts = {
        logging: false,
        scale: 2,
        useCORS: true
    };
    html2canvas(imgRef.value, opts).then(res => {
        const { height, width } = res;
        const base64 = res.toDataURL("image/png", 1);
        Render(base64, width, height, img => {
            document.body.appendChild(img);
            Download(base64, `地层柱状图${timestamp}.png`);
            document.body.removeChild(img)
        });
    }).catch(err => {
        console.log(err);
    });
}
const isDesc = ref(true)
const isshowDesc = () => {
    isDesc.value = !isDesc.value
    console.log(isDesc.value);
}
const gridData = [
    {
        size: '50m-200m',
        val: 0.5
    },
    {
        size: '200m-500m',
        val: 1.5
    },
    {
        size: '500m-1000m',
        val: 3
    }
]
const selectSize = (row) => {
    console.log(row);
    store.sizeval = row.val
}
</script>
<template>
    <div class="test"></div>
    <div class="box">
        <el-card class="data_card">
            <template #header>
                <div style="display: flex;justify-content: space-between;align-content: center;">
                    <h2>效果预览</h2>
                    <div>
                        <el-popover trigger="click" placement="left" :width="228">
                            <template #reference>
                                <el-button size="small">选择尺度大小</el-button>
                            </template>
                            <el-table :data="gridData">
                                <el-table-column width="120" property="size" label="钻孔深度" />
                                <el-table-column width="80">
                                    <template #default="{ row }">
                                        <el-button size="small" @click="selectSize(row)">选择</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </el-popover>
                        <el-button size="small" @click="isshowDesc">显示描述</el-button>
                        <el-button size="small" @click="DownPdf">导出柱状图</el-button>
                    </div>
                </div>
            </template>
            <div ref="imgRef">
                <table>
                    <thead>
                        <tr>
                            <th style="font-size: 30px; padding: 5px 0;">岩性</th>
                            <th style="font-size: 30px; padding: 5px 0;">层厚/m</th>
                            <th style="font-size: 30px; padding: 5px 0;">岩性柱</th>
                            <th style="font-size: 30px; padding: 5px 0;" v-show="isDesc">描述</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(ele) in store.formList" :key="ele.id"
                            :style="`font-size: ${ele.thickness * 5 <= 18 ? 18 : ele.thickness * 5 > 26 ? 26 : ele.thickness * 5}px;`">
                            <td style="width: 18%;">{{ ele.name }}</td>
                            <td style="width: 18%;">{{ ele.thickness }}</td>
                            <td style="width: 24%;">
                                <DC :DCitem="ele"></DC>
                            </td>
                            <td v-show="isDesc" style="width: 40%;word-wrap:break-word;word-break:break-all;">{{
                                ele.description }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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

        table {
            width: 100%;
            border-collapse: collapse;

            th,
            td {
                border: 1px solid black;
                text-align: center;

            }
        }
    }
}
</style>