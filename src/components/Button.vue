<script setup lang="ts">
const props = defineProps<{
    name: string
    link: string
}>()
</script>

<template>
    <a :href="props.link" class="button-link">{{props.name}}</a>
</template>

<style scoped>
.button-link {
    display: block;
    width: 35%;
    padding: 10px;
    text-align: center;
    color: #fff;
    background-color: var(--main-color);
    border: 1px solid #fff;
    border-radius: 5px;
}

.button-link:hover {
    color: var(--main-color);
    background-color: #fff;
    border: 1px solid var(--main-color);
}
</style>