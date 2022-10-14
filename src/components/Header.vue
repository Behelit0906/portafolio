<script setup lang="ts">
import Menu from './HamburgerMenu.vue';
</script>

<template>
    <div class="header-container">
        <div class="top">
            <Menu />
            <img src="../assets/img/programming.svg" alt="logo" class="logo" />
        </div>
        <div class="bottom">
            <h1 class="title">Frontend & Backend Developer</h1>
            <h2 class="description">I design and code beautifully simple things, and I love what I do.</h2>
            <div class="avatar-container">
                <img src="../assets/img/avatar.svg" alt="avatar" class="avatar" />
            </div>
            <div>
                <img src="../assets/img/thinking.svg" alt="thinking image" class="second-image" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-container {}

.top {
    width: 97.9%;
    padding-top: 15px;
    position: fixed;
    display: flex;
    justify-content: space-between;
}

.bottom {
    padding-top: 10%;
}

.logo {
    display: block;
    width: 7.5%;
    min-width: 83px;
    min-height: 83px;
}

.title {
    font-size: 2.6rem;
    text-align: center;
    font-family: 'euroanuova', sans-serif;
    color: var(--title-color);
}

.description {
    margin-bottom: 5%;
    text-align: center;
    font-family: 'europa', sans-serif;
    font-weight: 300;
    color: var(--font-body-color);
}

.avatar-container {
    margin-bottom: 8%;
}

.avatar {
    display: block;
    width: 18%;
    min-width: 158px;
    min-height: 168px;
    margin-left: auto;
    margin-right: auto;
}

.second-image {
    display: block;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}

@media screen and (max-width:900px) {

    .bottom {
        padding-top: 13%;
    }

    .title {
        font-size: 2rem;
    }

    .description {
        margin-left: auto;
        margin-right: auto;
        width: 85%;
    }
}

@media screen and (max-width:500px) {
    .bottom {
        padding-top: 24%;
    }

    .description {
        font-size: 21px;
    }
}
</style>