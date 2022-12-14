<template>
    <Teleport to="body">
        <Transition name="modal-outer">
            <div ref="background" @click="closeModal" v-show="modalActive"
                class="fixed py-20 sm:py-11 w-full h-screen top-0 left-0 flex justify-center px-8 bg-black bg-opacity-30 z-30">

                <Transition name="modal-inner">
                    <div v-if="modalActive"
                        class="rounded w-[90%] flex justify-center items-center flex-col gap-y-6 bg-white sm:flex-row sm:px-6">
                        <div class="w-[50%] sm:w-[70%]">
                            <img class="rounded" :src="imagePath" alt="project img">
                        </div>
                        <div class="w-[70%] text text-center font-europa text-bodyColor px-3">
                            <h2 class="font-europanuova text-titleColor mb-2">{{ title }}</h2>
                            <h3 class="text-sm">WEB DESIGN/DEVELOPMENT</h3>
                            <div class="mb-6 text-center text-sm">
                                <slot />
                            </div>
                            <div class="flex gap-x-3 justify-center">
                                <Button name="GitHub" :link="github" />
                                <Button v-if="view" name="View" :link="view" />
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>
<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue';
import Button from './Button.vue';

const background: Ref<any> = ref(null);

onMounted(() => {
    background.value.focus();
})

const props = defineProps<{
    modalActive: boolean,
    title: string,
    github: string
    view: string
    image: string
}>();

const closeModal = (e: MouseEvent) => {
    if (e.target === background.value)
        emit("close-modal");
}

const imagePath = new URL(`../assets/img/projectImages/${props.image}`, import.meta.url).href;
const emit = defineEmits(['close-modal']);

</script>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}


.modal-inner-enter-from,
.modal-inner-leave-to {
    opacity: 0;
    transform: scale(0.8);
}

.modal-container {
    box-sizing: border-box;
    position: relative;
    z-index: 30;
    width: 80%;
    top: -300px;
    overflow-x: hidden;
    max-height: 76vh;
    background-color: #fff;
    border-radius: 5px;
    opacity: 0;
    animation-name: fade-animation;
    animation-fill-mode: forwards;
    animation-duration: 1s;
}

.close-button {
    position: absolute;
    width: 6%;
    max-width: 50px;
    padding: 7px;
    right: 0px;
    top: 0px;
    text-align: center;
    font-size: 18px;
    background-color: var(--main-color);
    border-bottom-left-radius: 5px;
    cursor: pointer;
}


.modal-image-container {
    display: flex;
    width: 50%;
    align-items: center;
}

.modal-image {
    display: block;
    width: 100%;
}

.modal-description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    color: var(--font-body-color);
}

.flex-container {
    box-sizing: border-box;
    display: flex;
    padding: 6.5%;
    flex-direction: row;
    gap: 20px;
    text-align: center;
}

.modal-title {
    margin: 0;
    font-size: 24px;
    color: var(--title-color);
    font-weight: 700;
}

.project-type {
    margin-bottom: 15px;
}

.modal-button-container {
    display: flex;
    justify-content: center;
    gap: 10px;
}


@media screen and (max-width: 800px) {

    .flex-container {
        justify-content: center;
    }

    .modal-description-container {
        width: 40%;
        font-size: 15px;
    }

    .modal-title {
        font-size: 20px;
    }

    .modal-image-container {
        width: 40%;
        min-width: 220px;
    }

}

@media screen and (max-width: 660px) {
    .flex-container {
        flex-direction: column;
        align-items: center;
    }

    .modal-description-container {
        width: 80%;
    }

    .modal-image-container {
        width: 80%;
    }
}

@keyframes fade-animation {
    to {
        opacity: 1;
        top: -5%;
    }
}
</style>