import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useStore = defineStore('main', () => {
    const formList = ref<any>([
    ])
    const falg = ref(false)
    const sizeval = ref(1)
    const add = () => {
        if (formList.value.length === 0) {
            formList.value.push({
                title: '地层1',
                name: "",
                thickness: "",
                description: '',
                id: 1
            })
        } else{
            formList.value.push({
                title: '地层' + (formList.value.length + 1),
                name: '' as any,
                thickness: '' as any,
                description: '',
                id: formList.value.length + 1
            })
        }

    }
    return {
        formList,
        falg,
        sizeval,
        add
    }
})