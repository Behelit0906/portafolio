<script setup lang="ts">
import { ref } from 'vue';

const openClass = ref('');

function open(): void {
    if (!openClass.value || openClass.value === 'close')
        openClass.value = 'open';
    else if (openClass.value === 'open')
        openClass.value = 'close';
}

</script>


<template>
    <div class="container">
        <button :class="openClass" @click="open">
            <span class="top-line"></span>
            <span class="middle-line"></span>
            <span class="bottom-line"></span>
        </button>
        <div :class="openClass">
            <div class="background">
                <ul class="menu-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#about">About me</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped>
button {
    position: relative;
    z-index: 10;
    width: 60px;
    height: 60px;
    padding: 0;
    margin-top: 10px;
    background-color: var(--main-color);
    border: none;
    border-radius: 100%;
    cursor: pointer;
}

button span {
    display: block;
    width: 60%;
    height: 3px;
    margin: 5px auto;
    border-radius: 5px;
    background: #fff;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
}

.container {
    width: fit-content;
}

.background {
    position: absolute;
    top: -350px;
    left: -350px;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: var(--main-color);
    animation-fill-mode: forwards;
    animation-duration: 0.5s;
}

.menu-list {
    position: absolute;
    right: 26%;
    top: 50%;
    width: 160px;
    padding: 0;
    list-style: none;
    font-size: 2rem;
    text-align: center;
}

.menu-list li {
    margin-bottom: 12px;
}

.menu-list li a {
    font-family: 'europa', sans-serif;
    text-decoration: none;
    color: #fff;
}

.menu-list li a:hover {
    text-decoration: underline;
}


.close .top-line {
    animation-name: top-line-animation-close;
}

.close .middle-line {
    animation-name: middle-line-animation-close;
}

.close .bottom-line {
    animation-name: bottom-line-animation-close;
}

.open .top-line {
    animation-name: top-line-animation;
}

.open .middle-line {
    animation-name: middle-line-animation;
}

.open .bottom-line {
    animation-name: bottom-line-animation;
}

.open .background {
    animation-name: bubble-background-open;
}

.close .background {
    animation-name: bubble-background-close;
}



@keyframes top-line-animation {

    to {
        margin: 0 auto;
        transform: translateY(2px) rotate(-45deg);
    }
}

@keyframes middle-line-animation {

    to {
        margin: 0 auto;
        width: 0;
        opacity: 0;
    }
}

@keyframes bottom-line-animation {

    to {
        margin: 0 auto;
        transform: translateY(-4px) rotate(45deg);
    }
}

@keyframes top-line-animation-close {

    from {
        margin: 0px auto;
        transform: translateY(2px) rotate(-45deg);
    }

    to {
        margin: 5px auto;
        transform: translateY(0px) rotate(0deg);
    }
}

@keyframes middle-line-animation-close {

    from {
        margin: 0 auto;
        width: 0;
        opacity: 0;
    }

    to {
        margin: 5px auto;
        width: 60%;
        opacity: 1;
    }
}

@keyframes bottom-line-animation-close {

    from {
        margin: 0 auto;
        transform: translateY(-4px) rotate(45deg);
    }

    to {
        margin: 5px auto;
        transform: translateY(0px) rotate(0deg);
    }
}

@keyframes bubble-background-open {
    0% {
        width: 0px;
        height: 0px;
    }

    50% {
        width: 850px;
        height: 850px;
    }

    70% {
        width: 770px;
        height: 770px;
    }

    100% {
        width: 800px;
        height: 800px;
    }

}

@keyframes bubble-background-close {
    from {
        width: 800px;
        height: 800px;
    }

    to {
        width: 0;
        height: 0;
    }
}

@keyframes bubble-background-open-1100 {
    0% {
        width: 0px;
        height: 0px;
    }

    50% {
        width: 750px;
        height: 750px;
    }

    70% {
        width: 670px;
        height: 670px;
    }

    100% {
        width: 700px;
        height: 700px;
    }

}

@keyframes bubble-background-close-1100 {
    from {
        width: 700px;
        height: 700px;
    }

    to {
        width: 0;
        height: 0;
    }
}

@keyframes bubble-background-open-600 {
    0% {
        width: 0px;
        height: 0px;
    }

    50% {
        width: 600px;
        height: 600px;
    }

    70% {
        width: 530px;
        height: 530px;
    }

    100% {
        width: 550px;
        height: 550px;
    }

}

@keyframes bubble-background-close-600 {
    from {
        width: 550px;
        height: 550px;
    }

    to {
        width: 0;
        height: 0;
    }
}


@media screen and (max-width:1100px) {
    .background {
        width: 0px;
        height: 0px;
        top: -300px;
        left: -300px;
    }

    .menu-list {
        right: 24%;
    }

    .open .background {
        animation-name: bubble-background-open-1100;
    }

    .close .background {
        animation-name: bubble-background-close-1100;
    }
}

@media screen and (max-width:600px) {
    .background {
        width: 0;
        height: 0;
        top: -250px;
        left: -250px;
    }

    .menu-list {
        right: 19%;
        top: 53%;
        width: 150px;
        font-size: 1.5rem;
    }

    .open .background {
        animation-name: bubble-background-open-600;
    }

    .close .background {
        animation-name: bubble-background-close-600;
    }
}
</style>