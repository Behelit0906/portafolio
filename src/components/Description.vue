<template>
    <div class="description-container">
        <h2 class="description-title">Hi, I’m Luis. Nice to meet you.</h2>
        <p class="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestias modi velit, suscipit maiores
            eligendi perspiciatis. Id quos quas nisi laborum quasi? Eius ullam, cupiditate aut dicta esse quidem porro?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae quisquam est sunt provident
            debitis fugiat iure beatae maiores totam reprehenderit dolorum.
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