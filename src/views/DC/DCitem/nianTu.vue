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
                    <!-- <div
                        style="
                        height:3px;width:3px;background-color: black;border-radius: 50%;align-self: center;margin-left: 3px;">
                    </div> -->
                </div>
                <div style="flex: 1;">
                    <div style="
                        height:1px;width:10px;background-color: black;margin-top: 4px;">
                    </div>
                </div>
            </div>
            <div style="display: flex; height: 10px;border-bottom: 1px solid black;">
                <div style="flex: 1;">
                    <div style="
                        height:1px;width:10px;background-color: black;margin-top: 4px;">
                    </div>
                </div>
                <div style="flex: 1; display: flex;">
                    <!-- <div
                        style="
                        height:3px;width:3px;background-color: black;border-radius: 50%;align-self: center;margin-left: 3px;">
                    </div> -->
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