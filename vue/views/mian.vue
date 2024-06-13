<template>
    <div class="mt-auto w-full h-full bg-[var(--bg-color)]">
        <header class="w-full h-16 pt-2 pl-2">
            <img src="/vue/assets/logo.png" class="w-8 h-8">
        </header>
        <button @click="changeMode" class="t">toggle</button>
    </div>
</template>

<script setup>

const changeMode = () => {
    document.documentElement.classList.toggle('dark')
}

</script>


<style scoped>
.t{
    background-color: var(--bg-color);
    color: var(--text-color);
}
</style>