<template>
    <div class="drag-header">
        <slot></slot>
    </div>
</template>
<style scoped>
.drag-header{
    -webkit-app-region: drag;
    width: 100%;
    height: 32px;
    background-color: #333333;
    /* position: absolute; */
    top: 0;
    left: 0;
}
</style>