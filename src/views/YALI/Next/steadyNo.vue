<script setup>
//修改标准曲线
//修改按钮，修改表单和表格
import { onMounted, ref, watch } from 'vue'
import { useBaseStore } from '@/stores/yali/base'
import getxlsx2 from '@/utils/excel2'
import * as echarts from 'echarts'
const baseStore = useBaseStore()
const M = ref()
const Q = ref()
const St = baseStore.St
const steadySt = ref([0, 0])
const isPoint = ref(false)
const ecahrtsData = ref([])
const justifySteadyFlow = () => {
    steadySt.value = St.find((ele, index) => {
        const arrSt = St.slice(index)
        const arrStaverageQ = arrSt.map(ele => ele[2]).reduce((a, b) => a + b) / arrSt.length
        Q.value = arrStaverageQ.toFixed(2)
        return arrSt.map(ele => ele[2]).every(ele => Math.abs(ele - arrStaverageQ) < 2)
    })
}
//上传文件
const beforeUpload = async (file) => {
    rsData.value = await getxlsx2(file)
    ecahrtsData.value = rsData.value.map(ele => [ele.t / Math.pow(ele.r, 2), ele.s])
    return false
}

//折叠第一步
const zhedie = ref(false)
//导入观测孔r-s数据
const rsData = ref([
])
//删除
const del = (row) => {
    const index = rsData.value.findIndex(ele => ele.rsid === row.rsid)
    rsData.value.splice(index, 1)
}
const add = () => {
    rsData.value.push({
        rsid: rsData.value.length + 1,
        r: 0,
        s: 0,
        t: 0
    })
}
//画图
const data = ref([])
const datax = ref([1])
const datay = ref([])
const datayInit = [0.2194, 0.2602, 0.3106, 0.3738, 0.4544, 0.5598, 0.7024, 0.9057, 1.2227, 1.8229, 1.9187, 2.0269, 2.1508, 2.2953, 2.4679, 2.6813, 2.9591, 3.3547, 4.0379]
for (let i = 1; i <= 6; i++) {
    for (let k = 9; k > 0; k--) {
        datax.value.push(k / Math.pow(10, i))
    }
}
datay.value = datax.value.map(ele => +(-0.577216 - Math.log(ele)).toFixed(4))
datay.value.splice(0, 19)
datay.value = [...datayInit, ...datay.value]
data.value = datax.value.map((ele, index) => [(1 / ele), datay.value[index]])
console.log(data.value)
const getBiaozhun = (x, y) => {
    const biaozhun = echarts.init(document.getElementById('biaozhun'))
    biaozhun.setOption({
        title: {
            text: 'Theis标准曲线',
            left: 'center',
            top: 10,
            textStyle: {
                fontSize: 24
            }
        },
        xAxis: {
            type: 'log',
            name: '1/u',
            nameLocation: 'center',
            nameGap: 30,
            nameTextStyle: {
                fontSize: 20,
                color: 'black'
            },
            axisTick: {
                show: false,
            },
            minorTick: {
                show: false,
                splitNumber: 10
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: 'black',
                    width: 0.5
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'black',
                    width: 2
                }
            },
            axisLabel: {
                color: 'black',
                fontSize: 16
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'black',
                    width: 0.5
                }
            }
        },
        yAxis: {
            type: 'log',
            logBase: 10,
            axisTick: {
                show: false,
            },
            minorTick: {
                show: false,
                splitNumber: 10
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: 'black',
                    width: 0.5
                }
            },
            name: 'w(u)',
            nameLocation: 'center',
            nameGap: 30,
            nameTextStyle: {
                fontSize: 20,
                color: 'black'
            },
            axisLine: {
                lineStyle: {
                    color: 'black',
                    width: 2
                }
            },
            axisLabel: {
                color: 'black',
                fontSize: 16
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'black',
                    width: 0.5
                }
            }
        },
        series: [{
            data: data.value,
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle: {
                color: 'black',
                width: 2
            }
        }]
    })
    // biaozhun.getZr().on('click', params => {
    //     const pointInPixel = [params.offsetX, params.offsetY];
    //     if (biaozhun.containPixel('grid', pointInPixel)) {
    //         let xIndex = biaozhun.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY]);// [点击的数字，数据索引]
    //         console.log(xIndex)
    //         // 进行其他操作
    //     }
    // });
    return biaozhun.convertFromPixel({ seriesIndex: 0 }, [x, y])
}
const getrs = () => {
    const rsBox = document.getElementById('rs')
    const rs = echarts.init(rsBox)
    rs.setOption({
        title: {
            text: '实际观测孔r-s散点图',
            left: 'center',
            top: 10,
            textStyle: {
                fontSize: 24,
                color: 'red'
            }
        },
        xAxis: {
            type: 'log',
            name: 't/r²',
            nameLocation: 'center',
            nameGap: 30,
            nameTextStyle: {
                fontSize: 20,
                color: 'red'
            },
            axisTick: {
                show: false,
            },
            minorTick: {
                show: false,
                splitNumber: 10
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: 'red',
                    width: 0.5
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'red',
                    width: 2
                }
            },
            axisLabel: {
                color: 'red',
                fontSize: 16
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'red',
                    width: 0.5
                }
            }
        },
        yAxis: {
            type: 'log',
            min: 0.01,
            logBase: 10,
            axisTick: {
                show: false,
            },
            minorTick: {
                show: false,
                splitNumber: 10
            },
            minorSplitLine: {
                show: true,
                lineStyle: {
                    color: 'red',
                    width: 0.5
                }
            },
            name: 's',
            nameLocation: 'center',
            nameGap: 30,
            nameTextStyle: {
                fontSize: 20,
                color: 'red'
            },
            axisLine: {
                lineStyle: {
                    color: 'red',
                    width: 2
                }
            },
            axisLabel: {
                color: 'red',
                fontSize: 16
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'red',
                    width: 0.5
                }
            }
        },
        series: [{
            //data: rsData.value.map(ele => Object.values(ele).splice(1, 2)),
            data: ecahrtsData.value,
            type: 'scatter',
        }]
    })
    rs.getZr().on('click', params => {
        const pointInPixel = [params.offsetX, params.offsetY];
        if (rs.containPixel('grid', pointInPixel)) {
            let xIndex = rs.convertFromPixel({ seriesIndex: 0 }, [params.offsetX, params.offsetY]);// [点击的数字，数据索引]
            if (isPoint.value) {
                [tr.value, s.value] = [...xIndex]
            }
        }
    });

}
const ecpoint = ref({
    x: 0,
    y: 0
})
const ecClick = (e) => {
    ecpoint.value = {
        x: e.layerX,
        y: e.layerY
    }
}
watch(() => ecpoint.value, (newVal) => {

    if (isPoint.value) {
        [Wu.value, u.value] = [...getBiaozhun(newVal.x, newVal.y)]
    }

})
const x = ref(0)
const y = ref(0)
const dingzix = ref(0)
const dingziy = ref(0)
//设置参数
const Wu = ref()
const u = ref()
const s = ref()
const tr = ref()
onMounted(() => {
    getBiaozhun()
    //点点事件
    const ecahrtsBox = document.querySelector('.echarts')
    ecahrtsBox.addEventListener('mousemove', (e) => {
        if (isPoint.value) {
            dingzix.value = e.layerX
            dingziy.value = e.layerY
        }
    })
    //拖拽

    //const rs = document.getElementById('rs')
    //rs.addEventListener('mousemove', function (e) {
    //    x.value = e.offsetX
    //    y.value = e.offsetY
    //})
    const rs = document.getElementById('rs')
    drag(rs);
})
function drag(obj) {
    //当鼠标在被拖拽元素上按下，开始拖拽
    obj.onmousedown = function (event) {
        //设置obj捕获所有的鼠标按下事件，而不仅仅是在元素内部区域
        // obj.setCapture && obj.setCapture();
        //解决兼容性问题,实现IE8的兼容
        event = event || window.event;
        //鼠标在元素中的偏移量等于 鼠标的clientX - 元素的offsetLeft
        var ol = event.clientX - obj.offsetLeft;
        var ot = event.clientY - obj.offsetTop;


        //为document绑定一个onmousemove事件
        document.onmousemove = function (event) {
            event = event || window.event;
            //当鼠标移动时，被拖拽元素跟随鼠标移动
            //获取鼠标的坐标
            var left = event.clientX - ol;
            var top = event.clientY - ot;

            //修改元素的位置 修改元素的位置只能通过 元素.style.属性 = "属性值";
            x.value = left;
            y.value = top;
        };
        //为document绑定一个鼠标松开事件onmouseup
        document.onmouseup = function () {
            //当鼠标松开时，被拖拽元素固定在当前位置
            //当鼠标松开时，取消onmousemove事件
            document.onmousemove = null;
            //当鼠标松开时，onmouseup事件，要不每次一松开鼠标都触发此事件
            document.onmouseup = null;
            //鼠标松开，取消事件的捕获
            //obj.releaseCapture && obj.releaseCapture();
        };
        /**
         * 当我们拖拽一个网页中的内容时，浏览器默认会使用搜索引擎去搜索拖拽的文本内容
         * 可以通过return false取消这种行为
         *
         * 注：IE8 使用return false无效
         */
        return false;
    };
}
</script>
<template>
    <div class="box">
        <div class="left">
            <div class="leftTop" :class="{ leftTopzhedie: !zhedie }">
                <div style="font-size: 30px;font-weight: bolder;margin:10px 0;">第一步</div>
                <el-button type="primary" @click="justifySteadyFlow">流量稳定时段读取</el-button>
                <myText @changeIszhankai="(val) => zhedie = val">
                    <template #context>
                        <p>流量：{{ Q }}m³/h</p>
                        <br>
                        <p>时间：{{ steadySt[1] }}h</p>
                        <br>
                        <p>判断依据：稳定时刻降深收敛差距小于2m³/h（可以手动修改）</p>
                        <br>
                    </template>
                </myText>
            </div>
            <div class="leftMiddle">
                <div style="font-size: 30px;font-weight: bolder;margin:10px 0;">第二步</div>
                <div style=" display: flex; justify-content: space-between;">
                    <el-upload action="#" :before-upload="beforeUpload" :show-file-list="false" accept=".xlsx, .xls">
                        <template v-slot:trigger>
                            <el-button type="primary" style="margin-bottom: 10px;width: 150px;">导入观测孔数据</el-button>
                        </template>
                    </el-upload>
                    <el-button type="primary" @click="getrs" style="margin-bottom: 10px;">绘制散点图</el-button>
                    <div>
                        <el-button type="primary" @click="isPoint = !isPoint"
                            style="margin-bottom: 10px;width: 130px;">开启选点：{{
                                isPoint.toString().toUpperCase()
                            }}</el-button>
                    </div>
                </div>
                <el-form>
                    <el-form-item label="流量：">
                        <el-input v-model="Q" type="number" placeholder="稳定时刻流量（m³/h）"></el-input>
                    </el-form-item>
                    <el-form-item label="厚度：">
                        <el-input v-model="M" type="number" placeholder="含水层厚度（m）"></el-input>
                    </el-form-item>
                </el-form>
                <div style="width: 100%;flex: 1;">
                    <div style="font-size: 20px; font-weight: 700;">观测孔数据:</div>
                    <el-table :data="rsData" style="width: 100%" border>
                        <el-table-column prop="rsid" label="序号" width="60" align="center"></el-table-column>
                        <el-table-column prop="r" label="r /m" width="70" align="center"
                            show-overflow-tooltip></el-table-column>
                        <el-table-column prop="s" label="s /m" width="70" align="center"
                            show-overflow-tooltip></el-table-column>
                        <el-table-column prop="t" label="t /h" width="70" align="center"
                            show-overflow-tooltip></el-table-column>
                        <el-table-column label="操作" align="center">
                            <template #default="{ row, $index }">
                                <el-popconfirm width="220" confirm-button-text="确定" cancel-button-text="取消"
                                    confirm-button-type="danger" title="确定要删除此处的数据吗？" @confirm="del(row)">
                                    <template #reference>
                                        <el-button type="danger">删除</el-button>
                                    </template>
                                </el-popconfirm>
                                <el-popover placement="right" :title="'观测孔' + row.rsid" :width="200" trigger="click">
                                    <template #reference>
                                        <el-button type="primary">修改</el-button>
                                    </template>
                                    <el-form>
                                        <el-form-item label="r:">
                                            <el-input type="number" v-model="rsData[$index].r"></el-input>
                                        </el-form-item>
                                        <el-form-item label="s:">
                                            <el-input type="number" v-model="rsData[$index].s"></el-input>
                                        </el-form-item>
                                    </el-form>
                                </el-popover>
                            </template>
                        </el-table-column>
                    </el-table>
                    <br>
                    <el-button @click="add">添加观测孔</el-button>
                </div>
            </div>
            <div class="leftBottom">
                <div style="font-size: 30px; font-weight: bolder; margin:10px 0;">参数选取</div>
                <div style="display: flex;justify-content: space-between;font-size: 16px;">
                    <p style="flex:3">W(u):{{ Wu?.toFixed(4) }}</p>
                    <p style="flex:2">1/u:{{ u?.toFixed(4) }}</p>
                    <p style="flex:2">s:{{ s?.toFixed(4) }}</p>
                    <p style="flex:2">t/r<sup>2</sup>:{{ tr?.toFixed(4) }}</p>
                </div>
            </div>
            <div class="leftBottom">
                <div style="font-size: 30px; font-weight: bolder; margin:10px 0;">计算结果</div>
                <div style="display: flex;justify-content: space-between;font-size: 16px;">
                    <p style="flex:1">T:{{ (Wu * Q / (4 * Math.PI * s))?.toFixed(4) }}</p>
                    <p style="flex:1">K:{{ (Wu * Q / (4 * Math.PI * s * M))?.toFixed(4) }}</p>
                    <p style="flex:1">S:{{ ((Wu * Q / (4 * Math.PI * s)) / u * tr)?.toFixed(4) }}</p>
                </div>
            </div>
        </div>
        <div class="middle">
            <div style="font-size: 30px;font-weight: bolder;margin:10px 0;">配线法</div>
            <div class="echarts" @click="ecClick">
                <mySvg name="dingzi" size="40px" color="red" v-show="isPoint"
                    style="position: absolute;z-index: 6;pointer-events: none;transform: translate(-50%,-100%)"
                    :style="{ top: dingziy, left: dingzix }">
                </mySvg>
                <!-- <div id="rs" :style="{ top: y + 'px', left: x + 'px' }"></div> -->
                <div id="rs" :style="{ transform: `translate(${x}px, ${y}px)` }" :class="{ disShubiao: isPoint }"></div>
                <div id="biaozhun" :class="{ disShubiao: isPoint }"></div>
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
        display: flex;
        flex-direction: column;


        .leftTop {
            height: 35%;
            border-bottom: 1px solid #ccc;
        }

        .leftTopzhedie {
            height: 16%;
        }

        .leftMiddle {
            flex: 1;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            display: flex;
            flex-direction: column;
            overflow: auto;
        }

        .leftMiddle::-webkit-scrollbar {
            display: none;
        }

        .leftBottom {
            height: 10%;

        }

    }

    .middle {
        flex: 2;
        height: 100%;
        border-right: 1px solid #ccc;
        padding: 20px;
        overflow: hidden;
    }

}

.echarts {
    height: 80%;
    width: 90%;
    margin: 0 auto;
    margin-top: 40px;
    position: relative;
}

#biaozhun {
    width: 100%;
    height: 100%;
    background-color: rgb(226, 226, 226);
}

.disShubiao {
    cursor: none;
}

#rs {
    width: 100%;
    height: 100%;
    background-color: rgba(230, 203, 203, 0.5);
    position: absolute;
    z-index: 5;
}
</style>