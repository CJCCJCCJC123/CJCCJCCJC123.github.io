import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useBaseStore = defineStore('main', () => {
    const testData = ref([])
    const parameter = ref({})
    const St = ref([])
    return {
        testData,
        parameter,
        St,
    }
})