<script setup lang="ts">
const props = defineProps<{
    name: string
    link: string
}>()
</script>

<template>
    <a :href="props.link" target="_blank"
        class="text-xs sm:text-base transition ease-in-out hover:bg-white hover:text-mainColor w-[35%] p-[10px] text-white text-center border border-mainColor bg-mainColor rounded block">{{
        props.name
        }}</a>
</template>