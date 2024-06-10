<script setup>
import { useStore } from '@/stores/index.ts'
defineProps(["thickness"]);
const store = useStore()
</script>
<template>
    <div class="lishi" v-for="ele in parseInt(thickness / (3 * store.sizeval)) + 1 " :key="ele">
        <div class="lishiItem" v-for="ele in 7" :key="ele">
            <div style="display: flex; height: 15px;">
                <div style="flex: 1; display: flex;">
                    <div
                        style="height: 7px;width: 7px;border: 1px solid black;border-radius: 50%;align-self: center;margin-left: 1px;">
                    </div>
                </div>
                <div style="flex: 1;"></div>
            </div>
            <div style="display: flex; height: 15px;">
                <div style="flex: 1;"></div>
                <div style="flex: 1; display: flex;">
                    <div
                        style="height: 7px;width: 7px;border: 1px solid black;border-radius: 50%;align-self: center;margin-left: 1px;">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.lishi {
    height: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    .lishiItem {
        flex: 1;
        height: 100%;
    }

}
</style>