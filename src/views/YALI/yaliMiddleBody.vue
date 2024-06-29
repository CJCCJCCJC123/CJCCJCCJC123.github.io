<script setup>
import { ref, onMounted } from 'vue'
import bus from '@/bus/Index'
import getParameter from '@/utils/getParameter'
import { useBaseStore } from '@/stores/yali/base'
import * as echarts from 'echarts'
const baseStore = useBaseStore()
const parameter = ref({})
const echartBoxQt = ref()
const echartBoxSt = ref()
const echartBoxQS = ref()
const echartBoxqS = ref()
const isloading = ref(false)
onMounted(() => {
    bus.on('InstrumentData', (data) => {
        parameter.value = getParameter(data)
        console.log(parameter.value)
    })
    bus.on('getBaseFig', () => {
        getEcharts()
    })
    if (baseStore.testData.length > 0) {
        parameter.value = getParameter(baseStore.parameter)
        console.log(parameter.value)
        getEcharts()
    }
})
//画图
const getEcharts = () => {
    isloading.value = true
    const P1 = baseStore.testData.map(item => item.P1)
    const P2 = baseStore.testData.map(item => item.P2)
    const t = baseStore.testData.map(item => item.t)
    Qt(P1, P2, t)
    St(P1, P2, t)
    QS(P1, P2)
    setTimeout(() => {
        isloading.value = false
    }, 200)
}
//Qt
const Qt = (P1, P2, t) => {
    window.onresize = function () {
        myChart.resize();
    };
    const myChart = echarts.init(echartBoxQt.value)
    const deltaP = P1.map((item, index) => {
        return Math.sqrt(Math.abs(item - P2[index]))
    })
    const Q = deltaP.map(item => {
        return parameter.value.k * item - parameter.value.b
    })
    myChart.setOption({
        title: {
            text: 'Q-t曲线图',
            textStyle: {
                color: 'black',
                fontSize: 20
            },
            top: 3
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            top: 28,
            right: 20,
            feature: {
                dataZoom: { show: true },

                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '16%',
            containLabel: true
        },
        xAxis: {

            interval: 24,

            axisLine: {
                show: true,
                linestyle: {
                    color: 'black'
                },
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: (value) => {
                    return value + "时"
                },
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '流量/(m³/h)',
            nameLocation: 'end',
            nameTextStyle: {
                fontSize: 14
            },
            axisLine: {
                show: true,
                linestyle: {
                    color: 'black',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: (v) => !v ? 0 : v.toFixed(1),
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            }
        },

        series: [
            {
                // data: Q.map(item => item.toFixed(2)),
                name: '流量：',
                data: Q.map((item, index) => [t[index].toFixed(0), item.toFixed(2)]),
                type: 'line',
                showSymbol: true,
                symbolSize: 6,
                smooth: true,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
            }
        ]
    })
}
//St
const St = (P1, P2, t) => {
    window.onresize = function () {
        myChart.resize();
    };
    const myChart = echarts.init(echartBoxSt.value)
    const deltaP = P1.map((item, index) => {
        return Math.sqrt(Math.abs(item - P2[index]))
    })
    const Q = deltaP.map(item => {
        return parameter.value.k * item - parameter.value.b
    })
    const A = Math.pow((parameter.value.diameter / 2000), 2) * Math.PI
    const V = Q.map(item => item / A / 3600)
    const S = V.map((item, index) => {
        return ((item ** 2) / 19.6) + (P1[index] + P2[index]) / 0.0098
    })
    console.log(S)
    myChart.setOption({
        title: {
            text: 'S-t曲线图',
            textStyle: {
                color: 'black',
                fontSize: 20
            },
            top: 3
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            top: 28,
            right: 20,
            feature: {
                dataZoom: { show: true },

                dataView: { readOnly: false },
                magicType: { type: ['line', 'bar'] },
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '16%',
            containLabel: true
        },
        xAxis: {

            interval: 24,
            axisLine: {
                show: true,
                linestyle: {
                    color: 'black'
                },
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: (value) => {
                    return value + "时"
                },
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            }
        },
        yAxis: {
            type: 'value',
            name: '降升/m',
            nameLocation: 'end',
            nameTextStyle: {
                fontSize: 14
            },
            axisLine: {
                show: true,
                linestyle: {
                    color: 'black',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: (v) => !v ? 0 : v.toFixed(1),
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            }
        },

        series: [
            {
                // data: Q.map(item => item.toFixed(2)),
                name: '流量：',
                data: S.map((item, index) => [t[index].toFixed(0), item.toFixed(2)]),
                type: 'line',
                showSymbol: true,
                symbolSize: 6,
                smooth: true,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgb(128, 255, 165)'
                        },
                        {
                            offset: 1,
                            color: 'rgb(1, 191, 236)'
                        }
                    ])
                },
            }
        ]
    })
}
//QS
const QS = (P1, P2) => {
    window.onresize = function () {
        myChart.resize();
    };
    const myChart = echarts.init(echartBoxQS.value)
    const deltaP = P1.map((item, index) => {
        return Math.sqrt(Math.abs(item - P2[index]))
    })
    const Q = deltaP.map(item => {
        return parameter.value.k * item - parameter.value.b
    })
    const A = Math.pow((parameter.value.diameter / 2000), 2) * Math.PI
    const V = Q.map(item => item / A / 3600)
    const S = V.map((item, index) => {
        return ((item ** 2) / 19.6) + (P1[index] + P2[index]) / 0.0098
    })
    console.log(S)
    myChart.setOption({
        title: {
            text: 'Q-S散点图',
            textStyle: {
                color: 'black',
                fontSize: 20
            },
            top: 3
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        toolbox: {
            show: true,
            top: 28,
            right: 20,
            feature: {
                dataZoom: { show: true },
                dataView: { readOnly: false },
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '16%',
            containLabel: true
        },
        xAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            }
        },
        yAxis: {
            type: 'value',
            nameLocation: 'end',
            nameTextStyle: {
                fontSize: 14
            },
            axisLine: {
                show: true,
                linestyle: {
                    color: 'black',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: (v) => !v ? 0 : v.toFixed(1),
                textStyle: {
                    color: 'black',
                    fontSize: 14
                }
            }
        },
        series: [
            {
                // data: Q.map(item => item.toFixed(2)),
                // name: '流量：',
                data: S.map((item, index) => [item.toFixed(2), Q[index].toFixed(2)]),
                type: 'scatter',
                showSymbol: true,
                symbolSize: 10,
                smooth: true,
            }
        ]
    })
}
// watch([
//     () => baseStore.testData,
//     () => parameter.value,

// ], () => {
//     getEcharts()
// })
defineExpose({
    getEcharts
})
</script>
<template>
    <div class="body">
        <div class="echarts" ref="echartBoxQt" v-loading="isloading"></div>
        <div class="echarts" ref="echartBoxSt" v-loading="isloading"></div>
        <div class="echarts" ref="echartBoxQS" v-loading="isloading"></div>
        <div class="echarts" ref="echartBoxqS" v-loading="isloading"></div>
    </div>
</template>
<style lang="scss" scoped>
.body {
    width: 100%;
    height: calc(100% - 70px);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    .echarts {
        overflow: auto;
        //添加悬浮阴影
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

        @media screen and (min-width: 1400px) {
            width: 48%;
            height: 48%;
            background-color: white;
        }

        @media screen and (max-width: 1400px) {
            width: 80%;
            height: 23%;
            background-color: white;
        }
    }

}
</style>