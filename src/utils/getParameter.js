// Desc: 获取参数
const getParameter = (data)=> {
    const parameter = {
        distance: data.distance,
        diameter: data.diameter,
        k: 0,
        b: 0
    }
    switch (data.distance + data.diameter) {
        case 164:
            parameter.k = 27.32
            parameter.b = 0.26
            break
        case 166:
            parameter.k = 31.284
            parameter.b = 0.2983
            break
        case 168:
            parameter.k = 49.713
            parameter.b = 0.6157
            break
        case 172:
            parameter.k = 108.45
            parameter.b = 2.088
            break
        case 204:
            parameter.k = 23.965
            parameter.b = 0.3526
            break
        case 206:
            parameter.k = 30.091
            parameter.b = 0.3697
            break
        case 208:
            parameter.k = 41.976
            parameter.b = 0.5744
            break
        case 210:
            parameter.k = 54.93
            parameter.b = 0.8853
            break
        case 212:
            parameter.k = 82.883
            parameter.b = 1.5553
            break
        case 244:
            parameter.k = 16.283
            parameter.b = 0.1952
            break
        case 246:
            parameter.k = 27.403
            parameter.b = 0.4438
            break
        case 248:
            parameter.k = 36.023
            parameter.b = 0.5435
            break
        case 250:
            parameter.k = 48.444
            parameter.b = 0.8412
            break
        case 252:
            parameter.k = 71.05
            parameter.b = 1.007
            break
        case 284:
            parameter.k = 16.04
            parameter.b = 0.2652
            break
        case 286:
            parameter.k = 22.279
            parameter.b = 0.4185
            break
        case 288:
            parameter.k = 33.442
            parameter.b = 0.6311
            break
        case 290:
            parameter.k = 46.06
            parameter.b = 0.985
            break
        default:
            
            // eslint-disable-next-line no-undef
            ElMessage.error('仪器规格错误,请重新选择')
            return
    }
    // eslint-disable-next-line no-undef
    ElMessage.success('选择成功')
    return parameter
}
export default getParameter