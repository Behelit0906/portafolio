<script setup lang="ts">
import Button from './Button.vue';

const props = defineProps<{
    title: string
    image: string
    description: string
    github: string
    view?: string
}>()


const emit = defineEmits<{
    (e: 'close'): void
}>()

const imagePath = new URL(`../assets/img/projectImages/${props.image}`, import.meta.url).href;
</script>

<template>
    <div class="modal-container">
        <div @click="emit('close')" class="close-button">&#10006;</div>
        <div class="flex-container">
            <div class="modal-image-container">
                <img :src="imagePath" alt="work image" class="modal-image">
            </div>
            <div class="modal-description-container">
                <p class="modal-title">{{props.title}}</p>
                <p class="project-type">WEB DESIGN/DEVELOPMENT</p>
                <p>{{props.description}}</p>
                <div class="modal-button-container">
                    <Button name="GitHub" :link="props.github" />
                    <Button v-if="props.view" name="View" :link="props.view" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-container {
    position: relative;
    z-index: 30;
    width: 70%;
    overflow: hidden;
    max-width: 765px;
    padding: 20px 15px;
    background-color: #fff;
    border-radius: 5px;
    opacity: 0;
    animation-name: fade-animation;
    animation-fill-mode: forwards;
    animation-duration: 1s;
}

.close-button {
    position: absolute;
    width: 50px;
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
    display: flex;
    padding: 2%;
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


@media screen and (max-width: 700px) {

    .flex-container {
        flex-direction: column;
        align-items: center;
    }

    .modal-image-container {
        padding-top: 25px;
        width: 70%;
    }

    .modal-description-container {
        padding-bottom: 3%;
        width: 70%;
    }
}

@keyframes fade-animation {
    to {
        opacity: 1;
        top: 0;
    }
}
</style>