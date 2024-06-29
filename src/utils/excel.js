// 导入excelfile和一个tableData，excel会编程tableData的数据
import XLSX from 'xlsx'
import { useBaseStore} from '@/stores/yali/base.ts'
const baseStore = useBaseStore()
const getxlsx = (file) => {
    file2XLSX(file).then((res) => {
        console.log(res)
        baseStore.testData = res[0].sheet
    })
    return false
}
const file2XLSX = (file) => {
    return new Promise(function (resolve) {
        // 通过FileReader对象读取文件
        const reader = new FileReader()
        // 读取为二进制字符串
        reader.readAsBinaryString(file)
        reader.onload = function (e) {
            console.log(e, '读取文件成功的e');
            // 获取读取文件成功的结果值
            const data = e.target.result
            // XLSX.read解析数据，按照type 的类型解析
            let wb = XLSX.read(data, {
                type: 'binary' // 二进制
            })
            console.log(wb, '---->解析后的数据')
            // 存储获取到的数据
            const result = []
            // 工作表名称的有序列表
            wb.SheetNames.forEach(sheetName => {
                result.push({
                    // 工作表名称
                    sheetName: sheetName,
                    // 利用 sheet_to_json 方法将 excel 转成 json 数据
                    sheet: XLSX.utils.sheet_to_json(wb.Sheets[sheetName])
                })
            })
            resolve(result)
        }
    })
}
export default getxlsx