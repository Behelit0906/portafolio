<script setup lang="ts">
import Navbar from './Navbar.vue';
</script>

<template>
    <header class="flex flex-col gap-y-3" id="home">
        <Navbar />
        <div class="gap-y-11 flex flex-col items-center">
            <div class="flex flex-col gap-y-1">
                <h1 class="font-europanuova text-5xl text-titleColor text-center">Frontend & Backend Developer</h1>
                <h2 class="font-europa text-xl text-bodyColor text-center">I design and code beautifully simple
                    things, and
                    I love what I do.</h2>
            </div>
            <div class="w-1/3 flex justify-center">
                <img src="../assets/img/avatar.svg" alt="avatar" />
            </div>
            <div class="flex justify-center w-3/4">
                <img class="" src="../assets/img/thinking.svg" alt="thinking image" />
            </div>
        </div>
    </header>
</template>