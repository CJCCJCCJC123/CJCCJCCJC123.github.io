import {defineStore} from 'pinia'
import {ref} from 'vue'
export const useBaseStore = defineStore('main', () => {
    const testData = ref([])
    const parameter = ref({
    })
    return {
        testData,
        parameter 
    }
})