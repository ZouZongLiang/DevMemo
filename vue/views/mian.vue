<template>
    <div class="w-full h-full bg-[var(--bg-color)]">
        <header>
            <dragHeader></dragHeader>
        </header>
        <div class="flex w-full h-[calc(100%-36px)] flex-row flex-nowrap">
            <div class="side w-[72px] h-full bg-green-500">
                <sidebar></sidebar>
            </div>
            <div class="main w-8 flex-1 h-full bg-blue-400">
                <RouterView />
            </div>
        </div>

    </div>
</template>

<script setup>
import dragHeader from "../components/dragHeader.vue"
import sidebar from "../components/sidebar.vue";
const changeMode = () => {
    document.documentElement.classList.toggle('dark')
}

</script>


<style scoped></style>