<template>
    <nav class="h-[115px] pt-3">
        <div class="w-[97%] flex justify-between items-center fixed z-10">
            <HamburgerMenu />
            <div class="w-[80px] relative">
                <img class="relative right-[10px] sm:right-0" src="../assets/img/programming.svg" alt="logo" />
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import HamburgerMenu from './HamburgerMenu.vue';
</script>