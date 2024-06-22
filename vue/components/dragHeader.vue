<template>
    <header class="drag-header flex w-full h-9 pl-2 bg-[var(--bg-color)]">
        <div class="left mr-auto h-full">
            <img src="/vue/assets/logo.png" class="w-6 h-6 mr-auto">
            <div class="pl-2 font-mono font-extrabold text-xl">DevMemo</div>
        </div>
        <div class="winctrl ">
            <div  class="hover:bg-[#6b6b6b69]" @click="windowState.min()">
                <Minus :size="iconSize"></Minus>
            </div>
            <div class="hover:bg-[#6b6b6b69]" @click="windowState.max()">
                <Square v-show="!isMaximized" :size="iconSize"></Square>
                <copy v-show="isMaximized" :size="iconSize"></copy>
            </div>
            <div class="hover:bg-red-600" @click="windowState.close()">
                <Close :size="iconSize"></Close>
            </div>
        </div>
    </header>
</template>

<script setup>
import {
    Minus, Copy, Close, Square
} from "@icon-park/vue-next"
import { ref } from 'vue';

let isMaximized = ref(false)
let iconSize = ref(16)
const windowState = {
    min() {
        window.api.windowStateChange('minimized')
    },
    max() {
        isMaximized.value == true ? windowState.restore() : window.api.windowStateChange('maximized')
    },
    restore() {
        window.api.windowStateChange('restored')
    },
    close() {
        window.api.windowStateChange('closed')
    }
}
const isMaximizedChange = (state) => {
    isMaximized.value = state == 'maximized' ? true : false
    console.log(state);
}

window.api.onWindowStateChange(isMaximizedChange)

</script>

<style scoped>
.drag-header {
    -webkit-app-region: drag;
}

.drag-header {
    user-select: none;
}
.winctrl {
    @apply ml-auto h-full;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.winctrl div {
    -webkit-app-region: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    @apply h-full w-10 
}

.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>