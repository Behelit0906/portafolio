<template>
    <div class="description-container">
        <h2 class="description-title">About me</h2>
        <p class="description">
            Hi! my name is Luis and I enjoy creating things that live on internet. My interest in web development
            started back in 2021 when I decided to try editing a Conky theme for my Linux desktop- it resulted in
            learning more about CSS and getting the hang of it, at least until you try to center a div.
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