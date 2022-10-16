<script setup lang="ts">
import { ref } from 'vue';
import WorkModal from './WorkModal.vue';

const showModal = ref(false);

function showingModal(): void {
    showModal.value = !showModal.value;
    document.querySelector('body').classList.toggle('overflow-hidden');
    console.log(props.view);
}

const props = defineProps<{
    name: any
    image: any
    description: any
    github: any
    view: any
}>()

</script>

<template>
    <div @click="showingModal" class="main-container">
        <div class="work-image-container">
            <img src="../assets/img/work.svg" alt="work image" class="image">
        </div>
        <p class="work-name">{{props.name}}</p>
        <p>Web design/development</p>
    </div>
    <div v-if="showModal" class="modal-container">
        <WorkModal @close="showingModal" :title="props.name" :description="props.description" :image="props.image"
            :github="props.github" :view="props.view" />
    </div>
</template>

<style scoped>
.main-container {
    width: 33.3%;
    min-width: 200px;
    max-width: 360px;
    margin-bottom: 35px;
    font-family: 'europa', sans-serif;
    text-align: center;
    color: var(--font-body-color);
}

.work-image-container {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    transition: transform 0.3s;
    cursor: pointer;
}

.image {
    width: 100%;
}

.work-name {
    font-size: 20px;
    font-weight: 700;
    color: var(--title-color);
}

.work-image-container:hover {
    transform: rotate(10deg) scale(110%);
}

.modal-container {
    position: fixed;
    top: 0;
    z-index: 20;
    width: 100vw;
    height: 100vh;
}

.overflow-hidden {
    overflow: hidden;
}
</style>