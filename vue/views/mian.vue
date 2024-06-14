<template>
    <div class="w-full h-full bg-[var(--bg-color)]">
        <dragHeader></dragHeader> 
        
    </div>
</template>

<script setup>
import dragHeader from "../components/dragHeader.vue"

const changeMode = () => {
    document.documentElement.classList.toggle('dark')
}

</script>


<style scoped>

</style>