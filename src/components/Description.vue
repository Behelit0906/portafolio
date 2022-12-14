<script setup lang="ts">

const linkedin = new URL(`../assets/icons/linkedin.svg`, import.meta.url).href;
</script>

<template>
    <div id="about" class="description-container rounded">
        <h2 class="description-title">About me</h2>
        <p class="description">
            Hi! my name is Luis and I enjoy creating things that live on internet. I am a student of systems engineering
            at the UNAD - Colombia and I am about to finish. My interest in web development
            started back in 2021 when I decided to try editing a Conky theme for my Linux desktop, it resulted in
            learning more about CSS and getting the hang of it, at least until you try to center a div and and looking
            for an opportunity in the world of web development.
        </p>
    </div>
</template>

<style scoped>
.description-container {
    padding-top: 8%;
    padding-bottom: 20%;
    color: #fff;
    background-color: var(--main-color);
}

.description-title {
    text-align: center;
    font-family: 'europanuova', sans-serif;
    font-weight: 500;
    font-size: 1.9rem;
}

.description {
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 100px;
    font-family: 'europa', sans-serif;
    font-size: 1.3rem;
    text-align: center;
    line-height: 35px;
}

.cv-link {
    position: relative;
    top: -50px;
    display: block;
    width: 20%;
    min-width: 150px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 70px;
    padding: 10px;
    font-family: 'europa', sans-serif;
    color: var(--main-color);
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
}

.socialnetworks-container {
    position: relative;
    display: flex;
    top: -80px;
    justify-content: center;
    gap: 2%;
}

.socialIcon-container {
    display: block;
    width: 20px;
    height: 20px;
    padding: 15px;

    border-radius: 50%;
    border: 2px solid #fff;
}

.facebook {
    width: 100%;
    height: 100%;
    fill: #fff;
}

.linkedin {
    position: relative;
    right: -2px;
    width: 80%;
    height: 80%;
    fill: #fff;
}

.github-container {
    position: relative;
}

.github {
    position: relative;
    left: -1px;
    width: 110%;
    height: 110%;
}

.otherdata {
    position: relative;
    top: -60px;
    text-align: center;
    font-family: 'europa', sans-serif;
    font-size: 1rem;
}

.socialIcon-container:hover {
    background-color: #fff;
}

.socialIcon-container:hover .icon {
    fill: var(--main-color);
}

@media screen and (max-width:500px) {

    .description-container {
        padding-top: 15%;
        padding-bottom: 25%;
    }

    .description-title {
        font-size: 1.4rem;
    }

    .description {
        width: 82%;
        font-size: 19px;
    }
}
</style>