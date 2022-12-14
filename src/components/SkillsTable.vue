<script setup lang="ts">
import SkillCard from './SkillCard.vue';
</script>

<template>
    <section id="skills" class="rounded-xl w-[90%] mx-auto bg-white border-slate-200 border overflow-hidden">
        <div class="flex flex-col sm:flex-row justify-center">
            <SkillCard skill-name="FrontEnd" icon="browser.svg" languagues="HTML, CSS, JavaScript, TypeScript"
                :tools="['GitHub', 'Visual Studio Code', 'Vue', 'Pinia', 'Vite', 'Tailwind']">
                I value simple content structure, clean design and thoughtful interactions.
            </SkillCard>

            <SkillCard skill-name="Other Skills" icon="social.svg"
                languagues="Communication, Responsibility, Flexibility"
                :tools="['Team work', 'Problem-solving', 'Attention to detail', 'Creativity']">
                Because before developers we are people.
            </SkillCard>

            <SkillCard skill-name="BackEnd" icon="database.svg" languagues="JavaScript, TypeScript, PHP, SQL"
                :tools="['Express', 'Laravel', 'Node', 'MySQL', 'Apache', 'Postman', 'Docker']">
                I like to code things from scratch, and enjoy bringing ideas to life in the browser.
            </SkillCard>
        </div>
    </section>
</template>