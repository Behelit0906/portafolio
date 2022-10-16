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

const imagePath = `src/assets/img/projectImages/${props.image}`;


</script>

<template>
    <div class="modal-background">
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
    </div>
</template>

<style scoped>
.modal-background {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100vw;
    height: 100vh;
    font-family: 'europa', sans-serif;
    background-color: rgba(0, 0, 0, 0.1);
}

.modal-container {
    position: relative;
    z-index: 30;
    top: -200px;
    width: 70%;
    overflow: hidden;
    max-width: 765px;
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    opacity: 0;
    animation-name: fade-animation;
    animation-fill-mode: forwards;
    animation-duration: 1s;
}

.close-button {
    position: absolute;
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
    width: 50%;
    padding-left: 25px;
    padding-right: 20px;
    color: var(--font-body-color);
}

.flex-container {
    display: flex;
    flex-direction: row;
    gap: 0px;
}

.modal-title {
    font-size: 24px;
    color: var(--title-color);
    font-weight: 700;
}

.modal-button-container {
    display: flex;
    justify-content: center;
    gap: 10px;
}

@media screen and (max-width:850px) {
    .modal-image {
        height: 100%;
    }
}

@media screen and (max-width:750px) {

    .modal-container {
        box-sizing: border-box;
        width: 85%;
        overflow-y: scroll;
        max-height: 550px;
        padding: 50px 10px;
        text-align: center;
    }

    .modal-image-container {
        width: 100%;
        padding: 0;
        justify-content: center;
    }

    .modal-image {
        width: 65%;
    }

    .flex-container {
        flex-direction: column;
        align-items: center;
    }

    .modal-description-container {
        font-size: 14px;
    }

    .modal-title {
        font-size: 18px;
    }
}

@media screen and (max-height:500px) {
    .modal-container {
        width: 80%;
        height: 85%;
        max-height: 275px;
        text-align: left;
    }

    .flex-container {
        flex-direction: row;
        align-items: center;
    }
}

@keyframes fade-animation {
    to {
        opacity: 1;
        top: 0;
    }
}
</style>