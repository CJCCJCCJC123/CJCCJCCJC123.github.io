<script setup>
import { useStore } from '@/stores/index.ts'
defineProps(["thickness"]);
const store = useStore()
</script>
<template>
    <div class="cushayan" v-for="ele in parseInt(thickness / (2 * store.sizeval)) + 1 " :key="ele">
        <div class="cushayanItem" v-for="ele in 6" :key="ele">
            <div style="display: flex; height: 10px;border-bottom: 1px solid black;">
                <div style="flex: 1; display: flex;">
                    <div></div>
                </div>
                <div style="flex: 1;">
                    <div style="
                        height:10px;width:1px;background-color: black;">
                    </div>
                </div>
            </div>
            <div style="display: flex; height: 10px;border-bottom: 1px solid black;">
                <div style="flex: 1;">
                    <div style="
                        height:10px;width:1px;background-color: black;">
                    </div>
                </div>
                <div style="flex: 1; display: flex;">
                    <div></div>
                </div>

            </div>

        </div>
    </div>
</template>
<style scoped lang="scss">
.cushayan {
    height: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .cushayanItem {
        flex: 1;
        height: 100%;

    }

}
</style>