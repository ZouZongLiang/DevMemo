<template>
    <header class="drag-header flex w-full h-12 pl-2 bg-red-400">
        <div class="left mr-auto h-full">
            <img src="/vue/assets/logo.png" class="w-8 h-8 mr-auto">
            <div class="pl-3 font-mono font-extrabold text-xl">DevMemo</div>
        </div>
        <div class="winctrl ">
            <div @click="windowState.min()">
                <Minus size="28"></Minus>
            </div>
            <div>
                <Square v-show="!isMaximized" size="28" @click="windowState.max()"></Square>
                <copy v-show="isMaximized" size="28" @click="windowState.restore()"></copy>
            </div>
            <div>
                <Close size="28" @click="windowState.close()"></Close>
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
const windowState = {
    min() {
        window.api.windowStateChange('minimized')
    },
    max() {
        window.api.windowStateChange('maximized')
    },
    close() {
        window.api.windowStateChange('closed')
    },
    restore() {
        window.api.windowStateChange('restored')
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

.winctrl {
    @apply ml-auto h-full bg-yellow-400;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.winctrl div {
    -webkit-app-region: none;
    margin-right: 5px;
}

.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>