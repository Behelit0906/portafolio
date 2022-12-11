<script setup lang="ts">
import SkillCard from './SkillCard.vue';
</script>

<template>
    <div id="skills" class="main-container">
        <div class="skills-container">
            <SkillCard skill-name="FrontEnd" icon="browser.svg" languagues="HTML, CSS, JavaScript"
                :tools="['GitHub', 'Visual Studio Code', 'Vue', 'Vite', 'Tailwind']">
                I value simple content structure, clean design and thoughtful interactions.
            </SkillCard>

            <SkillCard skill-name="Other Skills" icon="social.svg"
                languagues="Communication, Responsibility, Flexibility"
                :tools="['Team work', 'Problem-solving', 'Attention to detail', 'Creativity']">
                Because before developers we are people.
            </SkillCard>

            <SkillCard skill-name="BackEnd" icon="database.svg" languagues="JavaScript, PHP, SQL"
                :tools="['Express', 'Laravel', 'Node', 'MySQL', 'Apache', 'Postman']">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </SkillCard>
        </div>
    </div>
</template>

<style scoped>
.main-container {
    position: relative;
    top: -180px;
    overflow: hidden;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 15px;
    background-color: #fff;
    border: 0.5px solid rgba(0, 0, 0, 0.1);
}

.skills-container {
    display: flex;
    justify-content: center;
}

@media screen and (max-width:760px) {
    .skills-container {
        flex-direction: column;
    }
}
</style>