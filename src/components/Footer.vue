<template>
    <div class="footer-container">
        <div class="footer-logo-container">
            <img src="../assets/img/programming.svg" alt="programming" class="footer-logo">
        </div>
        <div class="footer-phrase">Living, learning, & leveling up <br /> one day at a time.</div>
    </div>
</template>

<style scoped>
.footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    min-height: 300px;
    padding-top: 2%;
    padding-bottom: 2%;
    margin-bottom: 1%;
    background-color: var(--main-color);
}

.footer-logo-container {
    width: 20%;
    min-width: 130px;
}

.footer-logo {
    width: 100%;
}

.footer-phrase {
    font-size: 20px;
    text-align: center;
    color: #fff;
    font-family: 'europa', sans-serif;
}
</style>