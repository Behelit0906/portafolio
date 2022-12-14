<script setup lang="ts">
import { ref } from 'vue';
import WorkModal from './WorkModal.vue';

const modalActive = ref(false);

const openModal = (): void => {
    modalActive.value = true;
    document.querySelector('body')?.classList.add('overflow-hidden');
}

const closeModal = (): void => {
    modalActive.value = false;
    document.querySelector('body')?.classList.remove('overflow-hidden');
}

const props = defineProps<{
    name: string
    image: string
    description: string
    github: string
    view: string
}>();

</script>

<template>
    <article @click="openModal" class="sm:w-1/3 relative">
        <div class="w-[95%] mb-3 cursor-pointer transition ease-in-out hover:scale-110 hover:rotate-12">
            <img src="../assets/img/work.svg" alt="work image">
        </div>
        <p class="font-europanuova text-white text-center">{{ props.name }}</p>
        <p class="font-europa text-white text-center">Web design/development</p>
        <WorkModal @close-modal="closeModal" :modal-active="modalActive" :title="name" :image="image" :github="github"
            :view="view">
            {{ description }}
        </WorkModal>
    </article>
</template>