<script setup lang="ts">
const props = defineProps<{
    icon: string
    skillName: string
    languagues: string
    tools?: string[]
}>()

const iconPath = `src/assets/icons/${props.icon}`;
</script>

<template>
    <div class="card-container">
        <div class="card-header">
            <div class="icon-background">
                <img :src="iconPath" alt="card icon" class="icon">
            </div>
            <p class="skill-name">{{props.skillName}}</p>
        </div>
        <div class="card-body">
            <p class="description">
                <slot></slot>
            </p>
            <div>
                <p class="languagues">Languagues I speak</p>
                <p>{{props.languagues}}</p>
            </div>
            <div>
                <p v-if="props.tools" class="dev-tools">Dev tools:</p>
                <ul class="tools-list">
                    <li v-for="tool in props.tools">
                        {{tool}}
                    </li>
                </ul>
            </div>

        </div>
    </div>

</template>

<style scoped>
.card-container {
    width: 33.3%;
    padding-top: 5%;
    padding-bottom: 5%;
    font-family: 'europa', sans-serif;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
}

.card-header {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    text-align: center;
}

.icon-background {
    display: flex;
    justify-content: center;
    width: 85px;
    height: 85px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    background-color: #5BE9B9;
    border-radius: 50%;
}

.icon {
    width: 50%;
}

.skill-name {
    margin: 10px 0 0 0;
    font-size: 23px;
    font-weight: 700;
    color: var(--title-color);
    font-style: 'europanuova', sans-serif;
}

.card-body {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    color: var(--font-body-color);
}


.description {
    margin-bottom: 50px;
}

.languagues {
    font-size: 18px;
    color: #6E0FF6;
}

.dev-tools {
    padding-top: 35px;
    font-size: 18px;
    color: #6E0FF6;
}

.tools-list {
    list-style: none;
    padding: 0;
}

.tools-list li {
    margin-bottom: 7px;
}

@media screen and (max-width:760px) {
    .card-container {
        width: 100%;
        padding-top: 13%;
        padding-bottom: 13%;
    }

    .icon-background {
        width: 80px;
        height: 80px;
    }

    .skill-name {
        font-size: 22px;
    }
}
</style>